"use client";

import React, { useState } from "react";
import { PersonaProfile } from "@/types/templates";
import {
  Server,
  Activity,
  TrendingUp,
  Award,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Sliders,
  CheckCircle2,
  AlertTriangle,
  GitBranch,
  Terminal,
  Zap,
  Flame,
  ArrowRight
} from "lucide-react";

interface TemplateProps {
  data: PersonaProfile;
}

// ----------------------------------------------------------------------
// T3.1: Deep-Dive System Design Portfolio
// ----------------------------------------------------------------------
export function T3SystemDesignDeepDive({ data }: TemplateProps) {
  const [expandedRfc, setExpandedRfc] = useState<string | null>("rfc-1");

  const rfcs = [
    {
      id: "rfc-1",
      number: "RFC-042",
      title: "Global Multi-Region Active-Active Transaction Mesh",
      context: "Payment authorization failures caused by cross-Atlantic network partitions during holiday sale spikes.",
      constraints: "Strict p99 latency < 15ms; zero data loss (RPO = 0); GDPR compliance with EU data residency.",
      decisions: "Deployed geo-distributed CockroachDB clusters with regional read-replicas and local conflict-free routing.",
      tradeoffs: "Higher cross-region write synchronization cost accepted in favor of 99.999% availability.",
      impact: "$1.4M saved in abandoned checkouts; p99 latency reduced from 48ms to 8ms."
    },
    {
      id: "rfc-2",
      number: "RFC-038",
      title: "Zero-Downtime Migration from Monolith to Event-Driven Kafka",
      context: "Synchronous HTTP dependency chain between checkout and order fulfillment led to cascading timeouts.",
      constraints: "Maintain dual-write state consistency during a 6-month continuous migration phase.",
      decisions: "Implemented Change Data Capture (CDC) via Debezium feeding Apache Kafka with outbox pattern.",
      tradeoffs: "Temporary dual-run compute overhead of ~15% for 90 days during verification.",
      impact: "Decoupled 14 downstream microservices; eliminated cascading failovers entirely."
    }
  ];

  return (
    <div className="space-y-8 font-sans">
      {/* Executive Hero */}
      <div className="p-8 rounded-2xl bg-slate-950 text-white border border-purple-500/30 shadow-2xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-purple-400">
          <Server className="w-4 h-4" /> [SYSTEMS ARCHITECTURE DOSSIER]
        </div>
        <h1 className="text-3xl md:text-5xl font-black">{data.name}</h1>
        <p className="text-base text-purple-200 font-medium">{data.title}</p>
        <p className="text-xs md:text-sm text-slate-300 leading-relaxed max-w-3xl">
          {data.summary}
        </p>

        {/* Highlight Impact Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-800">
          {data.metrics.map((m) => (
            <div key={m.id} className="p-3 bg-purple-950/40 border border-purple-800/50 rounded-xl">
              <div className="text-2xl font-black text-purple-300">{m.value}</div>
              <div className="text-xs font-bold text-white mt-0.5">{m.label}</div>
              <div className="text-[10px] text-slate-400 mt-0.5">{m.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Structured RFC Case Studies */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <Server className="w-4 h-4 text-purple-500" />
            <span>Architectural RFCs & System Design Deep Dives</span>
          </h2>
          <span className="text-xs text-purple-600 dark:text-purple-400 font-mono font-bold">Standardized RFC Format</span>
        </div>

        <div className="space-y-4">
          {rfcs.map((rfc) => {
            const isExpanded = expandedRfc === rfc.id;
            return (
              <div
                key={rfc.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setExpandedRfc(isExpanded ? null : rfc.id)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                        {rfc.number}
                      </span>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">{rfc.title}</h3>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{rfc.context}</p>
                  </div>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                      <span className="font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5" /> Constraints & Non-Negotiables
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{rfc.constraints}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                      <span className="font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                        <GitBranch className="w-3.5 h-3.5" /> Architectural Decisions
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{rfc.decisions}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1">
                      <span className="font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider text-[11px]">
                        Trade-Offs & Compromises
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{rfc.tradeoffs}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider text-[11px] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Quantifiable Production ROI
                      </span>
                      <p className="text-emerald-800 dark:text-emerald-200 leading-relaxed font-semibold">{rfc.impact}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// T3.2: High-Performance Systems Specialist
// ----------------------------------------------------------------------
export function T3HighPerformanceSystems({ data }: TemplateProps) {
  const [loadMultiplier, setLoadMultiplier] = useState(1);

  return (
    <div className="space-y-6 font-sans">
      {/* SRE Telemetry Banner */}
      <div className="p-6 rounded-2xl bg-slate-950 text-slate-100 border border-violet-500/30 font-mono space-y-3">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-violet-400 font-bold">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>SRE & TELEMETRY OBSERVABILITY DASHBOARD</span>
          </div>
          <span className="text-emerald-400">STATUS: OPTIMAL (p99 &lt; 10ms)</span>
        </div>
        <h1 className="text-3xl font-black font-sans text-white">{data.name}</h1>
        <p className="text-xs text-slate-400 font-sans max-w-2xl">{data.summary}</p>
      </div>

      {/* Latency Simulation Controls */}
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-4">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <Sliders className="w-4 h-4 text-violet-500" /> Simulated Ingestion Load: {loadMultiplier * 25}k QPS
          </span>
          <div className="flex gap-2">
            {[1, 2, 4].map((m) => (
              <button
                key={m}
                onClick={() => setLoadMultiplier(m)}
                className={`px-3 py-1 rounded-lg text-xs font-mono font-bold transition-all ${
                  loadMultiplier === m ? "bg-violet-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}
              >
                {m}x
              </button>
            ))}
          </div>
        </div>

        {/* Latency Dial Cards */}
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-xs text-slate-500 font-mono">P50 LATENCY</div>
            <div className="text-2xl font-black text-emerald-500 mt-1">{(1.8 * loadMultiplier).toFixed(1)}ms</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-xs text-slate-500 font-mono">P95 LATENCY</div>
            <div className="text-2xl font-black text-violet-500 mt-1">{(4.2 * loadMultiplier).toFixed(1)}ms</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-xs text-slate-500 font-mono">P99 LATENCY</div>
            <div className="text-2xl font-black text-rose-500 mt-1">{(8.1 * loadMultiplier).toFixed(1)}ms</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// T3.3: Product Engineer & Growth Multiplier
// ----------------------------------------------------------------------
export function T3ProductEngineer({ data }: TemplateProps) {
  return (
    <div className="space-y-8 font-sans">
      <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-900 to-indigo-900 text-white shadow-xl">
        <span className="text-xs font-bold uppercase tracking-wider text-pink-300 flex items-center gap-1.5 mb-2">
          <TrendingUp className="w-4 h-4" /> Engineering with Extreme Product Intuition
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold">{data.name}</h1>
        <p className="text-sm text-purple-200 mt-2 max-w-2xl">{data.summary}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-3">
          <span className="text-xs font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider">
            A/B Test Experiment Lift
          </span>
          <h3 className="text-xl font-black text-slate-900 dark:text-white">+34% Trial-to-Paid Conversion</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Redesigned frictionless 1-click workspace onboarding flow with zero layout shifts and optimistic local state, generating $840k in ARR within 60 days.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-3">
          <span className="text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
            Retention & Churn Reduction
          </span>
          <h3 className="text-xl font-black text-slate-900 dark:text-white">-22% Customer Churn</h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Eliminated slow 8-second dashboard query waterfalls by introducing intelligent client-side edge caching and optimistic UI updates.
          </p>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// T3.4: Tech Lead & Standards Advocate
// ----------------------------------------------------------------------
export function T3TechLeadMentor({ data }: TemplateProps) {
  return (
    <div className="space-y-8 font-sans">
      <div className="p-6 rounded-2xl bg-slate-900 text-white border border-slate-800">
        <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
          Dual Architectural Depth & Team Mentorship
        </span>
        <h1 className="text-3xl font-extrabold mt-1">{data.name}</h1>
        <p className="text-xs md:text-sm text-slate-300 mt-2 leading-relaxed max-w-2xl">{data.summary}</p>
      </div>

      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
          <Award className="w-4 h-4 text-indigo-500" /> Junior to Senior Mentorship Outcomes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400">6</div>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">Engineers Mentored</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Direct 1-on-1 technical coaching</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">3</div>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">Promoted to Senior</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Within 14 months under guidance</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
            <div className="text-3xl font-black text-purple-600 dark:text-purple-400">14</div>
            <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mt-1">ADRs Authored</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Org-wide architectural consensus</div>
          </div>
        </div>
      </div>
    </div>
  );
}
