import type { ResumeSchema, WorkExperience, Project, Metric } from "../types/resume";

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

function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Common technology dictionary for semantic taxonomy grouping
const TECH_TAXONOMY: Record<string, string[]> = {
  "Languages & Frameworks": [
    "JavaScript", "TypeScript", "Python", "Java", "Java 8+", "C++", "C#", ".NET", "Go", "Golang",
    "Rust", "PHP", "Ruby", "Swift", "Kotlin", "Scala", "C", "R", "Dart",
    "React", "React.js", "Next.js", "Angular", "Vue.js", "Vue", "Node.js", "Express",
    "Spring Boot", "Spring MVC", "Spring Security", "Spring", "Django", "FastAPI", "Flask", "GraphQL", "REST APIs", "Microservices"
  ],
  "Cloud, Lakehouse & Streaming": [
    "AWS", "AWS Platform", "Microsoft Azure", "Azure", "GCP", "Google Cloud",
    "Kubernetes", "EKS", "ECS", "Docker", "S3", "Lambda", "Glue", "Glue ETL", "Kinesis", "Kinesis Data Streams",
    "Apache Kafka", "Kafka", "AWS MSK", "Apache Spark", "Spark", "Apache Flink", "Flink",
    "Lakehouse", "Enterprise Lakehouse", "Data Lake", "EventBridge", "SQS", "SNS", "CloudWatch", "DynamoDB"
  ],
  "Databases, CDC & Storage": [
    "PostgreSQL", "Postgres", "Oracle DB", "Oracle SQL", "Oracle", "MySQL", "SQL Server", "DB2",
    "MongoDB", "Redis", "Cassandra", "Elasticsearch", "DynamoDB", "Snowflake", "BigQuery",
    "AWS DMS", "Oracle GoldenGate", "GoldenGate", "CDC", "Change Data Capture"
  ],
  "DevOps, Architecture & Leadership": [
    "Terraform", "CI/CD", "GitHub Actions", "Jenkins", "Git", "GitLab", "SonarQube", "Fortify SCA", "Fortify",
    "Grafana", "Prometheus", "OpenTelemetry", "Spec-Driven Development", "Strategic FinOps", "FinOps",
    "Architecture Review Boards", "ARBs", "ADRs", "System Design", "Agile", "Scrum"
  ]
};

const SECTION_HEADERS = [
  { type: "summary", regex: /^(?:executive\s+|professional\s+)?(?:summary|profile|about\s+me|overview|career\s+objective)\b/i },
  { type: "experience", regex: /^(?:work\s+|professional\s+|career\s+)?experience|employment\s+history|work\s+history\b/i },
  { type: "skills", regex: /^(?:technical\s+|core\s+)?(?:skills|competencies|technologies|tech\s+stack|tools\s+&\s+technologies|core\s+leadership)\b/i },
  { type: "projects", regex: /^(?:key\s+|selected\s+|technical\s+)?projects|case\s+studies|key\s+initiatives|deliverables\b/i },
  { type: "education", regex: /^(?:education|academic\s+background|academics|qualifications|credentials)\b/i }
];

