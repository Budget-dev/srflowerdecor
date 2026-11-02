import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flower2, HeartHandshake, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import arch from "@/assets/about-arch.jpg";
import garland from "@/assets/service-garland.jpg";
import stage from "@/assets/service-stage.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal, SectionTitle } from "@/components/site/Reveal";
import { CtaBanner } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — SR Flower Decoration" },
      {
        name: "description",
        content:
          "The story behind SR Flower Decoration: fresh florals, creative designs and stress-free celebrations in Vijayawada.",
      },
      { property: "og:title", content: "About SR Flower Decoration" },
      {
        property: "og:description",
        content: "Florists and decorators for weddings, parties and functions in Vijayawada.",
      },
    ],
  }),
  component: About,
});

const STATS = [
  { n: "10+", l: "Years of craft" },
  { n: "2,500+", l: "Events decorated" },
  { n: "100%", l: "Fresh flowers" },
  { n: "24/7", l: "WhatsApp support" },
];

const VALUES = [
  {
    icon: Flower2,
    t: "Freshness first",
    d: "Flowers sourced daily from local markets and strung the same morning.",
  },
  {
    icon: HeartHandshake,
    t: "Personal care",
    d: "We listen to your story and design around your colours and traditions.",
  },
  {
    icon: Clock,
    t: "Always on time",
    d: "Our team arrives early so everything is ready before your guests.",
  },
  {
    icon: Award,
    t: "Honest pricing",
    d: "Clear packages with no surprises — customised to your budget.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Crafting Celebrations,"
        script="One Flower at a Time"
        image={arch}
      />
      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <Reveal className="grid grid-cols-2 gap-3">
            <img
              src={garland}
              alt="Jasmine and rose garlands"
              loading="lazy"
              width={1024}
              height={768}
              className="aspect-[3/4] w-full rounded-2xl object-cover"
            />
            <img
              src={stage}
              alt="Stage decoration"
              loading="lazy"
              width={1024}
              height={768}
              className="mt-10 aspect-[3/4] w-full rounded-2xl object-cover"
            />
          </Reveal>
          <div>
            <SectionTitle
              eyebrow="Our Story"
              title="Rooted in Tradition,"
              script="Designed for Today"
            />
            <Reveal delay={0.1} className="mt-5 space-y-4 text-sm text-foreground/80 sm:text-base">
              <p>
                SR Flower Decoration began as a dedicated floral craft and decor service in
                Vijayawada, stringing jasmine and marigold garlands for weddings, festivals and
                celebrations.
              </p>
              <p>
                Today we decorate weddings, receptions, haldi, mehendi, birthdays, car decorations
                and special events across Vijayawada — while keeping the same handmade care and
                fresh flowers that started it all.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-7">
              <Button asChild variant="hero" size="xl">
                <Link to="/services">
                  Explore Services <ArrowRight />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="bg-primary px-4 py-12 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.06} className="text-center">
              <p className="font-serif text-4xl font-semibold text-gold sm:text-5xl">{s.n}</p>
              <p className="mt-1 text-xs uppercase tracking-widest opacity-80">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle center eyebrow="Why Choose Us" title="What We" script="Stand For" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v, i) => (
              <Reveal
                key={v.t}
                delay={i * 0.06}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="grid h-12 w-12 place-items-center rounded-full bg-accent text-gold">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-xl font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
