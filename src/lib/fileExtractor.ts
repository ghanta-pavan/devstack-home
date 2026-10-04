import { parseResumeText } from "@/lib/geminiParser";
import { fallbackParseTextToResume } from "@/lib/fallbackParser";

export async function parseDocumentFile(file: File, apiKeyOverride?: string) {
  const fileName = file.name.toLowerCase();
  let text = "";

  if (fileName.endsWith(".txt") || fileName.endsWith(".md") || fileName.endsWith(".json")) {
    text = await file.text();
  } else if (fileName.endsWith(".pdf")) {
    try {
      // Dynamic import pdfjs-dist for browser execution
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.mjs`;

      const arrayBuffer = await file.arrayBuffer();
      const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
      const pdfDoc = await loadingTask.promise;

      let extractedText = "";
      for (let i = 1; i <= pdfDoc.numPages; i++) {
        const page = await pdfDoc.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          .map((item: any) => item.str)
          .join(" ");
        extractedText += pageText + "\n";
      }
      text = extractedText;
    } catch (err) {
      console.warn("PDF extraction error, falling back to arrayBuffer string slice", err);
      const buffer = await file.arrayBuffer();
      text = new TextDecoder().decode(buffer);
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

  if (!text.trim()) {
    throw new Error("Could not extract readable text from uploaded file.");
  }

  return parseResumeText(text, apiKeyOverride);
}
