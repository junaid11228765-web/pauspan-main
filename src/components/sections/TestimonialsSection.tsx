"use client";

import { useRef } from "react";
import { Star, Quote, Play } from "lucide-react";
import { motion } from "framer-motion";

// ==========================================
// CLIENT ADVOCACY & TESTIMONIAL CONFIGS
// ==========================================

const TESTIMONIALS_DATA = [
  {
    name: "Alexandra Chen",
    role: "CEO, NovaTech",
    text: "Pauspan completely transformed our digital presence. They thoroughly understood our brief and delivered beyond expectations. Their attention to detail and ability to translate vision into results was extraordinary.",
    stars: 5,
    type: "text",
  },
  {
    name: "Marcus Williams",
    role: "Founder, ScaleUp Inc",
    text: "An absolute pleasure to work with. Pauspan took our complex requirements and made everything seamless. Communication was impeccable throughout.",
    stars: 5,
    type: "text",
  },
  {
    name: "Sarah Kim",
    role: "Head of Growth, Apex",
    type: "video",
    gradient: "from-violet-600 to-blue-700",
  },
  {
    name: "James Rodriguez",
    role: "Founder, Clarity SaaS",
    text: "Working with Pauspan has been amazing—they consistently deliver results that grab attention. Their creativity, strategic mindset, and storytelling skills have truly elevated our projects.",
    stars: 5,
    type: "text",
  },
  {
    name: "Emma Thompson",
    role: "Co-Founder, Bloom Agency",
    type: "video",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "David Park",
    role: "CTO, PerspectiveAI",
    text: "I worked with Pauspan to design and build an updated platform for our company. As an agency we needed it to be both very professional and highlight our unique identity. They were wonderful from brainstorming all the way through implementation. Highly recommended.",
    stars: 5,
    type: "text",
  },
  {
    name: "Priya Sharma",
    role: "Design Lead, Contra",
    text: "Pauspan exceeded my expectations with their creativity and professionalism. Delivery was impeccable, and they maintained proactive communication throughout. An absolute pleasure!",
    stars: 5,
    type: "text",
  },
  {
    name: "Tom Baker",
    role: "Founder, Taskflow",
    type: "video",
    gradient: "from-orange-500 to-red-600",
  },
  {
    name: "Zoe Brown",
    role: "Founder, ZW Branding",
    text: "Incredible work on our complete rebrand!!! WOW!! I think I found my new go-to agency at Pauspan. Absolutely phenomenal results that speak for themselves.",
    stars: 5,
    type: "text",
  },
];

// ==========================================
// SUB-COMPONENT: REUSABLE ADVOCACY NODE
// ==========================================

function TestimonialCard({ t, index }: { t: typeof TESTIMONIALS_DATA[0]; index: number }) {
  const isVideo = t.type === "video";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group h-full min-h-[320px] rounded-[2rem] border border-white/5 bg-[#0A0A0A] hover:border-accent/30 transition-all duration-500 p-8 flex flex-col justify-between overflow-hidden"
    >
      {isVideo ? (
        <>
          <div className={`absolute inset-0 bg-gradient-to-br ${t.gradient} opacity-20 group-hover:opacity-40 transition-opacity`} />

          <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6">
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent group-hover:border-accent transition-all duration-500 shadow-xl">
              <Play size={24} className="text-white group-hover:text-black ml-1" fill="currentColor" />
            </div>
            <div className="text-center">
              <p className="font-display font-bold text-white text-lg">{t.name}</p>
              <p className="text-white/50 text-sm">{t.role}</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-1">
                {[...Array(t.stars ?? 5)].map((_, i) => (
                  <Star key={i} size={12} className="text-accent fill-accent" />
                ))}
              </div>
              <Quote size={20} className="text-white/5 group-hover:text-accent/20 transition-colors" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 italic">
              &ldquo;{t.text}&rdquo;
            </p>
          </div>

          <div className="flex items-center gap-4 pt-6 border-t border-white/5">
            <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-display font-bold text-accent text-sm">
              {t.name[0]}
            </div>
            <div>
              <p className="font-bold text-sm text-white">{t.name}</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
                {t.role}
              </p>
            </div>
          </div>
        </>
      )}
    </motion.div>
  );
}

// ==========================================
// MAIN TESTIMONIALS SECTION COMPONENT
// ==========================================

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 relative bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Editorial Header Controls Block */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 text-xs text-accent border border-accent/20 mb-6">
            TESTIMONIALS
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
            Success Stories Worth <span className="accent-text">Sharing</span>
          </h2>
          <p className="text-gray-400">
            Real feedback from founders and leaders who trusted us with their brand — and never looked back.
          </p>
        </div>

        {/* Symmetric Responsive Layout Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t, i) => (
            <div key={i} className="h-full">
              <TestimonialCard t={t} index={i} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}