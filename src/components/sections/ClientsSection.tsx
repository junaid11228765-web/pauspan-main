"use client";

import { useEffect, useRef, useState } from "react";
import { Zap } from "lucide-react";

// ==========================================
// CONSTANTS & CONFIGURATIONS
// ==========================================

const TECHNOLOGIES = [
  "Next.js", "React.js", "TypeScript", "Python", "GPT & LLMs",
  "Tailwind CSS", "Node.js", "AWS", "Docker", "Firebase",
  "MongoDB", "PostgreSQL", "Framer Motion", "GSAP", "Vercel",
  "Hugging Face", "LangChain", "FastAPI", "Express.js", "Prisma",
  "Redis", "Kubernetes", "PyTorch", "TensorFlow", "Dart", "Flutter"
];

// Animation speed config for a smooth, readable marquee flow
const MARQUEE_SPEED = "60s";

// ==========================================
// MAIN CLIENTS/TECH STACK COMPONENT
// ==========================================

export default function ClientsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    let ctx: any;

    const initGSAP = async () => {
      try {
        // Dynamically loading GSAP modules to safeguard against SSR hydration issues
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          // Subtle reveal effect on scroll for the section heading
          gsap.fromTo(".clients-heading",
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }, sectionRef);
      } catch (error) {
        console.error("GSAP initialization failed:", error);
      }
    };

    initGSAP();

    // Context cleanup on component unmount
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-20 relative overflow-hidden border-y border-white/5 bg-black transition-opacity duration-500 ${hasMounted ? "opacity-100" : "opacity-0"
        }`}
    >
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Typography Heading */}
        <div className="clients-heading text-center mb-12 opacity-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8FF00]/5 border border-[#C8FF00]/20 text-[10px] mb-4 tracking-widest uppercase">
            <Zap size={10} className="text-[#C8FF00]" />
            <span className="text-[#C8FF00] font-bold">Cutting-Edge Tech Stack</span>
            <Zap size={10} className="text-[#C8FF00]" />
          </div>
          <h2 className="font-bold text-3xl sm:text-5xl text-white tracking-tighter">
            Technologies We <span className="text-[#C8FF00]">Master</span>
          </h2>
        </div>

        {/* Marquee Row 01: Forward Scroll Sequence */}
        <div className="relative overflow-hidden mb-4">
          {/* Linear gradient masks for visual fade-out edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

          <div
            className="flex gap-3 animate-marquee w-max"
            style={{ animationDuration: MARQUEE_SPEED }}
          >
            {/* Array duplication feeds a seamless looping sequence */}
            {[...TECHNOLOGIES, ...TECHNOLOGIES].map((tech, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-white/40 hover:text-[#C8FF00] hover:border-[#C8FF00]/30 hover:bg-[#C8FF00]/5 transition-all duration-300 cursor-default whitespace-nowrap"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 02: Reverse Scroll Sequence */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

          <div
            className="flex gap-3 animate-marquee-reverse w-max"
            style={{ animationDuration: MARQUEE_SPEED }}
          >
            {/* Cloned, reversed array layout mapping the loop in opposition */}
            {[...TECHNOLOGIES.slice().reverse(), ...TECHNOLOGIES.slice().reverse()].map((tech, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-medium text-white/40 hover:text-[#C8FF00] hover:border-[#C8FF00]/30 hover:bg-[#C8FF00]/5 transition-all duration-300 cursor-default whitespace-nowrap"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Global CSS Injectors for Animation Keyframes */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse linear infinite;
        }
      `}</style>
    </section>
  );
}