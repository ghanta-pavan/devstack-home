import { CareerTier, TemplateDefinition, PersonaProfile } from "@/types/templates";

export interface TierInfo {
  id: CareerTier;
  label: string;
  experience: string;
  badge: string;
  badgeColor: string;
  description: string;
  targetAudience: string;
  evaluationSignals: string;
}

export const CAREER_TIERS: TierInfo[] = [
  {
    id: "intern",
    label: "Interns & Students",
    experience: "0–1 Yrs",
    badge: "Students & Switchers",
    badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    description: "Curiosity, rapid learning, hackathons, and live interactive project demonstrations.",
    targetAudience: "University Recruiters, Internship Hiring Managers, Startup Founders",
    evaluationSignals: "Genuine passion, velocity, problem-solving curiosity, hackathon grit"
  },
  {
    id: "junior",
    label: "Junior Engineers",
    experience: "1–3 Yrs",
    badge: "Production Delivery",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    description: "Clean code maintainability, production feature delivery, testing, and team collaboration.",
    targetAudience: "Engineering Screeners, Tech Leads, Junior Hiring Managers",
    evaluationSignals: "Code quality, unit testing, Git workflow, production readiness"
  },
  {
    id: "senior",
    label: "Mid to Senior Engineers",
    experience: "4–8+ Yrs",
    badge: "Scale & Ownership",
    badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    description: "Distributed architectures, system scalability, trade-off reasoning, and business ROI.",
    targetAudience: "Senior Engineering Managers, Principal Engineers, Staff Bar-Raisers",
    evaluationSignals: "End-to-end system ownership, distributed architecture, business metrics"
  },
  {
    id: "principal",
    label: "Principal / Staff+ Engineers",
    experience: "8–15+ Yrs",
    badge: "Architectural Leverage",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    description: "Company-wide tech strategy, cross-org leverage, RFC governance, patents, and thought leadership.",
    targetAudience: "VP of Engineering, CTO, Distinguished Engineers, Staff Committees",
    evaluationSignals: "Architectural governance, org leverage, industry influence, patents"
  },
  {
    id: "manager",
    label: "Engineering Managers",
    experience: "EM / Sr. EM",
    badge: "People & Execution",
    badgeColor: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    description: "People growth, retention, high-performing culture, DORA metrics, and agile delivery cadence.",
    targetAudience: "Directors of Engineering, VP of Engineering, Chief People Officers",
    evaluationSignals: "Team retention, DORA velocity, career ladders, coaching outcomes"
  },
  {
    id: "executive",
    label: "Directors, VPs & C-Suite",
    experience: "15–20+ Yrs",
    badge: "Enterprise & P&L",
    badgeColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    description: "Enterprise modernization, multi-million P&L, global multi-region orgs, and board governance.",
    targetAudience: "C-Suite, Board of Directors, Venture Capitalists, Executive Search",
    evaluationSignals: "P&L governance, global orgs, enterprise AI roadmaps, shareholder ROI"
  }
];

