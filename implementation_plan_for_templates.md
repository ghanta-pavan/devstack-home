# Personal Webpage Multi-Template Suite (24 Career-Stage Templates)

A modular, enterprise-grade personal webpage template system designed to support software engineering professionals across their entire career trajectory: **Interns**, **Junior Engineers**, **Mid to Senior Engineers**, **Principal / Staff+ Engineers**, **Engineering Managers**, and **Directors / VPs / C-Suite**.

The solution provides **4 distinct, highly specialized templates per career tier** (24 templates total), unified under a shared design system, composable component architecture, and an interactive **Template Showcase / Explorer**.

---

## User Review Required

> [!IMPORTANT]
> **Coexistence with Current Portfolio**: The current repository houses Pavan Kumar Ghanta's 20-year Executive Portfolio (`App.tsx`). Under this plan:
> 1. The existing portfolio will be preserved and upgraded into **Executive Template 1 (T6.1: Enterprise Executive Briefing)**.
> 2. A global **Template Switcher / Explorer Bar** will be introduced, allowing instant live switching between all 24 templates while preserving the option to build/lock any single template as the production root.
> 3. Does this dual mode (interactive gallery + standalone exportable template targets) match your vision?

> [!TIP]
> **Data Layer Decoupling**: Each career persona will have a dedicated typed sample profile (`internProfile.ts`, `juniorProfile.ts`, etc.). Any engineer can simply swap out their profile JSON/TypeScript file to populate any template in their category.

---

## Persona & Template Taxonomy (24 Distinct Designs)

```
Career Trajectory & Template Matrix:
├── 1. Interns (Curiosity, Rapid Learning, Projects)
│   ├── T1.1: Interactive Demo & Project Hub (Showcase & Live Embeds)
│   ├── T1.2: Terminal / Retro Hacker (CLI & Interactive Shell)
│   ├── T1.3: Academic & Capstone Scholar (LaTeX / Research Paper Aesthetic)
│   └── T1.4: Build-in-Public & Learning Journey (Timeline & Growth Narrative)
│
├── 2. Junior Engineers (Clean Code, Production Delivery, Collaboration)
│   ├── T2.1: Modern Bento-Grid Builder (Apple / Linear-style Polish)
│   ├── T2.2: Full-Stack Product Craftsman (API & Database Specs, Case Studies)
│   ├── T2.3: Open-Source & Community Driver (PR Highlights, Contributions, Talks)
│   └── T2.4: Scannable Fast-Track Resume (High-Density, 1-Click Recruiter Drawer)
│
├── 3. Mid to Senior Engineers (Scalability, Ownership, Business Impact)
│   ├── T3.1: Deep-Dive System Design (Architecture, Trade-offs & Post-Mortems)
│   ├── T3.2: High-Performance Systems Engineer (Latency Curves, SRE & Chaos Metrics)
│   ├── T3.3: Product Engineer & Growth Multiplier (A/B Tests, UX Polish, Revenue Impact)
│   └── T3.4: Tech Lead & Standards Advocate (ADR/RFC Vault & Mentorship Impact)
│
├── 4. Principal / Staff+ Engineers (Architectural Leverage, Strategy, Cross-Org Impact)
│   ├── T4.1: Enterprise Architect & RFC Vault (Cross-Cloud Topologies & Governance)
│   ├── T4.2: Thought Leader & Tech Strategist (Keynotes, Whitepapers & Patents)
│   ├── T4.3: Staff Multiplier & Culture Transformer (Mentorship Tree & Org Leverage)
│   └── T4.4: Interactive Distributed Systems Explorer (Visual Algorithmic Simulations)
│
├── 5. Engineering Managers (People Leadership, Execution, Scaling, Team Health)
│   ├── T5.1: People & Culture Builder (Team Retention, 1-on-1s, Career Ladders)
│   ├── T5.2: Delivery & DORA Execution Engine (Velocity, Incident Mgmt, Predictability)
│   ├── T5.3: Org Scaling & Team Architect (0-to-50+ Scaling, Hiring Playbooks)
│   └── T5.4: Bridge: Technical Strategy & People Leadership (Dual-Perspective Matrix)
│
└── 6. Directors, VPs & Above (Enterprise Transformation, P&L, Board Governance)
    ├── T6.1: Enterprise Executive Briefing (Current Flagship: Video Pitch + Dual Lens)
    ├── T6.2: Visionary CTO & AI Modernization Dossier (Enterprise AI Roadmaps & M&A)
    ├── T6.3: Global VP of Engineering Command (Multi-Region Org Charts & FinOps)
    └── T6.4: Boardroom & Investor-Ready Dossier (Executive Memo & Governance)
```

