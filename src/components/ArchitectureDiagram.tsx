"use client";

import React, { useState } from "react";
import { Server, Database, Zap, Globe, Shield, ArrowRight, Lock, FileCode, CheckCircle2 } from "lucide-react";

export function ArchitectureDiagram() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      id: 1,
      title: "1. PDF/Docx Ingestion & LLM Parsing",
      icon: FileCode,
      tech: "Gemini 2.5 Flash / Headless Parser",
      description: "User uploads raw PDF/Docx resume. LLM engine transforms unstructured resume text into a strict JSON schema containing Name, Metrics, Experience, Skills, and Projects."
    },
    {
      id: 2,
      title: "2. Curation & Row-Level Security DB",
      icon: Database,
      tech: "Supabase PostgreSQL + RLS",
      description: "Validated JSON schema blocks stored in PostgreSQL with strict Row-Level Security (RLS). Prevents cross-tenant data leaks and locks schema versioning."
    },
    {
      id: 3,
      title: "3. Edge Middleware Routing & Caching",
      icon: Zap,
      tech: "Next.js App Router Edge + Upstash Redis",
      description: "Multi-tenant edge middleware intercept incoming host headers (<tenant>.devstack.bio) and resolve site schema instantly (<10ms) from Upstash Redis cache."
    },
    {
      id: 4,
      title: "4. Custom Domain & SSL Provisioning",
      icon: Globe,
      tech: "Cloudflare for SaaS (Custom Hostnames API)",
      description: "Executive tier domains (.dev, .com) automatically provisioned with zero-trust wildcard SSL certificates without manual DNS management."
    }
  ];

  return (
    <section id="architecture" className="py-20 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 inline-flex items-center gap-1.5 mb-4">
            <Shield className="w-3.5 h-3.5" /> Zero Overhead Pipeline
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            End-to-End System Architecture
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-3">
            Designed for sub-10ms global edge delivery, absolute tenant isolation, and zero arbitrary script execution.
          </p>
        </div>

        {/* Step-by-Step Architecture Pipeline Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Step Selector List */}
          <div className="lg:col-span-5 space-y-4">
            {steps.map((step) => {
              const IconComponent = step.icon;
              const isSelected = activeStep === step.id;
              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-200 flex items-start space-x-4 ${
                    isSelected
                      ? "bg-blue-50/80 dark:bg-blue-950/40 border-blue-500 ring-2 ring-blue-500/20 shadow-lg"
                      : "bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                  }`}
                >
                  <div
                    className={`p-3 rounded-xl ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <span className="inline-block mt-1 text-[11px] font-mono text-blue-600 dark:text-blue-400">
                      {step.tech}
                    </span>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Architectural Canvas Preview */}
          <div className="lg:col-span-7 bg-slate-950 rounded-2xl border border-slate-800 p-8 shadow-2xl min-h-[420px] flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <Server className="w-64 h-64 text-blue-500" />
            </div>

            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="text-xs font-mono text-slate-500 ml-2">architecture-flow.sys</span>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-emerald-400 border border-slate-800">
                STATUS: ACTIVE_EDGE
              </span>
            </div>

            {/* Content for Selected Step */}
            <div className="space-y-6 relative z-10">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono">
                <span>STAGE {activeStep} / 4</span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                {steps.find((s) => s.id === activeStep)?.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {steps.find((s) => s.id === activeStep)?.description}
              </p>

              {/* Code / Flow Mockup Box */}
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
                <div className="flex items-center text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5 mr-2" />
                  <span>Security Directive: No Raw JavaScript Executed</span>
                </div>
                <div className="text-slate-500 text-[11px]">
                  Middleware Rewrite: host.split('.')[0] &rarr; Upstash Redis Key lookup &rarr; React Component Hydration
                </div>
              </div>
            </div>

            {/* Bottom Footer Details */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500 font-mono">
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-blue-400" /> Row-Level Security Isolated
              </span>
              <span>Latency SLA: &lt; 10ms</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
