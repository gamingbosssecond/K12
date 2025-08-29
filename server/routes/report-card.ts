import { RequestHandler } from "express";

// Remote report card file URL provided by the user (image to be downloaded/opened)
const REMOTE_FILE = "https://cdn.builder.io/api/v1/image/assets%2F87cdc21a555b449ead0e398a6201639b%2F3362ece5ef4646de9a3832926e453f75?format=webp&width=800";

export const handleReportCard: RequestHandler = async (_req, res) => {
  try {
    const response = await fetch(REMOTE_FILE);
    if (!response.ok || !response.body) {
      res.status(502).json({ error: "Failed to fetch report card" });
      return;
    }
    const contentLength = response.headers.get("content-length");
    if (contentLength) {
      res.setHeader("Content-Length", contentLength);
    }

    const contentType = response.headers.get("content-type") || "application/octet-stream";
    res.setHeader("Content-Type", contentType);

    let ext = "bin";
    if (contentType.includes("pdf")) ext = "pdf";
    else if (contentType.includes("png")) ext = "png";
    else if (contentType.includes("jpeg")) ext = "jpg";
    else if (contentType.includes("webp")) ext = "webp";

    res.setHeader(
      "Content-Disposition",
      `attachment; filename="report-card.${ext}"`,
    );
    // @ts-ignore - Node streams are acceptable here
    response.body.pipe(res);
  } catch (e) {
    res.status(500).json({ error: "Unable to download report card" });
  }
};
