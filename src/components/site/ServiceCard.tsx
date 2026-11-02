import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/lib/site";

export function ServiceCard({ s }: { s: Service }) {
  return (
    <Link
      to="/services/$slug"
      params={{ slug: s.slug }}
      className="group block overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={s.image}
          alt={s.title}
          loading="lazy"
          width={1024}
          height={768}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between gap-2 p-3 sm:p-4">
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold leading-tight sm:text-xl">{s.title}</h3>
          <p className="text-xs text-muted-foreground">From {s.startingPrice}</p>
        </div>
        <ArrowUpRight className="h-5 w-5 shrink-0 text-gold transition-transform group-hover:rotate-45" />
      </div>
    </Link>
  );
}
