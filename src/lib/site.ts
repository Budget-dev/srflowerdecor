import bqRoses from "@/assets/bouquet-roses.jpg";
import bqPastel from "@/assets/bouquet-pastel.jpg";
import bqOrchid from "@/assets/bouquet-orchid.jpg";
import bqSun from "@/assets/bouquet-sunshine.jpg";
import bqHands from "@/assets/bouquet-hands.jpg";
import bqBox from "@/assets/bouquet-box.jpg";
import car from "@/assets/service-car.jpg";
import car2 from "@/assets/service-car-2.jpg";
import car3 from "@/assets/service-car-3.jpg";
import stage from "@/assets/service-stage.jpg";
import stage2 from "@/assets/service-stage-2.jpg";
import stage3 from "@/assets/service-stage-3.jpg";
import garland from "@/assets/service-garland.jpg";
import garland2 from "@/assets/service-garland-2.jpg";
import garland3 from "@/assets/service-garland-3.jpg";
import party from "@/assets/service-party.jpg";
import party2 from "@/assets/service-party-2.jpg";
import party3 from "@/assets/service-party-3.jpg";
import event from "@/assets/service-event.jpg";
import event2 from "@/assets/service-event-2.jpg";
import event3 from "@/assets/service-event-3.jpg";
import royal from "@/assets/theme-royal.jpg";
import beach from "@/assets/theme-beach.jpg";
import garden from "@/assets/theme-garden.jpg";
import pastel from "@/assets/theme-pastel.jpg";

export const BUSINESS = {
  name: "SR Flower Decoration",
  shortName: "SR Flower Decor",
  address: "Vijayawada, Andhra Pradesh",
  phones: ["93904 55621"],
  whatsapp: "919390455621",
};

