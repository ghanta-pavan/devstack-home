"use client";

import React, { useState, useRef, useEffect } from "react";
import { CareerTier, TemplateDefinition } from "@/types/templates";
import {
  CAREER_TIERS,
  TEMPLATES_CATALOG,
  getTemplateById
} from "@/data/templatesData";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  ArrowDown,
  Eye,
  Rocket,
  Terminal,
  GraduationCap,
  Compass,
  LayoutGrid,
  Layers,
  GitPullRequest,
  FileSearch,
  Server,
  Activity,
  TrendingUp,
  Award,
  Network,
  BookOpen,
  GitFork,
  Cpu,
  Users,
  Gauge,
  GitMerge,
  Split,
  ShieldCheck,
  Globe,
  Briefcase,
  ExternalLink,
  Zap
} from "lucide-react";

interface Props {
  selectedTemplateId: string;
  onSelectTemplate: (templateId: string) => void;
}

export function TemplateCatalogSection({
  selectedTemplateId,
  onSelectTemplate
}: Props) {
  const [activeTier, setActiveTier] = useState<CareerTier | "all">("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Filter templates by tier
  const filteredTemplates = TEMPLATES_CATALOG.filter((template) => {
    return activeTier === "all" || template.tier === activeTier;
  });

  // Get active template definition
  const activeTemplate: TemplateDefinition =
    getTemplateById(selectedTemplateId) || TEMPLATES_CATALOG[0];

  const activeTierInfo = CAREER_TIERS.find((t) => t.id === activeTemplate.tier);

  // Scroll controls for horizontal rail
  const scrollRail = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -340 : 340;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // When active template changes, ensure it scrolls into view gently
  useEffect(() => {
    const activeBtn = document.getElementById(`rail-item-${selectedTemplateId}`);
    if (activeBtn && scrollContainerRef.current) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center"
      });
    }
  }, [selectedTemplateId]);

  const getTemplateIcon = (iconName: string) => {
    switch (iconName) {
      case "Rocket": return <Rocket className="w-4 h-4" />;
      case "Terminal": return <Terminal className="w-4 h-4" />;
      case "GraduationCap": return <GraduationCap className="w-4 h-4" />;
      case "Compass": return <Compass className="w-4 h-4" />;
      case "LayoutGrid": return <LayoutGrid className="w-4 h-4" />;
      case "Layers": return <Layers className="w-4 h-4" />;
      case "GitPullRequest": return <GitPullRequest className="w-4 h-4" />;
      case "FileSearch": return <FileSearch className="w-4 h-4" />;
      case "Server": return <Server className="w-4 h-4" />;
      case "Activity": return <Activity className="w-4 h-4" />;
      case "TrendingUp": return <TrendingUp className="w-4 h-4" />;
      case "Award": return <Award className="w-4 h-4" />;
      case "Network": return <Network className="w-4 h-4" />;
      case "BookOpen": return <BookOpen className="w-4 h-4" />;
      case "GitFork": return <GitFork className="w-4 h-4" />;
      case "Cpu": return <Cpu className="w-4 h-4" />;
      case "Users": return <Users className="w-4 h-4" />;
      case "Gauge": return <Gauge className="w-4 h-4" />;
      case "GitMerge": return <GitMerge className="w-4 h-4" />;
      case "Split": return <Split className="w-4 h-4" />;
      case "ShieldCheck": return <ShieldCheck className="w-4 h-4" />;
      case "Globe": return <Globe className="w-4 h-4" />;
      case "Briefcase": return <Briefcase className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  const getTierAccentBg = (tier: CareerTier) => {
    switch (tier) {
      case "intern": return "from-emerald-600 to-teal-700 border-emerald-500/40 text-emerald-400";
      case "junior": return "from-blue-600 to-indigo-700 border-blue-500/40 text-blue-400";
      case "senior": return "from-purple-600 to-violet-800 border-purple-500/40 text-purple-400";
      case "principal": return "from-amber-600 to-orange-700 border-amber-500/40 text-amber-400";
      case "manager": return "from-rose-600 to-pink-700 border-rose-500/40 text-rose-400";
      case "executive": return "from-cyan-600 to-blue-800 border-cyan-500/40 text-cyan-400";
      default: return "from-blue-600 to-indigo-700 border-blue-500/40 text-blue-400";
    }
  };

  const scrollToPreview = () => {
    const el = document.getElementById("preview-sandbox");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="templates-catalog" className="py-14 md:py-20 border-t border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-950/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800">
              <Sparkles className="w-3.5 h-3.5" /> Fluid Template Explorer
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              24 Career-Stage Templates
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Scroll smoothly through the ribbon below. Selecting any template updates the spotlight overview and immediately loads its full interactive webpage in the preview sandbox.
            </p>
          </div>

          {/* Quick Counter & Scroll Buttons */}
          <div className="flex items-center space-x-3 self-start md:self-auto">
            <div className="text-xs text-slate-500 font-mono font-medium hidden sm:block">
              Showing {filteredTemplates.length} of 24
            </div>
            <div className="flex items-center space-x-1.5 bg-white dark:bg-slate-900 p-1.5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <button
                onClick={() => scrollRail("left")}
                aria-label="Scroll templates left"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollRail("right")}
                aria-label="Scroll templates right"
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Career Tier Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <button
            onClick={() => setActiveTier("all")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              activeTier === "all"
                ? "bg-slate-900 dark:bg-white text-white dark:text-slate-950 shadow-md"
                : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
            }`}
          >
            All Tiers (24)
          </button>

          {CAREER_TIERS.map((tier) => (
            <button
              key={tier.id}
              onClick={() => setActiveTier(tier.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-1.5 ${
                activeTier === tier.id
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
              }`}
            >
              <span>{tier.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                activeTier === tier.id ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"
              }`}>
                4
              </span>
            </button>
          ))}
        </div>

        {/* 1. Fluid Horizontal Scrolling Rail */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-3 overflow-x-auto pb-4 pt-1 px-1 scroll-smooth snap-x snap-mandatory focus:outline-none"
            style={{ scrollbarWidth: "thin" }}
          >
            {filteredTemplates.map((template) => {
              const isSelected = selectedTemplateId === template.id;
              const globalIndex = TEMPLATES_CATALOG.findIndex((t) => t.id === template.id) + 1;

              return (
                <div
                  id={`rail-item-${template.id}`}
                  key={template.id}
                  onClick={() => onSelectTemplate(template.id)}
                  className={`flex-shrink-0 w-64 md:w-72 p-4 rounded-2xl cursor-pointer snap-start transition-all duration-200 border text-left flex flex-col justify-between ${
                    isSelected
                      ? "bg-white dark:bg-slate-900 border-blue-500 dark:border-blue-500 shadow-xl ring-2 ring-blue-500/30 scale-[1.02]"
                      : "bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800/80 hover:border-slate-400 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900 shadow-sm"
                  }`}
                >
                  <div className="space-y-2">
                    {/* Top Row: Icon + Tier Label + Number */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`p-1.5 rounded-lg ${
                          isSelected ? "bg-blue-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                        }`}>
                          {getTemplateIcon(template.icon)}
                        </div>
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          {template.tierExperience}
                        </span>
                      </div>

                      <span className="text-[11px] font-mono font-bold text-slate-400">
                        #{globalIndex}
                      </span>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h4 className={`text-sm font-bold line-clamp-1 ${
                        isSelected ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-white"
                      }`}>
                        {template.name}
                      </h4>
                      <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                        {template.subtitle}
                      </p>
                    </div>

                    {/* Key Feature Highlight Pill */}
                    <div className="text-[10px] text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-950 p-2 rounded-lg border border-slate-100 dark:border-slate-800/80 line-clamp-2">
                      {template.heroFeature}
                    </div>
                  </div>

                  {/* Active Indicator Bar */}
                  <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-slate-500 dark:text-slate-400">
                      {isSelected ? (
                        <span className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Selected
                        </span>
                      ) : (
                        <span>Click to Select</span>
                      )}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      {template.tierLabel}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 2. Fluid Spotlight: Overview of the Selected Template */}
        <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left 7 Columns: Detailed Overview & Architecture Signals */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                  {activeTemplate.tierLabel} ({activeTemplate.tierExperience})
                </span>
                <span className="text-xs text-slate-500 font-semibold">
                  Template ID: <code className="font-mono text-slate-700 dark:text-slate-300">{activeTemplate.id}</code>
                </span>
                {activeTemplate.isPopular && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    ★ Popular Design
                  </span>
                )}
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                  {activeTemplate.name}
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 mt-1">
                  {activeTemplate.subtitle}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeTemplate.description}
              </p>

              {/* Signals & Target Audience Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Target Evaluation Signals
                  </div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200 mt-1">
                    {activeTierInfo?.evaluationSignals}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Primary Audience
                  </div>
                  <div className="font-semibold text-slate-800 dark:text-slate-200 mt-1">
                    {activeTierInfo?.targetAudience}
                  </div>
                </div>
              </div>

              {/* Key Sections Pills */}
              <div className="space-y-1.5 pt-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Sections &amp; Widgets Included in this Webpage:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {activeTemplate.keySections.map((sec, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      <span>{sec}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 5 Columns: Aesthetics Card & Direct Jump to Detailed Preview */}
            <div className="lg:col-span-5 flex flex-col justify-between p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-white border border-slate-800 space-y-6 shadow-xl relative overflow-hidden">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" /> Design Philosophy
                  </span>
                  <div className="p-2 rounded-xl bg-white/10 text-white">
                    {getTemplateIcon(activeTemplate.icon)}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs text-slate-400 uppercase font-semibold">Visual Style &amp; Layout</div>
                  <div className="text-sm font-semibold text-slate-200 leading-snug">
                    {activeTemplate.designStyle}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs text-slate-400 uppercase font-semibold">Hero Innovation</div>
                  <div className="text-xs text-blue-200 bg-white/5 p-3 rounded-xl border border-white/10">
                    {activeTemplate.heroFeature}
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeTemplate.previewBadges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-white/10 text-white border border-white/10"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button: Jump directly into Preview Sandbox */}
              <button
                onClick={scrollToPreview}
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-lg flex items-center justify-center gap-2 group"
              >
                <span>Inspect Detailed Web Page Below</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
