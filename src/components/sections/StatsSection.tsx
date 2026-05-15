"use client";
import { useEffect, useRef } from "react";
import { Users, Award, Globe, TrendingUp } from "lucide-react";

const stats = [
  { value: 200, suffix: "+", label: "Projects Delivered", icon: Globe, desc: "Across 30+ industries" },
  { value: 98, suffix: "%", label: "Client Retention", icon: Users, desc: "Clients who come back" },
  { value: 50, suffix: "M+", label: "Revenue Generated", icon: TrendingUp, desc: "For our clients" },
  { value: 5, suffix: "★", label: "Average Rating", icon: Award, desc: "Across all platforms" },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    const initGSAP = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        // Counter animation
        stats.forEach(({ value }, i) => {
          const el = document.querySelector(`.stat-num-${i}`);
          if (!el) return;
          gsap.fromTo(
            el,
            { textContent: 0 },
            {
              textContent: value,
              duration: 2,
              ease: "power2.out",
              snap: { textContent: 1 },
              immediateRender: false,
              scrollTrigger: { 
                trigger: sectionRef.current, 
                start: "top 75%" 
              },
            }
          );
        });

        gsap.from(".stats-card", {
          y: 40,
          opacity: 1,
          stagger: 0.15,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: "top 80%" 
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
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-void to-obsidian" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ value, suffix, label, icon: Icon, desc }, i) => (
            <div
              key={label}
              className={`stats-card glass-card rounded-2xl p-8 text-center group hover:border-accent/20 transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/20 transition-colors">
                <Icon size={22} />
              </div>
              <div className="font-display font-bold text-4xl sm:text-5xl text-white mb-2 flex items-center justify-center gap-1">
                <span className={`stat-num-${i}`}>{value}</span>
                <span className="text-accent">{suffix}</span>
              </div>
              <div className="font-medium text-text mb-1">{label}</div>
              <div className="text-xs text-text-dim">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