export const TEMPLATES_CATALOG: TemplateDefinition[] = [
  // TIER 1: INTERNS
  {
    id: "t1_demo",
    name: "T1.1: Interactive Demo & Project Hub",
    tier: "intern",
    tierLabel: "Interns & Students",
    tierExperience: "0–1 Yrs",
    subtitle: "Showcase & Live Embeds",
    description: "Vibrant project showcase with live interactive demo previews, GitHub stats, hackathon badges, and clean recruiter CTAs.",
    designStyle: "Vibrant modern gradients, rounded glass cards, micro-interactions",
    heroFeature: "Live demo modal sandbox & hackathon medals showcase",
    keySections: ["Featured Live Projects", "Hackathons Won", "Languages & Tooling", "Coursework", "Hire Me CTA"],
    previewBadges: ["Live Demos", "Hackathon Medals", "GitHub Stats", "Vibrant Gradients"],
    accentColor: "emerald",
    gradient: "from-emerald-500 to-teal-600",
    icon: "Rocket",
    isPopular: true
  },
  {
    id: "t1_terminal",
    name: "T1.2: Terminal / Retro Hacker",
    tier: "intern",
    tierLabel: "Interns & Students",
    tierExperience: "0–1 Yrs",
    subtitle: "CLI & Interactive Shell",
    description: "Authentic Unix shell environment (guest@devstack:~$ ) with executable commands, tab auto-complete, and quick-command drawer.",
    designStyle: "Monospace JetBrains styling, CRT phosphor glow, dark slate with amber/green accents",
    heroFeature: "Interactive executable terminal with live output commands",
    keySections: ["Interactive Bash Shell", "Quick Command Palette", "System Diagnostics", "Fallback GUI View"],
    previewBadges: ["Executable CLI", "Phosphor Glow", "Tab Complete", "Hacker Aesthetic"],
    accentColor: "emerald",
    gradient: "from-emerald-600 to-green-700",
    icon: "Terminal"
  },
  {
    id: "t1_academic",
    name: "T1.3: Academic & Capstone Scholar",
    tier: "intern",
    tierLabel: "Interns & Students",
    tierExperience: "0–1 Yrs",
    subtitle: "LaTeX & Research Paper Aesthetic",
    description: "Swiss editorial typography designed for research interns, capstone honors, paper abstracts with DOI/arXiv badges, and algorithmic ratings.",
    designStyle: "High-contrast serif headings, muted monochrome palette, paper borders",
    heroFeature: "ArXiv/DOI publication abstracts and LeetCode rating badge",
    keySections: ["Research Abstracts", "Capstone Project", "CS Fundamentals Matrix", "Teaching History"],
    previewBadges: ["LaTeX Aesthetic", "ArXiv Badges", "LeetCode Rating", "Academic Pedigree"],
    accentColor: "teal",
    gradient: "from-teal-600 to-emerald-700",
    icon: "GraduationCap"
  },
  {
    id: "t1_build_in_public",
    name: "T1.4: Build-in-Public & Learning Journey",
    tier: "intern",
    tierLabel: "Interns & Students",
    tierExperience: "0–1 Yrs",
    subtitle: "Timeline & Growth Narrative",
    description: "Narrative storytelling template tracking chronological learning sprints, weekly shipping logs, and 'What I am building today'.",
    designStyle: "Warm editorial tones, connected milestone timelines, conversational dev logs",
    heroFeature: "Chronological sprint timeline with weekly shipping logs",
    keySections: ["Learning Milestones", "Currently Shipping", "Dev Logs", "Reading List", "Mentorship Gratitude"],
    previewBadges: ["Sprint Timeline", "Dev Logs", "Storytelling", "Learning Velocity"],
    accentColor: "emerald",
    gradient: "from-teal-500 to-emerald-600",
    icon: "Compass"
  },

  // TIER 2: JUNIOR ENGINEERS
  {
    id: "t2_bento",
    name: "T2.1: Modern Bento-Grid Builder",
    tier: "junior",
    tierLabel: "Junior Engineers",
    tierExperience: "1–3 Yrs",
    subtitle: "Linear & Apple-Style Polish",
    description: "Asymmetric Bento-box grid displaying shipped features, interactive tech stack orbit, code snippet sandbox, and senior recommendations.",
    designStyle: "Raycast/Linear dark aesthetic, frosted 1px borders, subtle ambient glow",
    heroFeature: "Asymmetric Bento grid with interactive code sandbox & live status",
    keySections: ["Bento Grid Hub", "Production Wins", "Code Quality Philosophy", "Senior Endorsements"],
    previewBadges: ["Bento Layout", "Linear Aesthetics", "Frosted Glass", "Code Sandbox"],
    accentColor: "blue",
    gradient: "from-blue-600 to-indigo-600",
    icon: "LayoutGrid",
    isPopular: true
  },
  {
    id: "t2_craftsman",
    name: "T2.2: Full-Stack Product Craftsman",
    tier: "junior",
    tierLabel: "Junior Engineers",
    tierExperience: "1–3 Yrs",
    subtitle: "API & Database Specs, Case Studies",
    description: "Split-view case studies linking frontend UI craft with resilient API backends, REST/GraphQL schemas, and production incident post-mortems.",
    designStyle: "Clean modern SaaS look, tabbed schema previews, interactive endpoints",
    heroFeature: "Split-view case studies: UI preview alongside database schema diagram",
    keySections: ["Deep-Dive Case Studies", "API & Schema Explorer", "Production Incident Post-Mortem", "Tooling Stack"],
    previewBadges: ["Split View", "API Schemas", "Post-Mortems", "Full-Stack Depth"],
    accentColor: "blue",
    gradient: "from-indigo-600 to-blue-700",
    icon: "Layers"
  },
  {
    id: "t2_oss",
    name: "T2.3: Open-Source & Community Driver",
    tier: "junior",
    tierLabel: "Junior Engineers",
    tierExperience: "1–3 Yrs",
    subtitle: "PR Highlights, Contributions, Talks",
    description: "Developer-first showcase with interactive GitHub contribution heatmap, highlighted pull requests with diff counts, and maintainer quotes.",
    designStyle: "GitHub-inspired developer styling, commit graph accents, markdown excerpts",
    heroFeature: "Interactive Pull Request showcase with lines changed & maintainer praise",
    keySections: ["Merged Pull Requests", "Open-Source Packages", "Tech Articles", "Meetup Lightning Talks"],
    previewBadges: ["GitHub Heatmap", "PR Highlights", "Maintainer Quotes", "OSS Stats"],
    accentColor: "sky",
    gradient: "from-sky-500 to-blue-600",
    icon: "GitPullRequest"
  },
  {
    id: "t2_scannable",
    name: "T2.4: Scannable Fast-Track Resume Site",
    tier: "junior",
    tierLabel: "Junior Engineers",
    tierExperience: "1–3 Yrs",
    subtitle: "High-Density, 1-Click Recruiter Drawer",
    description: "High-efficiency portfolio with instant skill-filtering (React/Node/Python), 1-click 'Copy Recruiter Packet', and embedded ATS resume view.",
    designStyle: "Corporate minimalism, ultra-readable typography, zero-fluff layout",
    heroFeature: "Instant skill filters & 1-click recruiter packet copy drawer",
    keySections: ["Filterable Experience", "Competencies with Levels", "Certifications", "Recruiter Packet Drawer"],
    previewBadges: ["Skill Filtering", "1-Click Copy", "High Density", "Fast Screening"],
    accentColor: "blue",
    gradient: "from-blue-500 to-sky-600",
    icon: "FileSearch"
  },

  // TIER 3: MID TO SENIOR ENGINEERS
  {
    id: "t3_system_design",
    name: "T3.1: Deep-Dive System Design Portfolio",
    tier: "senior",
    tierLabel: "Mid to Senior Engineers",
    tierExperience: "4–8+ Yrs",
    subtitle: "Architecture, Trade-offs & Post-Mortems",
    description: "Structured RFC-format case studies: Problem Context → Constraints → Architectural Decisions & Alternatives → Trade-offs → Quantifiable Impact.",
    designStyle: "Deep navy technical palette, architecture flow diagrams, collapsible accordions",
    heroFeature: "Standardized RFC case study cards with architecture diagrams",
    keySections: ["System Architecture RFCs", "Architectural Decision Records (ADRs)", "Chaos & Post-Mortems", "Tech Leadership"],
    previewBadges: ["RFC Case Studies", "Trade-Off Logs", "Architecture Diagrams", "Scale Metrics"],
    accentColor: "purple",
    gradient: "from-purple-600 to-violet-700",
    icon: "Server",
    isPopular: true
  },
  {
    id: "t3_high_perf",
    name: "T3.2: High-Performance Systems Specialist",
    tier: "senior",
    tierLabel: "Mid to Senior Engineers",
    tierExperience: "4–8+ Yrs",
    subtitle: "Latency Curves, SRE & Chaos Metrics",
    description: "Telemetry dashboard aesthetic with p50/p95/p99 latency curves, throughput under load, memory leak debugging case study, and eBPF tooling.",
    designStyle: "Cyber-slate, telemetry dashboard aesthetic, metric dials, sparklines",
    heroFeature: "Interactive latency benchmark dials and throughput load visualizer",
    keySections: ["Telemetry Dashboard", "Chaos Failover Strategies", "Infra Stack (K8s, Kafka, Rust)", "Open Tooling"],
    previewBadges: ["P99 Latency Curves", "SRE Telemetry", "Chaos Testing", "Microsecond Scale"],
    accentColor: "violet",
    gradient: "from-violet-600 to-purple-800",
    icon: "Activity"
  },
  {
    id: "t3_product_eng",
    name: "T3.3: Product Engineer & Growth Multiplier",
    tier: "senior",
    tierLabel: "Mid to Senior Engineers",
    tierExperience: "4–8+ Yrs",
    subtitle: "A/B Tests, UX Polish, Revenue Impact",
    description: "Cross-functional powerhouse showcasing feature-to-revenue case studies: A/B test experiments (+34% lift), user retention gains, and design system craft.",
    designStyle: "Consumer-grade polish, Apple-like typography, split screen with analytics",
    heroFeature: "Feature-to-revenue metrics with interactive A/B test experiment cards",
    keySections: ["Growth Experiments", "Conversion Case Studies", "Design System Craft", "Analytics Stack"],
    previewBadges: ["A/B Test Cards", "+34% Conversion", "Design Systems", "Revenue Focus"],
    accentColor: "purple",
    gradient: "from-purple-500 to-pink-600",
    icon: "TrendingUp"
  },
  {
    id: "t3_tech_lead",
    name: "T3.4: Tech Lead & Standards Advocate",
    tier: "senior",
    tierLabel: "Mid to Senior Engineers",
    tierExperience: "4–8+ Yrs",
    subtitle: "ADR/RFC Vault & Mentorship Impact",
    description: "Dual focus on architectural excellence and team multiplier effect: browse sanitized ADR design docs and inspect mentorship promotion outcomes.",
    designStyle: "Authoritative editorial design, typography-heavy, document-preview drawers",
    heroFeature: "ADR vault document previews & junior engineer promotion track record",
    keySections: ["ADR Document Vault", "Engineering Standards Guide", "Mentorship Outcomes", "Cross-Team Delivery"],
    previewBadges: ["ADR Vault", "Mentorship Tree", "Engineering Standards", "Team Multiplier"],
    accentColor: "indigo",
    gradient: "from-indigo-600 to-purple-700",
    icon: "Award"
  },

  // TIER 4: PRINCIPAL / STAFF+ ENGINEERS
  {
    id: "t4_enterprise_arch",
    name: "T4.1: Enterprise Architect & RFC Vault",
    tier: "principal",
    tierLabel: "Principal / Staff+ Engineers",
    tierExperience: "8–15+ Yrs",
    subtitle: "Cross-Cloud Topologies & Governance",
    description: "Multi-cloud enterprise vision featuring an interactive AWS/Azure/On-prem topology visualizer, FinOps optimization audits, and zero-trust runbooks.",
    designStyle: "Executive enterprise theme, high-fidelity network topology graphics, inspection tooltips",
    heroFeature: "Interactive Multi-Cloud Network Topology Viewer with node inspection",
    keySections: ["Macro Cloud Topologies", "Cross-Org RFCs", "FinOps Cloud Cost Optimization", "Zero-Trust Security"],
    previewBadges: ["Multi-Cloud Topology", "FinOps $1M+ Savings", "Zero-Trust", "Cross-Org RFCs"],
    accentColor: "amber",
    gradient: "from-amber-600 to-orange-600",
    icon: "Network",
    isPopular: true
  },
  {
    id: "t4_thought_leader",
    name: "T4.2: Industry Thought Leader & Tech Strategist",
    tier: "principal",
    tierLabel: "Principal / Staff+ Engineers",
    tierExperience: "8–15+ Yrs",
    subtitle: "Keynotes, Whitepapers & Patents",
    description: "Global keynote speaker and technical strategist profile: featured conference talks with video embeds, whitepapers, book publications, and patent portfolio.",
    designStyle: "Intellectual minimalism, rich editorial typography, publication layout",
    heroFeature: "Official patent registry cards with diagrams & keynote talk video embeds",
    keySections: ["Keynote Presentations", "Strategic Tech Essays", "Patent Registry (US11492048)", "Advisory Consultations"],
    previewBadges: ["Keynote Talks", "US Patents", "Whitepapers", "Tech Strategy"],
    accentColor: "amber",
    gradient: "from-amber-500 to-yellow-600",
    icon: "BookOpen"
  },
  {
    id: "t4_staff_multiplier",
    name: "T4.3: Staff Multiplier & Culture Transformer",
    tier: "principal",
    tierLabel: "Principal / Staff+ Engineers",
    tierExperience: "8–15+ Yrs",
    subtitle: "Mentorship Tree & Org Leverage",
    description: "Visualizing organizational leverage across 50+ engineers and 6 teams, architectural review board (ARB) governance framework, and engineering principles manifesto.",
    designStyle: "Clean org tree diagrams, philosophical quotes, structured framework cards",
    heroFeature: "Interactive Mentorship & Influence Tree across 50+ engineers and 6 teams",
    keySections: ["Influence & Mentorship Tree", "Engineering Manifesto", "ARB Governance Framework", "Org Career Ladders"],
    previewBadges: ["Influence Tree", "ARB Framework", "Culture Manifesto", "50+ Eng Leverage"],
    accentColor: "orange",
    gradient: "from-orange-600 to-amber-700",
    icon: "GitFork"
  },
  {
    id: "t4_sys_explorer",
    name: "T4.4: Interactive Distributed Systems Explorer",
    tier: "principal",
    tierLabel: "Principal / Staff+ Engineers",
    tierExperience: "8–15+ Yrs",
    subtitle: "Visual Algorithmic Simulations",
    description: "Deep-tech portfolio featuring live interactive canvas visualizers: Raft consensus leader election, consistent hashing ring, and leaky bucket rate limiting.",
    designStyle: "Interactive canvas/SVG animations, obsidian dark theme, terminal footnotes",
    heroFeature: "Live interactive Raft consensus simulator & consistent hashing visualizer",
    keySections: ["Interactive Consensus Simulator", "Deep-Tech Whitepapers", "System Architecture Case Studies", "Consulting CTA"],
    previewBadges: ["Raft Simulator", "Hashing Ring", "Interactive Canvas", "Deep Tech"],
    accentColor: "amber",
    gradient: "from-amber-600 to-red-600",
    icon: "Cpu"
  },

  // TIER 5: ENGINEERING MANAGERS
  {
    id: "t5_people_culture",
    name: "T5.1: People & Culture Builder",
    tier: "manager",
    tierLabel: "Engineering Managers",
    tierExperience: "EM / Sr. EM",
    subtitle: "Team Retention, 1-on-1s, Career Ladders",
    description: "Servant leadership showcase highlighting 100% team retention, 8 promotions, 4.9/5 satisfaction, 1-on-1 coaching frameworks, and direct report testimonials.",
    designStyle: "Warm human-centric tones, testimonial carousels, coaching journey cards",
    heroFeature: "People & retention metrics (100% retention, 8 promoted) & 1-on-1 coaching framework",
    keySections: ["Leadership Philosophy", "Retention & Promotion Track Record", "Coaching Frameworks", "Direct Report Testimonials"],
    previewBadges: ["100% Retention", "8 Promoted", "1-on-1 Framework", "Team Testimonials"],
    accentColor: "rose",
    gradient: "from-rose-600 to-pink-600",
    icon: "Users",
    isPopular: true
  },
  {
    id: "t5_dora_delivery",
    name: "T5.2: Delivery & DORA Execution Engine",
    tier: "manager",
    tierLabel: "Engineering Managers",
    tierExperience: "EM / Sr. EM",
    subtitle: "Velocity, Incident Mgmt, Predictability",
    description: "Operational excellence dashboard showing before/after DORA metrics (Deployment Frequency: 1/mo → 12/day, MTTR: 6h → 14m), agile velocity, and blameless post-mortems.",
    designStyle: "Metric-driven dashboard layout, status chips, transformation milestones",
    heroFeature: "Interactive Before vs. After DORA metrics dashboard transformation",
    keySections: ["DORA Metrics Dashboard", "Agile Transformation Case Studies", "Incident Retrospectives", "Cross-Functional Pods"],
    previewBadges: ["DORA Dashboard", "Deployment 12/day", "MTTR 14min", "Agile Velocity"],
    accentColor: "rose",
    gradient: "from-rose-500 to-red-600",
    icon: "Gauge"
  },
  {
    id: "t5_org_scaling",
    name: "T5.3: Org Scaling & Team Architect",
    tier: "manager",
    tierLabel: "Engineering Managers",
    tierExperience: "EM / Sr. EM",
    subtitle: "0-to-50+ Scaling, Hiring Playbooks",
    description: "Hyper-growth engineering leader portfolio: timeline of team expansion from 5 to 50+, structured hiring funnels, interview rubrics, and engineering onboarding playbook.",
    designStyle: "Modern org chart graphics, structured playbook modules, crisp executive styling",
    heroFeature: "Interactive 0-to-50+ org scaling roadmap and structured interview scorecard",
    keySections: ["Scaling Roadmap", "Hiring Funnel & Diversity", "Engineering Ladder Rubric", "Onboarding Playbook"],
    previewBadges: ["5 to 50+ Scaling", "Hiring Rubrics", "Career Ladders", "Org Architecture"],
    accentColor: "pink",
    gradient: "from-pink-600 to-rose-700",
    icon: "GitMerge"
  },
  {
    id: "t5_bridge_tech_people",
    name: "T5.4: Bridge: Technical Strategy & People Leadership",
    tier: "manager",
    tierLabel: "Engineering Managers",
    tierExperience: "EM / Sr. EM",
    subtitle: "Dual-Perspective Matrix",
    description: "Dual-lens toggle allowing technical CTOs to inspect architectural depth while People Ops reviews team leadership, retention, and coaching credentials.",
    designStyle: "Dual-theme toggle, split compare mode, balanced corporate design",
    heroFeature: "Interactive dual lens switch: People & Org Lens vs. Technical Architecture Lens",
    keySections: ["Balanced Leadership Matrix", "Technical Governance", "Team Delivery Cadence", "Direct Report Stories"],
    previewBadges: ["Dual Lens Switch", "CTO & People Ops", "Balanced Scorecard", "Holistic Leader"],
    accentColor: "rose",
    gradient: "from-rose-600 to-indigo-600",
    icon: "Split"
  },

  // TIER 6: DIRECTORS, VPS & C-SUITE
  {
    id: "t6_briefing",
    name: "T6.1: Enterprise Executive Briefing",
    tier: "executive",
    tierLabel: "Directors, VPs & C-Suite",
    tierExperience: "15–20+ Yrs",
    subtitle: "Video Pitch + Dual Lens + 20-Yr Timeline",
    description: "Flagship executive briefing featuring a 60-second video pitch trigger, 20-year career milestones, FinOps/TCO metrics ($2.8M savings), 7-stage career ladder, and applied AI lab.",
    designStyle: "Executive Midnight Navy & Gold, ambient glowing cards, modal briefing drawers",
    heroFeature: "Interactive 60-Second Video Pitch modal, 20-Year Milestones, and FinOps ROI",
    keySections: ["60s Video Briefing", "7-Stage Career Ladder", "Architectural Showcase", "FinOps & ROI Metrics", "Applied AI Lab"],
    previewBadges: ["Video Briefing", "20-Yr Timeline", "$2.8M FinOps", "Flagship Executive"],
    accentColor: "cyan",
    gradient: "from-cyan-600 to-blue-700",
    icon: "ShieldCheck",
    isPopular: true
  },
  {
    id: "t6_visionary_cto",
    name: "T6.2: Visionary CTO & AI Modernization Dossier",
    tier: "executive",
    tierLabel: "Directors, VPs & C-Suite",
    tierExperience: "15–20+ Yrs",
    subtitle: "Enterprise AI Roadmaps & M&A",
    description: "High-level transformation mandate: multi-year technology roadmap (Legacy Monolith → Data Lakehouse → Agentic AI Platform), and M&A technology due diligence scorecards.",
    designStyle: "Futuristic dark slate, glowing roadmap vectors, strategic vision cards",
    heroFeature: "Multi-year Enterprise AI & Cloud modernization roadmap with M&A scorecard",
    keySections: ["Transformation North Star", "Enterprise Modernization Roadmap", "Agentic AI Strategy", "M&A Due Diligence"],
    previewBadges: ["AI Modernization", "Transformation Map", "M&A Scorecard", "C-Suite Vision"],
    accentColor: "cyan",
    gradient: "from-cyan-500 to-teal-600",
    icon: "Sparkles"
  },
  {
    id: "t6_global_vp",
    name: "T6.3: Global VP of Engineering Command",
    tier: "executive",
    tierLabel: "Directors, VPs & C-Suite",
    tierExperience: "15–20+ Yrs",
    subtitle: "Multi-Region Org Charts & FinOps",
    description: "Global site leadership command center: 150+ engineers across US, EMEA, and APAC, follow-the-sun on-call structure, and $15M+ annual OpEx budget governance.",
    designStyle: "Command center aesthetic, interactive global site map, high-density data cards",
    heroFeature: "Interactive Global Multi-Site Map & $15M OpEx budget allocation cards",
    keySections: ["Global Org Topology", "$15M+ Budget Allocation", "Security & SOC2 / ISO Governance", "Board Alignment"],
    previewBadges: ["Global Org Map", "150+ Engineers", "$15M Budget", "SOC2 Governance"],
    accentColor: "blue",
    gradient: "from-blue-600 to-cyan-600",
    icon: "Globe"
  },
  {
    id: "t6_boardroom",
    name: "T6.4: Boardroom & Investor-Ready Dossier",
    tier: "executive",
    tierLabel: "Directors, VPs & C-Suite",
    tierExperience: "15–20+ Yrs",
    subtitle: "Executive Memo & Governance",
    description: "Premium Wall Street / McKinsey confidential executive memo format: shareholder value creation metrics, board presentation slide highlights, and regulatory governance.",
    designStyle: "Premium Wall Street / McKinsey editorial style, elegant serif headers, subtle gold rules",
    heroFeature: "Confidential Executive Memo layout with Shareholder Value ROI metrics",
    keySections: ["Executive Memo", "Value Creation Track Record", "Governance & Risk Pillars", "Board Deck Highlights", "Executive Contact"],
    previewBadges: ["McKinsey Memo", "Shareholder Value", "Board Highlights", "Wall St Editorial"],
    accentColor: "emerald",
    gradient: "from-emerald-700 to-slate-800",
    icon: "Briefcase"
  }
];

