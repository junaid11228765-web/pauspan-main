"use client";

import { useEffect, useRef } from "react";
import { Users, Award, Globe, TrendingUp } from "lucide-react";

// ==========================================
// CORE PERFORMANCE METRICS CONFIGURATIONS
// ==========================================

const STATS_METRICS = [
  {
    value: 200,
    suffix: "+",
    label: "Projects Delivered",
    icon: Globe,
    desc: "Across 30+ industries"
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Retention",
    icon: Users,
    desc: "Clients who come back"
  },
  {
    value: 50,
    suffix: "M+",
    label: "Revenue Generated",
    icon: TrendingUp,
    desc: "For our clients"
  },
  {
    value: 5,
    suffix: "★",
    label: "Average Rating",
    icon: Award,
    desc: "Across all platforms"
  },
];

// ==========================================
// MAIN METRICS DISPLAY SECTION COMPONENT
// ==========================================

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx: any;

    const initGSAP = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {

          // Iterating across data nodes to trigger synchronized numeric counters
          STATS_METRICS.forEach(({ value }, i) => {
            const el = document.querySelector(`.stat-num-${i}`);
            if (!el) return;

            gsap.fromTo(
              el,
              { textContent: 0 },
              {
                textContent: value,
                duration: 2.5,
                ease: "power4.out",
                snap: { textContent: 1 },
                scrollTrigger: {
                  trigger: sectionRef.current,
                  start: "top 85%"
                },
              }
            );
          });

          // Orchestrating staggered entrance vectors for layout grid cells
          gsap.fromTo(".stats-card",
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.2,
              duration: 1,
              ease: "expo.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%"
              },
            }
          );

        }, sectionRef);

      } catch (error) {
        console.error("GSAP numerical counter initialization failed within Stats Section:", error);
      }
    };

    initGSAP();

    // Disposing active context triggers during structural teardown
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 relative overflow-hidden bg-black">

      {/* Background Chromatic Radial Blur Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C8FF00]/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Responsive Layout Quad Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS_METRICS.map(({ value, suffix, label, icon: Icon, desc }, i) => (
            <div
              key={label}
              className="stats-card bg-[#0A0A0A] border border-white/5 rounded-[2rem] p-10 text-center group hover:border-[#C8FF00]/30 transition-all duration-500 hover:-translate-y-2"
            >

              {/* Absolute Structural Icon Frame Node */}
              <div className="w-14 h-14 rounded-2xl bg-[#C8FF00]/5 text-[#C8FF00] flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C8FF00] group-hover:text-black transition-all duration-500 border border-[#C8FF00]/10">
                <Icon size={24} />
              </div>

              {/* Dynamic Animated Counter Value Layout */}
              <div className="font-bold text-5xl text-white mb-3 flex items-center justify-center gap-1 tracking-tighter">
                <span className={`stat-num-${i}`}>{value}</span>
                <span className="text-[#C8FF00]">{suffix}</span>
              </div>

              {/* Informational Text Hierarchies */}
              <div className="font-bold text-white text-lg mb-2">{label}</div>
              <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                {desc}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}