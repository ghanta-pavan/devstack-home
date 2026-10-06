"use client";

import React, { useState } from "react";
import { PersonaProfile } from "@/types/templates";
import { Printer, Copy, Check, Download, FileText } from "lucide-react";

interface Props {
  data: PersonaProfile;
}

export function TemplateATSResume({ data }: Props) {
  const [copied, setCopied] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textContent = `${data.name.toUpperCase()}
${data.title}
${data.location || ""} | ${data.contact.email || ""} | ${data.contact.phone || ""} | ${data.contact.linkedin || ""}

EXECUTIVE SUMMARY
${data.summary}

CORE COMPETENCIES & TECHNICAL SKILLS
${data.skills.map((s) => `${s.category}: ${s.items.join(", ")}`).join("\n")}

PROFESSIONAL EXPERIENCE
${data.experience
  .map(
    (exp) => `${exp.role} - ${exp.company} (${exp.startDate} - ${exp.endDate})
${exp.highlights.map((h) => `• ${h}`).join("\n")}`
  )
  .join("\n\n")}

KEY PROJECTS & ARCHITECTURAL CASE STUDIES
${data.projects
  .map(
    (p) => `${p.title}
${p.description}
Technologies: ${p.technologies.join(", ")}`
  )
  .join("\n\n")}`;

    navigator.clipboard.writeText(textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-4">
      {/* Top ATS Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 bg-slate-100 dark:bg-slate-800 rounded-xl text-xs">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold">
          <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>ATS Standard Compliance: 100% (Single Column, Machine-Readable)</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyText}
            className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 text-slate-700 dark:text-slate-300 font-medium flex items-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "Copied" : "Copy Plain Text"}</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-bold flex items-center gap-1.5 transition-colors shadow-sm"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print / Save PDF</span>
          </button>
        </div>
      </div>

      {/* Actual Printable ATS Resume Container */}
      <div className="max-w-4xl mx-auto bg-white text-slate-900 p-8 md:p-12 border border-slate-300 shadow-sm rounded-lg font-serif">
        {/* Header */}
        <div className="text-center border-b border-slate-300 pb-4 mb-6">
          <h1 className="text-2xl font-bold uppercase tracking-wider text-slate-900">
            {data.name}
          </h1>
          <p className="text-sm font-semibold text-slate-700 mt-1">{data.title}</p>
          <div className="text-xs text-slate-600 mt-2 space-x-2 font-sans flex flex-wrap justify-center">
            {data.location && <span>{data.location}</span>}
            {data.contact.email && <span>• {data.contact.email}</span>}
            {data.contact.linkedin && <span>• {data.contact.linkedin}</span>}
            {data.contact.github && <span>• {data.contact.github}</span>}
          </div>
        </div>

        {/* Summary */}
        <div className="mb-6">
          <h2 className="text-xs font-bold uppercase border-b border-slate-300 pb-1 mb-2 font-sans text-slate-800">
            Professional Summary
          </h2>
          <p className="text-xs leading-relaxed font-sans text-slate-700">{data.summary}</p>
        </div>

        {/* Skills */}
        <div className="mb-6 font-sans">
          <h2 className="text-xs font-bold uppercase border-b border-slate-300 pb-1 mb-2 text-slate-800">
            Core Competencies &amp; Technical Skills
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
                {exp.location && <div className="text-[11px] text-slate-500">{exp.location}</div>}
                <ul className="list-disc list-inside text-[11px] text-slate-700 mt-1 space-y-1">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        {data.projects && data.projects.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xs font-bold uppercase border-b border-slate-300 pb-1 mb-3 font-sans text-slate-800">
              Key Projects &amp; Architectural Deliverables
            </h2>
            <div className="space-y-3 font-sans">
              {data.projects.map((proj) => (
                <div key={proj.id} className="text-xs">
                  <div className="font-bold text-slate-900">{proj.title}</div>
                  <div className="text-slate-700 text-[11px] mt-0.5">{proj.description}</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                    Technologies: {proj.technologies.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 text-center pt-4 border-t border-slate-200 text-[10px] text-slate-400 font-sans">
          ATS-Optimized Single-Column Format • Machine-Readable via devstack.bio
        </div>
      </div>
    </div>
  );
}