---

## Detailed Template Breakdown

### Tier 1: Interns (0 Years / Students / Bootcamps / Switchers)
*Target Audience: University Recruiters, Internship Hiring Managers, Startup Founders.*
*Evaluation Signals: Genuine passion, coding velocity, problem-solving, curiosity, hackathon grit.*

1. **T1.1: The Interactive Demo & Project Hub**
   - **Hero**: Energetic intro, university/major banner, target graduation date, social links.
   - **Key Feature**: Interactive project cards with live embedded iframes/screen recordings, GitHub star/commit counters, and "Try Live Demo" modal.
   - **Sections**: Featured Projects, Hackathons Won, Core Skills (Languages/Frameworks), Coursework Highlights, Contact / Hire Me CTA.
   - **Design Style**: Vibrant, playful modern gradients, rounded cards, micro-interactions.

2. **T1.2: The Terminal / Retro Hacker**
   - **Hero**: Interactive simulated Unix shell (`guest@portfolio:~$ `) with blinking cursor.
   - **Key Feature**: Executable commands: `cat about.txt`, `skills --all`, `run project-1 --demo`, `cat resume.pdf`. Includes auto-complete and keyboard navigation.
   - **Sections**: Virtual CLI terminal window, quick-command cheat sheet, fallback GUI drawer for mobile/non-technical recruiters.
   - **Design Style**: Monospace typography (JetBrains Mono / Fira Code), CRT phosphor glow, dark theme with green/amber accents.

3. **T1.3: The Academic & Capstone Scholar**
   - **Hero**: Clean Swiss editorial layout, academic pedigree, GPA/Dean's List honours, research lab affiliation.
   - **Key Feature**: Research paper abstracts with DOI/arXiv badges, downloadable capstone report PDF, algorithmic problem-solving stats (LeetCode/Codeforces rating badges).
   - **Sections**: Academic Publications/Preprints, Capstone Projects, CS Fundamentals Matrix, Teaching Assistant / Tutoring history.
   - **Design Style**: High-contrast serif headings, muted monochrome palette, paper-like borders.

4. **T1.4: The Build-in-Public & Learning Journey**
   - **Hero**: Narrative storyteller banner: "From Day 1 to Shipping Code".
   - **Key Feature**: Chronological learning timeline ("Month 1: Learned React → Month 3: Deployed first Postgres API → Month 6: Won 48h Hackathon").
   - **Sections**: Weekly Dev Logs / Micro-blogs, "What I am building right now", Project Gallery, Reading List, Mentorship Gratitude.
   - **Design Style**: Warm editorial tones, timeline connectors, informal conversational tone.

---

### Tier 2: Junior Engineers (1–3 Years Experience)
*Target Audience: Engineering Screeners, Tech Leads, Junior Hiring Managers.*
*Evaluation Signals: Code maintainability, unit testing, Git workflow, production readiness, team collaboration.*

1. **T2.1: The Modern Bento-Grid Builder**
   - **Hero**: Minimalist bento-box header with dynamic status badge ("🟢 Shipping features at [Company]").
   - **Key Feature**: Asymmetric Bento grid featuring: Shipped feature highlight, Tech stack wheel, Code snippet sandbox, CI/CD pipeline showcase, and Spotify/Reading widget.
   - **Sections**: Bento Grid Overview, Production Contributions, Code Quality & Testing Philosophy, Recommendations from Seniors.
   - **Design Style**: Linear/Raycast dark-mode aesthetic, 1px frosted borders, subtle glow effects.

2. **T2.2: The Full-Stack Product Craftsman**
   - **Hero**: Product-oriented engineer positioning: "Bridging UI polish with resilient API backends".
   - **Key Feature**: 3 Deep-dive product case studies with split view: Frontend UI showcase + Backend architecture diagram (REST/GraphQL endpoints, database ERD).
   - **Sections**: End-to-end Case Studies, Interactive Schema / API Explorer, Production Incident Handled ("What I learned"), Tooling Matrix.
   - **Design Style**: Clean modern SaaS look, tabbed code snippets, interactive schema previews.

