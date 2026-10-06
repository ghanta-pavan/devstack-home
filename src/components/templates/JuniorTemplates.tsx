"use client";

import React, { useState } from "react";
import { PersonaProfile } from "@/types/templates";
import {
  LayoutGrid,
  Layers,
  GitPullRequest,
  FileSearch,
  CheckCircle2,
  ExternalLink,
  Code2,
  Copy,
  Check,
  Zap,
  Terminal,
  Cpu,
  Mail,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star
} from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

interface TemplateProps {
  data: PersonaProfile;
}

// ----------------------------------------------------------------------
// T2.1: Modern Bento-Grid Builder (Linear & Apple Style)
// ----------------------------------------------------------------------
export function T2BentoBuilder({ data }: TemplateProps) {
  const [copiedSnippet, setCopiedSnippet] = useState(false);

  const sampleSnippet = `// Production Billing Hook
export function useStripeCheckout(planId: string) {
  const { mutate, isPending } = useMutation({
    mutationFn: () => api.post('/v1/billing/checkout', { planId }),
    onSuccess: (data) => window.location.assign(data.url),
  });
  return { checkout: mutate, loading: isPending };
}`;

  return (
    <div className="space-y-6 font-sans">
      {/* Top Status & Intro */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-slate-900 to-indigo-950 text-white border border-indigo-500/20 shadow-xl">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Shipping features at Synthetix Cloud</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">{data.name}</h1>
          <p className="text-indigo-200 text-sm font-medium">{data.title}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={`mailto:${data.contact.email}`}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Liam</span>
          </a>
          {data.contact.github && (
            <a
              href={data.contact.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 transition-colors text-white"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Bento Tile 1: Hero Summary (Spans 2 cols) */}
        <div className="md:col-span-2 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Product Philosophy
            </span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
              Crafting reliable full-stack applications with obsessive attention to UI polish and strict types.
            </h2>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {data.summary}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> 100% Strict TypeScript
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Unit & E2E Tested
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Zero Layout Shift
            </span>
          </div>
        </div>

        {/* Bento Tile 2: Metrics Dashboard */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-md flex flex-col justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-200">Production Velocity</span>
            <div className="text-4xl font-black mt-2">240+</div>
            <div className="text-xs text-blue-100 mt-1">Pull Requests merged into main</div>
          </div>
          <div className="mt-6 pt-4 border-t border-white/20 grid grid-cols-2 gap-3 text-center">
            <div className="p-2 rounded-xl bg-white/10">
              <div className="text-lg font-bold">88%</div>
              <div className="text-[10px] text-blue-200 uppercase">Test Coverage</div>
            </div>
            <div className="p-2 rounded-xl bg-white/10">
              <div className="text-lg font-bold">99/100</div>
              <div className="text-[10px] text-blue-200 uppercase">Lighthouse</div>
            </div>
          </div>
        </div>

        {/* Bento Tile 3: Code Snippet Sandbox */}
        <div className="md:col-span-2 p-6 rounded-2xl bg-slate-950 text-slate-100 border border-slate-800 shadow-md space-y-3">
          <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
            <div className="flex items-center space-x-2">
              <Code2 className="w-4 h-4 text-blue-400" />
              <span className="font-mono text-slate-300">useStripeCheckout.ts</span>
            </div>
            <button
              onClick={() => {
                navigator.clipboard.writeText(sampleSnippet);
                setCopiedSnippet(true);
                setTimeout(() => setCopiedSnippet(false), 2000);
              }}
              className="flex items-center space-x-1 text-[11px] text-slate-400 hover:text-white transition-colors"
            >
              {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedSnippet ? "Copied" : "Copy Code"}</span>
            </button>
          </div>
          <pre className="text-xs font-mono text-blue-300 overflow-x-auto p-2 bg-slate-900/60 rounded-xl leading-relaxed">
            {sampleSnippet}
          </pre>
        </div>

        {/* Bento Tile 4: Senior Recommendations */}
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-1 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <p className="text-xs italic text-slate-600 dark:text-slate-300 leading-relaxed">
              &quot;Liam delivers feature code with the maturity and rigor of a senior engineer. His pull requests are clean, well-tested, and always a delight to review.&quot;
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400">
            — Staff Engineer @ Synthetix Cloud
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// T2.2: Full-Stack Product Craftsman
// ----------------------------------------------------------------------
export function T2FullStackCraftsman({ data }: TemplateProps) {
  const [activeTab, setActiveTab] = useState<"ui" | "schema" | "postmortem">("ui");

  return (
    <div className="space-y-8 font-sans">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            End-to-End Case Study
          </span>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">{data.name}</h1>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">{data.title}</p>
        </div>

        {/* View Switcher */}
        <div className="flex p-1 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setActiveTab("ui")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "ui" ? "bg-white dark:bg-slate-900 text-blue-600 shadow-sm" : "text-slate-600 dark:text-slate-400"
            }`}
          >
            Frontend UI Craft
          </button>
          <button
            onClick={() => setActiveTab("schema")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "schema" ? "bg-white dark:bg-slate-900 text-blue-600 shadow-sm" : "text-slate-600 dark:text-slate-400"
            }`}
          >
            API & Database Specs
          </button>
          <button
            onClick={() => setActiveTab("postmortem")}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === "postmortem" ? "bg-white dark:bg-slate-900 text-blue-600 shadow-sm" : "text-slate-600 dark:text-slate-400"
            }`}
          >
            Production Incident Retrospective
          </button>
        </div>
      </div>

      {/* Tab 1: UI Craft */}
      {activeTab === "ui" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.projects.map((p) => (
            <div key={p.id} className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{p.description}</p>
              {p.metrics && (
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-xs text-blue-700 dark:text-blue-300 font-semibold">
                  {p.metrics}
                </div>
              )}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {p.technologies.map((t, i) => (
                  <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 2: Schema Explorer */}
      {activeTab === "schema" && (
        <div className="p-6 rounded-2xl bg-slate-950 text-slate-100 border border-slate-800 space-y-4 font-mono text-xs">
          <div className="text-emerald-400 font-bold">// PostgreSQL Relational Schema: Billing & Invoicing</div>
          <pre className="p-4 bg-slate-900 rounded-xl overflow-x-auto text-blue-300 leading-relaxed">
{`CREATE TABLE subscription_tiers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID NOT NULL REFERENCES organizations(id),
  stripe_customer_id VARCHAR(255) UNIQUE NOT NULL,
  plan_tier VARCHAR(50) NOT NULL CHECK (plan_tier IN ('starter', 'pro', 'enterprise')),
  seats_allocated INTEGER DEFAULT 5,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Index for sub-millisecond tenant resolution
CREATE INDEX idx_tenant_active ON subscription_tiers (tenant_id, is_active);`}
          </pre>
        </div>
      )}

      {/* Tab 3: Post-Mortem */}
      {activeTab === "postmortem" && (
        <div className="p-6 rounded-2xl border border-rose-500/30 bg-rose-500/5 dark:bg-rose-950/20 space-y-4 text-xs">
          <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> Incident Retrospective: Preventing Idempotency Race in Stripe Webhooks
          </div>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong>The Problem:</strong> Webhook bursts caused double-allocation of seats during simultaneous checkout retries.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            <strong>The Fix:</strong> Introduced distributed Redis locks with a 5-second TTL around webhook event idempotency IDs, ensuring exactly-once execution.
          </p>
          <div className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 font-medium text-emerald-600 dark:text-emerald-400">
            Outcome: Zero duplicate billing records since deploy; promoted fix to company-wide SDK.
          </div>
        </div>
      )}
    </div>
  );
}

// ----------------------------------------------------------------------
// T2.3: Open-Source & Community Driver
// ----------------------------------------------------------------------
export function T2OpenSourceDriver({ data }: TemplateProps) {
  const prs = [
    { repo: "facebook/react", number: "#28491", title: "Fix hydration mismatch in nested Suspense boundary", status: "Merged", diff: "+48 -12" },
    { repo: "shadcn/ui", number: "#1402", title: "Add accessible keyboard roving focus to Command palette", status: "Merged", diff: "+112 -34" },
    { repo: "tailwindlabs/tailwindcss", number: "#11894", title: "Improve sub-pixel container query rounding in Safari", status: "Merged", diff: "+18 -4" }
  ];

  return (
    <div className="space-y-8 font-sans">
      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white border border-sky-500/30">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 mb-2">
          <GitPullRequest className="w-4 h-4" /> Open-Source Contributor Profile
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold">{data.name}</h1>
        <p className="text-xs md:text-sm text-sky-200 mt-2 max-w-xl leading-relaxed">{data.summary}</p>
      </div>

      {/* Simulated GitHub Heatmap Grid */}
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-3">
        <div className="flex justify-between items-center text-xs">
          <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
            <GithubIcon className="w-4 h-4" /> 1,480 contributions in the last year
          </span>
          <span className="text-[11px] text-slate-500">Continuous streak: 84 days</span>
        </div>
        <div className="grid grid-cols-12 gap-1.5 pt-2">
          {[...Array(60)].map((_, i) => {
            const intensity = (i * 7) % 5;
            const bgClass =
              intensity === 0
                ? "bg-slate-100 dark:bg-slate-800"
                : intensity === 1
                ? "bg-emerald-200 dark:bg-emerald-950"
                : intensity === 2
                ? "bg-emerald-300 dark:bg-emerald-800"
                : intensity === 3
                ? "bg-emerald-400 dark:bg-emerald-600"
                : "bg-emerald-500 dark:bg-emerald-400";
            return <div key={i} className={`h-4 rounded-sm ${bgClass}`} />;
          })}
        </div>
      </div>

      {/* Merged PR Highlights */}
      <div className="space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
          <GitPullRequest className="w-4 h-4 text-sky-500" /> Featured Merged Pull Requests
        </h2>
        <div className="space-y-3">
          {prs.map((pr, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-slate-900 dark:text-white">{pr.repo}</span>
                  <span className="text-xs text-slate-400">{pr.number}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                    {pr.status}
                  </span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-medium">{pr.title}</div>
              </div>
              <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                {pr.diff}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// T2.4: Scannable Fast-Track Resume
// ----------------------------------------------------------------------
export function T2ScannableResume({ data }: TemplateProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [copied, setCopied] = useState(false);

  const filters = ["All", "React", "TypeScript", "PostgreSQL", "Node.js", "Docker"];

  return (
    <div className="space-y-6 font-sans">
      {/* 1-Click Recruiter Bio Action */}
      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">{data.name}</h1>
          <p className="text-xs font-medium text-blue-600 dark:text-blue-400">{data.title} • {data.location}</p>
        </div>

        <button
          onClick={() => {
            navigator.clipboard.writeText(`${data.name} - ${data.title}\n${data.summary}\nPortfolio: ${data.contact.website || ""}`);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          }}
          className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-bold transition-all shadow-sm flex items-center gap-2"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "Copied Recruiter Packet!" : "Copy Recruiter Packet"}</span>
        </button>
      </div>

      {/* Skill Filter Chips */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs text-slate-500 font-semibold mr-1">Filter by Tech:</span>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setSelectedFilter(f)}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              selectedFilter === f
                ? "bg-blue-600 text-white shadow-sm"
                : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Scannable Experience Timeline */}
      <div className="space-y-4">
        {data.experience.map((exp) => (
          <div key={exp.id} className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-2">
            <div className="flex justify-between items-baseline">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                {exp.role} <span className="text-blue-600 dark:text-blue-400">@ {exp.company}</span>
              </h3>
              <span className="text-xs font-mono text-slate-500">{exp.startDate} - {exp.endDate}</span>
            </div>
            <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 pt-1">
              {exp.highlights.map((h, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
