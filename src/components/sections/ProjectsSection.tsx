"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

// ==========================================
// CASE STUDIES METADATA CONFIGURATIONS
// ==========================================

const PORTFOLIO_PROJECTS = [
  {
    slug: "meridian-finance",
    title: "Meridian Finance",
    category: "Strategy + Brand",
    desc: "Complete rebrand and digital transformation for a $50M fintech firm, resulting in 3x revenue growth.",
    gradient: "from-blue-600 via-violet-600 to-purple-700",
    tags: ["Strategy", "Branding", "Web"],
    result: "+300% Revenue",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=500&fit=crop&q=80",
  },
  {
    slug: "nova-health",
    title: "Nova Health",
    category: "Product Design",
    desc: "Redesigning a healthcare platform for 1M+ patients with a focus on accessibility and conversion.",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    tags: ["UX/UI", "Product", "Mobile"],
    result: "+150% Signups",
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&h=500&fit=crop&q=80",
  },
  {
    slug: "apex-studio",
    title: "Apex Studio",
    category: "Growth Marketing",
    desc: "Multi-channel growth strategy that took an indie studio from 0 to 50K users in 6 months.",
    gradient: "from-orange-500 via-red-500 to-pink-600",
    tags: ["Marketing", "Growth", "Social"],
    result: "50K Users",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=500&fit=crop&q=80",
  },
  {
    slug: "stratos-ai",
    title: "Stratos AI",
    category: "Digital Transformation",
    desc: "End-to-end AI integration and operations overhaul for a B2B SaaS scaling from seed to Series A.",
    gradient: "from-indigo-500 via-blue-600 to-cyan-600",
    tags: ["Tech", "AI", "Ops"],
    result: "Series A",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop&q=80",
  },
];

// ==========================================
// MAIN PROJECTS SECTION COMPONENT
// ==========================================

export default function ProjectsSection() {
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
          // Explicit fromTo orchestration to prevent flash of unstyled content
          gsap.fromTo(".project-card",
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: "power3.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                toggleActions: "play none none none"
              },
            }
          );
        }, sectionRef);

      } catch (error) {
        console.error("GSAP initialization failed within Projects Section:", error);
      }
    };

    initGSAP();

    // Clean memory footprint on dynamic viewport changes
    return () => ctx && ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative overflow-hidden bg-obsidian">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header Controls Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-accent border border-accent/20 mb-5">
              OUR WORK
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-white">
              Work That <span className="accent-text">Speaks</span>
            </h2>
          </div>
          <Button variant="outline" href="/projects" className="shrink-0 border-white/10 text-white hover:bg-white/5">
            View All Projects <ArrowRight size={14} />
          </Button>
        </div>

        {/* Portfolio Showcase Responsive Grid Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_PROJECTS.map(({ title, slug, category, desc, gradient, tags, result, image }) => (
            <Link
              href={`/projects/${slug}`}
              key={title}
              className="project-card group glass-card rounded-3xl overflow-hidden hover:border-accent/30 transition-all duration-500 cursor-pointer block border border-white/5"
            >
              {/* Media Asset Canvas Frame */}
              <div className={`relative h-72 bg-gradient-to-br ${gradient} overflow-hidden`}>
                <Image
                  src={image}
                  alt={`${title} Digital Mockup`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Visual Depth Masks and Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Meta Indicator Badges Layout */}
                <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                  <div className="text-[10px] text-white/70 font-bold uppercase tracking-widest">{category}</div>
                  <div className="bg-accent text-obsidian text-[10px] font-black px-3 py-1 rounded-full uppercase">
                    {result}
                  </div>
                </div>

                {/* Animated Case Study Action Hover Trigger */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2 bg-white text-black rounded-full px-4 py-2 font-bold text-xs">
                  <ExternalLink size={14} /> View Case Study
                </div>
              </div>

              {/* Informational Copy Specifications Container */}
              <div className="p-8">
                <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-accent transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-text-dim text-sm leading-relaxed mb-6">{desc}</p>

                {/* Project Technology Framework Nodes Mapping */}
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-3 py-1 rounded-md bg-white/5 text-text-dim border border-white/10 uppercase tracking-tighter">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}