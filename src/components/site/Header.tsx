import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Phone, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, waLink } from "@/lib/site";
import { LotusLogo, WhatsAppIcon } from "./Icons";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <div className="hidden bg-primary text-primary-foreground md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-2 text-xs">
          <p className="flex min-w-0 items-center gap-2">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-gold" />
            <span className="truncate">{BUSINESS.address}</span>
          </p>
          <div className="flex shrink-0 items-center gap-5">
            {BUSINESS.phones.map((p) => (
              <a
                key={p}
                href={`tel:+91${p.replace(/\s+/g, "")}`}
                className="flex items-center gap-1.5 hover:text-gold"
              >
                <Phone className="h-3.5 w-3.5 text-gold" /> {p}
              </a>
            ))}
            <a
              href={waLink("Hi SR Flower Decor, I'd like to enquire.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-gold"
            >
              <WhatsAppIcon className="h-4 w-4" /> Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "border-b border-border/60 bg-background/80 shadow-soft backdrop-blur-xl" : "bg-background/60 backdrop-blur-md"}`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-all duration-300 ${scrolled ? "py-2" : "py-3"}`}
        >
          <Link to="/" className="flex min-w-0 items-center gap-2 text-primary">
            <LotusLogo className="h-8 w-8 shrink-0 text-gold sm:h-9 sm:w-9" />
            <span className="font-serif text-xl font-semibold leading-none tracking-tight sm:text-2xl">
              SR <span className="text-gold">Flower Decor</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/70 p-1 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-colors hover:text-primary data-[status=active]:bg-primary data-[status=active]:text-primary-foreground"
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="hero" size="lg" className="hidden lg:inline-flex">
              <Link to="/book">
                Book Order <ArrowRight />
              </Link>
            </Button>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full border border-border bg-card/80 lg:hidden"
            >
              <span className="h-[1.5px] w-4 rounded bg-primary" />
              <span
                className="h-[1.5px] w-4 translate-x-[3px] rounded bg-primary"
                style={{ width: 10 }}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-foreground/30 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-0 top-0 rounded-b-[2rem] bg-background p-5 pb-7 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 font-serif text-xl font-semibold text-primary">
                  <LotusLogo className="h-8 w-8 text-gold" /> SR{" "}
                  <span className="text-gold">Flower Decor</span>
                </span>
                <button
                  aria-label="Close"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full bg-muted text-primary"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="mt-6 grid gap-1">
                {NAV.map((n, i) => (
                  <motion.div
                    key={n.to}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.04 * i + 0.1 }}
                  >
                    <Link
                      to={n.to}
                      onClick={() => setOpen(false)}
                      activeOptions={{ exact: n.to === "/" }}
                      className="flex items-center justify-between rounded-2xl px-4 py-3 font-serif text-2xl text-foreground data-[status=active]:bg-accent data-[status=active]:text-primary"
                    >
                      {n.label}
                      <ArrowRight className="h-4 w-4 text-gold" />
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-5 grid grid-cols-2 gap-2">
                <Button asChild variant="heroOutline" size="xl">
                  <a href={`tel:+91${BUSINESS.phones[0]?.replace(/\s+/g, "")}`}>
                    <Phone /> Call
                  </a>
                </Button>
                <Button asChild variant="hero" size="xl">
                  <a
                    href={waLink("Hi SR Flower Decor, I'd like to enquire.")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <WhatsAppIcon /> WhatsApp
                  </a>
                </Button>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
