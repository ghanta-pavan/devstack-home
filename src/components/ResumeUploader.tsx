"use client";

import React, { useState } from "react";
import { parseDocumentFile } from "@/lib/fileExtractor";
import { ResumeSchema, SAMPLE_RESUME } from "@/types/resume";
import {
  Upload,
  FileText,
  Sparkles,
  Key,
  CheckCircle,
  RefreshCw,
  Briefcase,
  Layers,
  Award,
  MapPin
} from "lucide-react";

interface Props {
  onParsed: (data: ResumeSchema) => void;
  currentData: ResumeSchema;
}

export function ResumeUploader({ onParsed, currentData }: Props) {
  const [loading, setLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState<string>("");
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [parsedSummary, setParsedSummary] = useState<{
    name: string;
    title: string;
    rolesCount: number;
    skillsCount: number;
    metricsCount: number;
    location?: string;
  } | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setLoadingStep("Extracting text streams from document...");
    setError(null);
    setParsedSummary(null);

    try {
      setLoadingStep("Extracting document structure & metadata...");
      const parsed = await parseDocumentFile(file, apiKey || undefined);
      
      setLoadingStep("Compiling executive schema & metrics...");
      onParsed(parsed);

      const totalSkills = parsed.skills?.reduce((acc, g) => acc + g.items.length, 0) || 0;
      setParsedSummary({
        name: parsed.name,
        title: parsed.title,
        rolesCount: parsed.experience?.length || 0,
        skillsCount: totalSkills,
        metricsCount: parsed.metrics?.length || 0,
        location: parsed.location,
      });
    } catch (err: any) {
      console.error(err);
      setError(err?.message || "Failed to process resume file. Please ensure it has selectable text.");
    } finally {
      setLoading(false);
      setLoadingStep("");
    }
  };

  const handleLoadSample = () => {
    onParsed(SAMPLE_RESUME);
    const totalSkills = SAMPLE_RESUME.skills.reduce((acc, g) => acc + g.items.length, 0);
    setParsedSummary({
      name: SAMPLE_RESUME.name,
      title: SAMPLE_RESUME.title,
      rolesCount: SAMPLE_RESUME.experience.length,
      skillsCount: totalSkills,
      metricsCount: SAMPLE_RESUME.metrics.length,
      location: SAMPLE_RESUME.location,
    });
    setError(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl transition-all">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
          Upload Resume to Compile Bio Portfolio
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Upload your standard PDF or Docx resume. Our AI extraction pipeline extracts every detail—roles, metrics, skills, and projects—and compiles them into your live sandbox.
        </p>
      </div>

      {/* Drag & Drop Upload Zone */}
      <div className="relative border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 rounded-xl p-8 text-center transition-all bg-slate-50/50 dark:bg-slate-950/50">
        <input
          type="file"
          accept=".pdf,.docx,.txt"
          onChange={handleFileUpload}
          disabled={loading}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10 disabled:cursor-not-allowed"
        />

        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="p-4 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
            {loading ? (
              <RefreshCw className="w-8 h-8 animate-spin" />
            ) : (
              <Upload className="w-8 h-8" />
            )}
          </div>
          <div>
            <p className="text-base font-semibold text-slate-900 dark:text-white">
              {loading ? (loadingStep || "Parsing Resume & Building Schema...") : "Drop your PDF or Docx resume here"}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Supports multi-page PDF, DOCX, and TXT files up to 10MB
            </p>
          </div>

          <div className="pt-2 flex items-center space-x-3">
            <span className="text-xs text-slate-400">or</span>
            <button
              type="button"
              onClick={handleLoadSample}
              disabled={loading}
              className="z-20 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5" /> Load Sample Executive Profile
            </button>
          </div>
        </div>
      </div>

      {/* Optional Gemini API Key Input */}
      <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-2 text-xs text-slate-600 dark:text-slate-400">
          <Key className="w-4 h-4 text-blue-500 flex-shrink-0" />
          <span>Gemini API Key (Optional for LLM Schema Generation):</span>
        </div>
        <div className="flex-1 max-w-sm">
          <input
            type="password"
            placeholder="AIzaSy... (Leave empty to use built-in offline parser)"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-600 dark:text-red-400 flex items-start gap-2">
          <span>❌ {error}</span>
        </div>
      )}

      {/* Rich Success Summary Badge */}
      {parsedSummary && (
        <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-xs text-slate-800 dark:text-slate-200 space-y-2">
          <div className="flex items-center gap-2 font-bold text-emerald-600 dark:text-emerald-400 text-sm">
            <CheckCircle className="w-4 h-4 flex-shrink-0" />
            <span>Successfully extracted: {parsedSummary.name}</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 font-medium">
            {parsedSummary.title} {parsedSummary.location ? `• ${parsedSummary.location}` : ""}
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px]">
            <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
              <Briefcase className="w-3 h-3" /> {parsedSummary.rolesCount} Positions Extracted
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
              <Layers className="w-3 h-3" /> {parsedSummary.skillsCount} Technical Skills
            </span>
            <span className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1">
              <Award className="w-3 h-3" /> {parsedSummary.metricsCount} Quantifiable Metrics
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
