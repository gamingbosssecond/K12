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
  const PRINCIPAL_IMG =
    "https://cdn.builder.io/api/v1/image/assets%2F87cdc21a555b449ead0e398a6201639b%2F0356abbae2b64b0ab8a599cb1148f55f?format=webp&width=800";
  return (
    <div className="mx-auto max-w-3xl">
      <article className="rounded-lg border bg-card p-5 leading-relaxed">
        {c.content.split("\n").map((p, i) => (
          <p key={i} className="mb-4 last:mb-0">
            {p}
          </p>
        ))}
        <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <img
              src={PRINCIPAL_IMG}
              alt="Fr. Armstrong Edison SJ"
              className="h-8 w-8 rounded-full object-cover"
            />
            <span>Fr. Armstrong Edison SJ</span>
          </div>
          <div>{d}</div>
        </div>
      </article>
    </div>
  );
}
