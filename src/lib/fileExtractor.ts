"use client";

import { parseResumeText } from "@/lib/geminiParser";

export async function parseDocumentFile(file: File, apiKeyOverride?: string) {
  const fileName = file.name.toLowerCase();
  let text = "";

  if (fileName.endsWith(".txt") || fileName.endsWith(".md") || fileName.endsWith(".json")) {
    text = await file.text();
  } else if (fileName.endsWith(".pdf")) {
    try {
      // Dynamic import pdfjs-dist legacy build for maximum compatibility across browsers
      const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");

      // Configure local worker if in browser
      if (typeof window !== "undefined") {
        pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
      }

      const arrayBuffer = await file.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({
        data: arrayBuffer,
        useSystemFonts: true,
        disableFontFace: true,
        });
      const pdfDoc = await loadingTask.promise;

      let extractedLines: string[] = [];
      for (let i = 1; i <= pdfDoc.numPages; i++) {
        const page = await pdfDoc.getPage(i);
        const textContent = await page.getTextContent();
        const items = (textContent.items as any[]).filter(item => item.str && item.str.trim());

        // Group text items by Y coordinate to preserve true line structure
        let lastY: number | null = null;
        let currentLine = "";

        for (const item of items) {
          const y = Math.round(item.transform[5]);
          if (lastY === null || Math.abs(y - lastY) > 4) {
            if (currentLine.trim()) {
              extractedLines.push(currentLine.trim());
            }
            currentLine = item.str;
            lastY = y;
          } else {
            currentLine += " " + item.str;
          }
        }
        if (currentLine.trim()) {
          extractedLines.push(currentLine.trim());
        }
        extractedLines.push(""); // Page boundary
      }

      text = extractedLines.join("\n").trim();
    } catch (err) {
      console.warn("Primary PDF extraction error, falling back to direct stream parser:", err);
      // Secondary fallback without worker
      try {
        const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");
        pdfjsLib.GlobalWorkerOptions.workerSrc = "";
        const arrayBuffer = await file.arrayBuffer();
        const pdfDoc = await pdfjsLib.getDocument({
          data: arrayBuffer,
          useSystemFonts: true,
          disableFontFace: true,
          }).promise;

        let extractedText = "";
        for (let i = 1; i <= pdfDoc.numPages; i++) {
          const page = await pdfDoc.getPage(i);
          const textContent = await page.getTextContent();
          extractedText += (textContent.items as any[]).map((it: any) => it.str).join(" ") + "\n";
        }
        text = extractedText.trim();
      } catch (innerErr) {
        console.error("All PDF extraction methods failed:", innerErr);
        throw new Error("Unable to extract text from the PDF. Please ensure the PDF has selectable text (not scanned images) or try uploading DOCX/TXT.");
      }
    }
  } else if (fileName.endsWith(".docx")) {
    try {
      const mammoth = await import("mammoth");
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      text = result.value;
    } catch (err) {
      console.warn("Mammoth docx parsing failed", err);
      text = await file.text();
    }
  } else {
    text = await file.text();
  }

  if (!text || text.trim().length < 15) {
    throw new Error("Could not extract readable text from the uploaded file.");
  }

  return parseResumeText(text, apiKeyOverride);
}
