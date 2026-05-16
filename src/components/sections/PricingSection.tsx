"use client";

import { useEffect, useRef } from "react";
import { Check, Zap, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/Button";

// ==========================================
// PRICING DATA CONFIGURATIONS
// ==========================================

const PRICING_PLANS = [
  {
    icon: Zap,
    name: "Starter",
    price: 2499,
    desc: "Perfect for early-stage startups ready to make their mark.",
    features: [
      "Brand Identity & Logo",
      "5-Page Website Design",
      "Basic SEO Setup",
      "2 Rounds of Revisions",
      "Email Support",
      "30-Day Post-Launch Support",
    ],
    cta: "Get Started",
    highlight: false,
    color: "#6366F1",
  },
  {
    icon: Star,
    name: "Growth",
    price: 5999,
    desc: "For scaling businesses that demand exceptional quality and results.",
    features: [
      "Full Brand System",
      "10-Page Website + CMS",
      "Advanced SEO & Analytics",
      "Unlimited Revisions",
      "Priority Support",
      "60-Day Post-Launch Support",
      "Growth Strategy Session",
      "Social Media Templates",
    ],
    cta: "Most Popular",
    highlight: true,
    color: "#C8FF00",
  },
  {
    icon: Crown,
    name: "Enterprise",
    price: 12999,
    desc: "Full-service partnership for businesses ready to dominate their market.",
    features: [
      "Complete Brand Overhaul",
      "Custom Web Application",
      "Full Marketing Suite",
      "Dedicated Project Manager",
      "24/7 Priority Support",
      "90-Day Post-Launch",
      "Monthly Strategy Calls",
      "Custom Integrations",
      "Performance Reporting",
    ],
    cta: "Contact Us",
    highlight: false,
    color: "#F59E0B",
  },
];

// ==========================================
// MAIN PRICING SECTION COMPONENT
// ==========================================

export default function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx: any;

    const initGSAP = async () => {
      try {
        // Dynamic import logic optimization to ensure server-side isolation
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          // Staggered stagger timeline entrance sequence for structural cards
          gsap.from(".pricing-card", {
            y: 60,
            opacity: 0, // Adjusted from 1 to 0 to implement a standard entry reveal transition
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none"
            },
          });
        }, sectionRef);

      } catch (error) {
        console.error("GSAP initialization failed within Pricing Section:", error);
      }
    };

    initGSAP();

    // Reverting context hooks on element unmounting routines
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Radial Ambiance Backdrop Blend */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Structural Copy Header Group */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-accent border border-accent/20 mb-6">
            PRICING
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text mb-6">
            Transparent Pricing, <span className="accent-text">Extraordinary</span> Value
          </h2>
          <p className="text-text-dim">
            No hidden fees. No surprises. Just premium service that pays for itself.
          </p>
        </div>

        {/* Pricing Layout Matrix Grid Grid system */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {PRICING_PLANS.map(({ icon: Icon, name, price, desc, features, cta, highlight, color }) => (
            <div
              key={name}
              className={`pricing-card relative rounded-2xl p-8 transition-all duration-400 ${highlight
                  ? "bg-accent/5 border border-accent/30 scale-105 shadow-[0_0_60px_rgba(200,255,0,0.1)]"
                  : "glass-card hover:border-white/15"
                }`}
            >
              {/* Featured Badge Flag for Highlighted Tier Plan */}
              {highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-obsidian text-xs font-bold px-4 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}

              {/* Dynamic Styled Brand Icon Wrap */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                style={{ background: `${color}20`, color }}
              >
                <Icon size={22} />
              </div>

              {/* Tier Information Identifiers */}
              <h3 className="font-display font-bold text-2xl text-text mb-2">{name}</h3>
              <p className="text-text-dim text-sm mb-6">{desc}</p>

              {/* Matrix Currency Rate Engine */}
              <div className="flex items-end gap-1 mb-8">
                <span className="text-text-dim text-sm">$</span>
                <span className="font-display font-bold text-5xl text-text">{price.toLocaleString()}</span>
                <span className="text-text-dim text-sm mb-1">/project</span>
              </div>

              {/* Strategic CTA Trigger Action Handle */}
              <Button
                variant={highlight ? "primary" : "outline"}
                size="md"
                href="/contact"
                className="w-full justify-center mb-8"
              >
                {cta}
              </Button>

              {/* Feature Specifications Unordered Mapping Loop */}
              <ul className="space-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check
                      size={15}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: highlight ? "#C8FF00" : color }}
                    />
                    <span className="text-text-dim">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Custom Tier Requirements Engagement Link */}
        <p className="text-center text-text-dim text-sm mt-12">
          Need something custom?{" "}
          <a href="/contact" className="text-accent hover-underline">
            Let's talk
          </a>
        </p>
      </div>
    </section>
  );
}