import { motion, type HTMLMotionProps } from "framer-motion";

export function Reveal({
  delay = 0,
  y = 24,
  ...props
}: HTMLMotionProps<"div"> & { delay?: number; y?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    />
  );
}

export function SectionTitle({
  eyebrow,
  title,
  script,
  sub,
  center,
}: {
  eyebrow?: string;
  title: string;
  script?: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-semibold leading-tight text-foreground sm:text-4xl md:text-5xl">
        {title} {script && <span className="script">{script}</span>}
      </h2>
      {sub && <p className="mt-3 text-sm text-muted-foreground sm:text-base">{sub}</p>}
    </Reveal>
  );
}