export const SAMPLE_PERSONA_PROFILES: Record<CareerTier, PersonaProfile> = {
  intern: {
    tier: "intern",
    name: "Maya Lin",
    title: "Computer Science Scholar & Full-Stack Builder",
    summary: "CS Junior at UC Berkeley (GPA 3.96, Dean's Honors). 1st Place Winner at CalHacks 2025. Obsessed with high-velocity software engineering, reactive web apps, and distributed data pipelines. Looking for Summer 2026 Software Engineering Internships.",
    location: "Berkeley, CA / Remote",
    tagline: "Building software at the intersection of developer tools and intelligent agents.",
    contact: {
      email: "maya.lin@berkeley.edu",
      github: "https://github.com/mayalin-dev",
      linkedin: "https://linkedin.com/in/mayalin-cs",
      website: "https://mayalin.devstack.bio",
      twitter: "@mayalin_codes"
    },
    academicStats: {
      university: "UC Berkeley — B.S. in Computer Science",
      graduation: "May 2026",
      gpa: "3.96 / 4.00",
      leetcodeRating: "Top 2.4% (Rating: 2,145)",
      citations: 12
    },
    statsBanner: [
      { label: "Hackathons Won", value: "3x 1st Place" },
      { label: "GitHub Commits (2025)", value: "1,420+" },
      { label: "LeetCode Solved", value: "480+ (Guardian)" },
      { label: "Target Graduation", value: "May 2026" }
    ],
    skills: [
      {
        category: "Languages & Core",
        items: ["TypeScript", "Python", "Go", "C++", "SQL", "Rust (Learning)"]
      },
      {
        category: "Frameworks & Web",
        items: ["React", "Next.js", "Node.js", "FastAPI", "Tailwind CSS", "Prisma"]
      },
      {
        category: "Systems & Cloud",
        items: ["Docker", "PostgreSQL", "Redis", "AWS S3", "Git Workflow", "Linux CLI"]
      }
    ],
    experience: [
      {
        id: "int-exp-1",
        role: "Software Engineering Intern",
        company: "Veloce Labs (YC W24)",
        location: "San Francisco, CA",
        startDate: "May 2025",
        endDate: "Aug 2025",
        highlights: [
          "Built real-time collaboration canvas syncing state across 500+ concurrent browser tabs using WebSockets and CRDTs.",
          "Cut client-side bundle size by 38% through route splitting and dynamic asset loading.",
          "Wrote end-to-end integration test suites boosting code coverage from 62% to 91%."
        ]
      },
      {
        id: "int-exp-2",
        role: "Undergraduate CS Teaching Assistant (CS 61B: Data Structures)",
        company: "UC Berkeley EECS",
        location: "Berkeley, CA",
        startDate: "Aug 2024",
        endDate: "Dec 2024",
        highlights: [
          "Led weekly discussion sections of 40 students covering balanced BSTs, graph algorithms, and asymptotic runtime analysis.",
          "Designed automated grading autograder in Python evaluating 1,200+ student lab submissions."
        ]
      }
    ],
    projects: [
      {
        id: "int-proj-1",
        title: "OmniFlow: Zero-Latency AI Canvas",
        description: "Interactive visual workspace integrating LLM node graphs with bi-directional streaming and local-first SQLite persistence.",
        technologies: ["React", "TypeScript", "FastAPI", "SQLite", "Tailwind"],
        metrics: "1st Place Winner at CalHacks 2025 (1,200+ participants)",
        link: "https://github.com/mayalin-dev/omniflow"
      },
      {
        id: "int-proj-2",
        title: "Mini-Raft: Distributed Consensus from Scratch",
        description: "Educational implementation of the Raft consensus algorithm featuring leader election, log replication, and partition healing in Go.",
        technologies: ["Go", "gRPC", "Protobuf", "Docker"],
        metrics: "Passed Jepsen-style network partition chaos tests",
        link: "https://github.com/mayalin-dev/mini-raft"
      }
    ],
    metrics: [
      { id: "im-1", label: "Hackathons Won", value: "3 Wins", description: "CalHacks, TreeHacks & LAHacks" },
      { id: "im-2", label: "GitHub Stars", value: "850+", description: "Across open-source student tools" },
      { id: "im-3", label: "LeetCode Guardian", value: "2,145", description: "Top 2.4% globally in algorithmic contests" },
      { id: "im-4", label: "Cumulative GPA", value: "3.96", description: "Dean's Honors 5 consecutive semesters" }
    ]
  },

  junior: {
    tier: "junior",
    name: "Liam Chen",
    title: "Full-Stack Product Engineer",
    summary: "Full-stack engineer with 2+ years of production experience shipping high-velocity web features, typed REST/GraphQL APIs, and resilient PostgreSQL data models. Known for meticulous UI polish, strict TypeScript safety, and proactive team collaboration.",
    location: "Austin, TX / Remote",
    tagline: "Bridging pixel-perfect UI execution with resilient distributed backends.",
    contact: {
      email: "liam.chen@devstack.bio",
      github: "https://github.com/liamchen-eng",
      linkedin: "https://linkedin.com/in/liamchen-eng",
      website: "https://liamchen.devstack.bio",
      twitter: "@liamchen_dev"
    },
    statsBanner: [
      { label: "Production PRs Shipped", value: "240+" },
      { label: "Test Coverage Delivered", value: "88%" },
      { label: "P95 Page Load Time", value: "< 240ms" },
      { label: "Years in Production", value: "2.5 Yrs" }
    ],
    skills: [
      {
        category: "Frontend Craft",
        items: ["TypeScript", "React 19", "Next.js", "Tailwind CSS", "Framer Motion", "Shadcn UI"]
      },
      {
        category: "Backend & Storage",
        items: ["Node.js", "Go", "PostgreSQL", "Redis", "Prisma ORM", "GraphQL", "REST APIs"]
      },
      {
        category: "Testing & DevOps",
        items: ["Vitest", "Playwright", "Docker", "GitHub Actions CI/CD", "Vercel", "Datadog"]
      }
    ],
    experience: [
      {
        id: "jr-exp-1",
        role: "Software Engineer I & II",
        company: "Synthetix Cloud (Series A)",
        location: "Austin, TX",
        startDate: "2023",
        endDate: "Present",
        highlights: [
          "Owned the core billing & subscription checkout flow with Stripe, reducing customer payment churn by 14%.",
          "Engineered reusable design-system component library adopted across 4 internal web applications.",
          "Authored 120+ unit and end-to-end integration tests preventing 3 critical production regressions."
        ]
      },
      {
        id: "jr-exp-2",
        role: "Associate Frontend Developer",
        company: "PixelForge Media",
        location: "New York, NY",
        startDate: "2022",
        endDate: "2023",
        highlights: [
          "Developed high-traffic responsive marketing and customer onboarding portals serving 250k monthly active visitors.",
          "Optimized Core Web Vitals to achieve all-green Lighthouse scores (LCP 1.1s, CLS 0.01)."
        ]
      }
    ],
    projects: [
      {
        id: "jr-proj-1",
        title: "BentoKit: Linear-Style Component Engine",
        description: "Open-source animated Bento card grid kit built on Tailwind CSS and Framer Motion with fluid keyboard accessibility.",
        technologies: ["React", "TypeScript", "Tailwind", "Radix UI"],
        metrics: "1,200+ GitHub Stars & 14k npm monthly downloads",
        link: "https://github.com/liamchen-eng/bentokit"
      },
      {
        id: "jr-proj-2",
        title: "PulseMetrics: API Latency Inspector",
        description: "Lightweight developer dashboard for profiling microservice request waterfalls and slow SQL query bottlenecks.",
        technologies: ["Next.js", "Go", "PostgreSQL", "Tailwind"],
        metrics: "Identified 300ms bottleneck in SaaS auth loop",
        link: "https://github.com/liamchen-eng/pulse-metrics"
      }
    ],
    metrics: [
      { id: "jm-1", label: "Production PRs Merged", value: "240+", description: "100% on-time sprint velocity" },
      { id: "jm-2", label: "Lighthouse Performance", value: "99/100", description: "Core Web Vitals green across all pages" },
      { id: "jm-3", label: "Payment Churn Reduced", value: "-14%", description: "Stripe dynamic checkout redesign" },
      { id: "jm-4", label: "NPM Package Downloads", value: "14k/mo", description: "BentoKit open-source UI ecosystem" }
    ]
  },

  senior: {
    tier: "senior",
    name: "Sarah Jenkins",
    title: "Senior Distributed Systems & Infrastructure Engineer",
    summary: "Senior Systems Engineer with 7+ years of experience building resilient, low-latency distributed architectures, event-driven pipelines, and high-concurrency cloud backends. Architected systems processing 80k+ QPS with 99.99% availability while reducing cloud OpEx by $1.2M annually.",
    location: "Seattle, WA / Remote",
    tagline: "Building resilient distributed systems where microseconds matter and downtime is unacceptable.",
    contact: {
      email: "sarah.jenkins@devstack.bio",
      github: "https://github.com/sjenkins-systems",
      linkedin: "https://linkedin.com/in/sarahjenkins-eng",
      website: "https://sarahjenkins.devstack.bio",
      twitter: "@sjenkins_scale"
    },
    statsBanner: [
      { label: "Peak QPS Handled", value: "85,000 QPS" },
      { label: "P99 Latency Reduction", value: "48ms → 8ms" },
      { label: "Annual Cloud Savings", value: "$1.2M" },
      { label: "Production Uptime", value: "99.995%" }
    ],
    skills: [
      {
        category: "Distributed Systems & Languages",
        items: ["Go", "Rust", "Java", "C++", "Distributed Consensus (Raft)", "gRPC / Protobuf"]
      },
      {
        category: "Storage & Event Streaming",
        items: ["Apache Kafka", "ClickHouse", "PostgreSQL (Sharded)", "Redis Cluster", "Cassandra"]
      },
      {
        category: "Cloud, SRE & Observability",
        items: ["Kubernetes", "AWS (EKS, Aurora, SQS)", "Terraform", "OpenTelemetry", "Prometheus", "eBPF"]
      }
    ],
    experience: [
      {
        id: "sr-exp-1",
        role: "Senior Distributed Systems Engineer (Tech Lead)",
        company: "Stripe / HyperScale Core",
        location: "Seattle, WA",
        startDate: "2021",
        endDate: "Present",
        highlights: [
          "Led architectural redesign of global transaction routing mesh handling 85,000 peak QPS with 99.995% availability.",
          "Cut P99 routing latency from 48ms to 8ms by introducing Rust-based connection pooling and edge proxying.",
          "Mentored 6 junior and mid-level engineers, resulting in 3 promotions to senior roles."
        ]
      },
      {
        id: "sr-exp-2",
        role: "Software Engineer III (Backend)",
        company: "Datadog / Core Telemetry",
        location: "New York, NY",
        startDate: "2018",
        endDate: "2021",
        highlights: [
          "Engineered distributed ingestion pipeline processing 2.4B time-series telemetry events per day using Kafka and Go.",
          "Spearheaded cloud cost optimization program saving $1.2M annually via spot fleet scheduling and disk compaction."
        ]
      }
    ],
    projects: [
      {
        id: "sr-proj-1",
        title: "RFC-042: Multi-Region Event Mesh",
        description: "Comprehensive Architectural Decision Record and RFC detailing multi-region active-active database replication trade-offs.",
        technologies: ["Go", "Kafka", "PostgreSQL", "AWS"],
        metrics: "Zero data loss failover under synthetic partition test",
        link: "https://github.com/sjenkins-systems/rfc-event-mesh"
      },
      {
        id: "sr-proj-2",
        title: "K-Raft: Low-Latency Distributed KV Store",
        description: "High-performance embeddable key-value engine written in Rust featuring log compaction, vectorized reads, and Raft consensus.",
        technologies: ["Rust", "Raft", "RocksDB", "gRPC"],
        metrics: "Sustains 140,000 writes/sec with sub-millisecond p99",
        link: "https://github.com/sjenkins-systems/k-raft"
      }
    ],
    metrics: [
      { id: "sm-1", label: "Peak Ingestion Load", value: "85k QPS", description: "Zero drop rate during Black Friday traffic spikes" },
      { id: "sm-2", label: "P99 Latency Drop", value: "-83%", description: "From 48ms down to 8ms across edge mesh" },
      { id: "sm-3", label: "Infra OpEx Savings", value: "$1.2M/yr", description: "Validated multi-cloud compute optimization" },
      { id: "sm-4", label: "Engineers Mentored", value: "6 Engs", description: "3 promoted directly to Senior Engineer" }
    ]
  },

  principal: {
    tier: "principal",
    name: "Dr. Marcus Vance",
    title: "Principal Enterprise Architect & Fellow",
    summary: "Principal Technologist with 14+ years defining cross-organizational enterprise architectures, multi-cloud topologies, and technical strategy. Author of 3 approved US patents in distributed consensus and real-time synchronization. Chair of the Architectural Review Board (ARB) overseeing 220+ engineers.",
    location: "San Francisco, CA",
    tagline: "Orchestrating technical strategy, architectural governance, and cross-organizational leverage.",
    contact: {
      email: "marcus.vance@devstack.bio",
      github: "https://github.com/mvance-architect",
      linkedin: "https://linkedin.com/in/marcus-vance-fellow",
      website: "https://marcusvance.devstack.bio",
      twitter: "@mvance_arch"
    },
    patents: [
      { number: "US 11,492,048 B2", title: "Distributed Consensus with Dynamic Quorum Adaptation", year: "2024", status: "Approved" },
      { number: "US 10,884,912 B1", title: "Cross-Cloud State Synchronization via Conflict-Free Cryptographic Hashes", year: "2022", status: "Approved" },
      { number: "US 10,412,189 B2", title: "Autonomous Edge Topology Routing with Zero-Trust Verification", year: "2020", status: "Approved" }
    ],
    statsBanner: [
      { label: "Approved US Patents", value: "3 Patents" },
      { label: "Cross-Cloud Topologies", value: "AWS + Azure" },
      { label: "Keynote Addresses", value: "8 Keynotes" },
      { label: "Engineers Influenced", value: "220+ Engs" }
    ],
    skills: [
      {
        category: "Enterprise Architecture & Strategy",
        items: ["Multi-Cloud Topologies", "Architectural Governance (ARB)", "Zero-Trust Security", "FinOps $5M+ Optimization"]
      },
      {
        category: "Distributed Platforms & Scale",
        items: ["Event-Driven Mesh", "Kafka & Pulsar", "Kubernetes Fleet Ops", "Global Database Topologies"]
      },
      {
        category: "Thought Leadership & Standards",
        items: ["Conference Keynotes", "IEEE & ACM Publications", "Technical RFC Vault", "Patent Inventions"]
      }
    ],
    experience: [
      {
        id: "pr-exp-1",
        role: "Principal Infrastructure Architect",
        company: "NextGen Cloud Platforms",
        location: "San Francisco, CA",
        startDate: "2020",
        endDate: "Present",
        highlights: [
          "Chaired the Architectural Review Board (ARB), standardizing tech stack choices across 6 engineering directorates and 220+ engineers.",
          "Architected zero-downtime multi-cloud failover between AWS and Azure, reducing enterprise recovery time (RTO) from 4 hours to 90 seconds.",
          "Reduced total cloud compute spend by $3.4M annually through unified FinOps telemetry and spot compute automation."
        ]
      },
      {
        id: "pr-exp-2",
        role: "Staff Systems Architect",
        company: "OmniGrid Global",
        location: "Palo Alto, CA",
        startDate: "2015",
        endDate: "2020",
        highlights: [
          "Spearheaded company-wide transition from monolithic Java systems to lightweight Go microservices mesh.",
          "Authored 14 core RFCs establishing security, telemetry, and distributed tracing standards."
        ]
      }
    ],
    projects: [
      {
        id: "pr-proj-1",
        title: "Enterprise Multi-Cloud Topology Visualizer",
        description: "Interactive visual inspection framework modeling cross-cloud traffic flows, IAM trust boundaries, and egress bottlenecks.",
        technologies: ["TypeScript", "SVG Canvas", "AWS CloudFormation", "Terraform"],
        metrics: "Adopted as gold-standard reference topology by enterprise customers",
        link: "https://github.com/mvance-architect/topology-mesh"
      },
      {
        id: "pr-proj-2",
        title: "Adaptive Quorum Consensus Engine",
        description: "Implementation of patented dynamic quorum algorithm maintaining read-write availability during asymmetric network splits.",
        technologies: ["Rust", "Raft", "Distributed Consensus"],
        metrics: "Zero split-brain occurrences under 10,000 simulated chaos rounds",
        link: "https://github.com/mvance-architect/adaptive-quorum"
      }
    ],
    metrics: [
      { id: "pm-1", label: "Approved US Patents", value: "3 Patents", description: "Distributed consensus & cryptographic state sync" },
      { id: "pm-2", label: "Cloud OpEx Reduced", value: "$3.4M/yr", description: "Autonomous FinOps resource optimization" },
      { id: "pm-3", label: "Failover RTO", value: "90 Secs", description: "Down from 4 hours across multi-cloud failover" },
      { id: "pm-4", label: "Engineers Governed", value: "220+", description: "ARB leadership across 6 engineering organizations" }
    ]
  },

  manager: {
    tier: "manager",
    name: "Elena Rostova",
    title: "Senior Engineering Manager",
    summary: "Engineering leader with 10+ years of experience building, scaling, and nurturing high-performing software organizations. Scaled teams from 6 to 32 engineers across 4 cross-functional pods with 100% voluntary retention over 3 consecutive years. DORA metrics champion delivering 12+ daily production releases.",
    location: "New York, NY / Remote",
    tagline: "Empowering world-class engineers to do their career-defining work with psychological safety and delivery cadence.",
    contact: {
      email: "elena.rostova@devstack.bio",
      github: "https://github.com/erostova-lead",
      linkedin: "https://linkedin.com/in/elena-rostova-em",
      website: "https://elenarostova.devstack.bio",
      twitter: "@elena_englead"
    },
    doraMetrics: {
      deploymentFreq: "12 / Day (Elite)",
      leadTime: "< 2 Hours",
      failureRate: "0.8%",
      mttr: "14 Minutes"
    },
    orgScaleStats: {
      headcount: "32 Engineers",
      teams: "4 Agile Pods",
      budget: "$6.8M Annual",
      retention: "100% (3 Yrs)"
    },
    statsBanner: [
      { label: "Voluntary Retention", value: "100% (3 Yrs)" },
      { label: "Direct Reports Promoted", value: "9 Promoted" },
      { label: "DORA Deployment Freq", value: "12x / Day" },
      { label: "Team Health Score", value: "4.9 / 5.0" }
    ],
    skills: [
      {
        category: "People Leadership & Culture",
        items: ["1-on-1 Coaching Frameworks", "Career Ladder Matrix", "Psychological Safety", "Retention & Compensation Strategy"]
      },
      {
        category: "Operational Excellence & DORA",
        items: ["DORA Metrics Optimization", "Agile Pod Structure", "Incident Retrospectives (Blameless)", "CI/CD Pipeline Cadence"]
      },
      {
        category: "Organizational Scaling",
        items: ["Hiring Funnel & Rubrics", "Onboarding Playbooks (First 30-60-90)", "Cross-Functional Pod Alignment", "Budget Management"]
      }
    ],
    experience: [
      {
        id: "em-exp-1",
        role: "Senior Engineering Manager",
        company: "FinFlow Technologies",
        location: "New York, NY",
        startDate: "2021",
        endDate: "Present",
        highlights: [
          "Scaled engineering organization from 6 to 32 engineers across 4 autonomous pods, maintaining 100% voluntary retention across 3 years.",
          "Transformed deployment cadence from monthly risky releases to 12+ daily production deployments with change failure rate < 1%.",
          "Mentored and promoted 9 engineers (4 promoted to Senior, 2 to Staff, 3 to Engineering Lead roles)."
        ]
      },
      {
        id: "em-exp-2",
        role: "Engineering Manager",
        company: "CloudVibe Software",
        location: "Boston, MA",
        startDate: "2018",
        endDate: "2021",
        highlights: [
          "Led team of 10 backend engineers maintaining core payments gateway processing $450M in annual transactions.",
          "Instituted blameless post-mortem culture reducing repeat incident recurrence by 72%."
        ]
      }
    ],
    projects: [
      {
        id: "em-proj-1",
        title: "Engineering Career Ladder & Rubric (Open Source)",
        description: "Comprehensive competency framework defining expectations across IC1 through IC6 and EM1 through EM3 with concrete behavior examples.",
        technologies: ["People Ops", "Competency Matrix", "Career Ladders"],
        metrics: "Adopted by 14 startup engineering organizations",
        link: "https://github.com/erostova-lead/career-ladders"
      },
      {
        id: "em-proj-2",
        title: "DORA Operational Metrics Dashboard",
        description: "Automated telemetry tracker aggregating GitHub PR lifecycle, ArgoCD deploys, and PagerDuty alerts into real-time health indicators.",
        technologies: ["Next.js", "GitHub API", "Datadog", "TypeScript"],
        metrics: "Drove lead time for changes from 4 days to 90 minutes",
        link: "https://github.com/erostova-lead/dora-dashboard"
      }
    ],
    metrics: [
      { id: "emm-1", label: "Voluntary Retention", value: "100%", description: "Zero regrettable attrition across 3 consecutive years" },
      { id: "emm-2", label: "Engineers Promoted", value: "9 Promoted", description: "Clear career ladder progression track record" },
      { id: "emm-3", label: "Daily Deployments", value: "12x / Day", description: "Elite DORA tier transformation from 1x/month" },
      { id: "emm-4", label: "Mean Time to Recover", value: "14 Mins", description: "Automated rollback pipelines and blameless retros" }
    ]
  },

  executive: {
    tier: "executive",
    name: "Pavan Kumar Ghanta",
    title: "Vice President of Engineering & Technology Executive",
    summary: "Executive Technology Leader with 20+ years of global experience directing multi-site engineering organizations (150+ engineers across US, EMEA, and APAC), multi-million dollar OpEx budgets ($18M+), and enterprise cloud & AI transformations. Trusted partner to CEO, Board of Directors, and Fortune 500 enterprise customers.",
    location: "San Jose, CA / Dallas, TX",
    tagline: "Aligning deep technical vision with enterprise growth, P&L governance, and global organizational scale.",
    contact: {
      email: "pavan.ghanta@devstack.bio",
      github: "https://github.com/ghanta-pavan",
      linkedin: "https://linkedin.com/in/pavan-kumar-ghanta",
      website: "https://pavankumarghanta.devstack.bio",
      twitter: "@pavan_ghanta"
    },
    orgScaleStats: {
      headcount: "150+ Engineers",
      teams: "14 Engineering Teams",
      budget: "$18.5M Annual OpEx",
      retention: "96.4% Global Retention"
    },
    statsBanner: [
      { label: "Career Span", value: "20+ Years" },
      { label: "Global Headcount", value: "150+ Engineers" },
      { label: "Annual OpEx Budget", value: "$18.5M" },
      { label: "FinOps Enterprise Savings", value: "$2.8M/yr" }
    ],
    skills: [
      {
        category: "Executive Leadership & Governance",
        items: ["Multi-Million P&L / Budget Management", "Board of Directors Reporting", "Global Site Leadership (US, EMEA, APAC)", "M&A Tech Due Diligence"]
      },
      {
        category: "Enterprise Cloud & AI Transformation",
        items: ["Agentic AI Modernization", "Multi-Cloud Modernization (AWS, Azure)", "Enterprise Security & SOC2 / ISO 27001", "FinOps / TCO Reduction"]
      },
      {
        category: "Organizational Strategy",
        items: ["0-to-150+ Org Scaling", "Engineering Succession Planning", "Culture & DEI Strategy", "Vendor & Partner Ecosystem"]
      }
    ],
    experience: [
      {
        id: "ex-exp-1",
        role: "Vice President of Engineering",
        company: "Global Enterprise Cloud Solutions",
        location: "San Jose, CA",
        startDate: "2020",
        endDate: "Present",
        highlights: [
          "Direct global engineering organization of 150+ engineers, product managers, and architects across 3 continents with $18.5M annual OpEx budget.",
          "Spearheaded enterprise AI modernization initiative integrating GenAI agentic workflows, boosting developer velocity by 28%.",
          "Presented quarterly technology governance briefings to the Board of Directors with 100% audit compliance."
        ]
      },
      {
        id: "ex-exp-2",
        role: "Senior Director of Engineering",
        company: "ScaleTech Platforms",
        location: "Dallas, TX",
        startDate: "2015",
        endDate: "2020",
        highlights: [
          "Scaled engineering teams from 25 to 90 engineers while reducing annual infrastructure spend by $2.8M through strategic cloud consolidation.",
          "Delivered enterprise SLA of 99.99% across mission-critical SaaS processing $2.5B in annualized client revenue."
        ]
      }
    ],
    projects: [
      {
        id: "ex-proj-1",
        title: "Enterprise AI Modernization & Agentic Platform",
        description: "Multi-year transformation strategy transitioning legacy monolith data pipelines into an autonomous agentic AI copilot ecosystem.",
        technologies: ["Agentic AI", "AWS", "Kubernetes", "Data Lakehouse"],
        metrics: "Accelerated engineering time-to-market by 35%",
        link: "https://github.com/ghanta-pavan/ai-modernization"
      },
      {
        id: "ex-proj-2",
        title: "Global 24/7 Follow-The-Sun Engineering Mesh",
        description: "Organizational topology and operational runbook coordinating multi-time-zone development and incident response across US, EMEA, and APAC.",
        technologies: ["Global Ops", "SOC2", "ISO 27001", "FinOps"],
        metrics: "Sustained 99.99% uptime with MTTR under 12 minutes",
        link: "https://github.com/ghanta-pavan/global-mesh"
      }
    ],
    metrics: [
      { id: "exm-1", label: "Global Organization", value: "150+ Engs", description: "Multi-site engineering teams across US, EMEA, and APAC" },
      { id: "exm-2", label: "OpEx Budget Governed", value: "$18.5M", description: "P&L governance, vendor negotiation, and headcount planning" },
      { id: "exm-3", label: "FinOps Annual Savings", value: "$2.8M/yr", description: "Consolidated enterprise cloud and licensing footprint" },
      { id: "exm-4", label: "Enterprise Uptime SLA", value: "99.99%", description: "Zero major breaches across 5 consecutive operating years" }
    ]
  }
};

export function getTemplateById(id: string): TemplateDefinition | undefined {
  return TEMPLATES_CATALOG.find((t) => t.id === id);
}

export function getTemplatesByTier(tier: CareerTier): TemplateDefinition[] {
  return TEMPLATES_CATALOG.filter((t) => t.tier === tier);
}

export function getSampleProfileByTier(tier: CareerTier): PersonaProfile {
  return SAMPLE_PERSONA_PROFILES[tier] || SAMPLE_PERSONA_PROFILES.senior;
}
