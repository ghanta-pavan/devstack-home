"use client";

import React, { useState, useMemo } from "react";
import { ResumeSchema } from "@/types/resume";
import { CareerTier, PersonaProfile } from "@/types/templates";
import {
  CAREER_TIERS,
  TEMPLATES_CATALOG,
  getTemplateById,
  getSampleProfileByTier
} from "@/data/templatesData";
import { TemplatePreviewRenderer } from "./templates/TemplatePreviewRenderer";
import {
  Code,
  Globe,
  FileText,
  Edit3,
  Sparkles,
  Maximize2,
  Minimize2,
  Monitor,
  Tablet,
  Smartphone,
  ChevronLeft,
  ChevronRight,
  Check,
  UserCheck,
  FileCode,
  Layers
} from "lucide-react";

interface Props {
  data: ResumeSchema;
  onChange: (updated: ResumeSchema) => void;
  selectedTemplateId?: string;
  onSelectTemplate?: (templateId: string) => void;
}

export function PortfolioAndAtsPreview({
  data,
  onChange,
  selectedTemplateId = "t6_briefing",
  onSelectTemplate
}: Props) {
  const [internalTemplateId, setInternalTemplateId] = useState<string>(selectedTemplateId);
  const activeTemplateId = onSelectTemplate ? selectedTemplateId : internalTemplateId;

  const handleTemplateChange = (id: string) => {
    if (onSelectTemplate) {
      onSelectTemplate(id);
    } else {
      setInternalTemplateId(id);
    }
  };

  const [activeTab, setActiveTab] = useState<"portfolio" | "ats" | "json">("portfolio");
  const [isEditing, setIsEditing] = useState(false);
  const [dataSource, setDataSource] = useState<"sample" | "custom">("sample");
  const [deviceViewport, setDeviceViewport] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isTemplateMenuOpen, setIsTemplateMenuOpen] = useState(false);

  const activeTemplate = useMemo(() => {
    return getTemplateById(activeTemplateId) || TEMPLATES_CATALOG[0];
  }, [activeTemplateId]);

  // Resolve active profile data
  const activeProfileData: PersonaProfile = useMemo(() => {
    if (dataSource === "sample") {
      return getSampleProfileByTier(activeTemplate.tier);
    }

    // Merge user's parsed data into PersonaProfile format
    const sampleForTier = getSampleProfileByTier(activeTemplate.tier);
    return {
      ...data,
      tier: activeTemplate.tier,
      tagline: sampleForTier.tagline,
      statsBanner: sampleForTier.statsBanner,
      terminalCommands: sampleForTier.terminalCommands,
      academicStats: sampleForTier.academicStats,
      doraMetrics: sampleForTier.doraMetrics,
      orgScaleStats: sampleForTier.orgScaleStats,
      patents: sampleForTier.patents
    };
  }, [dataSource, activeTemplate.tier, data]);

  // Navigate through templates
  const currentIndex = TEMPLATES_CATALOG.findIndex((t) => t.id === activeTemplateId);
  const handlePrevTemplate = () => {
    const prevIdx = (currentIndex - 1 + TEMPLATES_CATALOG.length) % TEMPLATES_CATALOG.length;
    handleTemplateChange(TEMPLATES_CATALOG[prevIdx].id);
  };
  const handleNextTemplate = () => {
    const nextIdx = (currentIndex + 1) % TEMPLATES_CATALOG.length;
    handleTemplateChange(TEMPLATES_CATALOG[nextIdx].id);
  };

  return (
    <div
      id="preview-sandbox"
      className={`w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ${
        isFullscreen ? "fixed inset-0 z-50 rounded-none overflow-y-auto" : ""
      }`}
    >
      {/* Top Template Navigation & Controls Bar */}
      <div className="bg-slate-900 text-white px-4 md:px-6 py-3.5 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
        {/* Active Template Selector */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <button
              onClick={handlePrevTemplate}
              aria-label="Previous template"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextTemplate}
              aria-label="Next template"
              className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsTemplateMenuOpen(!isTemplateMenuOpen)}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-left transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>{activeTemplate.name}</span>
                  <span className="text-[10px] font-normal text-slate-400">({currentIndex + 1}/24)</span>
                </span>
                <span className="text-[10px] font-mono text-blue-400 uppercase">
                  {activeTemplate.tierLabel} • {activeTemplate.subtitle}
                </span>
              </div>
            </button>

            {/* Dropdown Menu for All 24 Templates */}
            {isTemplateMenuOpen && (
              <div className="absolute left-0 top-full mt-2 w-80 md:w-96 max-h-[460px] overflow-y-auto bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 text-xs space-y-3">
                <div className="px-3 py-1.5 font-bold uppercase tracking-wider text-slate-400 text-[10px] border-b border-slate-800 flex justify-between items-center">
                  <span>Switch Template (24 Designs)</span>
                  <button onClick={() => setIsTemplateMenuOpen(false)} className="text-slate-400 hover:text-white">✕</button>
                </div>

                {CAREER_TIERS.map((tier) => {
                  const tierTemplates = TEMPLATES_CATALOG.filter((t) => t.tier === tier.id);
                  return (
                    <div key={tier.id} className="space-y-1">
                      <div className="px-2 text-[10px] font-mono text-slate-500 uppercase font-bold">
                        {tier.label} ({tier.experience})
                      </div>
                      {tierTemplates.map((t) => (
                        <button
                          key={t.id}
                          onClick={() => {
                            handleTemplateChange(t.id);
                            setIsTemplateMenuOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-xl flex items-center justify-between transition-colors ${
                            activeTemplateId === t.id
                              ? "bg-blue-600 text-white font-bold"
                              : "text-slate-300 hover:bg-slate-900 hover:text-white"
                          }`}
                        >
                          <div className="truncate pr-2">
                            <div className="font-semibold">{t.name}</div>
                            <div className="text-[10px] text-slate-400 truncate">{t.subtitle}</div>
                          </div>
                          {activeTemplateId === t.id && <Check className="w-3.5 h-3.5 text-white flex-shrink-0" />}
                        </button>
                      ))}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Data Source Switcher: Sample vs Uploaded */}
        <div className="flex items-center space-x-1.5 bg-slate-800/80 p-1 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setDataSource("sample")}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
              dataSource === "sample"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Tier Sample Data</span>
            <span className="sm:hidden">Sample</span>
          </button>
          <button
            onClick={() => setDataSource("custom")}
            className={`px-3 py-1 rounded-lg transition-all flex items-center gap-1.5 ${
              dataSource === "custom"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">My Parsed Resume</span>
            <span className="sm:hidden">My Data</span>
          </button>
        </div>

        {/* Viewport Frame Switcher & Fullscreen */}
        <div className="flex items-center space-x-2">
          <div className="hidden lg:flex items-center space-x-1 bg-slate-800 p-1 rounded-xl">
            <button
              onClick={() => setDeviceViewport("desktop")}
              aria-label="Desktop view"
              className={`p-1.5 rounded-lg transition-colors ${
                deviceViewport === "desktop" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDeviceViewport("tablet")}
              aria-label="Tablet view"
              className={`p-1.5 rounded-lg transition-colors ${
                deviceViewport === "tablet" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setDeviceViewport("mobile")}
              aria-label="Mobile view"
              className={`p-1.5 rounded-lg transition-colors ${
                deviceViewport === "mobile" ? "bg-slate-700 text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            aria-label="Toggle Fullscreen"
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Active Template Notice Banner */}
      <div className="bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-transparent border-b border-blue-500/20 px-6 py-2.5 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
          <span>
            Detailed Web Page: <strong className="font-bold text-slate-900 dark:text-white">{activeTemplate.name}</strong> • {activeTemplate.subtitle}
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400">
          <span className="font-mono bg-white dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
            {activeTemplate.tierLabel}
          </span>
          <span className="hidden md:inline font-mono">
            Style: {activeTemplate.designStyle}
          </span>
        </div>
      </div>

      {/* Second Toolbar: Tab Switcher & Edit Drawer */}
      <div className="bg-slate-50 dark:bg-slate-950 px-6 py-3 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center bg-slate-200 dark:bg-slate-800 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab("portfolio")}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "portfolio"
                ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Interactive Webpage View</span>
          </button>

          <button
            onClick={() => setActiveTab("ats")}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "ats"
                ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>ATS Resume View</span>
          </button>

          <button
            onClick={() => setActiveTab("json")}
            className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "json"
                ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>JSON Schema</span>
          </button>
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:inline">
            Active Persona: <strong className="text-slate-800 dark:text-slate-200">{activeProfileData.name}</strong>
          </span>

          <button
            onClick={() => setIsEditing(!isEditing)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              isEditing
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700"
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isEditing ? "Lock Data" : "Edit Fields"}</span>
          </button>
        </div>
      </div>

      {/* Main Preview Container */}
      <div className="p-4 md:p-8 bg-slate-100/50 dark:bg-slate-950/40 min-h-[500px]">
        {/* Inline Data Editor Drawer if IsEditing */}
        {isEditing && (
          <div className="mb-8 p-6 bg-white dark:bg-slate-900 border border-blue-500/40 rounded-2xl shadow-lg space-y-4">
            <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Quick Field Correction
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-600 dark:text-slate-400 mb-1 font-semibold">Full Name</label>
                <input
                  type="text"
                  value={activeProfileData.name}
                  onChange={(e) => onChange({ ...data, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-slate-600 dark:text-slate-400 mb-1 font-semibold">Title / Headline</label>
                <input
                  type="text"
                  value={activeProfileData.title}
                  onChange={(e) => onChange({ ...data, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-slate-600 dark:text-slate-400 mb-1 font-semibold">Summary</label>
                <textarea
                  rows={3}
                  value={activeProfileData.summary}
                  onChange={(e) => onChange({ ...data, summary: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* Viewport Frame wrapper (for tablet/mobile preview emulation) */}
        <div
          className={`mx-auto transition-all duration-300 ${
            deviceViewport === "mobile"
              ? "max-w-[390px] border-4 border-slate-800 dark:border-slate-700 rounded-3xl p-3 bg-white dark:bg-slate-900 shadow-2xl"
              : deviceViewport === "tablet"
              ? "max-w-[768px] border-4 border-slate-800 dark:border-slate-700 rounded-3xl p-4 bg-white dark:bg-slate-900 shadow-2xl"
              : "w-full max-w-6xl"
          }`}
        >
          <TemplatePreviewRenderer
            templateId={activeTemplate.id}
            data={activeProfileData}
            viewMode={activeTab}
          />
        </div>
      </div>
    </div>
  );
}
