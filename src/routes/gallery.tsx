import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import arch from "@/assets/about-arch.jpg";
import hero from "@/assets/hero-couple.jpg";
import { SERVICES, THEMES } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { CtaBanner } from "@/components/site/Footer";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — SR Flower Decoration" },
      {
        name: "description",
        content: "Browse our wedding, stage, car and event floral decoration work in Vijayawada.",
      },
      { property: "og:title", content: "Gallery — SR Flower Decoration" },
      {
        property: "og:description",
        content: "Real setups from weddings, receptions and functions in Vijayawada.",
      },
    ],
  }),
  component: Gallery,
});

const ITEMS = [
  { src: hero, t: "Bridal Garlands", c: "Weddings" },
  ...SERVICES.map((s) => ({
    src: s.image,
    t: s.title,
    c: s.slug.includes("car") ? "Car" : s.slug.includes("party") ? "Parties" : "Weddings",
  })),
  ...THEMES.map((t) => ({ src: t.image, t: t.title, c: "Themes" })),
  { src: arch, t: "Lakeside Mandap", c: "Themes" },
];
const CATS = ["All", "Weddings", "Themes", "Car", "Parties"];

function Gallery() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<null | (typeof ITEMS)[number]>(null);
  const list = cat === "All" ? ITEMS : ITEMS.filter((i) => i.c === cat);
  return (
    <>
      <PageHero eyebrow="Gallery" title="Moments We've" script="Decorated" image={arch} />
      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4">
            {CATS.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`shrink-0 rounded-full border px-5 py-2 text-sm font-medium transition-colors ${cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground"}`}
              >
                {c}
              </button>
            ))}
          </div>
          <motion.div layout className="mt-8 columns-2 gap-3 sm:gap-4 lg:columns-3">
            <AnimatePresence>
              {list.map((it) => (
                <motion.button
                  layout
                  key={it.t}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  onClick={() => setOpen(it)}
                  className="group relative mb-3 block w-full overflow-hidden rounded-2xl sm:mb-4"
                >
                  <img
                    src={it.src}
                    alt={it.t}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/75 to-transparent p-3 pt-10 text-left font-serif text-lg text-background">
                    {it.t}
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-50 grid place-items-center bg-foreground/90 p-4"
          >
            <button
              aria-label="Close"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-background text-primary"
            >
              <X />
            </button>
            <motion.img
              initial={{ scale: 0.94 }}
              animate={{ scale: 1 }}
              src={open.src}
              alt={open.t}
              className="max-h-[85vh] rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <CtaBanner />
    </>
  );
}