3. **T2.3: The Open-Source & Community Contributor**
   - **Hero**: GitHub contribution heatmap banner, OSS contributor stats.
   - **Key Feature**: Interactive Pull Request showcase (PR title, merged badge, lines changed, problem solved, maintainer praise).
   - **Sections**: Open-Source Repositories, Technical Blog Posts / Documentation written, Conference/Meetup lightning talks, Bug Bounty / Security fixes.
   - **Design Style**: Developer-first aesthetic, markdown-rendered blog excerpts, GitHub color accents.

4. **T2.4: The Scannable Fast-Track Resume Site**
   - **Hero**: High-efficiency executive summary card with 1-click "Copy Recruiter Packet" (Markdown bio + PDF links).
   - **Key Feature**: Filterable experience table (filter by React, Node, Python, AWS), floating fast-screen drawer, instant PDF resume viewer.
   - **Sections**: Scannable Experience Timeline, Core Competencies with proficiency levels, Education & Certifications, Quick Contact modal.
   - **Design Style**: Clean corporate minimalism, high typography readability, zero-fluff layout.

---

### Tier 3: Mid to Senior Engineers (4–8+ Years Experience)
*Target Audience: Senior Engineering Managers, Principal Engineers, Staff Bar-Raisers.*
*Evaluation Signals: End-to-end system ownership, distributed architecture, scalability, business impact metrics, trade-off reasoning.*

1. **T3.1: The Deep-Dive System Design Portfolio**
   - **Hero**: Systems Architect positioning, high-impact career metric cards (e.g., "$12M saved", "99.99% uptime", "100k QPS").
   - **Key Feature**: Comprehensive System Architecture Case Studies using the structured RFC format: *Problem Context → Constraints → Architectural Decisions & Alternatives Considered → Trade-offs → Quantifiable Impact*.
   - **Sections**: Interactive Architecture Cards, Technical Decisions Log (ADRs), Production Post-Mortems & Resilience, Mentorship & Tech Leading.
   - **Design Style**: Deep navy/slate technical theme, architecture flowchart diagrams, collapsible technical accordions.

2. **T3.2: The High-Performance & Distributed Systems Specialist**
   - **Hero**: Distributed Systems & Infrastructure focus: "P99 Latency Reduction • Distributed Consensus • High-Throughput Pipelines".
   - **Key Feature**: Interactive benchmark charts (p50/p95/p99 latency graphs, throughput under load, memory leak debugging case study).
   - **Sections**: Systems Case Studies, Chaos Engineering & Failover Strategies, Infrastructure Stack (K8s, Kafka, eBPF, Rust/Go), Open-Source Tooling.
   - **Design Style**: Cyber-slate, telemetry dashboard aesthetic, metric dials, sparklines.

3. **T3.3: The Product Engineer & Growth Multiplier**
   - **Hero**: Cross-functional powerhouse: "Engineering with extreme product intuition".
   - **Key Feature**: Feature-to-Revenue impact case studies: A/B test experiments, conversion rate lifts (+34%), customer retention gains, user feedback quotes.
   - **Sections**: Product Case Studies, Design System & Frontend Performance, Growth Experiments & Data Analytics, Tech Stack.
   - **Design Style**: Consumer-grade polish, Apple-like typography, split screen showcasing UI alongside data analytics graphs.

4. **T3.4: The Tech Lead & Architecture Mentor**
   - **Hero**: Dual focus: Architectural Excellence + Team Multiplier.
   - **Key Feature**: RFC & ADR Library viewer (browse actual sanitized design documents), Engineering Standards established, Junior Mentorship outcomes (engineers promoted).
   - **Sections**: Architectural Ownership, RFC Library, Team Practices & Code Review Guidelines, Cross-Team Delivery Milestones.
   - **Design Style**: Authoritative editorial design, typography-heavy, document-preview drawers.

---

### Tier 4: Principal / Staff+ Engineers (8–15+ Years Experience)
*Target Audience: VP of Engineering, CTO, Distinguished Engineers, Staff Promotion Committees.*
*Evaluation Signals: Architectural governance, company-wide technical strategy, cross-organizational leverage, industry influence, patents.*

