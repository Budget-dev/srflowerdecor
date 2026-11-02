import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Flower2,
  Gem,
  HandHeart,
  MapPin,
  CalendarCheck,
  Palette,
  ShieldCheck,
  Sparkles,
  Star,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero-couple.jpg";
import arch from "@/assets/about-arch.jpg";
import couple from "@/assets/testimonial-couple.jpg";
import { BOUQUETS, SERVICES, THEMES, waLink } from "@/lib/site";
import { Marquee } from "@/components/site/Marquee";
import { Reveal, SectionTitle } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CtaBanner } from "@/components/site/Footer";
import { WhatsAppIcon } from "@/components/site/Icons";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SR Flower Decoration — Wedding, Stage & Car Flower Decoration" },
      {
        name: "description",
        content:
          "We undertake all parties and functions: wedding garlands, car, stage and event floral decoration in Vijayawada.",
      },
      {
        property: "og:title",
        content: "SR Flower Decoration — Floral Decoration for Every Occasion",
      },
      {
        property: "og:description",
        content:
          "Wedding garlands, car decor, stage setups and complete event floral arrangements in Vijayawada.",
      },
    ],
  }),
  component: Index,
});

const FEATURES = [
  { icon: Flower2, title: "Fresh Bouquets", text: "Hand-tied daily, delivered fresh." },
  { icon: Sparkles, title: "Full Wedding Planning", text: "End-to-end floral solutions." },
  { icon: Palette, title: "Theme & Design", text: "Unique themes and breathtaking setups." },
  { icon: HandHeart, title: "Fresh Flowers", text: "Strung the same morning, every time." },
  { icon: MapPin, title: "Destination Weddings", text: "Memorable setups, anywhere you wish." },
  {
    icon: CalendarCheck,
    title: "On-Day Coordination",
    text: "Relax and enjoy — we handle the rest.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The decoration was beyond our expectations! Everything was so beautifully done, and the team was professional throughout.",
    name: "Riyaz & Ayesha",
    tag: "Wedding Ceremony",
  },
  {
    quote:
      "Our car and stage looked straight out of a magazine. On time, fresh flowers and very fair pricing.",
    name: "Karthik & Sneha",
    tag: "Reception",
  },
  {
    quote: "Booked the haldi and mehendi decor on WhatsApp — super easy and gorgeous result.",
    name: "Fatima S.",
    tag: "Haldi & Mehendi",
  },
];

