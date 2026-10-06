"use client";

import React, { useState } from "react";
import { PersonaProfile } from "@/types/templates";
import {
  Users,
  Gauge,
  GitMerge,
  Split,
  Heart,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Star
} from "lucide-react";

interface TemplateProps {
  data: PersonaProfile;
}

// ----------------------------------------------------------------------
// T5.1: People & Culture Builder
// ----------------------------------------------------------------------
export function T5PeopleCulture({ data }: TemplateProps) {
  return (
    <div className="space-y-8 font-sans">
      <div className="p-8 rounded-2xl bg-gradient-to-r from-rose-950 via-slate-900 to-rose-950 border border-rose-500/30 text-white shadow-2xl space-y-4">
        <span className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
          <Heart className="w-4 h-4 text-rose-500 fill-rose-500" /> Servant Leadership & Team Health
        </span>
        <h1 className="text-3xl md:text-5xl font-black">{data.name}</h1>
        <p className="text-rose-200 text-sm md:text-base font-medium">{data.title}</p>
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-2xl">{data.summary}</p>

        {/* Team Health Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center">
            <div className="text-2xl font-black text-rose-400">100%</div>
            <div className="text-[11px] text-slate-300 mt-1 font-semibold">Voluntary Retention (3 Yrs)</div>
          </div>
          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center">
            <div className="text-2xl font-black text-rose-400">9 Engs</div>
            <div className="text-[11px] text-slate-300 mt-1 font-semibold">Direct Reports Promoted</div>
          </div>
          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center">
            <div className="text-2xl font-black text-rose-400">4.9 / 5.0</div>
            <div className="text-[11px] text-slate-300 mt-1 font-semibold">Team Satisfaction Pulse</div>
          </div>
          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-center">
            <div className="text-2xl font-black text-rose-400">32 Engs</div>
            <div className="text-[11px] text-slate-300 mt-1 font-semibold">Scaled Across 4 Pods</div>
          </div>
        </div>
      </div>

      {/* 1-on-1 Coaching Framework */}
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
          <Calendar className="w-4 h-4 text-rose-500" />
          <span>Bi-Weekly 1-on-1 & Career Coaching Framework</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="font-bold text-rose-600 dark:text-rose-400">Pillar 1: Psychological Safety</span>
            <p className="text-slate-600 dark:text-slate-300">Blameless discovery of blockers, mental bandwidth, and interpersonal team dynamics.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="font-bold text-rose-600 dark:text-rose-400">Pillar 2: Growth & Impact</span>
            <p className="text-slate-600 dark:text-slate-300">Active sponsorship for stretch projects aligned with next career ladder milestones.</p>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="font-bold text-rose-600 dark:text-rose-400">Pillar 3: Upward Feedback</span>
            <p className="text-slate-600 dark:text-slate-300">Continuous 360 feedback on management effectiveness and organizational clarity.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// T5.2: Delivery & DORA Execution Engine
// ----------------------------------------------------------------------
export function T5DoraExecution({ data }: TemplateProps) {
  return (
    <div className="space-y-8 font-sans">
      <div className="p-8 rounded-2xl bg-slate-950 text-white border border-rose-500/30 shadow-2xl">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-rose-400 mb-2">
          <Gauge className="w-4 h-4" /> DORA OPERATIONAL EXCELLENCE DASHBOARD
        </div>
        <h1 className="text-3xl md:text-5xl font-black">{data.name}</h1>
        <p className="text-rose-200 text-sm mt-1">{data.title}</p>
        <p className="text-xs md:text-sm text-slate-300 mt-2 max-w-2xl">{data.summary}</p>
      </div>

      {/* Before vs After DORA Comparison */}
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-rose-500" />
          <span>Before vs. After Leadership Intervention (DORA Elite Tier)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 space-y-3">
            <span className="text-xs font-bold text-slate-500 uppercase">Baseline Before Intervention</span>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between"><span>Deploy Frequency:</span><span className="font-bold text-slate-700 dark:text-slate-300">1x / Month (Batch)</span></div>
              <div className="flex justify-between"><span>Lead Time for Changes:</span><span className="font-bold text-slate-700 dark:text-slate-300">14 Days</span></div>
              <div className="flex justify-between"><span>Change Failure Rate:</span><span className="font-bold text-rose-500">18.4%</span></div>
              <div className="flex justify-between"><span>MTTR (Mean Recovery):</span><span className="font-bold text-slate-700 dark:text-slate-300">6.2 Hours</span></div>
            </div>
          </div>

          <div className="p-5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 space-y-3">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" /> After Transformation (DORA Elite)
            </span>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between"><span>Deploy Frequency:</span><span className="font-bold text-emerald-600 dark:text-emerald-400">12x / Day (Continuous)</span></div>
              <div className="flex justify-between"><span>Lead Time for Changes:</span><span className="font-bold text-emerald-600 dark:text-emerald-400">&lt; 90 Minutes</span></div>
              <div className="flex justify-between"><span>Change Failure Rate:</span><span className="font-bold text-emerald-600 dark:text-emerald-400">0.8%</span></div>
              <div className="flex justify-between"><span>MTTR (Mean Recovery):</span><span className="font-bold text-emerald-600 dark:text-emerald-400">14 Minutes</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// T5.3: Org Scaling & Team Architect
// ----------------------------------------------------------------------
export function T5OrgScaling({ data }: TemplateProps) {
  return (
    <div className="space-y-8 font-sans">
      <div className="p-8 rounded-2xl bg-gradient-to-r from-rose-900 to-pink-900 text-white shadow-xl">
        <span className="text-xs font-bold uppercase tracking-wider text-pink-300 flex items-center gap-1.5 mb-2">
          <GitMerge className="w-4 h-4" /> Scaling Teams from 6 to 32+ While Protecting Culture
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold">{data.name}</h1>
        <p className="text-xs md:text-sm text-rose-200 mt-2 max-w-2xl">{data.summary}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-center">
          <div className="text-3xl font-black text-rose-500">6 → 32</div>
          <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">Engineers Scaled</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Across 4 Autonomous Pods</div>
        </div>
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-center">
          <div className="text-3xl font-black text-emerald-500">14 Days</div>
          <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">Time to First PR</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Structured Onboarding Playbook</div>
        </div>
        <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-center">
          <div className="text-3xl font-black text-purple-500">42%</div>
          <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">Diverse Hires</div>
          <div className="text-[11px] text-slate-500 mt-0.5">Objective Rubric-Based Hiring</div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// T5.4: Bridge: Technical Strategy & People Leadership
// ----------------------------------------------------------------------
export function T5BridgeTechPeople({ data }: TemplateProps) {
  const [activeLens, setActiveLens] = useState<"people" | "tech">("people");

  return (
    <div className="space-y-6 font-sans">
      <div className="p-6 rounded-2xl bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4 border border-slate-800">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
            Dual Perspective Matrix
          </span>
          <h1 className="text-2xl md:text-3xl font-bold mt-1">{data.name}</h1>
          <p className="text-xs text-slate-400 mt-1">{data.title}</p>
        </div>

        {/* Dual Lens Toggle Switch */}
        <div className="flex p-1 bg-slate-800 rounded-xl text-xs font-bold">
          <button
            onClick={() => setActiveLens("people")}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeLens === "people" ? "bg-rose-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
            }`}
          >
            People & Culture Lens
          </button>
          <button
            onClick={() => setActiveLens("tech")}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeLens === "tech" ? "bg-blue-600 text-white shadow-sm" : "text-slate-400 hover:text-white"
            }`}
          >
            Technical Architecture Lens
          </button>
        </div>
      </div>

      {activeLens === "people" ? (
        <div className="p-6 rounded-2xl border border-rose-500/30 bg-rose-500/5 dark:bg-rose-950/20 space-y-4">
          <h3 className="text-base font-bold text-rose-700 dark:text-rose-300">
            People Leadership Credentials
          </h3>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            Leading 32 engineers across 4 squads with 100% voluntary retention over 3 years, transparent career ladders, and 9 direct report promotions.
          </p>
        </div>
      ) : (
        <div className="p-6 rounded-2xl border border-blue-500/30 bg-blue-500/5 dark:bg-blue-950/20 space-y-4">
          <h3 className="text-base font-bold text-blue-700 dark:text-blue-300">
            Technical Architecture Governance
          </h3>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
            Oversight of payments microservices processing $450M annually, introducing event-driven Kafka patterns, and driving DORA MTTR down to 14 minutes.
          </p>
        </div>
      )}
    </div>
  );
}