1. **T4.1: The Enterprise Architect & RFC Vault**
   - **Hero**: Multi-cloud enterprise vision, 10+ year systems evolution timeline.
   - **Key Feature**: Interactive Multi-Cloud Topology Viewer (AWS / Azure / On-Premise hybrid data flow), Architectural Governance runbooks, RACI matrices.
   - **Sections**: Macro-Architecture Topologies, Cross-Org RFCs, FinOps / Cloud Cost Optimization, Security & Zero-Trust Governance.
   - **Design Style**: Executive enterprise theme, high-fidelity network topology graphics, interactive inspection tooltips.

2. **T4.2: The Industry Thought Leader & Tech Strategist**
   - **Hero**: Global keynote speaker & technical strategist profile.
   - **Key Feature**: Featured Keynote Talks with embedded video players, Whitepapers & Technical Book publications, Patent Portfolio with official patent numbers and diagrams.
   - **Sections**: Technical Strategy Essays, Keynote Presentations, Patent & Standards Registry, Advisory & Board Consultations.
   - **Design Style**: Monocle/New Yorker-tier intellectual minimalism, rich typography, publication list layout.

3. **T4.3: The Staff Multiplier & Culture Transformer**
   - **Hero**: "Scaling Engineering Organizations Through Architectural Leverage".
   - **Key Feature**: Interactive "Mentorship & Influence Tree" (visualizing impact across 50+ engineers and 6 teams), Engineering Philosophy manifesto, Architectural Review Board (ARB) framework.
   - **Sections**: Organizational Influence Map, Culture & Engineering Principles, Cross-Team Standardization Initiatives, Career Progression Frameworks.
   - **Design Style**: Clean tree diagrams, philosophical quote highlights, structured framework cards.

4. **T4.4: The Interactive Distributed Systems Explorer**
   - **Hero**: Deep-tech specialist showcase.
   - **Key Feature**: Live interactive canvas visualizers (e.g., Raft consensus simulator, consistent hashing ring visualizer, rate-limiting leaky bucket animation).
   - **Sections**: Interactive Simulations, Deep-Tech Whitepapers, Systems Architecture Case Studies, Technical Consulting CTA.
   - **Design Style**: Interactive canvas/SVG visualizations, dark obsidian theme, terminal-style footnotes.

---

### Tier 5: Engineering Managers (EM / Sr. EM)
*Target Audience: Directors of Engineering, VP of Engineering, Chief People Officers, Executive Recruiters.*
*Evaluation Signals: People development, retention, high-performing team culture, agile delivery cadence, DORA metrics, stakeholder management.*

1. **T5.1: The People & Culture Builder**
   - **Hero**: Servant leadership philosophy: "Empowering engineers to build their career-defining work".
   - **Key Feature**: Team Health & People Metrics (100% retention over 3 yrs, 8 direct reports promoted, 4.8/5 team satisfaction score), 1-on-1 Framework, Career Growth Pathways.
   - **Sections**: Leadership Philosophy, Team Growth & Retention Track Record, Performance Management & Coaching Frameworks, Testimonials from Direct Reports.
   - **Design Style**: Warm human-centric tones, testimonial carousels, coaching journey cards.

2. **T5.2: The Delivery & DORA Execution Engine**
   - **Hero**: Operational excellence leader: "Transforming chaos into predictable, high-cadence delivery".
   - **Key Feature**: Interactive DORA Metrics Dashboard before/after leadership intervention (Deployment Frequency: 1/mo → 12/day, Change Failure Rate: 18% → 1.2%, MTTR: 6h → 14m).
   - **Sections**: Delivery Track Record, Agile/Scrum Transformation Case Studies, Incident Management & Post-Mortem Culture, Cross-Functional Alignment (Product/Design/Eng).
   - **Design Style**: Metric-driven dashboard layout, status chips, timeline milestones.

