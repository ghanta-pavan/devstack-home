# devstack.bio — Executive Presence Platform

`devstack.bio` is an automated digital presence platform targeting high-visibility, portfolio-dependent professionals (Tech Leads, Engineering Managers, Directors, Principal Engineers, and Architects).

## Key Features

- **"Build your Bio" Executive Landing Page**: Clean, authoritative design with light/dark theme toggle.
- **Resume-to-Portfolio Extraction Engine**: Supports PDF, DOCX, and TXT upload using Gemini 2.5 Flash LLM with fallback heuristic parsing.
- **Interactive Sandbox & Review**: Live editable parsed JSON schema, metrics cards dashboard, and career experience timeline.
- **Dual Export Views**: Executive Web Portfolio view and ATS-compliant resume view.
- **3-Tier Product Pricing**: Starter (Free / GitHub Pages), Professional (Subdomain & ATS), and Executive (Custom domain & Cloudflare for SaaS).
- **Architecture Visualizer**: Visual breakdown of Edge Middleware routing, Upstash Redis caching, Supabase Postgres RLS, and Cloudflare custom domains.

## Getting Started

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. (Optional) Set up your Gemini API Key in `.env.local`:
   ```bash
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

3. Start the Next.js development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### GitHub Pages Deployment

This repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys static exports to GitHub Pages.

To enable GitHub Pages:
1. Go to **Settings > Pages** in your GitHub repository.
2. Set **Source** to **GitHub Actions**.

## Architecture & Technical Specification

Detailed system architecture and multi-tenant edge routing documentation can be found in [`ARCHITECTURE.md`](./ARCHITECTURE.md).
