import { GoogleGenAI } from "@google/genai";
import { ResumeSchema } from "@/types/resume";
import { fallbackParseTextToResume } from "./fallbackParser";

const RESUME_PROMPT = `You are an expert resume parsing engine specialized in extracting high-value executive and senior engineering profile data into a strict JSON schema.

Parse the following resume raw text into a valid JSON object matching this TypeScript interface:

interface ResumeSchema {
  name: string;
  title: string; // e.g. "Principal Infrastructure Architect", "VP of Engineering"
  summary: string; // 2-4 sentences highlighting executive leadership, scale, and technical depth
  location?: string;
  contact: {
    email?: string;
    linkedin?: string;
    github?: string;
    website?: string;
    phone?: string;
    twitter?: string;
  };
  skills: {
    category: string; // e.g. "Languages & Core", "Cloud & Infra", "Leadership & Operations"
    items: string[];
  }[];
  experience: {
    id: string;
    role: string;
    company: string;
    location?: string;
    startDate: string;
    endDate: string;
    highlights: string[];
  }[];
  projects: {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    link?: string;
    metrics?: string;
  }[];
  metrics: {
    id: string;
    label: string; // e.g. "Latency Reduction", "Infra Savings", "Team Managed"
    value: string; // e.g. "64%", "$420k/yr", "25+ Engineers"
    description?: string;
  }[];
}

IMPORTANT RULES:
1. Respond ONLY with valid JSON. Do NOT wrap in markdown code fences (\`\`\`json).
2. Extract quantifiable metrics (percentages, dollar savings, scale numbers, SLAs) into the top-level "metrics" array.
3. Keep highlights crisp and impact-driven.

Resume Text to parse:
`;

export async function parseResumeText(rawText: string, apiKeyOverride?: string): Promise<ResumeSchema> {
  const apiKey = apiKeyOverride || process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  if (!apiKey) {
    console.warn("No Gemini API key supplied. Utilizing heuristic fallback parser.");
    return fallbackParseTextToResume(rawText);
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: RESUME_PROMPT + "\n\n" + rawText,
    });

    const outputText = response.text || "";
    const cleanJsonText = outputText
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/```$/i, "")
      .trim();

    const parsed: ResumeSchema = JSON.parse(cleanJsonText);
    return parsed;
  } catch (err) {
    console.error("Gemini API parsing failed, resorting to fallback parser:", err);
    return fallbackParseTextToResume(rawText);
  }
}
