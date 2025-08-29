import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, CloudDownload } from "lucide-react";

const PHOTO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2Fda7abc3321674c79b9af9ccbd12e77ec%2Faf1c670c6b9b4dd2b4cbec2104ce658b?format=webp&width=800";

export default function ReportCard() {
  const [downloading, setDownloading] = useState(false);
  const fileUrl = "/api/report-card";

  const handleDownload = async () => {
    try {
      setDownloading(true);
      const res = await fetch(fileUrl);
      if (!res.ok) throw new Error("Failed to download");
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "admit-card.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <h1 className="mb-6 text-2xl font-semibold">Admit Card</h1>

      <div className="bg-card rounded-lg border p-0 text-center overflow-hidden">
        {/* Student Photo */}
        <div className="bg-gray-50 dark:bg-gray-800 p-8">
          <img
            src={PHOTO_URL}
            alt="Student"
            className="mx-auto h-64 w-64 rounded-none object-cover border-4 border-white shadow-lg"
          />
        </div>

        {/* Student Details */}
        <div className="p-6 space-y-2">
          <h2 className="text-2xl font-bold tracking-wide">ABHIJEET RAO</h2>
          <div className="text-sm text-muted-foreground space-y-1">
            <div>Student ID: 10220E6147</div>
            <div>Class: X-B, Roll No. - 01</div>
          </div>
        </div>

        {/* Download Button */}
        <div className="px-6 pb-6">
          <Button
            onClick={handleDownload}
            disabled={downloading}
            variant="outline"
            className="w-full gap-2 py-3"
          >
            <CloudDownload className="h-4 w-4" />
            {downloading ? "Downloading..." : "Download Admit Card"}
          </Button>
        </div>
      </div>
    </div>
  );
}