export function waLink(message: string) {
  return `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type Service = {
  slug: string;
  title: string;
  short: string;
  image: string;
  intro: string;
  startingPrice: string;
  includes: string[];
  gallery: string[];
  faq: { q: string; a: string }[];
  packages: { name: string; price: string; points: string[] }[];
};

export const PROCESS = [
  {
    title: "Tell us on WhatsApp",
    text: "Share your date, venue and any photo reference. It takes one message.",
  },
  {
    title: "Free quote & design idea",
    text: "We send a clear price and a simple design idea, usually within the hour.",
  },
  {
    title: "We set up fresh",
    text: "Our team reaches 1–3 hours early and arranges everything before guests arrive.",
  },
  {
    title: "Pay after setup",
    text: "Balance on the day — cash, UPI or card. Only a small advance blocks your date.",
  },
];

export const SERVICES: Service[] = [
  {
    slug: "flower-bouquets",
    title: "Flower Bouquets",
    short: "Hand-tied bouquets & flower boxes, made fresh daily.",
    image: bqRoses,
    intro:
      "Our signature — hand-tied bouquets and flower boxes for birthdays, anniversaries, welcomes and weddings. Roses, lilies, orchids, gerberas and more, wrapped beautifully and delivered fresh.",
    startingPrice: "₹499",
    includes: [
      "Fresh-cut seasonal flowers",
      "Premium wrap & ribbon",
      "Free message card",
      "Same-day delivery in the area",
    ],
    gallery: [bqHands, bqPastel, bqOrchid, bqSun, bqBox],
    faq: [
      {
        q: "Can I get same-day bouquet delivery?",
        a: "Yes. Order before 4 PM and we deliver the same day within the area. Late-evening delivery is possible — just ask on WhatsApp.",
      },
      {
        q: "Which flowers do you use?",
        a: "Roses, lilies, orchids, gerberas, carnations, tuberose and seasonal fresh flowers, cut the same morning so they open nicely at your home.",
      },
      {
        q: "Can I add a message card, chocolates or a cake?",
        a: "A message card is free with every bouquet. Chocolates, cakes, balloons and gift boxes can be added — send us the idea on WhatsApp.",
      },
      {
        q: "How long does a bouquet stay fresh?",
        a: "With clean water and a cool spot, hand-tied bouquets last 4–6 days. Flower boxes last a little longer since the foam holds water.",
      },
    ],
    packages: [
      { name: "Classic", price: "₹499", points: ["12 roses", "Gypsophila filler", "Paper wrap"] },
      {
        name: "Premium",
        price: "₹1,299",
        points: ["25 mixed flowers", "Lilies or carnations", "Designer wrap & ribbon"],
      },
      {
        name: "Royal",
        price: "₹2,999",
        points: ["Orchids & imported roses", "Luxury box or wrap", "Chocolates add-on"],
      },
    ],
  },
  {
    slug: "car-decoration",
    title: "Car Decoration",
    short: "Bridal car florals with roses, marigold & jasmine.",
    image: car,
    intro:
      "Make the grand arrival unforgettable. We dress the wedding car with fresh roses, marigold strings and jasmine — secured safely so nothing harms your paint.",
    startingPrice: "₹2,500",
    includes: [
      "Bonnet floral centrepiece",
      "Door & mirror bouquets",
      "Marigold & jasmine strings",
      "Safe tape-free fixing",
    ],
    gallery: [car2, car3, car],
    faq: [
      {
        q: "How early do you start decorating the car?",
        a: "We reach 1–2 hours before the muhurtham, depending on the design you choose, and finish well before the departure time.",
      },
      {
        q: "Will it damage the car paint?",
        a: "No. We use floral thread, suction hooks and pet-safe tape only — nothing sticks directly onto the paint work.",
      },
      {
        q: "Which cars do you decorate?",
        a: "Sedans, SUVs, luxury cars and rental wedding cars. Send the car photo and we suggest the design that suits it best.",
      },
      {
        q: "Can the flowers match our wedding garlands?",
        a: "Yes — send your outfit or garland photo and we match the roses, marigold and jasmine shades for a set look.",
      },
    ],
    packages: [
      {
        name: "Classic",
        price: "₹2,500",
        points: ["Bonnet heart or bouquet", "2 door bouquets", "Rose & gypsy mix"],
      },
      {
        name: "Premium",
        price: "₹4,500",
        points: [
          "Full bonnet arrangement",
          "4 door bouquets",
          "Marigold strings",
          "Imported roses",
        ],
      },
      {
        name: "Royal",
        price: "₹7,500",
        points: [
          "Full car wrap florals",
          "Roof & boot design",
          "Orchids & lilies",
          "On-site decorator",
        ],
      },
    ],
  },
  {
    slug: "stage-decoration",
    title: "Stage Decoration",
    short: "Reception & wedding stages with floral arches.",
    image: stage,
    intro:
      "From intimate engagement backdrops to grand reception stages, we design floral arches, drapes and lighting that frame your most photographed moments.",
    startingPrice: "₹15,000",
    includes: [
      "Floral arch or backdrop",
      "Couple seating",
      "Drapes & warm lighting",
      "Stage-front flower bed",
    ],
    gallery: [stage2, stage3, stage],
    faq: [
      {
        q: "How long does stage setup take?",
        a: "Usually 3–6 hours depending on the design. We work around your hall timing and finish before guests are called.",
      },
      {
        q: "Do you provide drapes and lighting too?",
        a: "Yes. Drapes, warm fairy lights, candle stands and arch lighting are part of the Premium and Royal packages.",
      },
      {
        q: "Can you work with our photographer's idea?",
        a: "Absolutely. Send references or a mood board and we design the backdrop and lighting around those shots.",
      },
      {
        q: "What advance is needed to book the date?",
        a: "A 30% advance blocks your date; the balance is paid after the setup is ready and you are happy with it.",
      },
    ],
    packages: [
      {
        name: "Classic",
        price: "₹15,000",
        points: ["Floral backdrop", "Sofa & drapes", "Basic lighting"],
      },
      {
        name: "Premium",
        price: "₹35,000",
        points: ["Full floral arch", "Candle stands", "Pathway florals", "Warm fairy lights"],
      },
      {
        name: "Royal",
        price: "₹75,000+",
        points: ["Custom theme design", "Imported flowers", "Chandeliers", "Dedicated team"],
      },
    ],
  },
  {
    slug: "wedding-garlands",
    title: "Wedding Garlands",
    short: "Varmala, jasmine strings & haar made fresh.",
    image: garland,
    intro:
      "Handcrafted varmalas and garlands strung the same morning — jasmine, roses, marigold, orchids or tuberose, matched to your outfit.",
    startingPrice: "₹1,200",
    includes: [
      "Varmala pair",
      "Jasmine veni & gajra",
      "Family garlands",
      "Same-day fresh stringing",
    ],
    gallery: [garland2, garland3, garland],
    faq: [
      {
        q: "When are the garlands made?",
        a: "Strung the same morning of your function so they are fresh and fragrant at the muhurtham, not the night before.",
      },
      {
        q: "Can you match our outfits?",
        a: "Yes — send outfit photos and we pick rose, jasmine or orchid shades that suit your colours.",
      },
      {
        q: "Do you make garlands for the family too?",
        a: "Yes. Parents' and siblings' garlands can be added — six family garlands come with the Royal package.",
      },
      {
        q: "Can I order only a gajra or bridal veni?",
        a: "Of course. Single gajras, bridal venis and hair strings are available — tell us the length and flower on WhatsApp.",
      },
    ],
    packages: [
      { name: "Classic", price: "₹1,200", points: ["Rose & jasmine varmala pair"] },
      {
        name: "Premium",
        price: "₹3,500",
        points: ["Designer varmala pair", "2 gajras", "Matching outfit colours"],
      },
      {
        name: "Royal",
        price: "₹8,000",
        points: ["Orchid / carnation varmala", "Family garlands (6)", "Bridal veni"],
      },
    ],
  },
  {
    slug: "party-function-decor",
    title: "Party & Function Decor",
    short: "Birthdays, haldi, mehendi & family functions.",
    image: party,
    intro:
      "Haldi, mehendi, birthdays, house-warmings and anniversaries — table florals, entrance styling and photo corners for every celebration.",
    startingPrice: "₹8,000",
    includes: [
      "Table centrepieces",
      "Entrance & photo booth",
      "Haldi / mehendi setups",
      "Candles & fairy lights",
    ],
    gallery: [party2, party3, party],
    faq: [
      {
        q: "Which functions do you decorate?",
        a: "Haldi, mehendi, birthdays, anniversaries, house-warmings, baby showers and nikah receptions — at home or in a hall.",
      },
      {
        q: "What is the minimum booking?",
        a: "Entrance decor with six table centrepieces starts at ₹8,000. Smaller home setups can be quoted on WhatsApp.",
      },
      {
        q: "Do you supply balloons, backdrops and props?",
        a: "Yes — balloon arches, theme backdrops and photo-corner props are included whenever you need them.",
      },
      {
        q: "How many days in advance should I book?",
        a: "Three to five days is comfortable. For same-week functions, message us and we will check the date for you.",
      },
    ],
    packages: [
      { name: "Classic", price: "₹8,000", points: ["Entrance decor", "6 table centrepieces"] },
      {
        name: "Premium",
        price: "₹18,000",
        points: ["Theme backdrop", "12 centrepieces", "Photo corner"],
      },
      {
        name: "Royal",
        price: "₹40,000+",
        points: ["Full venue styling", "Custom theme", "Lighting design"],
      },
    ],
  },
  {
    slug: "event-decoration",
    title: "Event Decoration",
    short: "Entrance gates, mandaps & full venue styling.",
    image: event,
    intro:
      "Complete event floristry — entrance gates, mandaps, pathways and venue styling for weddings, nikah, corporate and community events.",
    startingPrice: "₹25,000",
    includes: [
      "Entrance gate florals",
      "Mandap / nikah setup",
      "Pathway decor",
      "Venue walkthrough",
    ],
    gallery: [event2, event3, event],
    faq: [
      {
        q: "Do you handle the full venue?",
        a: "Yes — entrance gate, mandap or nikah stage, pathway, pillars, tables and the photo area, all from one team.",
      },
      {
        q: "Do you visit the venue before quoting?",
        a: "Yes. A free walkthrough before we quote, so the price covers what your venue actually needs.",
      },
      {
        q: "Do you do corporate or community events?",
        a: "Yes — product launches, inaugural ceremonies and community functions, with simple elegant florals.",
      },
      {
        q: "What is included in the Royal package?",
        a: "Full venue design with imported florals, lighting and chandeliers, plus a dedicated setup team on the day.",
      },
    ],
    packages: [
      { name: "Classic", price: "₹25,000", points: ["Entrance gate", "Pathway marigold strings"] },
      {
        name: "Premium",
        price: "₹60,000",
        points: ["Entrance + mandap", "Pathway pillars", "Drapes"],
      },
      {
        name: "Royal",
        price: "₹1,50,000+",
        points: ["Full venue design", "Imported florals", "Lighting & chandeliers"],
      },
    ],
  },
];

export const THEMES = [
  { title: "Royal Indian", image: royal },
  { title: "Beach Wedding", image: beach },
  { title: "Garden Party", image: garden },
  { title: "Pastel Love", image: pastel },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

export const BOUQUETS = [
  { title: "Red & Blush Roses", price: "₹899", image: bqRoses },
  { title: "Pastel Lily Charm", price: "₹1,199", image: bqPastel },
  { title: "White Orchid Luxe", price: "₹2,499", image: bqOrchid },
  { title: "Sunshine Flower Box", price: "₹1,799", image: bqSun },
];
