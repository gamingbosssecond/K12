import { RequestHandler } from "express";

// Remote report card PDF URL provided by the user
const REMOTE_PDF = "https://cdn.builder.io/o/assets%2F143921f1af8a425fb2590ed4b35f9a59%2Fe09e8a247fb74b2fa9475fddda4bc7f6?alt=media&token=16d3611c-04fd-4db3-a510-dc497ad72f6c&apiKey=143921f1af8a425fb2590ed4b35f9a59";

export const handleReportCard: RequestHandler = async (_req, res) => {
  try {
    const response = await fetch(REMOTE_PDF);
    if (!response.ok || !response.body) {
      res.status(502).json({ error: "Failed to fetch report card" });
      return;
    }
    const contentLength = response.headers.get("content-length");
    if (contentLength) {
      res.setHeader("Content-Length", contentLength);
    }
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="report-card.pdf"',
    );
    // @ts-ignore - Node streams are acceptable here
    response.body.pipe(res);
  } catch (e) {
    res.status(500).json({ error: "Unable to download report card" });
  }
};
