# System Architecture & Technical Specification: devstack.bio

## 1. Platform Overview & Positioning
`devstack.bio` is an automated digital presence platform designed specifically for high-visibility, portfolio-dependent professionals (Tech Leads, Engineering Managers, Principal Engineers, VPs, and Architects with 8–15+ years of experience).

Unlike generic link-in-bio platforms or junior portfolio templates, `devstack.bio` projects technical authority, executive independence, and quantifiable engineering impact without the administrative overhead of maintaining a personal website stack.

---

## 2. End-to-End Pipeline & Data Architecture

```
[ PDF / Docx Resume ]
        │
        ▼
[ Ingestion & Parsing Engine ]
  ├─ Browser Client Text Extractor (pdfjs-dist / mammoth)
  └─ Gemini 2.5 Flash LLM Structuring Engine (with Fallback Parser)
        │
        ▼
[ Validated JSON Schema ]
  ├─ Contact & Social Identifiers
  ├─ Executive Summary & Title
  ├─ Key Metrics Dashboard Cards
  ├─ Experience Timeline
  └─ Categorized Tech Stack & Case Studies
        │
        ├─────────────────────────────────────┐
        ▼                                     ▼
[ Multi-Tenant Web Compiler ]       [ ATS PDF Resume Compiler ]
  ├─ Next.js App Router Edge          ├─ Headless Playwright / React PDF
  ├─ Wildcard Subdomain Rewrite       └─ Exact ATS Structural Match
  └─ Upstash Serverless Redis Cache
```

### A. PDF Ingestion & Parsing
* **Upload Module:** Client-side binary file reading for `.pdf`, `.docx`, `.txt`, and `.md` formats.
* **LLM Engine:** Gemini 2.5 Flash processes unstructured text into a strict `ResumeSchema` JSON object.
* **Resilient Fallback:** An intelligent regex/heuristic parser guarantees offline operation if API keys are missing or rate-limited.

### B. Review & Curation Dashboard
* **Data Validation:** Interactive review screen allowing users to edit JSON fields, metric values, and career highlights before locking schema definitions.

### C. Edge Routing & Multi-Tenant Serving
* **Wildcard Subdomains:** Host header parsing (`<username>.devstack.bio`) via Next.js App Router edge middleware.
* **Caching:** Upstash Redis provides sub-10ms schema resolution at the edge.

---

## 3. Tiered Product Architecture & Deployment Strategy

| Tier | Target Audience | Key Features | Deployment Engine | Pricing Model |
| :--- | :--- | :--- | :--- | :--- |
| **Tier 1: Starter** | Casual lookers & senior engineers | Single-page scroller, 100% resume generated, ATS link | GitHub REST API -> GitHub Pages (`username.github.io`) | Free / Nominal ₹499 |
| **Tier 2: Professional** | Active job seekers & leads | Subdomain (`username.devstack.bio`), Cal.com scheduler, ATS PDF | Next.js Edge Middleware + Wildcard DNS + Upstash Redis | ₹1,499 - ₹2,499 (6–12 months) |
| **Tier 3: Executive** | VPs, Directors & Principal Engs | Custom domain (`.dev`, `.com`), Tiptap CMS blog, VIP support | Cloudflare for SaaS (Custom Hostnames API) | ₹4,999 - ₹9,999 setup + ₹2,499/yr renewal |

---

## 4. Security & Compliance Constraints
1. **No Arbitrary Code Execution:** Raw `<script>` tags are strictly prohibited from tenant JSON fields to prevent XSS and phishing flags.
2. **Database Isolation:** PostgreSQL with Row-Level Security (RLS) policies ensures tenant schema isolation.
3. **Automated SSL Management:** Custom hostnames provisioned via Cloudflare for SaaS with automatic TLS certificate renewals.
