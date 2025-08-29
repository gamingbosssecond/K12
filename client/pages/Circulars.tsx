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
      <div className="divide-y rounded-lg border bg-card">
        {circulars.map((c) => {
          const { day, mon } = formatDate(c.dateISO);
          return (
            <Link
              key={c.id}
              to={`/circulars/${c.id}`}
              className="flex items-center gap-4 p-4 hover:bg-accent/50"
            >
              <div className="flex h-14 w-14 flex-col items-center justify-center rounded bg-[#D6EAFB] text-[#173E6A] border border-[#B9D8F6]">
                <div className="text-lg font-extrabold leading-none">{day}</div>
                <div className="text-[10px] font-semibold tracking-wide uppercase -mt-0.5">
                  {mon}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-base font-semibold leading-tight truncate">
                  {c.title}
                </div>
                <div className="text-sm text-muted-foreground line-clamp-1">
                  {c.excerpt}
                </div>
              </div>
              <div className="text-foreground/60">›</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
