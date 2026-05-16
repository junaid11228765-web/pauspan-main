"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// DATA CONFIGURATIONS

const FAQ_ITEMS = [
  {
    q: "What services do you specialize in?",
    a: "We offer six core services: Strategy Consulting, Brand Development, Digital Transformation, Growth Marketing, Product Design, and Operations & Scale. Each service is staffed by specialists dedicated to delivering measurable results.",
  },
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on scope and complexity. Small engagements might run 2-3 weeks, while comprehensive transformations can span several months. We provide detailed timelines during the discovery phase.",
  },
  {
    q: "Do you work with startups and enterprise companies?",
    a: "Yes, we work with businesses at all stages—from early-stage startups to established enterprises. We tailor our approach based on your specific needs, resources, and goals.",
  },
  {
    q: "How do you measure success?",
    a: "We establish clear KPIs and success metrics during the discovery phase. All our engagements are anchored around measurable outcomes that directly impact your bottom line.",
  },
  {
    q: "What's your engagement process?",
    a: "We follow a proven 4-step process: Discovery & Strategy, Concept & Design, Build & Refine, and Launch & Grow. Each phase includes collaboration, feedback loops, and transparent communication.",
  },
  {
    q: "Can we work with you remotely?",
    a: "Absolutely. We work with clients globally. Whether you're in the same timezone or across continents, we maintain seamless communication and collaboration throughout our engagement.",
  },
];

// MAIN FAQ SECTION COMPONENT

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const initGSAP = async () => {
      try {
        // Dynamic modules optimization wrapper for standard server/hydration compatibility
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        // Orchestrating a staggered linear reveal sequence for list node modules
        gsap.from(".faq-item", {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "expo.out",
          clearProps: "all", // Clear native attributes to let Framer Motion run unhindered
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        });
      } catch (error) {
        console.error("GSAP initialization failed within FAQ Section:", error);
      }
    };

    initGSAP();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden bg-black">
      {/* Structural Accent Radial Mask */}
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-[#C8FF00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading Group */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C8FF00]/10 text-xs text-[#C8FF00] border border-[#C8FF00]/20 mb-6">
            FAQ
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6 tracking-tight">
            Common <span className="text-[#C8FF00]">Questions</span>
          </h2>
          <p className="text-gray-400">
            Have a question we didn't cover? Reach out to hello@pauspan.com and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Accordion Group Interface Container */}
        <div className="max-w-3xl mx-auto space-y-3">
          {FAQ_ITEMS.map((faq, i) => (
            <div
              key={i}
              className={`faq-item bg-[#0A0A0A] border rounded-2xl overflow-hidden transition-all duration-500 ${expanded === i
                  ? "border-[#C8FF00]/40 shadow-[0_0_25px_rgba(200,255,0,0.03)]"
                  : "border-white/5"
                }`}
            >
              {/* Accordion Trigger Control Toggle */}
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 outline-none group"
              >
                <h3 className={`font-semibold text-lg transition-colors duration-300 ${expanded === i ? "text-[#C8FF00]" : "text-white"
                  }`}>
                  {faq.q}
                </h3>
                <div className={`shrink-0 transition-transform duration-500 ${expanded === i ? "rotate-180" : "rotate-0"
                  }`}>
                  <ChevronDown size={20} className={expanded === i ? "text-[#C8FF00]" : "text-gray-500"} />
                </div>
              </button>

              {/* Collapsible Content Section managed safely through AnimatePresence */}
              <AnimatePresence initial={false}>
                {expanded === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                      opacity: { duration: 0.25, delay: 0.1 }
                    }}
                  >
                    <div className="px-6 pb-6 pt-0">
                      <div className="pt-4 border-t border-white/5">
                        <p className="text-gray-400 leading-relaxed text-sm">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}