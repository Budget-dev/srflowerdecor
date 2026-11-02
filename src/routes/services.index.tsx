import { createFileRoute } from "@tanstack/react-router";
import stage from "@/assets/service-stage.jpg";
import { SERVICES } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { ServiceCard } from "@/components/site/ServiceCard";
import { CtaBanner } from "@/components/site/Footer";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — SR Flower Decoration" },
      {
        name: "description",
        content:
          "Car decoration, stage decoration, wedding garlands, party and event floral decor with packages in Vijayawada.",
      },
      { property: "og:title", content: "Floral Decoration Services — SR Flower Decoration" },
      {
        property: "og:description",
        content: "Explore packages for car, stage, garlands, parties and events in Vijayawada.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Florals for"
        script="Every Occasion"
        image={stage}
        sub="Pick a service to see packages and book instantly."
      />
      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06}>
              <ServiceCard s={s} />
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
