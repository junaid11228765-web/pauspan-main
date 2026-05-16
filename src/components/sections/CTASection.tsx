"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin outside to avoid re-registration issues
gsap.registerPlugin(ScrollTrigger);

// ==========================================
// MAIN CALL-TO-ACTION (CTA) SECTION COMPONENT
// ==========================================

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    // Create GSAP context for safe scoping and cleanup
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%", // Slightly adjusted for better viewport entry triggering
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    // Clean up animation context on unmount
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">

      {/* Decorative Brand Rings and Radial Backdrops */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="cta-ring-1 absolute w-[600px] h-[600px] rounded-full border border-accent/30 dynamic-spin"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(200,255,0,0.20) 90deg, transparent 180deg)",
          }}
        />
        <div
          className="cta-ring-2 absolute w-[400px] h-[400px] rounded-full border border-accent/30"
        />
        <div className="absolute w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div ref={contentRef} className="cta-content space-y-8">

            {/* Availability Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs text-accent border border-accent/30">
              <span className="w-2 h-2 bg-accent rounded-full animate-ping" />
              Currently Accepting New Clients
            </div>

            {/* Main Typographic Headline */}
            <h2 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-text leading-[1.05]">
              Ready to Build
              <br />
              <span className="gradient-text">Something Great?</span>
            </h2>

            {/* Subtext and Supporting Description */}
            <p className="text-text-dim text-lg max-w-xl mx-auto leading-relaxed">
              Join 200+ businesses that chose Pauspan to elevate their brand,
              accelerated growth, and achieve extraordinary results.
            </p>

            {/* Interactive User Conversion Trigger Controls */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="primary" size="lg" href="/contact">
                Start Your Project
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" size="lg" href="/contact">
                <Calendar size={16} />
                Book a Free Call
              </Button>
            </div>

            {/* Bottom Reassurance / Risk Mitigation Microcopy */}
            <p className="text-text-dim text-sm">
              No commitment required · Free 30-min consultation · Results guaranteed
            </p>
          </div>
        </div>
      </div>

      {/* Embedded Component Keyframe Style Injections */}
      <style jsx global>{`
        @keyframes cta-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .dynamic-spin {
          animation: cta-spin 8s linear infinite;
        }
      `}</style>
    </section>
  );
}