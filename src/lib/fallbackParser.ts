import type { ResumeSchema } from "../types/resume.ts";

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function isSkillInText(tech: string, text: string): boolean {
  const escaped = escapeRegExp(tech);
  const startsWithWord = /^[a-zA-Z0-9]/.test(tech);
  const endsWithWord = /[a-zA-Z0-9]$/.test(tech);

  const prefix = startsWithWord ? "(?:^|[^a-zA-Z0-9])" : "(?:^|\\s)";
  const suffix = endsWithWord ? "(?:$|[^a-zA-Z0-9])" : "(?:$|[^a-zA-Z0-9+#])";

  const regex = new RegExp(`${prefix}${escaped}${suffix}`, "i");
  return regex.test(text);
}

/**
 * Fallback parser using regex and heuristics to extract structured information
 * from plain text when an LLM API key is not available or offline.
 */
export function fallbackParseTextToResume(rawText: string): ResumeSchema {
  const lines = rawText.split("\n").map((l) => l.trim()).filter(Boolean);

  let name = "Executive Leader";
  let title = "Senior Engineering Leader / Architect";
  let summary = "";
  let email = "";
  let linkedin = "";
  let github = "";

  if (lines.length > 0) {
    name = lines[0].replace(/[^a-zA-Z\s.]/g, "").trim() || "Executive Professional";
  }

  // Look for emails
  const emailMatch = rawText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  if (emailMatch) email = emailMatch[0];

  // Look for LinkedIn
  const linkedinMatch = rawText.match(/(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+/i);
  if (linkedinMatch) linkedin = linkedinMatch[0];

  // Look for GitHub
  const githubMatch = rawText.match(/(https?:\/\/)?(www\.)?github\.com\/[a-zA-Z0-9_-]+/i);
  if (githubMatch) github = githubMatch[0];

  // Title extraction heuristic
  for (const line of lines.slice(1, 5)) {
    if (
      line.match(/engineer|architect|lead|director|manager|developer|cto|vp|head|principal/i) &&
      line.length < 80
    ) {
      title = line;
      break;
    }
  }

  // Summary extraction heuristic
  const summaryIdx = lines.findIndex((l) => /summary|about|profile|overview/i.test(l));
  if (summaryIdx !== -1 && lines[summaryIdx + 1]) {
    summary = lines.slice(summaryIdx + 1, summaryIdx + 4).join(" ");
  } else {
    summary = lines.slice(1, 4).join(" ");
  }

  if (!summary || summary.length < 20) {
    summary = `${title} with demonstrated expertise in delivering resilient software architectures, scaling engineering operations, and driving technical strategy.`;
  }

  // Extract skills heuristic
  const skillsList: string[] = [];
  const commonTech = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Vue.js", "Python", "Go", "Rust",
    "Java", "C++", "C#", ".NET", "AWS", "GCP", "Azure", "Docker", "Kubernetes", "PostgreSQL",
    "MongoDB", "GraphQL", "REST API", "Tailwind CSS", "Redis", "Terraform", "CI/CD", "HTML5/CSS3"
  ];

  for (const tech of commonTech) {
    if (isSkillInText(tech, rawText)) {
      skillsList.push(tech);
    }
  }

  // Extract quantifiable metrics heuristic
  const metricsMatches = rawText.match(/\b(\d+%\b|\$\d+[kM]?\b|\b\d+\+\s*(engineers|users|requests|MAU|M)\b)/gi) || [];
  const metrics = Array.from(new Set(metricsMatches)).slice(0, 4).map((val, idx) => ({
    id: `metric-fallback-${idx}`,
    label: `Key Performance Indicator ${idx + 1}`,
    value: val,
    description: `Extracted quantitative metric from resume performance records.`
  }));

  if (metrics.length === 0) {
    metrics.push(
      { id: "met-fb-1", label: "Efficiency Gain", value: "40%+", description: "Process and performance optimization" },
      { id: "met-fb-2", label: "Team Impact", value: "10+ Engineers", description: "Mentored & architected team workflows" }
    );
  }

  return {
    name,
    title,
    summary,
    location: "Global / Remote",
    contact: {
      email: email || "contact@devstack.bio",
      linkedin: linkedin || "https://linkedin.com",
      github: github || "https://github.com",
      website: `https://${name.toLowerCase().replace(/[^a-z0-9]/g, "") || "user"}.devstack.bio`
    },
    skills: [
      {
        category: "Technical Stack & Infrastructure",
        items: skillsList.length > 0 ? skillsList : ["System Architecture", "Cloud Engineering", "DevOps & CI/CD", "TypeScript", "Microservices"]
      },
      {
        category: "Leadership & Delivery",
        items: ["Strategic Technical Planning", "Engineering Team Management", "System Optimization"]
      }
    ],
    experience: [
      {
        id: "exp-fb-1",
        role: title,
        company: "Technology Platform",
        location: "Primary Office",
        startDate: "2020",
        endDate: "Present",
        highlights: [
          lines.find((l) => l.length > 40 && l.length < 150) || "Led critical tech initiatives across backend & frontend infrastructure.",
          "Optimized overall system throughput and reduced deployment cycle friction."
        ]
      }
    ],
    projects: [
      {
        id: "proj-fb-1",
        title: "High-Throughput Enterprise Architecture",
        description: "Modernized application architecture using modular design principles and automated testing pipelines.",
        technologies: skillsList.slice(0, 4),
        metrics: metrics[0]?.value ? `${metrics[0].value} improvement` : undefined
      }
    ],
    metrics
  };
}
