import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, CalendarDays, Check, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SERVICES, getService, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/site/Icons";

type Search = { service?: string | undefined; pkg?: string | undefined };

export const Route = createFileRoute("/book")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    service: typeof s["service"] === "string" ? (s["service"] as string) : undefined,
    pkg: typeof s["pkg"] === "string" ? (s["pkg"] as string) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Book Your Order — SR Flower Decoration" },
      {
        name: "description",
        content:
          "Book car, stage, garland, party or event floral decoration in Vijayawada in under a minute.",
      },
      { property: "og:title", content: "Book Floral Decoration — SR Flower Decoration" },
      {
        property: "og:description",
        content: "Pick a service, package and date. Confirm instantly on WhatsApp.",
      },
    ],
  }),
  component: Book,
});

type Order = {
  id: string;
  service: string;
  pkg: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  venue: string;
  notes: string;
};

function Book() {
  const search = Route.useSearch();
  const initial = getService(search.service ?? "") ?? SERVICES[0]!;
  const [step, setStep] = useState(0);
  const [service, setService] = useState(initial.slug);
  const [pkg, setPkg] = useState(search.pkg ?? initial.packages[1]!.name);
  const [f, setF] = useState({ date: "", time: "", name: "", phone: "", venue: "", notes: "" });
  const [order, setOrder] = useState<Order | null>(null);
  const s = getService(service)!;
  const price = s.packages.find((p) => p.name === pkg)?.price ?? s.startingPrice;
  const today = new Date().toISOString().slice(0, 10);

  const confirm = (e: React.FormEvent) => {
    e.preventDefault();
    const id = "MF-" + Math.floor(100000 + Math.random() * 900000);
    setOrder({ id, service: s.title, pkg, ...f });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (order) return <Confirmation order={order} price={price} />;

  return (
    <section className="bg-cream-gradient px-4 py-10 md:py-16">
      <div className="mx-auto max-w-3xl">
        <p className="eyebrow text-center">Book Your Order</p>
        <h1 className="mt-2 text-center text-4xl font-semibold sm:text-5xl">
          Reserve Your <span className="script">Florals</span>
        </h1>

        <div className="mx-auto mt-8 flex max-w-sm items-center justify-between">
          {["Service", "Details"].map((l, i) => (
            <div key={l} className="flex flex-1 items-center gap-2 last:flex-none">
              <span
                className={`grid h-9 w-9 place-items-center rounded-full text-sm font-bold ${step >= i ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}
              >
                {step > i ? <Check className="h-4 w-4" /> : i + 1}
              </span>
              <span className="text-sm font-medium">{l}</span>
              {i === 0 && (
                <span className={`mx-2 h-px flex-1 ${step > 0 ? "bg-primary" : "bg-border"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-border bg-card p-5 shadow-soft sm:p-8">
          <AnimatePresence mode="wait">
            {step === 0 ? (
              <motion.div
                key="s0"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold">1. Choose a service</h2>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {SERVICES.map((x) => (
                    <button
                      key={x.slug}
                      type="button"
                      onClick={() => {
                        setService(x.slug);
                        setPkg(x.packages[1]!.name);
                      }}
                      className={`overflow-hidden rounded-2xl border-2 text-left transition-all ${service === x.slug ? "border-primary shadow-elegant" : "border-transparent"}`}
                    >
                      <img
                        src={x.image}
                        alt=""
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover"
                      />
                      <p className="p-2 text-sm font-semibold">{x.title}</p>
                    </button>
                  ))}
                </div>
                <h2 className="mt-8 text-2xl font-semibold">2. Pick a package</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {s.packages.map((p) => (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => setPkg(p.name)}
                      className={`rounded-2xl border-2 p-4 text-left transition-all ${pkg === p.name ? "border-primary bg-accent" : "border-border"}`}
                    >
                      <p className="font-semibold">{p.name}</p>
                      <p className="font-serif text-2xl font-semibold text-primary">{p.price}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {p.points.slice(0, 2).join(" · ")}
                      </p>
                    </button>
                  ))}
                </div>
                <Button onClick={() => setStep(1)} variant="hero" size="xl" className="mt-8 w-full">
                  Continue <ArrowRight />
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="s1"
                onSubmit={confirm}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between gap-3 rounded-2xl bg-accent p-4">
                  <div className="min-w-0">
                    <p className="truncate font-semibold">
                      {s.title} · {pkg}
                    </p>
                    <p className="text-xs text-muted-foreground">Estimated {price}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="shrink-0 text-sm font-medium text-primary underline"
                  >
                    Change
                  </button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <Label htmlFor="d">Event date</Label>
                    <Input
                      id="d"
                      type="date"
                      min={today}
                      required
                      value={f.date}
                      onChange={(e) => setF({ ...f, date: e.target.value })}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="t">Time</Label>
                    <Input
                      id="t"
                      type="time"
                      required
                      value={f.time}
                      onChange={(e) => setF({ ...f, time: e.target.value })}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="n">Your name</Label>
                    <Input
                      id="n"
                      required
                      maxLength={80}
                      value={f.name}
                      onChange={(e) => setF({ ...f, name: e.target.value })}
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="p">Phone</Label>
                    <Input
                      id="p"
                      type="tel"
                      required
                      pattern="[0-9+ ]{10,14}"
                      value={f.phone}
                      onChange={(e) => setF({ ...f, phone: e.target.value })}
                      className="h-11"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="v">Venue / address</Label>
                  <Input
                    id="v"
                    required
                    maxLength={200}
                    value={f.venue}
                    onChange={(e) => setF({ ...f, venue: e.target.value })}
                    className="h-11"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="no">Notes (colours, flowers, theme)</Label>
                  <Textarea
                    id="no"
                    maxLength={600}
                    rows={3}
                    value={f.notes}
                    onChange={(e) => setF({ ...f, notes: e.target.value })}
                  />
                </div>
                <div className="flex flex-col-reverse gap-3 sm:flex-row">
                  <Button type="button" onClick={() => setStep(0)} variant="heroOutline" size="xl">
                    <ArrowLeft /> Back
                  </Button>
                  <Button type="submit" variant="hero" size="xl" className="flex-1">
                    <CalendarDays /> Confirm Booking
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Confirmation({ order, price }: { order: Order; price: string }) {
  const msg = `Hi SR Flower Decor! I just placed an order.\nOrder ID: ${order.id}\nService: ${order.service} (${order.pkg}) – ${price}\nDate: ${order.date} at ${order.time}\nName: ${order.name}\nPhone: ${order.phone}\nVenue: ${order.venue}${order.notes ? `\nNotes: ${order.notes}` : ""}`;
  const rows = [
    ["Order ID", order.id],
    ["Service", `${order.service} · ${order.pkg}`],
    ["Estimate", price],
    ["Date & time", `${order.date}, ${order.time}`],
    ["Name", order.name],
    ["Phone", order.phone],
    ["Venue", order.venue],
  ];
  return (
    <section className="bg-cream-gradient px-4 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-xl rounded-3xl border border-border bg-card p-6 text-center shadow-soft sm:p-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.2 }}
          className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-primary text-primary-foreground"
        >
          <CheckCircle2 className="h-10 w-10" />
        </motion.div>
        <h1 className="mt-5 text-4xl font-semibold">Order Received!</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you, {order.name}. Send it on WhatsApp to confirm your slot instantly.
        </p>
        <dl className="mt-6 divide-y divide-border rounded-2xl border border-border text-left text-sm">
          {rows.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 px-4 py-3">
              <dt className="shrink-0 text-muted-foreground">{k}</dt>
              <dd className="min-w-0 break-words text-right font-medium">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 flex flex-col gap-3">
          <Button
            asChild
            variant="hero"
            size="xl"
            className="bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
          >
            <a href={waLink(msg)} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> Confirm on WhatsApp
            </a>
          </Button>
          <Button asChild variant="heroOutline" size="xl">
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
