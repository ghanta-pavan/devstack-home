"use client";

import React, { useState, useEffect } from "react";
import { SAMPLE_RESUME, ResumeSchema } from "@/types/resume";
import { ResumeUploader } from "@/components/ResumeUploader";
import { PortfolioAndAtsPreview } from "@/components/PortfolioAndAtsPreview";
import { PricingSection } from "@/components/PricingSection";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import {
  Sun,
  Moon,
  Zap,
  Sparkles,
  ArrowRight,
  Check
} from "lucide-react";

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeSchema>(SAMPLE_RESUME);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-blue-600 text-white shadow-md">
              <Zap className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
                devstack<span className="text-blue-600 dark:text-blue-400">.bio</span>
              </span>
              <span className="text-[10px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider -mt-1">
                Build your Bio
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <a href="#uploader" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Uploader & Sandbox
            </a>
            <a href="#pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Pricing Tiers
            </a>
            <a href="#architecture" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Architecture
            </a>
          </nav>

          {/* Controls & CTA */}
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="#uploader"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-md flex items-center gap-1.5"
            >
              <span>Build Portfolio</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 mb-6">
            <Sparkles className="w-3.5 h-3.5" /> Zero-Friction Resume to Interactive Portfolio Engine
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
            Build your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Bio</span> with Technical Authority
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Automated digital presence platform for senior engineers, tech leads, and directors. Transform standard PDF resumes into executive web portfolios and ATS-compliant assets instantly.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-emerald-500" /> Sub-10ms Edge Caching
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-emerald-500" /> GitHub Pages & Subdomain Routing
            </span>
            <span className="flex items-center gap-1">
              <Check className="w-4 h-4 text-emerald-500" /> Dual ATS & Web Schema Export
            </span>
          </div>
        </div>
      </section>

      {/* Resume Uploader & Extraction Interactive Dashboard */}
      <section id="uploader" className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResumeUploader onParsed={setResumeData} currentData={resumeData} />

          <div className="mt-10">
            <PortfolioAndAtsPreview data={resumeData} onChange={setResumeData} />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Architecture Deep Dive Section */}
      <ArchitectureDiagram />

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-blue-600 text-white">
              <Zap className="w-4 h-4" />
            </div>
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              devstack.bio — Executive Presence Platform
            </span>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
            © {new Date().getFullYear()} devstack.bio. Built with Next.js, Tailwind CSS & Gemini AI.
          </p>

          <div className="flex items-center space-x-4 text-xs text-slate-500 dark:text-slate-400">
            <a href="#architecture" className="hover:underline">Documentation</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
