import { motion } from "framer-motion";

export function PageHero({
  eyebrow,
  title,
  script,
  image,
  sub,
}: {
  eyebrow: string;
  title: string;
  script?: string;
  image: string;
  sub?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt=""
        width={1280}
        height={960}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl text-background"
        >
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-6xl">
            {title} {script && <span className="script">{script}</span>}
          </h1>
          {sub && <p className="mt-4 text-sm opacity-85 sm:text-base">{sub}</p>}
        </motion.div>
      </div>
    </section>
  );
}
