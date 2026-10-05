"use client";

import React, { useState } from "react";
import { ResumeSchema } from "@/types/resume";
import {
  Code,
  Briefcase,
  Layers,
  Award,
  ExternalLink,
  Mail,
  Phone,
  Globe,
  MapPin,
  CheckCircle2,
  FileText,
  User,
  Sparkles,
  Edit3,
  Share2,
  Link as LinkIcon
} from "lucide-react";

interface Props {
  data: ResumeSchema;
  onChange: (updated: ResumeSchema) => void;
}

export function PortfolioAndAtsPreview({ data, onChange }: Props) {
  const [activeTab, setActiveTab] = useState<"portfolio" | "ats" | "json">("portfolio");
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300">
      {/* Top Header Controls */}
      <div className="bg-slate-50 dark:bg-slate-950 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-2">
          <span className="inline-block w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Live Generation Sandbox
          </span>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center bg-slate-200 dark:bg-slate-800 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab("portfolio")}
            className={`flex items-center space-x-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "portfolio"
                ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Executive Portfolio Preview</span>
          </button>

          <button
            onClick={() => setActiveTab("ats")}
            className={`flex items-center space-x-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
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
            className={`flex items-center space-x-2 px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === "json"
                ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm"
                : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            <span>JSON Schema</span>
          </button>
        </div>

        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
            isEditing
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700"
          }`}
        >
          <Edit3 className="w-3.5 h-3.5" />
          <span>{isEditing ? "Lock Data" : "Edit Fields"}</span>
        </button>
      </div>

      {/* Main Container Area */}
      <div className="p-6 md:p-8">
        {/* Inline Data Editor Drawer if IsEditing */}
        {isEditing && (
          <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-950 border border-blue-500/30 rounded-xl space-y-4">
            <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Quick Field Correction
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-slate-600 dark:text-slate-400 mb-1">Full Name</label>
                <input
                  type="text"
                  value={data.name}
                  onChange={(e) => onChange({ ...data, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-slate-600 dark:text-slate-400 mb-1">Executive Title</label>
                <input
                  type="text"
                  value={data.title}
                  onChange={(e) => onChange({ ...data, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-slate-600 dark:text-slate-400 mb-1">Executive Summary</label>
                <textarea
                  rows={3}
                  value={data.summary}
                  onChange={(e) => onChange({ ...data, summary: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 1: EXECUTIVE PORTFOLIO PREVIEW */}
        {activeTab === "portfolio" && (
          <div className="space-y-10 max-w-5xl mx-auto">
            {/* Hero Section */}
            <header className="border-b border-slate-200 dark:border-slate-800 pb-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 mb-3">
                    <User className="w-3.5 h-3.5" /> Executive Profile
                  </span>
                  <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {data.name}
                  </h1>
                  <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mt-1">
                    {data.title}
                  </p>
                  {data.location && (
                    <p className="flex items-center text-xs text-slate-500 dark:text-slate-400 mt-2">
                      <MapPin className="w-3.5 h-3.5 mr-1" /> {data.location}
                    </p>
                  )}
                </div>

                {/* Social & Contact Links */}
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {data.contact.email && (
                    <a
                      href={`mailto:${data.contact.email}`}
                      className="flex items-center space-x-1.5 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-700 dark:text-slate-300 transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-500" />
                      <span>{data.contact.email}</span>
                    </a>
                  )}
                  {data.contact.linkedin && (
                    <a
                      href={data.contact.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-700 dark:text-slate-300"
                    >
                      <LinkIcon className="w-3.5 h-3.5 text-blue-600" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {data.contact.github && (
                    <a
                      href={data.contact.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-1 px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-500 text-slate-700 dark:text-slate-300"
                    >
                      <Share2 className="w-3.5 h-3.5 text-slate-900 dark:text-white" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-6 text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl">
                {data.summary}
              </p>
            </header>

            {/* Metrics Dashboard Grid */}
            {data.metrics && data.metrics.length > 0 && (
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4 text-blue-500" /> Key Impact & Performance Metrics
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {data.metrics.map((m) => (
                    <div
                      key={m.id}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 hover:border-blue-500/50 transition-all"
                    >
                      <div className="text-2xl md:text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                        {m.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-900 dark:text-white mt-1">
                        {m.label}
                      </div>
                      {m.description && (
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                          {m.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Experience Timeline */}
            {data.experience && data.experience.length > 0 && (
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-blue-500" /> Career & Executive Experience
                </h2>
                <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
                  {data.experience.map((exp) => (
                    <div key={exp.id} className="relative pl-8">
                      <div className="absolute left-1.5 top-1.5 w-3 h-3 rounded-full bg-blue-600 ring-4 ring-white dark:ring-slate-900" />
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="text-base font-bold text-slate-900 dark:text-white">
                          {exp.role} <span className="text-blue-600 dark:text-blue-400">@ {exp.company}</span>
                        </h3>
                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md">
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                      {exp.location && (
                        <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">{exp.location}</p>
                      )}
                      <ul className="mt-3 space-y-2 text-xs md:text-sm text-slate-600 dark:text-slate-300">
                        {exp.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Categorized Tech Stack */}
            {data.skills && data.skills.length > 0 && (
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-500" /> Architecture & Leadership Skills
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {data.skills.map((skillGroup, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800"
                    >
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-3">
                        {skillGroup.category}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {skillGroup.items.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Key Projects */}
            {data.projects && data.projects.length > 0 && (
              <section>
                <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-500" /> Architectural Case Studies & Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.projects.map((proj) => (
                    <div
                      key={proj.id}
                      className="p-5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                            {proj.title}
                          </h3>
                          {proj.link && (
                            <a
                              href={proj.link}
                              target="_blank"
                              rel="noreferrer"
                              className="text-blue-500 hover:text-blue-600"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                          {proj.description}
                        </p>
                      </div>

                      <div>
                        {proj.metrics && (
                          <div className="mb-3 p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[11px] font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>{proj.metrics}</span>
                          </div>
                        )}
                        <div className="flex flex-wrap gap-1">
                          {proj.technologies.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}

        {/* TAB 2: ATS RESUME VIEW */}
        {activeTab === "ats" && (
          <div className="max-w-3xl mx-auto bg-white text-slate-900 p-8 md:p-12 border border-slate-300 shadow-inner rounded-lg font-serif">
            <div className="text-center border-b border-slate-300 pb-4 mb-6">
              <h1 className="text-2xl font-bold uppercase tracking-wide text-slate-900">
                {data.name}
              </h1>
              <p className="text-sm font-semibold text-slate-700 mt-1">{data.title}</p>
              <div className="text-xs text-slate-600 mt-2 space-x-3 font-sans">
                {data.location && <span>{data.location}</span>}
                {data.contact.phone && <span>• {data.contact.phone}</span>}
                {data.contact.email && <span>• {data.contact.email}</span>}
                {data.contact.linkedin && <span>• {data.contact.linkedin}</span>}
              </div>
            </div>

            {/* Summary */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase border-b border-slate-300 pb-1 mb-2 font-sans text-slate-800">
                Executive Summary
              </h2>
              <p className="text-xs leading-relaxed font-sans text-slate-700">{data.summary}</p>
            </div>

            {/* Experience */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase border-b border-slate-300 pb-1 mb-3 font-sans text-slate-800">
                Professional Experience
              </h2>
              <div className="space-y-4">
                {data.experience.map((exp) => (
                  <div key={exp.id} className="font-sans">
                    <div className="flex justify-between items-baseline font-bold text-xs text-slate-900">
                      <span>{exp.role} — {exp.company}</span>
                      <span className="text-[11px] font-normal text-slate-600">{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <ul className="list-disc list-inside text-[11px] text-slate-700 mt-1 space-y-1">
                      {exp.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6 font-sans">
              <h2 className="text-xs font-bold uppercase border-b border-slate-300 pb-1 mb-2 text-slate-800">
                Core Competencies & Skills
              </h2>
              <div className="text-xs text-slate-700 space-y-1">
                {data.skills.map((group, i) => (
                  <div key={i}>
                    <span className="font-semibold text-slate-900">{group.category}: </span>
                    <span>{group.items.join(", ")}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center pt-4 border-t border-slate-200 text-[10px] text-slate-400 font-sans">
              ATS-Optimized Export Stream • Generated automatically by devstack.bio
            </div>
          </div>
        )}

        {/* TAB 3: JSON SCHEMA */}
        {activeTab === "json" && (
          <div className="relative">
            <pre className="p-6 bg-slate-950 text-emerald-400 rounded-xl overflow-x-auto text-xs font-mono leading-relaxed max-h-[500px]">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
