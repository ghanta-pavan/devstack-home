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
  } catch (error: unknown) {
    console.error("API Route /api/parse-resume error:", error);
    const errorMessage = error instanceof Error ? error.message : "Failed to process resume parsing request.";
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
