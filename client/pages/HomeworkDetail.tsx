import { useParams, Link } from "react-router-dom";
import { homework } from "@/data/homework";
import { ArrowLeft, ExternalLink, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomeworkDetail() {
  const { id } = useParams();
  const item = homework.find((h) => h.id === id);

  if (!item) {
    return (
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-2xl font-semibold mb-4">Homework Not Found</h1>
        <Link to="/homework" className="text-blue-500 hover:underline">
          ← Back to Homework
        </Link>
      </div>
    );
  }

  if (item.id === "7") {
    // Economics homework with document
    return (
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <Link
            to="/homework"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Homework
          </Link>
        </div>

        <h1 className="mb-6 text-2xl font-semibold">Homework - Economics</h1>

        <div className="bg-card rounded-lg border p-6 space-y-6">
          <div className="flex items-start gap-4">
            <img
              src={item.avatar}
              alt={item.teacher}
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{item.subject}</h3>
              <div className="text-sm text-muted-foreground">
                {item.teacher}
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                {item.date}
              </div>
            </div>
          </div>

          <div className="border-t pt-4">
            <p className="text-sm leading-relaxed whitespace-pre-line mb-4">
              {item.content}
            </p>

            {item.topics && (
              <div className="space-y-3">
                {item.topics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-background rounded">
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14,2 14,8 20,8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10,9 9,9 8,9" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium">{topic.title}</span>
                    </div>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (item.id === "8") {
    // IT homework with multiple topics and links
    return (
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <Link
            to="/homework"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Homework
          </Link>
        </div>

        <h1 className="mb-6 text-2xl font-semibold">
          Homework - Information Technology (IT)
        </h1>

        <div className="text-sm text-muted-foreground mb-4">
          EvsJpXounsitug/view?usp=drivesdk
        </div>

        <div className="space-y-6">
          {item.topics?.map((topic, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold text-center mb-4">
                {topic.title}
              </h2>

              <div className="space-y-3">
                {topic.links.map((link, linkIndex) => (
                  <div key={linkIndex} className="p-4 bg-muted/30 rounded-lg">
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 break-all text-sm"
                    >
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Default homework detail view
  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6">
        <Link
          to="/homework"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Homework
        </Link>
      </div>

      <h1 className="mb-6 text-2xl font-semibold">Homework - {item.subject}</h1>

      <div className="bg-card rounded-lg border p-6">
        <div className="flex items-start gap-4 mb-4">
          <img
            src={item.avatar}
            alt={item.teacher}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-foreground">{item.subject}</h3>
            <div className="text-sm text-muted-foreground">{item.teacher}</div>
            <div className="text-xs text-muted-foreground mt-1">
              {item.date}
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <p className="text-sm leading-relaxed whitespace-pre-line">
            {item.content}
          </p>
        </div>
      </div>
    </div>
  );
}
