import { Link } from "react-router-dom";
import { circulars } from "@/data/circulars";

function formatDate(dateISO: string) {
  const d = new Date(dateISO);
  const day = d.toLocaleDateString(undefined, { day: "2-digit" });
  const mon = d.toLocaleDateString(undefined, { month: "short" }).toUpperCase();
  return { day, mon };
}

export default function Circulars() {
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-4 text-2xl font-semibold">Circulars/Notice</h1>
      <div className="divide-y rounded-lg border bg-card">
        {circulars.map((c) => {
          const { day, mon } = formatDate(c.dateISO);
          return (
            <Link key={c.id} to={`/circulars/${c.id}`} className="flex items-center gap-4 p-4 hover:bg-accent">
              <div className="flex h-14 w-14 flex-col items-center justify-center rounded bg-secondary text-center">
                <div className="text-lg font-bold leading-none">{day}</div>
                <div className="text-[10px] tracking-wide text-muted-foreground">{mon}</div>
              </div>
              <div className="flex-1">
                <div className="text-base font-semibold leading-tight">{c.title}</div>
                <div className="text-sm text-muted-foreground">{c.excerpt}</div>
              </div>
              <div className="text-foreground/60">›</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
