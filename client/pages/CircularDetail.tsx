import { useParams } from "react-router-dom";
import { circulars } from "@/data/circulars";

export default function CircularDetail() {
  const { id } = useParams();
  const c = circulars.find((x) => x.id === id);
  if (!c) return <div>Not found</div>;
  const d = new Date(c.dateISO).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-2xl font-semibold">{c.title}</h1>
      <article className="rounded-lg border bg-card p-5 leading-relaxed">
        {c.content.split("\n").map((p, i) => (
          <p key={i} className="mb-4 last:mb-0">
            {p}
          </p>
        ))}
        <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
          <div>Fr. Armstrong Edison SJ</div>
          <div>{d}</div>
        </div>
      </article>
    </div>
  );
}
