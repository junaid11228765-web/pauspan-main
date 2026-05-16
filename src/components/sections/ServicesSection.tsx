"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  Layers, Globe, Palette, Shield, Zap, BarChart3, ArrowRight
} from "lucide-react";

// ==========================================
// CASE STUDIES METADATA CONFIGURATIONS
// ==========================================

const SERVICES_DATA = [
  {
    icon: Globe,
    title: "InfluenceHer",
    desc: "A high-converting digital transformation project focused on brand growth and frontend excellence.",
    tags: ["Strategy", "Next.js"],
    accent: "#C8FF00",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=380&fit=crop&q=80",
  },
  {
    icon: Zap,
    title: "Chef Colin",
    desc: "Premium culinary digital experience implementing modern frameworks and seamless UI design.",
    tags: ["React.js", "Vercel"],
    accent: "#C8FF00",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=380&fit=crop&q=80",
  },
  {
    icon: BarChart3,
    title: "Safari Coin",
    desc: "Performance-driven Web3 landing page integrated with cryptocurrency analytics and engagement tools.",
    tags: ["Web3.js", "Fintech"],
    accent: "#C8FF00",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=380&fit=crop&q=80",
  },
  {
    icon: Layers,
    title: "Cynq AI",
    desc: "Advanced AI solution leveraging GPT & LLMs for a seamless and intelligent user interface.",
    tags: ["AI/ML", "Python"],
    accent: "#C8FF00",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=380&fit=crop&q=80",
  },
  {
    icon: Palette,
    title: "Re-Morph",
    desc: "Full-scale brand development and clean frontend architecture for modern business identity.",
    tags: ["Branding", "Tailwind"],
    accent: "#C8FF00",
    image: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=600&h=380&fit=crop&q=80",
  },
  {
    icon: Shield,
    title: "Beks Media",
    desc: "Scalable cloud-based media platform optimized for performance and global digital presence.",
    tags: ["AWS", "Architecture"],
    accent: "#C8FF00",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=380&fit=crop&q=80",
  },
];

// ==========================================
// MAIN PORTFOLIO SERVICES SECTION
// ==========================================

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;

    const initAnimations = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          // Setting explicit hardware-accelerated transformation baselines
          gsap.set(".service-card", { opacity: 0, y: 30 });

          // Orchestrating staggered entrance sequence for card nodes
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
        }, sectionRef);

      } catch (error) {
        console.error("GSAP Initialization failed within Services Section:", error);
      }
    };

    initAnimations();

    // Reverting animation logic to prevent node leaks during unmounting
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header Labels Group */}
        <header className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-[10px] font-bold tracking-widest text-[#C8FF00] border border-[#C8FF00]/20 mb-6 uppercase">
            Our Portfolios
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-white mb-6">
            Featured <span className="text-[#C8FF00]">Case Studies</span>
          </h2>
        </header>

        {/* Modular Grid Display Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
}

// ==========================================
// SUB-COMPONENT: INNER CARD INTERACTIVE NODE
// ==========================================

function ServiceCard({ icon: Icon, title, desc, tags, accent, image }: any) {
  return (
    <article className="service-card group flex flex-col bg-[#111] rounded-[2rem] overflow-hidden border border-white/5 transition-all duration-500 relative cursor-pointer h-full">
      
      {/* Media Canvas Aspect Box Frame */}
      <div className="relative w-full h-52 overflow-hidden flex-shrink-0">
        <Image 
          src={image} 
          alt={`${title} Interface Preview`} 
          fill 
          className="object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700 ease-in-out" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
        
        {/* Absolute Scaled Accent Vector Icon */}
        <div 
          className="absolute top-5 left-5 w-11 h-11 rounded-xl flex items-center justify-center backdrop-blur-md z-20 border border-white/10 transition-all duration-500 group-hover:rotate-[360deg] group-hover:scale-110" 
          style={{ background: `${accent}20`, color: accent }}
        >
          <Icon size={22} />
        </div>
      </div>

      {/* Interactive Content Layout Info Block */}
      <div className="p-8 flex flex-col flex-grow transition-colors duration-500 group-hover:bg-[#1e2303]">
        <h3 className="font-display font-bold text-xl text-white mb-3 transition-colors duration-500 group-hover:text-[#C8FF00]">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-white/80 transition-colors duration-500">
          {desc}
        </p>
        
        {/* Dynamic Categorization Tags and Action Blueprint */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-8">
            {tags.map((tag: string) => (
              <span 
                key={tag} 
                className="text-[9px] uppercase font-bold tracking-tighter px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400 group-hover:border-[#C8FF00]/30 group-hover:text-white transition-all duration-500"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Action Trigger Link Wrapper */}
          <div className="flex items-center gap-2 text-sm font-bold text-[#C8FF00] group-hover:gap-3 transition-all duration-300">
            VIEW CASE STUDY <ArrowRight size={16} />
          </div>
        </div>

      </div>
    </article>
  );
}