import { NextRequest, NextResponse } from "next/server";
import { parseResumeText } from "@/lib/geminiParser";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text, apiKey } = body;

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Missing or invalid 'text' parameter in request body." },
        { status: 400 }
      );
    }

    const parsedResume = await parseResumeText(text, apiKey);
    return NextResponse.json({ success: true, data: parsedResume });
  } catch (error: any) {
    console.error("API Route /api/parse-resume error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to process resume parsing request." },
      { status: 500 }
    );
  }
}
