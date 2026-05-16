"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles, Star, Cpu, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

// ==========================================
// CONSTANTS & CONFIGURATIONS
// ==========================================

const MARQUEE_IMAGES = [
  { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&q=80", label: "Next.js & React" },
  { src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&q=80", label: "AI & GPT LLMs" },
  { src: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=300&fit=crop&q=80", label: "Cloud (AWS/Azure)" },
  { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop&q=80", label: "Digital Strategy" },
  { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&q=80", label: "Data Analytics" },
  { src: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop&q=80", label: "UI/UX Design" },
  { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&q=80", label: "Tech Stack" },
  { src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=300&fit=crop&q=80", label: "Machine Learning" },
];

const STATS_DATA = [
  { value: "50+", label: "Modern Tech Tools", icon: Zap },
  { value: "98%", label: "Client Satisfaction", icon: Star },
  { value: "24/7", label: "Tech Support", icon: Cpu },
];

// ==========================================
// MAIN HERO SECTION COMPONENT
// ==========================================

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    let ctx: any;

    const initAnimations = async () => {
      // Dynamically importing GSAP to avoid SSR/hydration mismatches
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Reveal section content once GSAP resources are ready
      setIsReady(true);

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Intro entrance animation sequence
        tl.fromTo(".hero-badge", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
          .fromTo(".hero-title span", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, "-=0.3")
          .fromTo(".hero-desc", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.4")
          .fromTo(".hero-buttons", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, "-=0.3")
          .fromTo(".stat-item", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }, "-=0.3")
          .fromTo(".marquee-container", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=0.7");

        // Subtle parallax effect on scroll for the title
        gsap.to(".hero-title", {
          y: -50,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }, heroRef);
    };

    initAnimations();

    // Cleanup animations context on component unmount
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className={`relative min-h-screen flex items-center overflow-hidden pt-20 transition-opacity duration-300 ${isReady ? "opacity-100" : "opacity-0"
        }`}
    >
      {/* Dynamic Background with Radial Glow and Grid Overlay */}
      <div className="absolute inset-0 bg-black -z-10">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#C8FF00]/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none grid-bg" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column: Content and Action Controls */}
          <div className="space-y-8">

            {/* Strategy & Service Badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md text-xs font-bold text-[#C8FF00] border border-[#C8FF00]/20 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
              Digital Transformation & Strategy <Sparkles size={12} />
            </div>

            {/* Typography Heading */}
            <h1 className="hero-title font-bold text-6xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tighter text-white">
              <span className="block">WE CRAFT</span>
              <span className="block text-[#C8FF00]">DIGITAL</span>
              <span className="block">EXCELLENCE</span>
            </h1>

            {/* Value Proposition Description */}
            <p className="hero-desc text-gray-400 text-lg leading-relaxed max-w-md">
              Pauspan leverages a premium tech stack—from <span className="text-white">Next.js</span> to{" "}
              <span className="text-white">AI/LLMs</span>—to build scalable solutions that transform businesses.
            </p>

            {/* Action Buttons */}
            <div className="hero-buttons flex flex-wrap gap-4">
              <Button
                className="bg-[#C8FF00] text-black font-bold h-14 px-8 rounded-full hover:scale-105 transition-transform"
                href="/contact"
              >
                Start a Project <ArrowRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                className="border-white/10 text-white h-14 px-8 rounded-full hover:bg-white/5"
                href="/projects"
              >
                View Our Work
              </Button>
            </div>

            {/* Performance & Metric Trackers */}
            <div className="flex flex-wrap gap-10 pt-6">
              {STATS_DATA.map(({ value, label, icon: Icon }) => (
                <div key={label} className="stat-item group cursor-default">
                  <div className="flex items-center gap-3 mb-1">
                    <Icon size={18} className="text-[#C8FF00] group-hover:scale-110 transition-transform" />
                    <div className="font-bold text-3xl text-white tracking-tighter">{value}</div>
                  </div>
                  <div className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Infinite Vertical Tech Marquee Container */}
          <div className="marquee-container relative h-[600px] lg:h-[750px] overflow-hidden rounded-3xl border border-white/5 shadow-2xl">
            {/* Smooth Edge Shading for Seamless Marquee Illusion */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />

            <div className="flex gap-4 h-full p-4 bg-[#050505]">
              <MarqueeColumn items={MARQUEE_IMAGES} />
              <MarqueeColumn items={MARQUEE_IMAGES} reverse />
            </div>
          </div>

        </div>
      </div>

      {/* Global CSS Overrides for Structural Styling */}
      <style jsx global>{`
        .grid-bg {
          background-image: linear-gradient(rgba(200, 255, 0, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(200, 255, 0, 0.2) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        .hero-badge,
        .hero-title span,
        .hero-desc,
        .hero-buttons,
        .stat-item,
        .marquee-container {
          opacity: 0;
        }
      `}</style>
    </section>
  );
}

// ==========================================
// SUB-COMPONENT: INFINITE MARQUEE COLUMN
// ==========================================

function MarqueeColumn({ items, reverse = false }: { items: typeof MARQUEE_IMAGES; reverse?: boolean }) {
  const list = reverse ? [...items].reverse() : items;

  return (
    <div className={`flex-1 overflow-hidden ${reverse ? "pt-20" : ""}`}>
      <div
        className="flex flex-col gap-4"
        style={{
          animation: `${reverse ? "marquee-vert-rev" : "marquee-vert"} 40s linear infinite`,
        }}
      >
        {/* Double array map ensures a smooth looping interface with no blank spaces */}
        {[...list, ...list].map((img, i) => (
          <div
            key={i}
            className="relative flex-shrink-0 h-64 rounded-2xl overflow-hidden group border border-white/5"
          >
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-end p-6">
              <div className="bg-black/50 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 text-[10px] font-bold text-white uppercase tracking-widest">
                {img.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Component-Scoped Keyframe Interpolations */}
      <style jsx>{`
        @keyframes marquee-vert {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        @keyframes marquee-vert-rev {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}