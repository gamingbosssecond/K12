import { useNotifications } from "@/contexts/NotificationContext";
import { cn } from "@/lib/utils";

export default function Notifications() {
  const { notifications, markAsSeen } = useNotifications();

  const handleNotificationClick = (id: string, seen: boolean) => {
    if (!seen) {
      markAsSeen(id);
    }
  };

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-4 text-2xl font-semibold">Notifications</h1>
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
            <div className="h-10 w-10 shrink-0 rounded-full bg-muted" />
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
