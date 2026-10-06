"use client";

import React, { useState } from "react";
import { PersonaProfile } from "@/types/templates";
import {
  Rocket,
  Terminal as TerminalIcon,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Mail,
  Award,
  BookOpen,
  Code2,
  Play,
  CheckCircle2,
  Flame,
  FileText,
  Clock,
  ArrowUpRight
} from "lucide-react";

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface TemplateProps {
  data: PersonaProfile;
}

// ----------------------------------------------------------------------
// T1.1: Interactive Demo & Project Hub
// ----------------------------------------------------------------------
export function T1DemoHub({ data }: TemplateProps) {
  const [activeDemoProject, setActiveDemoProject] = useState<string | null>(null);

  return (
    <div className="space-y-8 font-sans">
      {/* Top Banner / Student Badge */}
      <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 text-white shadow-xl relative overflow-hidden">
        <div className="absolute -right-10 -bottom-10 w-56 h-56 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-wrap items-start justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold text-emerald-100">
              <Rocket className="w-3.5 h-3.5 text-amber-300" />
              <span>Available for Summer 2026 SWE Internships</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-black tracking-tight">{data.name}</h1>
            <p className="text-base md:text-lg text-emerald-100 font-medium">{data.title}</p>
            <p className="text-xs md:text-sm text-emerald-50/90 leading-relaxed max-w-xl">
              {data.summary}
            </p>
          </div>

          {/* Quick Contact & Action */}
          <div className="flex flex-col gap-3 min-w-[200px]">
            <a
              href={`mailto:${data.contact.email}`}
              className="px-5 py-2.5 rounded-xl bg-white text-emerald-800 text-xs font-bold shadow-lg hover:bg-emerald-50 transition-all text-center flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Invite to Interview</span>
            </a>
            <div className="flex items-center justify-center gap-2">
              {data.contact.github && (
                <a
                  href={data.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/15 hover:bg-white/25 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-white" />
                </a>
              )}
              {data.contact.linkedin && (
                <a
                  href={data.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/15 hover:bg-white/25 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-white" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Highlight Stats Pill Row */}
        {data.statsBanner && (
          <div className="mt-8 pt-6 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.statsBanner.map((s, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-md rounded-xl p-3 text-center">
                <div className="text-lg md:text-xl font-black text-white">{s.value}</div>
                <div className="text-[11px] text-emerald-200 uppercase tracking-wider font-semibold mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Featured Projects with Live Demo Triggers */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Play className="w-4 h-4 text-emerald-500 fill-emerald-500" />
              <span>Interactive Featured Projects</span>
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Click &quot;Try Live Demo&quot; to inspect interactive simulations and live deployments.
            </p>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
            {data.projects.length} Showcase Builds
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.projects.map((proj) => (
            <div
              key={proj.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{proj.title}</h3>
                  {proj.link && (
                    <a
                      href={proj.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-400 hover:text-emerald-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  {proj.description}
                </p>

                {proj.metrics && (
                  <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-[11px] font-bold text-emerald-700 dark:text-emerald-300">
                    <Award className="w-3.5 h-3.5" />
                    <span>{proj.metrics}</span>
                  </div>
                )}
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setActiveDemoProject(activeDemoProject === proj.id ? null : proj.id)}
                  className="w-full py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>{activeDemoProject === proj.id ? "Close Sandbox" : "Launch Interactive Demo"}</span>
                </button>

                {/* Simulated Live Demo Embed Sandbox */}
                {activeDemoProject === proj.id && (
                  <div className="mt-3 p-4 rounded-xl bg-slate-900 text-slate-100 border border-emerald-500/30 text-xs font-mono space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-emerald-400 border-b border-slate-800 pb-2">
                      <span className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                        Live Instance: {proj.title.toLowerCase().replace(/\s+/g, "-")}.dev
                      </span>
                      <span>Latency: 24ms</span>
                    </div>
                    <div className="p-3 bg-slate-950 rounded-lg text-emerald-300 text-[11px] leading-relaxed">
                      $ curl -s https://api.demo.dev/v1/health<br />
                      {"{ \"status\": \"healthy\", \"nodes\": 3, \"consensus\": \"reached\", \"qps\": 1240 }"}<br />
                      <span className="text-slate-400"># Interactive web assembly simulation running in sandbox</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Experience & Coursework */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Experience */}
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>Internship & Leadership Experience</span>
          </h2>
          <div className="space-y-4">
            {data.experience.map((exp) => (
              <div key={exp.id} className="border-l-2 border-emerald-500 pl-4 py-1">
                <div className="text-xs font-bold text-slate-900 dark:text-white">
                  {exp.role} <span className="text-emerald-600 dark:text-emerald-400">@ {exp.company}</span>
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mb-2">
                  {exp.startDate} - {exp.endDate} • {exp.location}
                </div>
                <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-1.5 text-emerald-500">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Skills & Coursework */}
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-4">
          <h2 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <Code2 className="w-4 h-4 text-emerald-500" />
            <span>Languages & Technical Skills</span>
          </h2>
          <div className="space-y-3">
            {data.skills.map((grp, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                <div className="text-xs font-bold text-slate-800 dark:text-slate-200 mb-2">
                  {grp.category}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {grp.items.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded text-[11px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium text-slate-700 dark:text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// T1.2: Terminal / Retro Hacker
// ----------------------------------------------------------------------
export function T1TerminalHacker({ data }: TemplateProps) {
  const [history, setHistory] = useState<Array<{ cmd: string; output: string }>>([
    { cmd: "whoami", output: `${data.name} — ${data.title}` },
    { cmd: "cat summary.txt", output: data.summary },
    { cmd: "help", output: "Available commands: about, skills, projects, contact, stats, clear" }
  ]);
  const [inputVal, setInputVal] = useState("");

  const handleCommand = (cmdToRun: string) => {
    const trimmed = cmdToRun.trim().toLowerCase();
    let res = "";

    if (trimmed === "clear") {
      setHistory([]);
      return;
    } else if (trimmed === "about" || trimmed === "whoami") {
      res = `${data.name}\n${data.title}\n${data.summary}\nLocation: ${data.location || "Earth"}`;
    } else if (trimmed === "skills") {
      res = data.skills.map(s => `[${s.category}]\n  -> ${s.items.join(", ")}`).join("\n");
    } else if (trimmed === "projects") {
      res = data.projects.map(p => `* ${p.title}\n  ${p.description}\n  Tech: ${p.technologies.join(", ")}`).join("\n\n");
    } else if (trimmed === "contact") {
      res = `Email: ${data.contact.email}\nGitHub: ${data.contact.github}\nLinkedIn: ${data.contact.linkedin}`;
    } else if (trimmed === "stats") {
      res = (data.statsBanner || []).map(s => `${s.label}: ${s.value}`).join("\n");
    } else if (trimmed === "help") {
      res = "Available commands: about, skills, projects, contact, stats, clear";
    } else {
      res = `Command not found: '${trimmed}'. Type 'help' for available commands.`;
    }

    setHistory((prev) => [...prev, { cmd: cmdToRun, output: res }]);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
    setInputVal("");
  };

  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-slate-950 text-emerald-400 font-mono shadow-2xl overflow-hidden">
      {/* Terminal Title Bar */}
      <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
          <span className="text-xs text-slate-400 ml-2">guest@devstack-shell: ~</span>
        </div>
        <div className="flex items-center space-x-2 text-[11px] text-slate-400">
          <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
          <span>BASH v5.2</span>
        </div>
      </div>

      {/* Quick Commands Bar */}
      <div className="bg-slate-900/60 px-4 py-2 border-b border-slate-800 flex flex-wrap items-center gap-2 text-xs">
        <span className="text-slate-400 text-[11px]">Quick Run:</span>
        {["about", "skills", "projects", "stats", "contact", "clear"].map((cmd) => (
          <button
            key={cmd}
            onClick={() => handleCommand(cmd)}
            className="px-2 py-0.5 rounded bg-emerald-950/80 hover:bg-emerald-900 border border-emerald-700/50 text-emerald-300 text-[11px] transition-colors"
          >
            ${cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output Body */}
      <div className="p-6 space-y-4 min-h-[420px] max-h-[580px] overflow-y-auto text-xs leading-relaxed">
        <div className="text-slate-400">
          Welcome to {data.name}&apos;s interactive terminal portfolio.<br />
          System: DevStack OS x86_64 • Type &apos;help&apos; for available commands.
        </div>

        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center space-x-2 text-emerald-300">
              <span className="text-amber-400">guest@devstack:~$</span>
              <span className="text-white font-semibold">{item.cmd}</span>
            </div>
            <pre className="whitespace-pre-wrap text-emerald-400/90 pl-4 border-l border-emerald-900/60 text-[11px]">
              {item.output}
            </pre>
          </div>
        ))}

        {/* Live Input Form */}
        <form onSubmit={onSubmit} className="flex items-center space-x-2 pt-2">
          <span className="text-amber-400">guest@devstack:~$</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="type a command..."
            autoFocus
            className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs focus:ring-0"
          />
          <span className="w-2 h-4 bg-emerald-400 animate-pulse" />
        </form>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// T1.3: Academic & Capstone Scholar
// ----------------------------------------------------------------------
export function T1AcademicScholar({ data }: TemplateProps) {
  return (
    <div className="p-8 md:p-12 rounded-2xl bg-[#faf9f6] dark:bg-slate-950 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-800 shadow-md font-serif space-y-8">
      {/* Paper Header */}
      <div className="border-b-2 border-slate-900 dark:border-slate-100 pb-6 text-center space-y-2">
        <span className="font-mono text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
          ACADEMIC DOSSIER & CS RESEARCH RESUME
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          {data.name}
        </h1>
        <p className="text-sm md:text-base italic text-slate-700 dark:text-slate-300 font-sans">
          {data.academicStats?.university || "University Scholar"} • {data.location}
        </p>
        <div className="pt-2 flex flex-wrap justify-center items-center gap-4 text-xs font-sans text-slate-600 dark:text-slate-400">
          <span>{data.contact.email}</span>
          <span>•</span>
          <span>{data.contact.github}</span>
          <span>•</span>
          <span>GPA: {data.academicStats?.gpa || "3.96/4.0"}</span>
        </div>
      </div>

      {/* Abstract */}
      <div className="max-w-3xl mx-auto space-y-2 font-sans">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 border-b border-slate-300 dark:border-slate-700 pb-1">
          Abstract / Research Focus
        </h2>
        <p className="text-xs md:text-sm leading-relaxed text-slate-700 dark:text-slate-300 font-serif text-justify">
          {data.summary}
        </p>
      </div>

      {/* Academic Honors Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-sans">
        <div className="p-4 rounded border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-center">
          <div className="text-xs text-slate-500 uppercase font-semibold">Undergrad GPA</div>
          <div className="text-xl font-bold text-slate-900 dark:text-white mt-1">{data.academicStats?.gpa || "3.96"}</div>
        </div>
        <div className="p-4 rounded border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-center">
          <div className="text-xs text-slate-500 uppercase font-semibold">Graduation</div>
          <div className="text-xl font-bold text-slate-900 dark:text-white mt-1">{data.academicStats?.graduation || "2026"}</div>
        </div>
        <div className="p-4 rounded border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-center">
          <div className="text-xs text-slate-500 uppercase font-semibold">LeetCode Rating</div>
          <div className="text-xl font-bold text-slate-900 dark:text-white mt-1">2,145 (Top 2%)</div>
        </div>
        <div className="p-4 rounded border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 text-center">
          <div className="text-xs text-slate-500 uppercase font-semibold">Research Citations</div>
          <div className="text-xl font-bold text-slate-900 dark:text-white mt-1">12 Citations</div>
        </div>
      </div>

      {/* Research & Capstone Projects */}
      <div className="space-y-4 font-sans">
        <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-200 border-b border-slate-300 dark:border-slate-700 pb-1 flex items-center gap-2">
          <BookOpen className="w-3.5 h-3.5" /> Capstone Papers & Publications
        </h2>
        <div className="space-y-4">
          {data.projects.map((proj) => (
            <div
              key={proj.id}
              className="p-5 rounded-lg border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2"
            >
              <div className="flex justify-between items-baseline">
                <h3 className="font-serif font-bold text-sm md:text-base text-slate-900 dark:text-white">
                  {proj.title}
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 border">
                  arXiv:2502.04189
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-serif">
                {proj.description}
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px]">
                <span className="font-semibold text-slate-500">Keywords:</span>
                {proj.technologies.map((t, idx) => (
                  <span key={idx} className="font-mono text-slate-700 dark:text-slate-300">
                    {t}{idx < proj.technologies.length - 1 ? " • " : ""}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// T1.4: Build-in-Public & Learning Journey
// ----------------------------------------------------------------------
export function T1BuildInPublic({ data }: TemplateProps) {
  const sprints = [
    { month: "Month 6", title: "Shipped Real-Time WebSocket CRDTs", status: "Completed", desc: "Built conflict-free replicated data types and scaled state synchronization." },
    { month: "Month 4", title: "Distributed Consensus & Raft in Go", status: "Completed", desc: "Implemented leader election and log replication with fault tolerance." },
    { month: "Month 2", title: "Mastered React 19 & TypeScript Strict Mode", status: "Completed", desc: "Migrated full portfolio and student projects to typed architecture." },
    { month: "Current", title: "Deep Dive into GPU Kernels & CUDA", status: "In Progress", desc: "Writing custom Triton kernels for fast local transformer inference." }
  ];

  return (
    <div className="space-y-8 font-sans">
      {/* Banner */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-800 text-white shadow-lg">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-200 mb-2">
          <Flame className="w-4 h-4 text-amber-300" />
          <span>Build in Public • 100 Days of Code</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold">{data.name}</h1>
        <p className="text-sm md:text-base text-emerald-100 mt-2 max-w-2xl leading-relaxed">
          &quot;Documenting every bug, commit, and breakthrough from day 1 to shipping production code.&quot;
        </p>
      </div>

      {/* Currently Building Radar */}
      <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="font-bold">What I am building this week:</span>
          <span>Benchmarking Go gRPC vs. Rust Actix microsecond latencies</span>
        </div>
        <span className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400">Day 84 of 100</span>
      </div>

      {/* Sprint Milestones Timeline */}
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-6">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
          <Clock className="w-4 h-4 text-teal-500" /> Learning & Shipping Milestones
        </h2>
        <div className="space-y-6 relative before:absolute before:left-3 before:top-2 before:bottom-2 before:w-0.5 before:bg-teal-500/30">
          {sprints.map((sp, idx) => (
            <div key={idx} className="relative pl-8">
              <div className="absolute left-1.5 top-1.5 w-3.5 h-3.5 rounded-full bg-teal-500 ring-4 ring-white dark:ring-slate-950" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-teal-600 dark:text-teal-400">{sp.month}</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {sp.status}
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1">{sp.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">{sp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