3. **T5.3: The Org Scaling & Team Architect**
   - **Hero**: Hyper-growth engineering leader: "Scaling teams from 5 to 50+ while protecting culture".
   - **Key Feature**: Org Scaling Visualizer (timeline of team expansion, hiring funnels, diversity & inclusion recruitment metrics, engineering onboarding playbook).
   - **Sections**: Scaling Case Studies, Interview & Hiring Playbook, Budget & Vendor Management, Engineering Ladder Definitions.
   - **Design Style**: Modern organizational chart graphics, structured playbook modules, crisp executive styling.

4. **T5.4: The Bridge: Technical Depth & People Leadership**
   - **Hero**: Dual-Perspective Toggle: `[People & Org Leadership Lens]` vs. `[Technical Architecture Lens]`.
   - **Key Feature**: Dual-matrix interface allowing technical CTOs to inspect engineering chops while People Ops reviews team leadership credentials.
   - **Sections**: Balanced Leadership Pillars, Technical Architecture Governance, Team Delivery Metrics, Direct Report Case Studies.
   - **Design Style**: Dual-theme switcher, split-screen compare mode, balanced corporate design.

---

### Tier 6: Directors, VPs, and Above (VP / Head of Eng / CTO / C-Suite)
*Target Audience: C-Suite, Board of Directors, Venture Capitalists, Executive Search Committees.*
*Evaluation Signals: Enterprise transformation, multi-million dollar P&L / budget governance, global multi-site orgs, business revenue alignment, AI & modernization vision.*

1. **T6.1: The Enterprise Executive Briefing (Current Flagship Template)**
   - **Hero**: Executive headshot in ambient card, credentials, 20-year milestones, 60-Second Video Pitch trigger.
   - **Key Feature**: Interactive Chaptered Video Briefing Modal, 7-Stage Career Ladder, FinOps/TCO metrics ($2.8M annual savings), Recruiter 60-second drawer, AI Copilot Chatbot.
   - **Sections**: Leadership Principles, Career Ladder Stepper, Architectural Showcase, 20-Yr Timeline, Applied AI Lab, Competency Matrix.
   - **Design Style**: Executive Midnight Navy & Gold, ambient glowing cards, polished modal drawers.

2. **T6.2: The Visionary CTO & AI Modernization Dossier**
   - **Hero**: High-level transformation mandate: "Leading Enterprise AI Adoption & Cloud Modernization".
   - **Key Feature**: Multi-Year Technology Transformation Roadmap (Legacy Monolith → Modern Data Lakehouse → Agentic AI Platform), M&A Technology Due Diligence scorecards.
   - **Sections**: Strategic North Star Vision, Enterprise Modernization Roadmaps, AI/GenAI Enterprise Strategy, Vendor & Partnership Ecosystem.
   - **Design Style**: Futuristic executive dark-slate, glowing roadmap vectors, strategic vision cards.

3. **T6.3: The Global VP of Engineering Command**
   - **Hero**: Global site leadership overview: "Leading 150+ engineers across US, EMEA, and APAC".
   - **Key Feature**: Global Site Map & Team Topology (headcount distribution, time-zone collaboration model, follow-the-sun on-call structure, $15M+ annual OpEx budget allocation).
   - **Sections**: Global Org Topology, Multi-Million Dollar Budget Management, Enterprise Security / SOC2 / ISO Governance, C-Suite & Board Alignment.
   - **Design Style**: Command center aesthetic, interactive world map, high-density executive data cards.

4. **T6.4: The Boardroom & Investor-Ready Dossier**
   - **Hero**: Executive memo format: "Confidential Executive Dossier • Technology & Business Alignment".
   - **Key Feature**: Shareholder value creation metrics, board presentation slide embeds, regulatory & compliance governance pillars, executive references / endorsements.
   - **Sections**: Executive Summary Memo, Value Creation Track Record, Governance & Risk Management, Board Deck Highlights, Executive Contact.
   - **Design Style**: Premium Wall Street / McKinsey editorial style, elegant serif headers, subtle gold rules, clean white/ivory and dark charcoal palette.

---

## Technical Architecture & Implementation Plan

### 1. Folder Structure & Modular Organization

