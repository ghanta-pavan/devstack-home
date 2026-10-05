import { parseResumeWithGenericEngine, isSkillInText } from "./genericResumeParser.ts";
import type { ResumeSchema } from "../types/resume.ts";

/**
 * Fallback parser maintained strictly for unit testing compatibility.
 * Utilizes the generic parsing engine without hardcoded data.
 */
export function fallbackParseTextToResume(rawText: string): ResumeSchema {
  return parseResumeWithGenericEngine(rawText);
}

export { isSkillInText };
