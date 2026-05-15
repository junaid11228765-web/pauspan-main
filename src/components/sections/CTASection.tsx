"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const initGSAP = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".cta-content", {
          y: 40,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: "top 80%" 
          },
        });

        // Outer ring only — CSS animation handles it so no JS reset
        const ring = document.querySelector(".cta-ring-1") as HTMLElement;
        if (ring) {
          ring.style.animation = "cta-spin 8s linear infinite";
        }
      } catch (error) {
        console.error("GSAP initialization failed:", error);
      }
    };
    
    initGSAP();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="cta-ring-1 absolute w-[600px] h-[600px] rounded-full border border-accent/30"
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

      <style>{`
        @keyframes cta-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
        <div className="cta-content space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-xs text-accent border border-accent/30">
            <span className="w-2 h-2 bg-accent rounded-full animate-ping" />
            Currently Accepting New Clients
          </div>

          <h2 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-text leading-[1.05]">
            Ready to Build
            <br />
            <span className="gradient-text">Something Great?</span>
          </h2>

          <p className="text-text-dim text-lg max-w-xl mx-auto leading-relaxed">
            Join 200+ businesses that chose Pauspan to elevate their brand, 
            accelerate growth, and achieve extraordinary results.
          </p>

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

          <p className="text-text-dim text-sm">
            No commitment required · Free 30-min consultation · Results guaranteed
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
