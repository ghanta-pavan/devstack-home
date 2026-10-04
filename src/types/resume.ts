export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string;
  highlights: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  metrics?: string;
}

export interface Metric {
  id: string;
  label: string;
  value: string;
  description?: string;
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  website?: string;
  email?: string;
  phone?: string;
}

export interface ResumeSchema {
  name: string;
  title: string;
  summary: string;
  location?: string;
  contact: SocialLinks;
  skills: {
    category: string;
    items: string[];
  }[];
  experience: WorkExperience[];
  projects: Project[];
  metrics: Metric[];
}

export const SAMPLE_RESUME: ResumeSchema = {
  name: "Alex Rivera",
  title: "Principal Infrastructure Architect & Engineering Lead",
  summary: "High-impact technology leader with 12+ years of experience engineering distributed edge architectures, high-throughput microservices, and leading cloud transformation for Fortune 500 platforms. Proven track record of scaling platforms to 50M+ MAU with 99.99% availability.",
  location: "San Francisco, CA (Remote)",
  contact: {
    email: "alex.rivera@devstack.bio",
    linkedin: "https://linkedin.com/in/alexrivera-tech",
    github: "https://github.com/arivera-arch",
    website: "https://alexrivera.devstack.bio",
    twitter: "@arivera_tech"
  },
  skills: [
    {
      category: "Core Architecture & Languages",
      items: ["Go", "TypeScript", "Rust", "Distributed Systems", "Microservices Design"]
    },
    {
      category: "Cloud, Edge & Infra",
      items: ["Kubernetes", "AWS", "Cloudflare Workers", "Terraform", "Upstash Redis", "PostgreSQL"]
    },
    {
      category: "Leadership & Strategy",
      items: ["Technical Strategy", "Engineering Operations", "Team Mentorship (25+ Engs)", "SOC2 & Compliance"]
    }
  ],
  experience: [
    {
      id: "exp-1",
      role: "Principal Systems Architect",
      company: "ScaleEdge Global",
      location: "San Francisco, CA",
      startDate: "2021",
      endDate: "Present",
      highlights: [
        "Architected multi-region edge caching solution reducing API latency by 64% across 12M daily active requests.",
        "Led migration of legacy monolith to Kubernetes microservices with zero downtime during peak BFCM traffic.",
        "Managed cross-functional org of 18 senior engineers across core platform and infrastructure security."
      ]
    },
    {
      id: "exp-2",
      role: "Staff Backend Engineer / Tech Lead",
      company: "Apex Cloud Technologies",
      location: "Austin, TX",
      startDate: "2017",
      endDate: "2021",
      highlights: [
        "Designed real-time data streaming pipeline processing 4.2B events daily using Kafka and Go.",
        "Reduced annual AWS cloud infrastructure expenditure by $420k through strategic spot instance orchestration.",
        "Mentored 8 junior to senior engineers and introduced automated CI/CD canary deployments."
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Zero-Latency Multi-Tenant Edge Router",
      description: "High-performance edge routing engine built with Cloudflare Workers and Rust WebAssembly for dynamic SSL & wildcard subdomains.",
      technologies: ["Rust", "Wasm", "Cloudflare Workers", "TypeScript"],
      metrics: "Sub-10ms routing lookup across 500k dynamic hostnames",
      link: "https://github.com/arivera-arch/edge-router"
    },
    {
      id: "proj-2",
      title: "Distributed Telemetry & Anomaly Detector",
      description: "Autonomous log parsing and anomaly detection framework processing high-frequency metric streams.",
      technologies: ["Go", "ClickHouse", "OpenTelemetry", "Docker"],
      metrics: "Detected 99.4% of synthetic memory leaks before customer impact",
      link: "https://github.com/arivera-arch/telemetry-engine"
    }
  ],
  metrics: [
    {
      id: "met-1",
      label: "System Latency Reduction",
      value: "64%",
      description: "Average p99 latency reduction across multi-region services"
    },
    {
      id: "met-2",
      label: "Infra Cost Savings",
      value: "$420K/yr",
      description: "Cloud compute optimization through spot orchestration"
    },
    {
      id: "met-3",
      label: "Engineers Led & Mentored",
      value: "25+",
      description: "Direct engineering management & architectural oversight"
    },
    {
      id: "met-4",
      label: "Uptime SLA Maintained",
      value: "99.99%",
      description: "High-availability SLA maintained across 4+ consecutive years"
    }
  ]
};