function Index() {
  return (
    <>
      <Hero />
      <Features />
      <Bouquets />
      <About />
      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            center
            title="Our"
            script="Services"
            sub="A complete range of floral solutions for your special moments."
          />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <ServiceCard s={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Themes />
      <Testimonials />
      <CtaBanner />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-cream-gradient">
      <div className="absolute inset-x-0 top-0 -z-10 h-[360px] md:inset-y-0 md:left-[40%] md:h-auto">
        <motion.img
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          src={hero}
          alt="Indian bride and groom with jasmine garlands"
          width={1280}
          height={1280}
          fetchPriority="high"
          className="h-full w-full object-cover object-[60%_20%]"
        />
        <div className="hero-fade absolute inset-0" />
      </div>
      <div className="mx-auto flex min-h-0 max-w-7xl flex-col justify-end px-4 pb-10 pt-[300px] md:min-h-[600px] md:justify-center md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl"
        >
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-gold" /> Flowers for your special occasions
          </p>
          <h1 className="mt-4 text-[2.35rem] font-semibold leading-[1.02] text-foreground sm:text-6xl">
            We Undertake All Party's and Functions{" "}
            <span className="script block text-[3.4rem] sm:text-7xl">Orders</span>
          </h1>
          <p className="mt-5 max-w-md text-base text-foreground/75">
            Fresh flower bouquets, wedding garlands, car & stage decorations and complete event
            floral arrangements.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-2.5 sm:flex sm:gap-3">
            <Button asChild variant="hero" size="xl" className="px-4">
              <Link to="/book">
                Book Order <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl" className="px-4">
              <a
                href={waLink("Hi! I'd like to know more about your flower decoration.")}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon /> WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="relative z-10 -mt-2 py-4 md:py-8">
      <Marquee duration={28}>
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="flex w-[240px] shrink-0 items-center gap-3 rounded-2xl border border-border/70 bg-card/90 p-3 shadow-soft backdrop-blur sm:w-[280px] sm:p-4"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-gold">
              <f.icon className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h3 className="truncate text-base font-semibold leading-tight">{f.title}</h3>
              <p className="truncate text-xs text-muted-foreground">{f.text}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

function Bouquets() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto flex max-w-7xl items-end justify-between gap-4 px-4">
        <SectionTitle
          eyebrow="Our Signature"
          title="Fresh Flower"
          script="Bouquets"
          sub="Hand-tied every morning for birthdays, anniversaries & every reason to smile."
        />
        <Link
          to="/services/$slug"
          params={{ slug: "flower-bouquets" }}
          className="hidden shrink-0 items-center gap-1 text-sm font-semibold text-primary sm:flex"
        >
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <Marquee direction="right" duration={34} className="mt-8">
        {[...BOUQUETS, ...BOUQUETS].map((b, i) => (
          <div
            key={b.title + i}
            className="w-[200px] shrink-0 overflow-hidden rounded-3xl border border-border bg-card shadow-soft sm:w-[250px]"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={b.image}
                alt={b.title}
                loading="lazy"
                width={768}
                height={960}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="truncate text-lg font-semibold leading-tight">{b.title}</h3>
              <div className="mt-2 flex items-center justify-between gap-2">
                <span className="font-semibold text-primary">{b.price}</span>
                <a
                  href={waLink(`Hi! I'd like to order the "${b.title}" bouquet (${b.price}).`)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground"
                >
                  <WhatsAppIcon className="h-3.5 w-3.5" /> Order
                </a>
              </div>
            </div>
          </div>
        ))}
      </Marquee>
      <div className="mt-6 px-4 text-center sm:hidden">
        <Button asChild variant="heroOutline" size="xl">
          <Link to="/services/$slug" params={{ slug: "flower-bouquets" }}>
            View all bouquets <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}

function About() {
  const points = [
    { icon: Gem, t: "Personalized Approach" },
    { icon: Sparkles, t: "Creative Designs" },
    { icon: ShieldCheck, t: "Trusted Vendors" },
    { icon: HandHeart, t: "Stress-Free Experience" },
  ];
  return (
    <section className="px-4 py-14 md:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-2 md:gap-14">
        <Reveal className="relative">
          <img
            src={arch}
            alt="Floral mandap by a lake at sunset"
            loading="lazy"
            width={1280}
            height={960}
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
          />
          <p className="script absolute left-4 top-4 rounded-full bg-background/85 px-4 py-1 text-lg backdrop-blur">
            Because every detail matters…
          </p>
        </Reveal>
        <div>
          <SectionTitle
            eyebrow="About SR Flower Decoration"
            title="More Than Planners, We're Your"
            script="Wedding Partners"
            sub="We believe every celebration is unique. With years of experience, we bring creativity, freshness and perfection to every occasion."
          />
          <Reveal delay={0.1} className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {points.map((p) => (
              <div key={p.t} className="flex flex-col items-center text-center">
                <p.icon className="h-6 w-6 text-gold" />
                <span className="mt-2 text-xs font-medium">{p.t}</span>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.15} className="mt-7">
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/about">
                Our Story <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Themes() {
  return (
    <section className="bg-secondary/50 py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <SectionTitle eyebrow="Wedding Themes" title="Themes That" script="Speak Your Style" />
      </div>
      <Marquee duration={32} className="mt-8">
        {[...THEMES, ...THEMES].map((t, i) => (
          <Link
            to="/gallery"
            key={t.title + i}
            className="group relative w-[220px] shrink-0 overflow-hidden rounded-3xl sm:w-[280px]"
          >
            <img
              src={t.image}
              alt={t.title}
              loading="lazy"
              width={1024}
              height={768}
              className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/80 to-transparent p-4 pt-16">
              <h3 className="text-2xl font-semibold text-background">{t.title}</h3>
            </div>
          </Link>
        ))}
      </Marquee>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, []);
  const t = TESTIMONIALS[i]!;
  return (
    <section className="px-4 py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1fr_1.4fr]">
        <SectionTitle
          title="Real Stories,"
          script="Beautiful Memories"
          sub="Hear from happy clients who trusted SR Flower Decoration with their special moments."
        />
        <Reveal className="relative rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
            <img
              src={couple}
              alt="Happy couple"
              loading="lazy"
              width={816}
              height={816}
              className="h-24 w-24 shrink-0 rounded-full object-cover ring-4 ring-accent"
            />
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="min-w-0"
            >
              <Quote className="h-7 w-7 text-gold" />
              <p className="mt-2 text-sm text-foreground/80 sm:text-base">{t.quote}</p>
              <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p className="font-semibold">— {t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.tag}</p>
                </div>
                <div className="flex text-gold">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          <div className="mt-5 flex justify-center gap-2">
            {TESTIMONIALS.map((_, k) => (
              <button
                key={k}
                aria-label={`Testimonial ${k + 1}`}
                onClick={() => setI(k)}
                className={`h-2 rounded-full transition-all ${k === i ? "w-6 bg-gold" : "w-2 bg-border"}`}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
