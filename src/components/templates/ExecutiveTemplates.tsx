"use client";

import React, { useState } from "react";
import { PersonaProfile } from "@/types/templates";
import {
  ShieldCheck,
  Sparkles,
  Globe,
  Briefcase,
  Play,
  CheckCircle2,
  Lock,
  ArrowRight,
  TrendingUp,
  Award,
  Layers,
  DollarSign,
  FileText
} from "lucide-react";

interface TemplateProps {
  data: PersonaProfile;
}

// ----------------------------------------------------------------------
// T6.1: Enterprise Executive Briefing (Flagship Executive)
// ----------------------------------------------------------------------
export function T6ExecutiveBriefing({ data }: TemplateProps) {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <div className="space-y-8 font-sans">
      {/* Executive Hero */}
      <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#0c1427] via-[#0f172a] to-[#0a192f] text-white border border-cyan-500/30 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-wrap items-start justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Executive Briefing • 20-Year Technology Leadership</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-black tracking-tight">{data.name}</h1>
            <p className="text-base md:text-xl text-cyan-200 font-medium">{data.title}</p>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-2xl">
              {data.summary}
            </p>
          </div>

          {/* 60s Video Briefing Button */}
          <div className="flex flex-col gap-3 min-w-[220px]">
            <button
              onClick={() => setVideoModalOpen(true)}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Watch 60-Sec Executive Pitch</span>
            </button>
            <div className="text-center text-[11px] text-slate-400">
              {data.location} • Available for Board &amp; Advisory
            </div>
          </div>
        </div>

        {/* 20-Year Impact Banner */}
        <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-3xl font-black text-cyan-400">20+ Yrs</div>
            <div className="text-xs font-bold text-white mt-1">Enterprise Leadership</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Fortune 500 &amp; Global Scale</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-3xl font-black text-cyan-400">150+ Engs</div>
            <div className="text-xs font-bold text-white mt-1">Global Headcount Led</div>
            <div className="text-[10px] text-slate-400 mt-0.5">US, EMEA &amp; APAC Sites</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-3xl font-black text-cyan-400">$18.5M</div>
            <div className="text-xs font-bold text-white mt-1">OpEx Budget Governed</div>
            <div className="text-[10px] text-slate-400 mt-0.5">P&amp;L &amp; Vendor Contracts</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="text-3xl font-black text-cyan-400">$2.8M/yr</div>
            <div className="text-xs font-bold text-white mt-1">FinOps Annual Savings</div>
            <div className="text-[10px] text-slate-400 mt-0.5">Cloud Footprint Consolidation</div>
          </div>
        </div>
      </div>

      {/* Video Modal Simulation */}
      {videoModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-cyan-500/40 rounded-3xl p-6 max-w-xl w-full text-white space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <Play className="w-4 h-4 fill-cyan-400" /> Executive 60-Second Video Pitch
              </span>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="text-slate-400 hover:text-white text-xs font-bold"
              >
                ✕ Close
              </button>
            </div>
            <div className="aspect-video bg-slate-950 rounded-2xl flex flex-col items-center justify-center p-6 text-center border border-slate-800">
              <Play className="w-12 h-12 text-cyan-400 mb-3" />
              <div className="text-sm font-bold text-slate-200">
                Pavan Kumar Ghanta: Executive Video Briefing
              </div>
              <p className="text-xs text-slate-400 mt-1 max-w-sm">
                &quot;Welcome. Over 20 years, I have built global engineering teams that align deep technology with high enterprise ROI.&quot;
              </p>
            </div>
            <div className="text-center">
              <button
                onClick={() => setVideoModalOpen(false)}
                className="px-6 py-2 rounded-xl bg-cyan-600 text-white text-xs font-bold"
              >
                Back to Dossier
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Executive Experience */}
      <div className="p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
          <Award className="w-4 h-4 text-cyan-500" />
          <span>Executive Leadership &amp; Board Appointments</span>
        </h2>
        <div className="space-y-6">
          {data.experience.map((exp) => (
            <div key={exp.id} className="border-l-2 border-cyan-500 pl-6 py-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {exp.role} <span className="text-cyan-600 dark:text-cyan-400">@ {exp.company}</span>
                </h3>
                <span className="text-xs font-mono text-slate-500 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{exp.location}</p>
              <ul className="mt-3 space-y-2 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-cyan-500">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// T6.2: Visionary CTO & AI Modernization Dossier
// ----------------------------------------------------------------------
export function T6VisionaryCto({ data }: TemplateProps) {
  return (
    <div className="space-y-8 font-sans">
      <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-teal-950/40 to-slate-950 border border-cyan-500/30 text-white shadow-xl space-y-3">
        <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
          <Sparkles className="w-4 h-4" /> [ENTERPRISE AI MODERNIZATION &amp; STRATEGY]
        </span>
        <h1 className="text-3xl md:text-4xl font-black">{data.name}</h1>
        <p className="text-sm md:text-base text-cyan-200">{data.title}</p>
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-2xl">{data.summary}</p>
      </div>

      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
          Multi-Year Transformation Roadmap
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="font-bold text-slate-500 uppercase text-[10px]">Phase 1: Foundation</span>
            <div className="font-bold text-slate-900 dark:text-white">Legacy Monolith Decoupling</div>
            <p className="text-slate-600 dark:text-slate-400">Migrated core payments to event-driven Kafka and containerized microservices.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="font-bold text-cyan-500 uppercase text-[10px]">Phase 2: Scale</span>
            <div className="font-bold text-slate-900 dark:text-white">Unified Data Lakehouse</div>
            <p className="text-slate-600 dark:text-slate-400">Real-time telemetry and unified data lakehouse across 50M+ active users.</p>
          </div>
          <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 space-y-1">
            <span className="font-bold text-cyan-400 uppercase text-[10px]">Phase 3: Intelligence</span>
            <div className="font-bold text-cyan-700 dark:text-cyan-300">Agentic AI Platform</div>
            <p className="text-cyan-800 dark:text-cyan-200">Integrated autonomous developer agents and customer copilots with strict SOC2 isolation.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// T6.3: Global VP of Engineering Command
// ----------------------------------------------------------------------
export function T6GlobalVpEngineering({ data }: TemplateProps) {
  return (
    <div className="space-y-8 font-sans">
      <div className="p-8 rounded-2xl bg-slate-950 text-white border border-blue-500/30 shadow-2xl space-y-3">
        <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
          <Globe className="w-4 h-4" /> [GLOBAL ENGINEERING COMMAND CENTER]
        </span>
        <h1 className="text-3xl md:text-5xl font-black">{data.name}</h1>
        <p className="text-blue-200 text-sm md:text-base">{data.title}</p>
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-2xl">{data.summary}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-center">
          <div className="text-3xl font-black text-blue-500">US Hub</div>
          <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">70 Engineers</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Core Architecture &amp; Platform</div>
        </div>
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-center">
          <div className="text-3xl font-black text-cyan-500">EMEA Hub</div>
          <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">45 Engineers</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Security &amp; Regulatory Compliance</div>
        </div>
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-center">
          <div className="text-3xl font-black text-indigo-500">APAC Hub</div>
          <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">35 Engineers</div>
          <div className="text-[11px] text-slate-500 mt-0.5">24/7 Follow-the-Sun SRE Ops</div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// T6.4: Boardroom & Investor-Ready Dossier
// ----------------------------------------------------------------------
export function T6BoardroomDossier({ data }: TemplateProps) {
  return (
    <div className="p-8 md:p-12 rounded-2xl bg-white dark:bg-[#0c0d0e] text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-800 shadow-xl font-serif space-y-8">
      <div className="border-b-2 border-slate-900 dark:border-slate-100 pb-6 flex flex-wrap items-baseline justify-between gap-4">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-slate-500 font-sans">
            CONFIDENTIAL EXECUTIVE MEMO • BOARD &amp; INVESTOR DOSSIER
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold mt-1">{data.name}</h1>
          <p className="text-sm italic text-slate-700 dark:text-slate-300 font-sans mt-0.5">{data.title}</p>
        </div>
        <span className="text-xs font-mono text-slate-500 font-sans">Updated Q1 2026</span>
      </div>

      <div className="space-y-2 font-sans">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-1">
          Executive Summary &amp; Mandate
        </h2>
        <p className="text-xs md:text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-serif">
          {data.summary}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-sans text-center">
        <div className="p-4 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div className="text-xs text-slate-500">OpEx Governed</div>
          <div className="text-xl font-bold mt-1">$18.5M</div>
        </div>
        <div className="p-4 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div className="text-xs text-slate-500">Global Headcount</div>
          <div className="text-xl font-bold mt-1">150+ Engs</div>
        </div>
        <div className="p-4 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div className="text-xs text-slate-500">FinOps Savings</div>
          <div className="text-xl font-bold mt-1">$2.8M/yr</div>
        </div>
        <div className="p-4 rounded border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div className="text-xs text-slate-500">SLA Maintained</div>
          <div className="text-xl font-bold mt-1">99.99%</div>
        </div>
      </div>
    </div>
  );
}
