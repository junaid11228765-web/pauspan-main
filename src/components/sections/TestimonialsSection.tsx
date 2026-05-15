"use client";
import { useRef } from "react";
import { Star, Quote, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
  {
    name: "Alexandra Chen",
    role: "CEO, NovaTech",
    text: "Pauspan completely transformed our digital presence. They thoroughly understood our brief and delivered beyond expectations. Their attention to detail and ability to translate vision into results was extraordinary.",
    stars: 5,
    type: "text",
    size: "tall",
  },
  {
    name: "Marcus Williams",
    role: "Founder, ScaleUp Inc",
    text: "An absolute pleasure to work with. Pauspan took our complex requirements and made everything seamless. Communication was impeccable throughout.",
    stars: 5,
    type: "text",
    size: "normal",
  },
  {
    name: "Sarah Kim",
    role: "Head of Growth, Apex",
    type: "video",
    size: "normal",
    gradient: "from-violet-600 to-blue-700",
  },
  {
    name: "James Rodriguez",
    role: "Founder, Clarity SaaS",
    text: "Working with Pauspan has been amazing—they consistently deliver results that grab attention. Their creativity, strategic mindset, and storytelling skills have truly elevated our projects.",
    stars: 5,
    type: "text",
    size: "normal",
  },
  {
    name: "Emma Thompson",
    role: "Co-Founder, Bloom Agency",
    type: "video",
    size: "normal",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "David Park",
    role: "CTO, PerspectiveAI",
    text: "I worked with Pauspan to design and build an updated platform for our company. As an agency we needed it to be both very professional and highlight our unique identity. They were wonderful from brainstorming all the way through implementation. Highly recommended.",
    stars: 5,
    type: "text",
    size: "tall",
  },
  {
    name: "Priya Sharma",
    role: "Design Lead, Contra",
    text: "Pauspan exceeded my expectations with their creativity and professionalism. Delivery was impeccable, and they maintained proactive communication throughout. An absolute pleasure!",
    stars: 5,
    type: "text",
    size: "normal",
  },
  {
    name: "Tom Baker",
    role: "Founder, Taskflow",
    type: "video",
    size: "normal",
    gradient: "from-orange-500 to-red-600",
  },
  {
    name: "Zoe Brown",
    role: "Founder, ZW Branding",
    text: "Incredible work on our complete rebrand!!! WOW!! I think I found my new go-to agency at Pauspan. Absolutely phenomenal results that speak for themselves.",
    stars: 5,
    type: "text",
    size: "normal",
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  if (t.type === "video") {
    return (
      <div
        className={`relative rounded-2xl overflow-hidden cursor-pointer group ${
          t.size === "tall" ? "row-span-2" : ""
        }`}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${t.gradient || "from-gray-700 to-gray-900"}`}
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
        <div className="relative z-10 p-6 h-full flex flex-col justify-between min-h-[220px]">
          <div className="w-14 h-14 rounded-full border-2 border-white/30 flex items-center justify-center bg-white/10 group-hover:scale-110 transition-transform mx-auto mt-8">
            <Play size={22} className="text-white ml-1" fill="white" />
          </div>
          <div className="mt-auto">
            <p className="font-display font-semibold text-white">{t.name}</p>
            <p className="text-white/70 text-sm">{t.role}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`glass-card rounded-2xl p-6 hover:border-white/15 transition-all duration-300 hover:-translate-y-1 group ${
        t.size === "tall" ? "row-span-2" : ""
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-1">
          {Array.from({ length: t.stars || 5 }).map((_, i) => (
            <Star key={i} size={13} className="text-accent fill-accent" />
          ))}
        </div>
        <Quote size={18} className="text-accent/30 group-hover:text-accent/60 transition-colors" />
      </div>
      <p className="text-text-dim text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent/30 to-accent/10 border border-accent/20 flex items-center justify-center font-display font-bold text-accent text-sm">
          {t.name[0]}
        </div>
        <div>
          <p className="font-medium text-sm text-text">{t.name}</p>
          <p className="text-xs text-text-dim">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Column 1 scrolls up, column 2 stays neutral, column 3 scrolls down
  const col1Y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const col2Y = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const col3Y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  const col1 = testimonials.filter((_, i) => i % 3 === 0);
  const col2 = testimonials.filter((_, i) => i % 3 === 1);
  const col3 = testimonials.filter((_, i) => i % 3 === 2);

  return (
    <section ref={sectionRef} id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-accent/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-accent border border-accent/20 mb-6">
            TESTIMONIALS
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text mb-6">
            Success Stories Worth{" "}
            <span className="accent-text">Sharing</span>
          </h2>
          <p className="text-text-dim">
            Real feedback from founders and leaders who trusted us with their brand — and never looked back.
          </p>
        </div>

        {/* Masonry columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
          {/* Column 1 — scrolls up */}
          <motion.div className="space-y-5" style={{ y: col1Y }}>
            {col1.map((t, i) => (
              <div key={i} className="testimonial-item">
                <TestimonialCard t={t} />
              </div>
            ))}
          </motion.div>
          {/* Column 2 — neutral */}
          <motion.div className="space-y-5 mt-0 md:mt-10" style={{ y: col2Y }}>
            {col2.map((t, i) => (
              <div key={i} className="testimonial-item">
                <TestimonialCard t={t} />
              </div>
            ))}
          </motion.div>
          {/* Column 3 — scrolls down */}
          <motion.div className="space-y-5" style={{ y: col3Y }}>
            {col3.map((t, i) => (
              <div key={i} className="testimonial-item">
                <TestimonialCard t={t} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