```
personal-webpage/
├── src/
│   ├── types/
│   │   ├── portfolio.ts              # Existing executive types
│   │   ├── templateCatalog.ts        # [NEW] Persona & template registry types
│   │   ├── internTypes.ts            # [NEW] Types for intern templates
│   │   ├── juniorTypes.ts            # [NEW] Types for junior templates
│   │   ├── seniorTypes.ts            # [NEW] Types for senior templates
│   │   ├── principalTypes.ts         # [NEW] Types for principal templates
│   │   ├── managerTypes.ts           # [NEW] Types for EM templates
│   │   └── executiveTypes.ts         # [NEW] Types for executive templates
│   ├── data/
│   │   ├── portfolioData.ts          # Existing Pavan executive data
│   │   ├── sampleProfiles/           # [NEW] Mock profiles for each persona
│   │   │   ├── internSample.ts
│   │   │   ├── juniorSample.ts
│   │   │   ├── seniorSample.ts
│   │   │   ├── principalSample.ts
│   │   │   ├── managerSample.ts
│   │   │   └── executiveSample.ts
│   │   └── templatesRegistry.ts      # [NEW] Metadata catalog for all 24 templates
│   ├── components/
│   │   ├── explorer/                 # [NEW] Interactive Template Gallery & Switcher
│   │   │   ├── TemplateSwitcherBar.tsx
│   │   │   ├── TemplateCatalogModal.tsx
│   │   │   └── PersonaSelector.tsx
│   │   ├── shared/                   # [NEW] Shared cross-template primitives
│   │   │   ├── BentoCard.tsx
│   │   │   ├── TerminalShell.tsx
│   │   │   ├── MetricsPill.tsx
│   │   │   ├── CodeSnippetViewer.tsx
│   │   │   ├── TopologyDiagram.tsx
│   │   │   └── OrgChartViewer.tsx
│   │   └── ... (existing executive components)
│   ├── templates/                    # [NEW] The 24 Templates
│   │   ├── intern/
│   │   │   ├── T1_DemoHub.tsx
│   │   │   ├── T1_TerminalHacker.tsx
│   │   │   ├── T1_AcademicScholar.tsx
│   │   │   └── T1_BuildInPublic.tsx
│   │   ├── junior/
│   │   │   ├── T2_BentoBuilder.tsx
│   │   │   ├── T2_FullStackCraftsman.tsx
│   │   │   ├── T2_OpenSourceDriver.tsx
│   │   │   └── T2_ScannableResume.tsx
│   │   ├── senior/
│   │   │   ├── T3_SystemDesignDeepDive.tsx
│   │   │   ├── T3_HighPerformanceSystems.tsx
│   │   │   ├── T3_ProductEngineer.tsx
│   │   │   └── T3_TechLeadMentor.tsx
│   │   ├── principal/
│   │   │   ├── T4_EnterpriseArchitect.tsx
│   │   │   ├── T4_ThoughtLeader.tsx
│   │   │   ├── T4_StaffMultiplier.tsx
│   │   │   └── T4_SystemSimulation.tsx
│   │   ├── manager/
│   │   │   ├── T5_PeopleCulture.tsx
│   │   │   ├── T5_DoraExecution.tsx
│   │   │   ├── T5_OrgScaling.tsx
│   │   │   └── T5_BridgeTechPeople.tsx
│   │   └── executive/
│   │   ├── T6_ExecutiveBriefing.tsx  # (Wrapped existing App.tsx)
│   │   ├── T6_VisionaryCto.tsx
│   │   ├── T6_GlobalVpEngineering.tsx
│   │   └── T6_BoardroomDossier.tsx
│   └── App.tsx                       # [MODIFY] Orchestrates active template + switcher
```

---

## Proposed Changes

### Phase 1: Core System & Template Registry
#### [NEW] [templateCatalog.ts](file:///c:/Users/Pavan/OneDrive/Antigravity/personal-webpage/src/types/templateCatalog.ts)
Defines TypeScript contracts for template descriptors, persona tags (`intern` | `junior` | `senior` | `principal` | `manager` | `executive`), template IDs (`t1_demo`, `t2_bento`, etc.), preview screenshots, feature tags, and color themes.

#### [NEW] [templatesRegistry.ts](file:///c:/Users/Pavan/OneDrive/Antigravity/personal-webpage/src/data/templatesRegistry.ts)
Registry of all 24 templates with descriptions, recommended audience, and component loader functions.

#### [NEW] [TemplateSwitcherBar.tsx](file:///c:/Users/Pavan/OneDrive/Antigravity/personal-webpage/src/components/explorer/TemplateSwitcherBar.tsx)
Floating top dock / switcher allowing users to filter by persona and toggle between templates with a single click.

