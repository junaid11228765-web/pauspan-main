"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Layers, Zap, BarChart3, Globe,
  Palette, Shield, ArrowRight,
  LucideIcon
} from "lucide-react";

/** 
 * Data interfaces for better type safety
 */
interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
  accent: string;
  image: string;
}

const SERVICES_DATA: Service[] = [
  {
    icon: Layers,
    title: "Strategy Consulting",
    desc: "Deep market analysis and tailored strategy frameworks that align with your vision and accelerate sustainable growth.",
    tags: ["Market Research", "Roadmapping", "OKRs"],
    accent: "#C8FF00",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=380&fit=crop&q=80",
  },
  {
    icon: Palette,
    title: "Brand Development",
    desc: "Crafting memorable identities that resonate with your audience and set you apart in competitive landscapes.",
    tags: ["Identity", "Visual Systems", "Guidelines"],
    accent: "#C8FF00",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=380&fit=crop&q=80",
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    desc: "End-to-end digital solutions that modernize your operations and unlock new channels for value creation.",
    tags: ["Tech Stack", "Integration", "Automation"],
    accent: "#C8FF00",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=380&fit=crop&q=80",
  },
  {
    icon: BarChart3,
    title: "Growth Marketing",
    desc: "Data-driven campaigns and growth loops engineered to maximize acquisition, retention, and lifetime value.",
    tags: ["Performance", "SEO", "Campaigns"],
    accent: "#C8FF00",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=380&fit=crop&q=80",
  },
  {
    icon: Zap,
    title: "Product Design",
    desc: "User-obsessed product experiences that convert visitors into loyal customers through intuitive, delightful design.",
    tags: ["UX/UI", "Prototyping", "Testing"],
    accent: "#C8FF00",
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=600&h=380&fit=crop&q=80",
  },
  {
    icon: Shield,
    title: "Operations & Scale",
    desc: "Streamlined processes, robust systems, and scalable infrastructure to support your growth without friction.",
    tags: ["Processes", "Systems", "Scaling"],
    accent: "#C8FF00",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=380&fit=crop&q=80",
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Dynamically import GSAP to prevent SSR issues
    const initAnimations = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        // Initial state for scroll entrance animation
        gsap.set(".service-card", { opacity: 0, y: 30 });

        // Entrance animation on scroll
        gsap.to(".service-card", {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      } catch (error) {
        console.error("GSAP Initialization failed", error);
      }
    };

    initAnimations();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-24 bg-[#0a0a0a] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <header className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-[10px] font-bold tracking-widest text-[#C8FF00] border border-[#C8FF00]/20 mb-6 uppercase">
            Our Expertise
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
            Everything You Need to <span className="text-[#C8FF00]">Scale Up</span>
          </h2>
        </header>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Reusable Service Card Component
 */
function ServiceCard({ icon: Icon, title, desc, tags, accent, image }: Service) {
  return (
    <article className="service-card group bg-[#111] rounded-[2rem] overflow-hidden border border-white/5 transition-all duration-500 relative cursor-pointer">

      {/* Media Container: Zoom-forward effect on hover */}
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out"
        />
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

        {/* Floating Icon Badge */}
        <div
          className="absolute top-5 left-5 w-11 h-11 rounded-xl flex items-center justify-center backdrop-blur-md z-20 border border-white/10 transition-transform duration-500 group-hover:scale-110"
          style={{ background: `${accent}20`, color: accent }}
        >
          <Icon size={22} />
        </div>
      </div>

      {/* Content Area: Custom background color shift on hover */}
      <div className="p-8 relative transition-colors duration-500 group-hover:bg-[#1e2303]">
        <h3 className="font-display font-bold text-xl text-white mb-3 transition-colors duration-500 group-hover:text-[#C8FF00]">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-500">
          {desc}
        </p>

        {/* Dynamic Tags List */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[9px] uppercase font-bold tracking-tighter px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400 group-hover:border-[#C8FF00]/30 group-hover:text-white transition-all duration-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Link */}
        <div className="flex items-center gap-2 text-sm font-bold text-[#C8FF00] group-hover:gap-3 transition-all duration-300">
          LEARN MORE <ArrowRight size={16} />
        </div>
      </div>
    </article>
  );
}