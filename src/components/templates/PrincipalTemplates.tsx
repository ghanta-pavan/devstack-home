"use client";

import React, { useState } from "react";
import { PersonaProfile } from "@/types/templates";
import {
  Network,
  BookOpen,
  GitFork,
  Cpu,
  Shield,
  Layers,
  Award,
  Play,
  RotateCcw,
  Zap,
  CheckCircle2,
  ExternalLink,
  Users
} from "lucide-react";

interface TemplateProps {
  data: PersonaProfile;
}

// ----------------------------------------------------------------------
// T4.1: Enterprise Architect & RFC Vault
// ----------------------------------------------------------------------
export function T4EnterpriseArchitect({ data }: TemplateProps) {
  const [selectedNode, setSelectedNode] = useState<string>("mesh");

  return (
    <div className="space-y-8 font-sans">
      <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-amber-950/40 to-slate-950 border border-amber-500/30 text-white shadow-2xl">
        <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest flex items-center gap-1.5 mb-2">
          <Network className="w-4 h-4" /> [ENTERPRISE MULTI-CLOUD ARCHITECTURE]
        </span>
        <h1 className="text-3xl md:text-5xl font-black">{data.name}</h1>
        <p className="text-amber-200 text-sm md:text-base font-medium mt-1">{data.title}</p>
        <p className="text-xs md:text-sm text-slate-300 mt-3 max-w-3xl leading-relaxed">{data.summary}</p>

        <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <div className="text-2xl font-black text-amber-400">3 Patents</div>
            <div className="text-[11px] text-amber-200 font-medium">Approved US Patents</div>
          </div>
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <div className="text-2xl font-black text-amber-400">$3.4M/yr</div>
            <div className="text-[11px] text-amber-200 font-medium">FinOps Cloud Optimization</div>
          </div>
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <div className="text-2xl font-black text-amber-400">90 Secs</div>
            <div className="text-[11px] text-amber-200 font-medium">Cross-Cloud Failover RTO</div>
          </div>
          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
            <div className="text-2xl font-black text-amber-400">220+ Engs</div>
            <div className="text-[11px] text-amber-200 font-medium">ARB Architectural Reach</div>
          </div>
        </div>
      </div>

      {/* Interactive Topology Visualizer */}
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
            <Network className="w-4 h-4 text-amber-500" />
            <span>Interactive Multi-Cloud Architecture Topology</span>
          </h2>
          <span className="text-xs text-amber-600 dark:text-amber-400 font-mono">Click nodes to inspect</span>
        </div>

        {/* Node selector buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <button
            onClick={() => setSelectedNode("mesh")}
            className={`p-4 rounded-xl text-left border transition-all ${
              selectedNode === "mesh"
                ? "bg-amber-500/10 border-amber-500/50 text-amber-900 dark:text-amber-200"
                : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900"
            }`}
          >
            <div className="text-xs font-bold">1. Edge Anycast Mesh (Cloudflare)</div>
            <div className="text-[11px] text-slate-500 mt-1">DDoS Mitigation & Wasm Routing</div>
          </button>

          <button
            onClick={() => setSelectedNode("aws")}
            className={`p-4 rounded-xl text-left border transition-all ${
              selectedNode === "aws"
                ? "bg-amber-500/10 border-amber-500/50 text-amber-900 dark:text-amber-200"
                : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900"
            }`}
          >
            <div className="text-xs font-bold">2. Primary Cluster (AWS EKS & Aurora)</div>
            <div className="text-[11px] text-slate-500 mt-1">US-East-1 Active Core Processing</div>
          </button>

          <button
            onClick={() => setSelectedNode("azure")}
            className={`p-4 rounded-xl text-left border transition-all ${
              selectedNode === "azure"
                ? "bg-amber-500/10 border-amber-500/50 text-amber-900 dark:text-amber-200"
                : "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900"
            }`}
          >
            <div className="text-xs font-bold">3. Secondary Active Cluster (Azure AKS)</div>
            <div className="text-[11px] text-slate-500 mt-1">Hot Standby with CRDT Replication</div>
          </button>
        </div>

        {/* Inspection Panel */}
        <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs space-y-2">
          <div className="text-amber-400 font-bold">// Node Diagnostic: {selectedNode.toUpperCase()}</div>
          {selectedNode === "mesh" && (
            <p className="text-slate-300">
              Zero-Trust ingress routing: 300+ Edge PoPs terminating TLS 1.3 in &lt; 8ms. Dispatches authenticated requests across dual cloud providers via weighted round-robin.
            </p>
          )}
          {selectedNode === "aws" && (
            <p className="text-slate-300">
              High-concurrency cluster: 48 auto-scaling Kubernetes worker pods backed by Amazon Aurora Serverless PostgreSQL with read replicas across 3 availability zones.
            </p>
          )}
          {selectedNode === "azure" && (
            <p className="text-slate-300">
              Geographic resilience: Asynchronous cross-cloud state syncing via Kafka MirrorMaker with automated DNS health probe cutover in 90 seconds.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// T4.2: Industry Thought Leader & Tech Strategist
// ----------------------------------------------------------------------
export function T4ThoughtLeader({ data }: TemplateProps) {
  return (
    <div className="space-y-8 font-sans">
      <div className="p-8 rounded-2xl bg-[#1c1917] text-white border border-stone-800 shadow-xl space-y-3">
        <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
          Global Keynote Speaker & Technical Strategist
        </span>
        <h1 className="text-3xl md:text-5xl font-serif font-bold">{data.name}</h1>
        <p className="text-xs md:text-sm text-stone-300 max-w-2xl font-serif italic leading-relaxed">
          {data.summary}
        </p>
      </div>

      {/* Patent Registry */}
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
          <Award className="w-4 h-4 text-amber-500" />
          <span>Official US Patent Inventions</span>
        </h2>
        <div className="space-y-3">
          {(data.patents || []).map((pat, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">{pat.number}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    {pat.status}
                  </span>
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">{pat.title}</div>
              </div>
              <span className="text-xs text-slate-500 font-mono">Issued {pat.year}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// T4.3: Staff Multiplier & Culture Transformer
// ----------------------------------------------------------------------
export function T4StaffMultiplier({ data }: TemplateProps) {
  return (
    <div className="space-y-8 font-sans">
      <div className="p-8 rounded-2xl bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-white shadow-xl">
        <span className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5 mb-2">
          <GitFork className="w-4 h-4" /> Scaling Engineering Organizations Through Architectural Leverage
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold">{data.name}</h1>
        <p className="text-xs md:text-sm text-stone-200 mt-2 max-w-2xl leading-relaxed">{data.summary}</p>
      </div>

      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-4">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
          <Users className="w-4 h-4 text-amber-500" />
          <span>Cross-Organizational Influence Map (220+ Engineers)</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-2xl font-black text-amber-500">6 Directorates</div>
            <div className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-semibold">Standardized on ARB Tech Stack</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-2xl font-black text-amber-500">18 Staff Engineers</div>
            <div className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-semibold">Mentored on Strategy & RFCs</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <div className="text-2xl font-black text-amber-500">100% Zero-Trust</div>
            <div className="text-xs text-slate-600 dark:text-slate-300 mt-1 font-semibold">Security Governance Adherence</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// T4.4: Interactive Distributed Systems Explorer
// ----------------------------------------------------------------------
export function T4SystemSimulation({ data }: TemplateProps) {
  const [leaderNode, setLeaderNode] = useState<number>(1);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);

  const triggerElection = () => {
    setIsSimulating(true);
    setTimeout(() => {
      const nextLeader = leaderNode === 3 ? 1 : leaderNode + 1;
      setLeaderNode(nextLeader);
      setIsSimulating(false);
    }, 800);
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="p-6 rounded-2xl bg-slate-950 text-slate-100 border border-amber-500/30 space-y-3 font-mono">
        <div className="flex items-center justify-between text-xs text-amber-400">
          <span className="flex items-center gap-1.5 font-bold">
            <Cpu className="w-4 h-4" /> LIVE RAFT CONSENSUS SIMULATOR
          </span>
          <span>TERM # 14</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-black font-sans text-white">{data.name}</h1>
        <p className="text-xs text-slate-400 font-sans max-w-2xl">{data.summary}</p>
      </div>

      {/* Simulator Canvas */}
      <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 space-y-6">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Consensus Cluster (3 Nodes)
          </span>
          <button
            onClick={triggerElection}
            disabled={isSimulating}
            className="px-4 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 disabled:opacity-50"
          >
            <RotateCcw className={`w-3.5 h-3.5 ${isSimulating ? "animate-spin" : ""}`} />
            <span>{isSimulating ? "Holding Election..." : "Simulate Partition & Elect New Leader"}</span>
          </button>
        </div>

        {/* Nodes */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[1, 2, 3].map((nodeId) => {
            const isLeader = leaderNode === nodeId;
            return (
              <div
                key={nodeId}
                className={`p-6 rounded-2xl text-center border transition-all ${
                  isLeader
                    ? "bg-amber-500/10 border-amber-500 text-amber-900 dark:text-amber-200 shadow-md ring-2 ring-amber-500/30"
                    : "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
                }`}
              >
                <div className="text-sm font-bold font-mono">Node #{nodeId}</div>
                <div className={`mt-2 text-xs font-bold px-2 py-0.5 rounded-full inline-block ${
                  isLeader ? "bg-amber-500 text-slate-950" : "bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                }`}>
                  {isLeader ? "★ CURRENT LEADER" : "FOLLOWER"}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-2 font-mono">
                  Heartbeat: 50ms • Log Index: 489
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