---

### Phase 2: Sample Data Profiles & Shared UI Primitives
#### [NEW] [sampleProfiles.ts](file:///c:/Users/Pavan/OneDrive/Antigravity/personal-webpage/src/data/sampleProfiles/index.ts)
Curated high-quality mock data for:
- Intern (CS student, hackathon winner, React/Python)
- Junior (Frontend/Backend 2 yrs, Linear/SaaS builder)
- Senior (Distributed systems, 6 yrs, high-scale payments)
- Principal (Staff+ architect, 12 yrs, cross-cloud microservices)
- Engineering Manager (Led 25 engineers, agile transformation)
- Executive (Pavan Kumar Ghanta's real 20-year data)

#### [NEW] [Shared UI Primitives](file:///c:/Users/Pavan/OneDrive/Antigravity/personal-webpage/src/components/shared/)
- `TerminalShell.tsx`: Interactive Unix CLI simulation.
- `BentoCard.tsx`: Linear/Apple style responsive bento tiles.
- `DoraMetricsChart.tsx`: DevOps Research and Assessment metric cards.
- `OrgChartViewer.tsx`: Hierarchy visualizer for managers/VPs.

---

### Phase 3: Template Implementation (Grouped by Persona)
Each persona gets 4 full-featured, responsive, production-ready templates:
- **Intern Suite**: `T1_DemoHub.tsx`, `T1_TerminalHacker.tsx`, `T1_AcademicScholar.tsx`, `T1_BuildInPublic.tsx`
- **Junior Suite**: `T2_BentoBuilder.tsx`, `T2_FullStackCraftsman.tsx`, `T2_OpenSourceDriver.tsx`, `T2_ScannableResume.tsx`
- **Senior Suite**: `T3_SystemDesignDeepDive.tsx`, `T3_HighPerformanceSystems.tsx`, `T3_ProductEngineer.tsx`, `T3_TechLeadMentor.tsx`
- **Principal Suite**: `T4_EnterpriseArchitect.tsx`, `T4_ThoughtLeader.tsx`, `T4_StaffMultiplier.tsx`, `T4_SystemSimulation.tsx`
- **Manager Suite**: `T5_PeopleCulture.tsx`, `T5_DoraExecution.tsx`, `T5_OrgScaling.tsx`, `T5_BridgeTechPeople.tsx`
- **Executive Suite**: `T6_ExecutiveBriefing.tsx` (Current Pavan portfolio), `T6_VisionaryCto.tsx`, `T6_GlobalVpEngineering.tsx`, `T6_BoardroomDossier.tsx`

---

### Phase 4: Root Application Integration
#### [MODIFY] [App.tsx](file:///c:/Users/Pavan/OneDrive/Antigravity/personal-webpage/src/App.tsx)
Integrate template switcher state (`selectedTemplateId`). When `t6_briefing` is selected, renders the current full executive portfolio. When any other template is selected, renders that template seamlessly. Adds a quick URL hash/query-param listener (`?template=t2_bento`) for instant direct linking.

---

## Open Questions & Configuration Options

> [!WARNING]
> **Delivery Phasing Preference**:
> Because 24 templates is a large system (equivalent to 24 distinct web applications):
> - **Option A (All-in-One Comprehensive Delivery)**: Build the template framework, template explorer switcher bar, mock data registry, and deliver the templates systematically across all 6 tiers in phased batches.
> - **Option B (Framework + Top 1-2 per Persona First)**: Build the template explorer and the #1 flagship template for each persona (6 templates), then expand to all 4 per tier (24 total).
> Which rollout cadence do you prefer?

---

## Verification Plan

### Automated Verification
- `npm run build`: Ensure TypeScript compiles (`tsc -b`) and Vite production bundle compiles cleanly with zero type errors.
- `npm run lint`: Oxlint verification across all template files.

### Manual Verification
- Test interactive switcher bar: click through all 6 personas and each template.
- Test responsive mobile viewports (iPhone, iPad, Desktop 1920x1080).
- Verify dark/light theme switching and print/PDF resume export integrity.
- Verify that Pavan's current executive portfolio remains 100% intact when viewing T6.1.
