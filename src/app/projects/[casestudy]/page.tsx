"use client";

import React, { useEffect, useRef } from "react";
import { PROJECTS_DATA } from "@/data/projects";
import { notFound, useParams } from "next/navigation";
import { ArrowLeft, Globe, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Direct Relative Import Fix
import staticCaseImage from "../../../public/projects/img.jpg";

// ==========================================
// TYPESCRIPT DOM STRICT INTERFACE SCHEMAS
// ==========================================
interface ProjectItemSchema {
  slug: string;
  title: string;
  desc: string;
  gradient?: string;
  year?: string;
  result?: string;
  category?: string;
  tags?: string[];
  link?: string;
  challenge?: string;
}

export default function ProjectDetailPage() {
  const params = useParams();
  const casestudy = params?.casestudy as string;
  const mainRef = useRef<HTMLDivElement>(null);

  // Cast array with corrected PROJECTS_DATA variable name matching configuration file
  const project = (PROJECTS_DATA as ProjectItemSchema[]).find(p =>
    p.slug === casestudy || p.title.toLowerCase().replace(/\s+/g, '-') === casestudy
  );

  useEffect(() => {
    if (!project) return;

    let ctx: any;
    const initGSAP = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
          // 1. Clean entrance for Text content with automated rendering initialization
          gsap.fromTo(".reveal",
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.08,
              ease: "power3.out",
            }
          );

          // 2. Ultra-Smooth Parallax scroll Matrix
          gsap.to(".parallax-content", {
            y: -40,
            scrollTrigger: {
              trigger: ".parallax-container",
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            }
          });
        }, mainRef);

      } catch (error) {
        console.error("GSAP engine layout core initialization failed:", error);
      }
    };

    initGSAP();
    return () => ctx && ctx.revert();
  }, [casestudy, project]);

  if (!project) return notFound();

  // Standard safe rendering extraction matrix injection rules
  const dynamicBackgroundGradient = project.gradient || "from-[#C8FF00]/10 to-transparent";

  return (
    <main
      ref={mainRef}
      key={casestudy}
      className="min-h-screen bg-[#030303] text-white selection:bg-[#C8FF00] selection:text-black tracking-tight antialiased overflow-x-hidden"
    >

      {/* Interactive Backglow Effect matching project gradient */}
      <div
        className={`fixed -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br ${dynamicBackgroundGradient} opacity-[0.06] blur-[160px] pointer-events-none rounded-full z-0`}
      />

      {/* Floating Sticky Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 px-6 sm:px-12 py-6 flex justify-between items-center bg-transparent pointer-events-none">
        <Link
          href="/projects"
          className="group w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#0A0A0A]/60 backdrop-blur-xl hover:bg-[#C8FF00] hover:border-[#C8FF00] hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl pointer-events-auto"
        >
          <ArrowLeft size={18} className="text-white group-hover:text-black group-hover:-translate-x-0.5 transition-all duration-300" />
        </Link>
      </nav>

      <section className="pt-36 pb-32 px-6 sm:px-12 lg:px-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

            {/* LEFT SIDE: Sticky Meta Details Module Wrapper */}
            <div className="lg:col-span-5 lg:sticky lg:top-36 h-fit space-y-12">
              <div className="space-y-6">
                <div className="reveal opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-[10px] font-bold tracking-[0.15em] text-[#C8FF00] uppercase cursor-default">
                  <Sparkles size={10} className="animate-pulse" /> {project.year || "2026"} Case Study
                </div>

                <h1 className="reveal opacity-0 text-5xl sm:text-6xl font-display font-bold leading-[1.02] tracking-tighter cursor-default pr-4">
                  {project.title}
                </h1>

                <p className="reveal opacity-0 text-zinc-400 text-[16px] font-normal leading-relaxed max-w-md cursor-default">
                  {project.desc}
                </p>
              </div>

              {/* Data Metrics Counter Block */}
              <div className="reveal opacity-0 grid grid-cols-2 gap-6 pt-8 border-t border-white/5">
                <div className="space-y-1 p-4 rounded-xl bg-white/[0.01] border border-white/[0.02] hover:bg-white/[0.03] transition-colors duration-300 cursor-default">
                  <span className="text-zinc-500 uppercase text-[9px] font-bold tracking-[0.15em]">Metrics Achieved</span>
                  <p className="text-xl font-bold tracking-tight text-[#C8FF00]">{project.result || "N/A"}</p>
                </div>
                <div className="space-y-1 p-4 rounded-xl bg-white/[0.01] border border-white/[0.02] hover:bg-white/[0.03] transition-colors duration-300 cursor-default">
                  <span className="text-zinc-500 uppercase text-[9px] font-bold tracking-[0.15em]">Core Discipline</span>
                  <p className="text-xl font-medium tracking-tight text-zinc-200">{project.category || "Development"}</p>
                </div>
              </div>

              {/* Modern Micro Tags Stack */}
              <div className="reveal opacity-0 flex flex-wrap gap-2 pt-2">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-[#0F0F0F] text-zinc-400 hover:text-black hover:bg-[#C8FF00] border border-white/5 text-[10px] font-semibold rounded-lg uppercase tracking-wider transition-all duration-300 cursor-default select-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Live Action CTA Button */}
              <div className="reveal opacity-0 pt-4">
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:bg-[#C8FF00] rounded-full font-bold text-xs uppercase tracking-[0.12em] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-xl"
                >
                  Launch Live Site
                  <Globe size={14} className="group-hover:rotate-45 transition-transform duration-500" />
                </a>
              </div>
            </div>

            {/* RIGHT SIDE: Immersive Media Showcase Segment */}
            <div className="lg:col-span-7 space-y-12 parallax-container">

              {/* Premium Device Card Frame Grid Section */}
              <div className="aspect-[16/10] rounded-2xl bg-[#0A0A0A] border border-white/10 overflow-hidden relative group shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-700 hover:border-[#C8FF00]/30">
                <Image
                  src={staticCaseImage}
                  alt={project.title}
                  fill
                  className="object-cover object-center scale-[1.01] group-hover:scale-[1.03] transition-transform duration-1000 brightness-[0.95] group-hover:brightness-100"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-100 pointer-events-none" />
              </div>

              {/* Structured Challenge & Solutions Blocks */}
              <div className="space-y-6 parallax-content">
                <div className="reveal opacity-0 p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-300 space-y-4 cursor-default">
                  <div className="flex items-center gap-2 text-xs text-[#C8FF00] font-bold uppercase tracking-wider">
                    <div className="w-1.5 h-1.5 bg-[#C8FF00] rounded-full" /> The Challenge
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">Overcoming Complexity</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-light">
                    {project.challenge || "We focused on creating a seamless user experience that balances minimal aesthetic beauty with high-performance framework architecture."}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="reveal opacity-0 p-6 sm:p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-[#C8FF00]/20 transition-all duration-300 space-y-3 cursor-default group">
                    <h4 className="text-xs font-bold text-[#C8FF00] uppercase tracking-wider">01 / Strategy</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed font-light group-hover:text-zinc-300 transition-colors duration-300">
                      Comprehensive target profiling matched with high fidelity user journey optimization maps.
                    </p>
                  </div>
                  <div className="reveal opacity-0 p-6 sm:p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-[#C8FF00]/20 transition-all duration-300 space-y-3 cursor-default group">
                    <h4 className="text-xs font-bold text-white group-hover:text-[#C8FF00] transition-colors duration-300 uppercase tracking-wider">02 / Execution</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed font-light group-hover:text-zinc-300 transition-colors duration-300">
                      Clean code construction powered by Next.js and beautifully animated with GSAP parameters.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
}