"use client";

import React, { useState } from "react";
import { parseDocumentFile } from "@/lib/fileExtractor";
import { ResumeSchema, SAMPLE_RESUME } from "@/types/resume";
import { Upload, Sparkles, Key, CheckCircle, RefreshCw } from "lucide-react";

interface Props {
  onParsed: (data: ResumeSchema) => void;
  currentData?: ResumeSchema;
}

export function ResumeUploader({ onParsed }: Props) {
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    setError(null);
    setSuccessMsg(null);

    try {
      const parsed = await parseDocumentFile(file, apiKey || undefined);
      onParsed(parsed);
      setSuccessMsg(`Successfully extracted resume data for "${parsed.name}"!`);
    } catch (err: unknown) {
      console.error(err);
      const msg = err instanceof Error ? err.message : "Failed to process resume file.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadSample = () => {
    onParsed(SAMPLE_RESUME);
    setSuccessMsg("Loaded sample Principal Architect resume profile.");
    setError(null);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-6 md:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl transition-all">
      <div className="text-center max-w-2xl mx-auto mb-6">
        <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
          Upload Resume to Compile Bio Portfolio
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
          Upload your standard PDF or Docx resume. Our AI extraction pipeline builds your structured JSON schema, dynamic metrics dashboard, and ATS resume link instantly.
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
              {loading ? "Parsing Resume & Building Schema..." : "Drop your PDF or Docx resume here"}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Supports PDF, DOCX, and TXT files up to 10MB
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
          <span>Gemini API Key (Optional Override):</span>
        </div>
        <div className="flex-1 max-w-sm">
          <input
            type="password"
            placeholder="AIZASy..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full px-3 py-1.5 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>

      {/* Notifications */}
      {error && (
        <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-xs text-red-600 dark:text-red-400">
          {error}
        </div>
      )}
      {successMsg && (
        <div className="mt-4 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 flex-shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}
    </div>
  );
}
