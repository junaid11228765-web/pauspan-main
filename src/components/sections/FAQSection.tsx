"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
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

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<number | null>(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const initGSAP = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".faq-item", {
          y: 30,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        });
      } catch (error) {
        console.error("GSAP initialization failed:", error);
      }
    };

    initGSAP();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-accent border border-accent/20 mb-6">
            FAQ
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text mb-6">
            Common <span className="accent-text">Questions</span>
          </h2>
          <p className="text-text-dim">
            Have a question we didn't cover? Reach out to hello@pauspan.com and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="faq-item glass-card rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:border-accent/30"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-semibold text-lg text-text">{faq.q}</h3>
                <motion.div
                  animate={{ rotate: expanded === i ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="shrink-0"
                >
                  <ChevronDown size={20} className="text-accent" />
                </motion.div>
              </div>
              <AnimatePresence initial={false}>
                {expanded === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-text-dim leading-relaxed">{faq.a}</p>
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
