import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import garden from "@/assets/theme-garden.jpg";
import { BUSINESS, waLink } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { WhatsAppIcon } from "@/components/site/Icons";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — SR Flower Decoration" },
      {
        name: "description",
        content: "Call, WhatsApp or visit SR Flower Decoration in Vijayawada.",
      },
      { property: "og:title", content: "Contact SR Flower Decoration" },
      {
        property: "og:description",
        content: "Reach us on call or WhatsApp for floral decoration bookings in Vijayawada.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi SR Flower Decor!\nName: ${form.name}\nPhone: ${form.phone}\nMessage: ${form.message}`;
    window.open(waLink(msg), "_blank");
  };
  const cards = [
    { icon: MapPin, t: "Visit Us", d: BUSINESS.address },
    {
      icon: Phone,
      t: "Call Us",
      d: BUSINESS.phones.join("  |  "),
      href: `tel:+91${BUSINESS.phones[0]?.replace(/\s+/g, "")}`,
    },
    { icon: Clock, t: "Open Hours", d: "Every day, 7:00 AM – 10:00 PM" },
  ];
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Plan Something"
        script="Beautiful"
        image={garden}
      />
      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            {cards.map((c, i) => (
              <Reveal key={c.t} delay={i * 0.06}>
                <a
                  href={c.href}
                  className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent text-gold">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold">{c.t}</h3>
                    <p className="text-sm text-muted-foreground">{c.d}</p>
                  </div>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.2}>
              <Button
                asChild
                variant="hero"
                size="xl"
                className="w-full bg-whatsapp text-whatsapp-foreground hover:bg-whatsapp/90"
              >
                <a
                  href={waLink("Hi SR Flower Decor, I'd like to enquire.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon /> Chat on WhatsApp
                </a>
              </Button>
            </Reveal>
          </div>
          <Reveal
            delay={0.1}
            className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
          >
            <h2 className="text-3xl font-semibold">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Your message opens directly in WhatsApp — we usually reply within minutes.
            </p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="n">Name</Label>
                  <Input
                    id="n"
                    required
                    maxLength={80}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="h-11"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="p">Phone</Label>
                  <Input
                    id="p"
                    required
                    type="tel"
                    pattern="[0-9+ ]{10,14}"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="h-11"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="m">Message</Label>
                <Textarea
                  id="m"
                  required
                  maxLength={800}
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <Button type="submit" variant="hero" size="xl" className="w-full">
                <Send /> Send via WhatsApp
              </Button>
            </form>
          </Reveal>
        </div>
        <Reveal className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-3xl border border-border">
          <iframe
            title="Map"
            src="https://www.google.com/maps?q=Vijayawada+Andhra+Pradesh&output=embed"
            className="h-72 w-full"
            loading="lazy"
          />
        </Reveal>
      </section>
    </>
  );
}
