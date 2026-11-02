import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronRight,
  Clock,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { getService, PROCESS, SERVICES, waLink } from "@/lib/site";
import { Reveal, SectionTitle } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Marquee } from "@/components/site/Marquee";
import { CtaBanner } from "@/components/site/Footer";
import { WhatsAppIcon } from "@/components/site/Icons";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { slug: service.slug };
  },
  head: ({ loaderData }) => {
    const s = loaderData ? getService(loaderData.slug) : undefined;
    if (!s)
      return {
        meta: [
          { title: "Service not found — SR Flower Decoration" },
          { name: "robots", content: "noindex" },
        ],
      };
    return {
      meta: [
        { title: `${s.title} — SR Flower Decoration` },
        { name: "description", content: s.intro },
        { property: "og:title", content: `${s.title} — SR Flower Decoration` },
        { property: "og:description", content: s.short },
      ],
    };
  },
  component: ServicePage,
});

function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto mt-8 max-w-3xl divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-secondary/60"
            >
              <span className="text-sm font-semibold text-foreground sm:text-base">{f.q}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="body"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function ServicePage() {
  const { slug } = Route.useLoaderData();
  const s = getService(slug)!;
  const others = SERVICES.filter((o) => o.slug !== s.slug).slice(0, 4);

  return (
    <>
      <section className="px-4 pt-6 md:pt-10">
        <div className="mx-auto max-w-7xl">
          <nav className="flex items-center gap-1 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/services" className="hover:text-primary">
              Services
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-foreground">{s.title}</span>
          </nav>
          <div className="mt-6 grid items-center gap-8 md:grid-cols-2 md:gap-12">
            <motion.img
              key={s.slug}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              src={s.image}
              alt={s.title}
              width={1024}
              height={768}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
            />
            <motion.div
              key={s.slug + "t"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="eyebrow">Starting from {s.startingPrice}</p>
              <h1 className="mt-2 text-4xl font-semibold sm:text-5xl">{s.title}</h1>
              <p className="mt-4 text-foreground/80">{s.intro}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {s.includes.map((x) => (
                  <li key={x} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-gold" />
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl">
                  <Link to="/book" search={{ service: s.slug }}>
                    Book {s.title} <ArrowRight />
                  </Link>
                </Button>
                <Button asChild variant="heroOutline" size="xl">
                  <a
                    href={waLink(`Hi! I'm interested in ${s.title}. Please share details.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon /> Ask on WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="pb-4 pt-12 md:pb-8 md:pt-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            center
            eyebrow="Our work"
            title="See it"
            script="in photos"
            sub="Real setups by our team — tap any photo to ask about the same design."
          />
          <Marquee direction="right" duration={38} className="mt-8">
            {s.gallery.map((g, i) => (
              <a
                key={g + i}
                href={waLink(
                  `Hi! I like this ${s.title} photo (${i + 1}). Can you do something like this?`,
                )}
                target="_blank"
                rel="noreferrer"
                className="block w-[70vw] shrink-0 overflow-hidden rounded-2xl border border-border shadow-soft sm:w-[340px]"
              >
                <img
                  src={g}
                  alt={`${s.title} setup ${i + 1}`}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover"
                />
              </a>
            ))}
          </Marquee>
        </div>
      </section>

      <section className="bg-secondary/50 px-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            center
            eyebrow="How it works"
            title="Four easy"
            script="steps"
            sub="No long forms, no advance pressure — just one message."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.07}
                className="rounded-3xl border border-border bg-card p-5 shadow-soft"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary font-serif text-lg font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              {
                icon: Clock,
                t: "Same-day service",
                s: "Order before 4 PM for delivery or setup the same day.",
              },
              {
                icon: MapPin,
                t: "We come to you",
                s: "Setup at your home, hall or venue across R.R. district.",
              },
              {
                icon: ShieldCheck,
                t: "Pay after setup",
                s: "Balance only once you are happy with the work.",
              },
            ].map((x) => (
              <div
                key={x.t}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
              >
                <x.icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <div>
                  <p className="text-sm font-semibold">{x.t}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{x.s}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            center
            eyebrow="Packages"
            title="Choose Your"
            script="Package"
            sub="All packages can be customised — just tell us on WhatsApp."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {s.packages.map((p, i) => {
              const featured = i === 1;
              return (
                <Reveal
                  key={p.name}
                  delay={i * 0.08}
                  className={`flex flex-col rounded-3xl border p-6 ${featured ? "border-primary bg-primary text-primary-foreground shadow-elegant" : "border-border bg-card shadow-soft"}`}
                >
                  {featured && (
                    <span className="mb-3 self-start rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-gold-foreground">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-semibold">{p.name}</h3>
                  <p
                    className={`mt-1 font-serif text-4xl font-semibold ${featured ? "text-gold" : "text-primary"}`}
                  >
                    {p.price}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2 text-sm">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant={featured ? "gold" : "hero"} size="xl" className="mt-6">
                    <Link to="/book" search={{ service: s.slug, pkg: p.name }}>
                      Book {p.name}
                    </Link>
                  </Button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 px-4 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle center eyebrow="Questions" title="Good to" script="know" />
          <Faq items={s.faq} />
          <Reveal className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">Still unsure about price or timing?</p>
            <Button asChild variant="heroOutline" size="xl" className="mt-3">
              <a
                href={waLink(`Hi! I have a question about ${s.title}.`)}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon /> Ask us on WhatsApp
              </a>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-7xl">
          <SectionTitle title="Other" script="Services" />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {others.map((o) => (
              <ServiceCard key={o.slug} s={o} />
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
