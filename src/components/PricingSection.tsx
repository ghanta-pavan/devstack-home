"use client";

import React, { useState } from "react";
import { Check, Shield, Zap, Globe, Sparkles } from "lucide-react";

export function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<"onetime" | "annual">("onetime");

  const tiers = [
    {
      name: "Starter",
      subtitle: "Freemium Hook",
      target: "Casual job lookers & senior engineers needing a quick clean link.",
      price: billingCycle === "onetime" ? "Free" : "Free",
      period: "forever",
      badge: "Free Tier",
      features: [
        "Single-page scroller website",
        "Generated 100% from PDF/Docx resume",
        "GitHub Pages automated deployment (username.github.io)",
        "Standard executive design system",
        "ATS resume download link"
      ],
      cta: "Generate Free Bio",
      popular: false
    },
    {
      name: "Professional",
      subtitle: "Active Search",
      target: "Mid-to-senior professionals actively interviewing & building authority.",
      price: billingCycle === "onetime" ? "₹1,999" : "₹1,499",
      period: billingCycle === "onetime" ? "one-time (6 months)" : "/year",
      badge: "Most Popular",
      features: [
        "All Starter features included",
        "Branded Subdomain (<username>.devstack.bio)",
        "Embedded Cal.com / Calendly scheduler",
        "Interactive metrics & case studies dashboard",
        "Edge Middleware wildcard routing",
        "ATS-compliant PDF resume compiler"
      ],
      cta: "Launch Professional Bio",
      popular: true
    },
    {
      name: "Executive",
      subtitle: "Thought Leader",
      target: "Directors, VPs, Principal Engineers & Fractional CXOs.",
      price: billingCycle === "onetime" ? "₹7,999" : "₹4,999",
      period: billingCycle === "onetime" ? "setup + 1 yr domain" : "/year renewal",
      badge: "Executive Scale",
      features: [
        "All Professional features included",
        "Custom Domain (.dev, .me, .com) via Cloudflare SaaS",
        "Dynamic Markdown / Tiptap CMS blog engine",
        "Automated SSL certificate provisioning",
        "Custom case study breakdown & media gallery",
        "Dedicated VIP onboarding & setup"
      ],
      cta: "Claim Custom Domain",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 inline-flex items-center gap-1.5 mb-4">
            <Zap className="w-3.5 h-3.5" /> Product Tiers & Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Transparent Pricing for High-Visibility Leaders
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 mt-3">
            Zero subscription traps. Secure your personal technical presence with automated DNS deployment.
          </p>

          {/* Billing Switcher */}
          <div className="mt-8 inline-flex items-center p-1 bg-slate-200 dark:bg-slate-800 rounded-xl">
            <button
              onClick={() => setBillingCycle("onetime")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                billingCycle === "onetime"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              One-Time Hosting
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                billingCycle === "annual"
                  ? "bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow"
                  : "text-slate-600 dark:text-slate-400"
              }`}
            >
              Annual Renewal (Save ~25%)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 ${
                tier.popular
                  ? "bg-white dark:bg-slate-900 border-blue-500 ring-2 ring-blue-500/20 shadow-2xl scale-105 z-10"
                  : "bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-md"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-blue-600 text-white text-xs font-bold tracking-wider uppercase shadow-md flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{tier.name}</h3>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {tier.subtitle}
                  </span>
                </div>

                <p className="text-xs text-slate-500 dark:text-slate-400 min-h-[36px] mb-6">
                  {tier.target}
                </p>

                <div className="mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400 ml-2">
                    {tier.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 text-xs text-slate-700 dark:text-slate-300">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all shadow-md ${
                  tier.popular
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "bg-slate-900 dark:bg-slate-100 hover:bg-slate-800 dark:hover:bg-white text-white dark:text-slate-900"
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
