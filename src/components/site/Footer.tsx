import { Link } from "@tanstack/react-router";
import { MapPin, Phone, CalendarDays, ArrowRight, Home, Flower2, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, SERVICES, waLink } from "@/lib/site";
import { LotusLogo, WhatsAppIcon } from "./Icons";
import { Reveal } from "./Reveal";

export function CtaBanner() {
  return (
    <section className="px-4 py-10 md:py-14">
      <Reveal className="mx-auto flex max-w-6xl flex-col gap-5 rounded-3xl bg-primary p-6 text-primary-foreground shadow-elegant sm:flex-row sm:items-center sm:p-8">
        <div className="flex min-w-0 flex-1 items-start gap-4">
          <CalendarDays className="mt-1 h-9 w-9 shrink-0 text-gold" />
          <div className="min-w-0">
            <h3 className="text-2xl font-semibold sm:text-3xl">
              Book Your Floral Decoration Today!
            </h3>
            <p className="mt-1 text-sm opacity-80">
              Tell us your requirements and we'll create the perfect floral setup for your event.
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <Button asChild variant="light" size="xl">
            <Link to="/book">
              Book Now <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="gold" size="xl">
            <a
              href={waLink("Hi! I want to book a floral decoration.")}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon /> Enquire on WhatsApp
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/60 pb-28 pt-12 md:pb-10">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 text-primary">
            <LotusLogo className="h-10 w-10 text-gold" />
            <span className="font-serif text-2xl font-semibold leading-[0.9]">
              SR
              <br />
              Flower Decor
            </span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Fresh flowers and floral decoration for weddings, parties and every special occasion.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-primary">
                Services
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-primary">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/book" className="hover:text-primary">
                Book Your Order
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Our Services</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-primary">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-3 text-sm">
          <h4 className="text-lg font-semibold">Reach Us</h4>
          <p className="flex gap-2 text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
            {BUSINESS.address}
          </p>
          <p className="flex flex-wrap items-center gap-2">
            <Phone className="h-4 w-4 text-gold" />
            {BUSINESS.phones.map((p, i) => (
              <a
                key={p}
                href={`tel:+91${p.replace(/\s+/g, "")}`}
                className="font-semibold hover:text-primary"
              >
                {p}
                {i === 0 && BUSINESS.phones.length > 1 ? " |" : ""}
              </a>
            ))}
          </p>
          <a
            href={waLink("Hi SR Flower Decor!")}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-semibold text-primary"
          >
            <WhatsAppIcon className="h-4 w-4 text-whatsapp" /> Enquire on WhatsApp
          </a>
        </div>
      </div>
      <p className="mt-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} SR Flower Decoration. All rights reserved.
      </p>
    </footer>
  );
}

export function MobileActionBar() {
  const item =
    "flex flex-1 flex-col items-center gap-0.5 py-1 text-[10px] font-medium text-muted-foreground transition-colors data-[status=active]:text-primary";
  return (
    <nav
      className="fixed inset-x-3 bottom-3 z-30 md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="relative flex items-center rounded-full border border-border/70 bg-background/85 px-2 py-1.5 shadow-soft backdrop-blur-xl">
        <Link to="/" activeOptions={{ exact: true }} className={item}>
          <Home className="h-5 w-5" />
          Home
        </Link>
        <Link to="/services" className={item}>
          <Flower2 className="h-5 w-5" />
          Services
        </Link>
        <div className="flex flex-1 justify-center">
          <Link
            to="/book"
            aria-label="Book"
            className="-mt-7 grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-elegant ring-4 ring-background"
          >
            <CalendarDays className="h-6 w-6" />
          </Link>
        </div>
        <Link to="/gallery" className={item}>
          <Images className="h-5 w-5" />
          Gallery
        </Link>
        <a
          href={waLink("Hi SR Flower Decor, I'd like to enquire.")}
          target="_blank"
          rel="noreferrer"
          className={item + " text-whatsapp"}
        >
          <WhatsAppIcon className="h-5 w-5" />
          Chat
        </a>
      </div>
    </nav>
  );
}

export function WhatsAppFab() {
  return (
    <a
      href={waLink("Hi SR Flower Decor, I'd like to enquire.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-30 hidden h-14 w-14 place-items-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elegant transition-transform hover:scale-105 md:grid"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
