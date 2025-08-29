import { useNotifications } from "@/contexts/NotificationContext";
import { cn } from "@/lib/utils";

const PRINCIPAL_IMG = "https://cdn.builder.io/api/v1/image/assets%2F87cdc21a555b449ead0e398a6201639b%2F0356abbae2b64b0ab8a599cb1148f55f?format=webp&width=800";

export default function Notifications() {
  const { notifications, markAsSeen } = useNotifications();

  const handleNotificationClick = (id: string, seen: boolean) => {
    if (!seen) {
      markAsSeen(id);
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <div className="divide-y rounded-lg border bg-card">
        {notifications.map((n) => (
          <div
            key={n.id}
            className={cn(
              "flex items-start gap-4 p-4 cursor-pointer transition-colors hover:bg-accent/50",
              !n.seen &&
                "bg-blue-50 border-l-4 border-l-blue-500 dark:bg-blue-950/20",
            )}
            onClick={() => handleNotificationClick(n.id, n.seen)}
          >
            {n.author.toLowerCase().includes("armstrong") ? (
              <img
                src={PRINCIPAL_IMG}
                alt={n.author}
                className="h-10 w-10 shrink-0 rounded-full object-cover"
              />
            ) : (
              <div className="h-10 w-10 shrink-0 rounded-full bg-muted" />
            )}
            <div className="flex-1 text-sm leading-relaxed">
              <p className={cn(!n.seen && "font-medium")}>{n.message}</p>
              <div className="mt-1 text-xs text-muted-foreground">
                {n.author}
              </div>
            </div>
            <div className="flex flex-col items-end gap-1">
              <div className="whitespace-nowrap text-xs text-muted-foreground">
                {n.time}
              </div>
              {!n.seen && <div className="h-2 w-2 rounded-full bg-blue-500" />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
