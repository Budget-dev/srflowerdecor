import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Infinite auto-sliding row. direction "left" moves right-to-left, "right" moves left-to-right. */
export function Marquee({
  children,
  direction = "left",
  duration = 30,
  className = "",
}: {
  children: ReactNode;
  direction?: "left" | "right";
  duration?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const from = direction === "left" ? "0%" : "-50%";
  const to = direction === "left" ? "-50%" : "0%";
  return (
    <div
      className={`group relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)] ${className}`}
    >
      <motion.div
        className="flex w-max gap-3 sm:gap-4 will-change-transform"
        initial={{ x: from }}
        animate={reduce ? { x: from } : { x: [from, to] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        <div className="flex shrink-0 gap-3 sm:gap-4">{children}</div>
        <div className="flex shrink-0 gap-3 sm:gap-4" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
