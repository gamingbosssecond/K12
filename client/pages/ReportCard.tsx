import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CloudDownload } from "lucide-react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

const PHOTO_URL =
  "https://cdn.builder.io/api/v1/image/assets%2Fda7abc3321674c79b9af9ccbd12e77ec%2Faf1c670c6b9b4dd2b4cbec2104ce658b?format=webp&width=800";

function RadialProgress({ value }: { value: number }) {
  const size = 140;
  const stroke = 12;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const clamped = Math.max(0, Math.min(100, value));
  const offset = circumference * (1 - clamped / 100);
  return (
    <div className="flex items-center justify-center py-8">
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
          className="text-secondary"
          stroke="currentColor"
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={stroke}
          className="text-blue-600"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          style={{ transition: "stroke-dashoffset 0.2s ease" }}
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-2xl font-semibold">{clamped}%</div>
      </div>
    </div>
  );
}

import { useLocation } from "react-router-dom";

export default function ReportCard() {
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);
  const fileUrl = "/api/report-card";
  const remoteUrl =
    "https://cdn.builder.io/api/v1/image/assets%2F87cdc21a555b449ead0e398a6201639b%2F3362ece5ef4646de9a3832926e453f75?format=webp&width=800";
  const location = useLocation();
  const isAdmit = location.pathname.includes("admit-card");
  const downloadLabel = isAdmit ? "Download Admit Card" : "Download Report Card";
  const [timeoutOpen, setTimeoutOpen] = useState(false);

  const saveAndOpen = (blob: Blob) => {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "report-card.webp";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.open(url, "_blank");
    setTimeout(() => window.URL.revokeObjectURL(url), 2000);
  };

  const tryDirectOpen = () => {
    const a = document.createElement("a");
    a.href = remoteUrl;
    a.download = "report-card.webp";
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.open(remoteUrl, "_blank");
  };

  const handleDownload = async () => {
    try {
      setDownloading(true);
      setProgress(null);
      tryDirectOpen();
    } finally {
      setTimeout(() => setDownloading(false), 300);
    }
  };

  return (
    <div className="mx-auto max-w-md">
      <div className="bg-card rounded-lg border p-0 text-center overflow-hidden">
        <div className="bg-gray-50 dark:bg-gray-800 p-8">
          <img
            src={PHOTO_URL}
            alt="Student"
            className="mx-auto h-64 w-64 rounded-none object-cover border-4 border-white shadow-lg"
          />
        </div>

        <div className="p-6 space-y-2">
          <h2 className="text-2xl font-bold tracking-wide">ABHIJEET RAO</h2>
          <div className="text-sm text-muted-foreground space-y-1">
            <div>Student ID: 10220E6147</div>
            <div>Class: X-B, Roll No. - 01</div>
          </div>
        </div>

        <div className="px-6 pb-6">
          {typeof progress === "number" ? (
            <div className="flex flex-col items-center">
              <RadialProgress value={progress} />
              <div className="text-sm text-muted-foreground -mt-4 mb-4">
                {progress < 100 ? "Downloading..." : "Download complete"}
              </div>
              <Button disabled variant="outline" className="w-full gap-2 py-3">
                <CloudDownload className="h-4 w-4" />
                {downloadLabel}
              </Button>
            </div>
          ) : (
            <Button
              onClick={handleDownload}
              disabled={downloading}
              variant="outline"
              className="w-full gap-2 py-3"
            >
              <CloudDownload className="h-4 w-4" />
              {downloading ? "Preparing..." : downloadLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