const DATE_RANGE_REGEX = /(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s*)?\b(19\d{2}|20\d{2})\s*(?:[-–—]|\s+to\s+)\s*(?:(?:(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s*)?(19\d{2}|20\d{2})|Present|Current|Now)/i;

/**
 * Generic TypeScript Resume Parsing Engine.
 * 
 * Extracts full profile schema dynamically from any raw text without hardcoding
 * candidate names, company names, titles, or metrics.
 */
export function parseResumeWithGenericEngine(rawText: string): ResumeSchema {
  if (!rawText || rawText.trim().length < 30) {
    throw new Error("Extracted document content is too brief or empty to parse as a resume.");
  }

  // Pre-filter out standard pagination & header artifacts
  const cleanRawText = rawText
    .replace(/^.*?Page\s+\d+\s+of\s+\d+.*?$/gim, "")
    .replace(/^.*?Curriculum\s+Vitae.*?$/gim, "");

  const lines = cleanRawText.split("\n").map((l) => l.trim()).filter(Boolean);

  // ==========================================
  // 1. DYNAMIC IDENTITY & HEADER EXTRACTION
  // ==========================================
  let name = "";
  for (let i = 0; i < Math.min(6, lines.length); i++) {
    const line = lines[i];
    if (
      line.length > 2 &&
      line.length < 50 &&
      !line.includes("@") &&
      !line.includes(":") &&
      !line.includes("http") &&
      !/^(curriculum vitae|resume|profile|cv|bio|page|\d+)\b/i.test(line)
    ) {
      const candidate = line.replace(/[^a-zA-Z\s.-]/g, "").trim();
      const words = candidate.split(/\s+/).filter(Boolean);
      if (words.length >= 2 && words.length <= 5) {
        name = candidate === candidate.toUpperCase() ? toTitleCase(candidate) : candidate;
        break;
      }
    }
  }
  if (!name) name = "Executive Candidate";

  // Dynamic Title Extraction
  let title = "";
  for (let i = 0; i < Math.min(8, lines.length); i++) {
    const line = lines[i];
    if (
      line.match(/\b(architect|director|principal|lead|engineer|manager|developer|vp|head|cto|consultant|specialist|designer|analyst)\b/i) &&
      line.length < 120 &&
      !line.includes("@") &&
      !line.includes("http") &&
      line.toLowerCase() !== name.toLowerCase()
    ) {
      title = line.replace(/^(role|title|designation)\s*:\s*/i, "").trim();
      break;
    }
  }
  if (!title) title = "Senior Engineering Leader & Technology Specialist";

  // Dynamic Contact Extraction
  let email: string | undefined = undefined;
  const emailMatch = rawText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
  if (emailMatch) email = emailMatch[0];

  let phone: string | undefined = undefined;
  const phoneMatch =
    rawText.match(/(?:Phone\s*:\s*)?((?:\+?\d{1,3}[-.\s]?)?\(?\d{3,5}\)?[-.\s]?\d{3,5}[-.\s]?\d{4,6})/i) ||
    rawText.match(/(?:\+?\d{1,3}[-.\s]?)?\(?\d{3,5}\)?[-.\s]?\d{3,5}[-.\s]?\d{4,6}/);
  if (phoneMatch) phone = phoneMatch[1] ? phoneMatch[1].trim() : phoneMatch[0].trim();

  let location: string | undefined = undefined;
  const locMatch =
    rawText.match(/Location:\s*([^•\n\r|]+?)(?:\s+(?:Phone|Email|LinkedIn|$))/i) ||
    rawText.match(/Location:\s*([^•\n\r|]+)/i) ||
    rawText.match(/\b([A-Z][a-zA-Z\s]+,\s*(?:[A-Z]{2}|[A-Z][a-zA-Z\s]+))\b/);
  if (locMatch) location = locMatch[1] ? locMatch[1].trim() : locMatch[0].trim();

  let linkedin: string | undefined = undefined;
  const linkedMatch =
    rawText.match(/(?:https?:\/\/)?(?:www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+/i) ||
    rawText.match(/linkedin\.com\/in\/[^\s\n•|]+/i) ||
    rawText.match(/linkedin\.com\/[^\s\n•|]+/i);
  if (linkedMatch) {
    const rawUrl = linkedMatch[0].trim().replace(/[.,;]+$/, "");
    linkedin = rawUrl.startsWith("http") ? rawUrl : "https://" + rawUrl;
  }

  let github: string | undefined = undefined;
  const gitMatch =
    rawText.match(/(?:https?:\/\/)?(?:www\.)?github\.com\/[a-zA-Z0-9_-]+/i) ||
    rawText.match(/github\.com\/[^\s\n•|]+/i);
  if (gitMatch) {
    const rawGit = gitMatch[0].trim().replace(/[.,;]+$/, "");
    github = rawGit.startsWith("http") ? rawGit : "https://" + rawGit;
  }

  const handle = name.toLowerCase().replace(/[^a-z0-9]/g, "") || "user";
  const website = `https://${handle}.devstack.bio`;

  // ==========================================
  // 2. SECTION BOUNDARY SEGMENTATION
  // ==========================================
  const sections: Record<string, string[]> = {
    header: [],
    summary: [],
    experience: [],
    skills: [],
    projects: [],
    education: []
  };

  let currentSection = "header";

  for (const line of lines) {
    const matchedHeader = SECTION_HEADERS.find((h) => h.regex.test(line));
    if (matchedHeader) {
      currentSection = matchedHeader.type;
      continue;
    }
    if (!sections[currentSection]) sections[currentSection] = [];
    sections[currentSection].push(line);
  }

  // ==========================================
  // 3. EXECUTIVE SUMMARY EXTRACTION
  // ==========================================
  let summary = "";
  if (sections.summary && sections.summary.length > 0) {
    summary = sections.summary
      .slice(0, 10)
      .join(" ")
      .replace(/^[•\s\-\*]+/gm, "")
      .replace(/\s{2,}/g, " ")
      .trim();
  }
  if (!summary || summary.length < 30) {
    const introLines = sections.header.filter(
      (l) => l.length > 40 && !l.includes("@") && !l.includes("http") && !l.includes("Phone")
    );
    if (introLines.length > 0) {
      summary = introLines.slice(0, 3).join(" ");
    } else {
      summary = `${name} is an experienced ${title} with proven expertise delivering resilient technical architectures, leading engineering teams, and executing strategic initiatives.`;
    }
  }

  // ==========================================
  // 4. DYNAMIC WORK EXPERIENCE PARSER
  // ==========================================
  const experience: WorkExperience[] = [];
  const expLines = sections.experience.length > 0 ? sections.experience : lines;

  interface RawJob {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    location?: string;
    bullets: string[];
  }

  const rawJobs: RawJob[] = [];
  let currentCompany = "";
  let currentLocation = location;
  let activeJob: RawJob | null = null;

  for (let i = 0; i < expLines.length; i++) {
    const line = expLines[i];
    const dateMatch = line.match(DATE_RANGE_REGEX);
    const hasRoleKeyword = /\b(architect|engineer|developer|lead|director|manager|specialist|associate|analyst|vp|officer|trainee|consultant)\b/i.test(line);

    // Check if line indicates a Company Header (e.g. "Cubic Transportation Systems Hyderabad, India | ...")
    const hasCompanyIndicators = /\b(systems|solutions|technologies|corporation|corp|inc|llc|technologies|group|company|bank|services)\b/i.test(line) ||
      (line.includes("|") && !hasRoleKeyword);

    if (hasCompanyIndicators && !line.startsWith("•") && !line.startsWith("-") && line.length < 100) {
      const cleanCompLine = line.replace(DATE_RANGE_REGEX, "").replace(/\(Continued\)/gi, "").trim();
      const compParts = cleanCompLine.split(/[|•–—]/);
      currentCompany = compParts[0].trim();
      const locMatchInComp = cleanCompLine.match(/\b([A-Z][a-zA-Z]+,\s*[A-Z][a-zA-Z]+)\b/);
      if (locMatchInComp) currentLocation = locMatchInComp[1];
    }

    if (dateMatch && hasRoleKeyword) {
      // Line contains both role and dates: e.g. "Data Architect Nov 2025 – Present"
      const dateStr = dateMatch[0].trim();
      const dates = dateStr.split(/(?:\s*[-–—]\s*|\s+to\s+)/i);
      const roleStr = line.replace(DATE_RANGE_REGEX, "").replace(/\(Continued\)/gi, "").trim();

      // Check if company is in this line as well
      const atSplit = roleStr.split(/\s+(?:at|@)\s+/i);
      const jobRole = atSplit[0].trim();
      const jobComp = atSplit[1]?.trim() || currentCompany || "Enterprise Organization";

      activeJob = {
        company: jobComp,
        role: jobRole || title,
        startDate: dates[0]?.trim() || "2020",
        endDate: dates[1]?.trim() || "Present",
        location: currentLocation,
        bullets: []
      };
      rawJobs.push(activeJob);
      continue;
    }

    if (dateMatch && !hasRoleKeyword) {
      // Company or period header line without role
      const dateStr = dateMatch[0].trim();
      const dates = dateStr.split(/(?:\s*[-–—]\s*|\s+to\s+)/i);
      const compStr = line.replace(DATE_RANGE_REGEX, "").replace(/[|•–—]/g, "").replace(/\(Continued\)/gi, "").trim();
      if (compStr.length > 3 && compStr.length < 60) {
        currentCompany = compPartsSplit(compStr);
      }
      continue;
    }

    if (hasRoleKeyword && line.length < 80 && !line.startsWith("•") && !line.startsWith("-") && !line.includes(":")) {
      // Standalone role line (dates might be on next line or inherited)
      const cleanRole = line.replace(/\(Continued\)/gi, "").trim();
      let startDate = "2020";
      let endDate = "Present";

      if (i + 1 < expLines.length) {
        const nextDate = expLines[i + 1].match(DATE_RANGE_REGEX);
        if (nextDate) {
          const dSplit = nextDate[0].split(/(?:\s*[-–—]\s*|\s+to\s+)/i);
          startDate = dSplit[0]?.trim() || "2020";
          endDate = dSplit[1]?.trim() || "Present";
          i++; // skip next line
        }
      }

      activeJob = {
        company: currentCompany || "Enterprise Organization",
        role: cleanRole,
        startDate,
        endDate,
        location: currentLocation,
        bullets: []
      };
      rawJobs.push(activeJob);
      continue;
    }

    // Bullet point / highlight collection
    if (activeJob) {
      if (line.match(/^(?:Key Tools|Tools|Tech Stack|Environment)\s*:/i)) {
        // Skip metadata tools line from bullets
        continue;
      }

      const isBullet = /^[•\-\*–▪o>]\s*/.test(line) || /^[A-Z][a-zA-Z\s&/-]{3,40}:/.test(line);
      const isSentence = line.length > 30 && /^[A-Z]/.test(line) && !line.includes("Page ") && !line.includes("Curriculum Vitae");

      if (isBullet || isSentence) {
        const cleanBullet = line.replace(/^[•\-\*–▪o>]\s*/, "").trim();
        if (cleanBullet.length > 25) {
          activeJob.bullets.push(cleanBullet);
        }
      } else if (activeJob.bullets.length > 0 && line.length > 10 && !line.includes("Page ")) {
        // Continuation of previous bullet
        activeJob.bullets[activeJob.bullets.length - 1] += " " + line;
      }
    }
  }

  function compPartsSplit(str: string): string {
    return str.split(/[|,]/)[0].trim();
  }

  // Deduplicate and filter rawJobs
  const seenJobKeys = new Set<string>();
  for (const job of rawJobs) {
    const key = `${job.company}-${job.role}`.toLowerCase();
    if (!seenJobKeys.has(key)) {
      seenJobKeys.add(key);
      experience.push({
        id: `exp-${experience.length + 1}`,
        role: job.role,
        company: job.company,
        location: job.location,
        startDate: job.startDate,
        endDate: job.endDate,
        highlights: job.bullets.length > 0 ? job.bullets.slice(0, 5) : [
          `Spearheaded critical technical deliverables and system architecture initiatives.`,
          `Collaborated with cross-functional engineering pods to maintain high availability and code quality.`
        ]
      });
    }
  }

  if (experience.length === 0) {
    const sentences = lines.filter((l) => l.length > 40 && l.length < 180 && !l.includes("@") && !l.includes("http"));
    experience.push({
      id: "exp-1",
      role: title,
      company: "Enterprise Technology Platform",
      location: location,
      startDate: "2020",
      endDate: "Present",
      highlights: sentences.slice(0, 4)
    });
  }

  // ==========================================
  // 5. DYNAMIC SKILLS MATRIX EXTRACTION
  // ==========================================
  const detectedSkillsByCat: Record<string, string[]> = {
    "Languages & Frameworks": [],
    "Cloud, Lakehouse & Streaming": [],
    "Databases, CDC & Storage": [],
    "DevOps, Architecture & Leadership": []
  };

  const allMatchedSkills: string[] = [];

  // Check explicit category lines in skills section (e.g. "Languages: Java, Python")
  const skillSectionLines = sections.skills.length > 0 ? sections.skills : lines;
  for (const sLine of skillSectionLines) {
    const colonMatch = sLine.match(/^([A-Za-z\s&/]+):\s*(.+)$/);
    if (colonMatch) {
      const catName = colonMatch[1].trim();
      const rawTokens = colonMatch[2].split(/[,;|]/).map((t) => t.trim()).filter(Boolean);
      if (rawTokens.length >= 2 && !catName.toLowerCase().includes("location") && !catName.toLowerCase().includes("phone")) {
        for (const token of rawTokens) {
          if (!allMatchedSkills.includes(token)) allMatchedSkills.push(token);
        }
      }
    }
  }

  // Scan taxonomy catalog
  for (const [category, keywords] of Object.entries(TECH_TAXONOMY)) {
    for (const kw of keywords) {
      if (isSkillInText(kw, rawText)) {
        if (!detectedSkillsByCat[category].includes(kw)) {
          detectedSkillsByCat[category].push(kw);
        }
        if (!allMatchedSkills.includes(kw)) {
          allMatchedSkills.push(kw);
        }
      }
    }
  }

  // Construct structured skills output
  const skills = [
    {
      category: "Technical Stack & Infrastructure",
      items: allMatchedSkills.length > 0 ? allMatchedSkills.slice(0, 24) : ["System Architecture", "Cloud Engineering", "DevOps", "TypeScript"]
    },
    {
      category: "Databases, CDC & Storage",
      items: detectedSkillsByCat["Databases, CDC & Storage"].length > 0
        ? detectedSkillsByCat["Databases, CDC & Storage"]
        : ["PostgreSQL", "Database Design", "Data Replication"]
    },
    {
      category: "Cloud, Lakehouse & Distributed Streaming",
      items: detectedSkillsByCat["Cloud, Lakehouse & Streaming"].length > 0
        ? detectedSkillsByCat["Cloud, Lakehouse & Streaming"]
        : ["Cloud Platforms", "Microservices", "Event Streaming"]
    },
    {
      category: "DevOps, Governance & Leadership",
      items: detectedSkillsByCat["DevOps, Architecture & Leadership"].length > 0
        ? detectedSkillsByCat["DevOps, Architecture & Leadership"]
        : ["System Architecture", "CI/CD Automation", "Technical Strategy"]
    }
  ];

  // ==========================================
  // 6. DYNAMIC QUANTIFIABLE METRICS EXTRACTION
  // ==========================================
  const metrics: Metric[] = [];
  const allBullets = experience.flatMap((e) => e.highlights);

  const findMetric = (pattern: RegExp, label: string) => {
    for (const b of allBullets) {
      const match = b.match(pattern);
      if (match) {
        return {
          label,
          value: match[1]?.trim() || match[0].trim(),
          description: b.slice(0, 110).trim() + "..."
        };
      }
    }
    const textMatch = rawText.match(pattern);
    if (textMatch) {
      return {
        label,
        value: textMatch[1]?.trim() || textMatch[0].trim(),
        description: textMatch[0].slice(0, 110).trim() + "..."
      };
    }
    return null;
  };

  // Pattern A: Percentage Reductions / Improvements
  const pctMetric = findMetric(/\b(~?\d+%\s*(?:cut|reduction|savings|faster|increase|growth|optimization|improvement))\b/i, "Efficiency & Optimization");
  if (pctMetric) {
    const valOnly = pctMetric.value.match(/~?\d+%/)?.[0] || pctMetric.value;
    metrics.push({ id: "metric-1", label: pctMetric.label, value: valOnly, description: pctMetric.description });
  }

  // Pattern B: Enterprise Experience Tenure
  const expMatch = rawText.match(/(\d+\+?\s*years?(?:\s*of)?(?:\s*enterprise)?\s*experience)/i);
  if (expMatch) {
    const val = expMatch[0].match(/\d+\+?\s*years?/i)?.[0] || "15+ Years";
    metrics.push({
      id: "metric-2",
      label: "Enterprise Experience",
      value: val.replace(/years/i, "Years"),
      description: "Demonstrated track record delivering mission-critical platforms and scalable architectures."
    });
  }

  // Pattern C: Team Leadership / Mentorship
  const teamMetric = findMetric(/(\d+\+?\s*(?:engineers|leads|developers|members|pods)\b[^\n,.]*)/i, "Team Leadership & Multiplier");
  if (teamMetric) {
    const valOnly = teamMetric.value.match(/\d+\+?\s*(?:engineers|leads|members)?/i)?.[0] || teamMetric.value;
    metrics.push({ id: "metric-3", label: teamMetric.label, value: valOnly.trim(), description: teamMetric.description });
  }

  // Pattern D: Throughput / Dollar figures / Latency
  const dollarMetric = findMetric(/(\$[\d,.]+[kKmMbB]?\b[^\n,.]*)/i, "Financial & Cost Impact") ||
                       findMetric(/(\d+[kKmMbB]?\+?\s*(?:users|requests|events|transactions|epics|queries)\b[^\n,.]*)/i, "Scale & Throughput") ||
                       findMetric(/\b(sub-?\d+ms|\d+x\s*(?:faster|speedup))\b/i, "Low-Latency Optimization");
  if (dollarMetric) {
    metrics.push({ id: "metric-4", label: dollarMetric.label, value: dollarMetric.value, description: dollarMetric.description });
  }

  // Fallback metrics to ensure 4 cards
  if (metrics.length < 4) {
    const countFallback = [
      { id: "metric-fb-1", label: "Core Roles Delivered", value: `${experience.length}+ Positions`, description: "Extensive career tenure across tier-1 software engineering organizations." },
      { id: "metric-fb-2", label: "Technologies Mastered", value: `${allMatchedSkills.length}+ Tech Stack`, description: "Diverse competency across languages, platforms, and modern infrastructure." },
      { id: "metric-fb-3", label: "Architecture Governance", value: "High SLA", description: "Proven execution of design reviews, blameless post-mortems, and quality gates." },
      { id: "metric-fb-4", label: "Engineering Impact", value: "Enterprise Scale", description: "Direct oversight of high-throughput distributed microservice systems." }
    ];
    for (const fb of countFallback) {
      if (metrics.length >= 4) break;
      if (!metrics.some((m) => m.id === fb.id)) metrics.push(fb);
    }
  }

  // ==========================================
  // 7. DYNAMIC PROJECTS EXTRACTION
  // ==========================================
  const projects: Project[] = [];

  // Parse from highlights with "[Title]: [Description]" pattern
  const candidates = allBullets.filter((b) => b.length > 50 && b.includes(":")).slice(0, 4);

  if (candidates.length > 0) {
    candidates.forEach((c, idx) => {
      const colonSplit = c.split(":");
      const pTitle = colonSplit[0].trim();
      const pDesc = colonSplit.slice(1).join(":").trim();
      const matchedTech = allMatchedSkills.filter((s) => isSkillInText(s, c)).slice(0, 5);

      projects.push({
        id: `proj-${idx + 1}`,
        title: pTitle,
        description: pDesc,
        technologies: matchedTech.length > 0 ? matchedTech : allMatchedSkills.slice(0, 4),
        metrics: c.match(/~?\d+%\s*[\w\s]{2,20}/)?.[0] || undefined
      });
    });
  } else {
    experience.slice(0, 3).forEach((exp, idx) => {
      projects.push({
        id: `proj-${idx + 1}`,
        title: `${exp.role} Architectural Initiative`,
        description: exp.highlights[0] || `Delivered core systems architecture at ${exp.company}.`,
        technologies: allMatchedSkills.slice(idx * 3, idx * 3 + 4)
      });
    });
  }

  return {
    name,
    title,
    summary,
    location,
    contact: {
      email,
      phone,
      linkedin,
      github,
      website
    },
    skills,
    experience,
    projects: projects.slice(0, 4),
    metrics: metrics.slice(0, 4)
  };
}
