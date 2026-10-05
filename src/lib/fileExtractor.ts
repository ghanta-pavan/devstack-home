"use client";

import { parseResumeWithGenericEngine } from "@/lib/genericResumeParser";

/**
 * Client-side document extractor & generic resume parser.
 * Extracts text from PDF, DOCX, or TXT files and parses them dynamically
 * with 0 hardcoded values and 0 external LLM dependencies.
 *
 * If the file cannot be read or lacks selectable text, it throws a user-facing
 * error rather than masking failures with dummy data.
 */
export async function parseDocumentFile(file: File) {
  const fileName = file.name.toLowerCase();
  let text = "";

  if (fileName.endsWith(".txt") || fileName.endsWith(".md") || fileName.endsWith(".json")) {
    try {
      text = await file.text();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      throw new Error(`Failed to read text file: ${msg}`);
    }
  } else if (fileName.endsWith(".pdf")) {
    try {
      const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");

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

      if (!pdfDoc || pdfDoc.numPages === 0) {
        throw new Error("The PDF document has 0 pages or could not be loaded.");
      }

      let extractedLines: string[] = [];
      for (let i = 1; i <= pdfDoc.numPages; i++) {
        const page = await pdfDoc.getPage(i);
        const textContent = await page.getTextContent();
        const items = (textContent.items as any[]).filter(
          (item) => item.str && item.str.trim()
        );

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
        extractedLines.push(""); // Page boundary separation
      }

      text = extractedLines.join("\n").trim();
    } catch (err: unknown) {
      console.error("PDF text extraction error:", err);
      // Secondary attempt without worker before failing
      try {
        const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");
        pdfjsLib.GlobalWorkerOptions.workerSrc = "";
        const arrayBuffer = await file.arrayBuffer();
        const pdfDoc = await pdfjsLib.getDocument({
          data: arrayBuffer,
          useSystemFonts: true,
          disableFontFace: true,
        }).promise;

        let secondaryText = "";
        for (let i = 1; i <= pdfDoc.numPages; i++) {
          const page = await pdfDoc.getPage(i);
          const textContent = await page.getTextContent();
          secondaryText +=
            (textContent.items as any[]).map((it: any) => it.str).join(" ") + "\n";
        }
        text = secondaryText.trim();
      } catch (innerErr: unknown) {
        const errMsg =
          innerErr instanceof Error ? innerErr.message : "Unknown extraction error";
        throw new Error(
          `Unable to extract text from this PDF (${errMsg}). Please ensure the file has selectable text (not scanned images) and is not password protected.`
        );
      }
    }
  } else if (fileName.endsWith(".docx")) {
    try {
      const mammoth = await import("mammoth");
      const arrayBuffer = await file.arrayBuffer();
      const result = await mammoth.extractRawText({ arrayBuffer });
      text = result.value;
    } catch (err: unknown) {
      const errMsg = err instanceof Error ? err.message : String(err);
      throw new Error(`Failed to extract text from Word DOCX file: ${errMsg}`);
    }
  } else {
    throw new Error(
      `Unsupported file format: ${fileName}. Please upload a PDF, DOCX, or TXT resume.`
    );
  }

  // Validate that meaningful text was extracted
  if (!text || text.trim().length < 40) {
    throw new Error(
      "No readable text found in the uploaded file. Please ensure the document is not an image-only scan and contains standard resume text."
    );
  }

  // Run dynamic generic parsing - strictly no hardcoded fallback data
  return parseResumeWithGenericEngine(text);
}
