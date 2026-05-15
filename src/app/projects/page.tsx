"use client";
import { useState, useEffect, useRef } from "react";
import { ExternalLink, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const categories = ["All", "Strategy", "Branding", "Digital", "Product", "Growth"];

export const projects = [
  { title: "Meridian Finance", category: "Strategy", result: "+300% Revenue", desc: "Complete rebrand and digital transformation for a $50M fintech firm. Rearchitected their go-to-market strategy and rebuilt their digital presence from the ground up.", gradient: "from-blue-600 via-violet-600 to-purple-700", tags: ["Strategy", "Branding", "Web"], year: "2024" },
  { title: "Nova Health", category: "Product", result: "+150% Signups", desc: "Redesigning a healthcare platform serving 1M+ patients. We redesigned the complete user journey, reducing drop-off by 60% and doubling signups.", gradient: "from-emerald-500 via-teal-600 to-cyan-700", tags: ["UX/UI", "Product", "Mobile"], year: "2024" },
  { title: "Apex Studio", category: "Growth", result: "50K Users", desc: "A multi-channel growth strategy that took an indie studio from 0 to 50,000 users in 6 months through targeted content and community building.", gradient: "from-orange-500 via-red-500 to-pink-600", tags: ["Marketing", "Growth", "Social"], year: "2023" },
  { title: "Stratos AI", category: "Digital", result: "Series A", desc: "End-to-end AI integration and operations overhaul for a B2B SaaS, positioning them for their successful Series A raise.", gradient: "from-indigo-500 via-blue-600 to-cyan-600", tags: ["Tech", "AI", "Ops"], year: "2024" },
  { title: "Bloom Agency", category: "Branding", result: "3x Clients", desc: "Full brand identity and positioning work for a boutique creative agency. New visual system tripled their inbound inquiries within 90 days.", gradient: "from-pink-500 via-rose-500 to-red-600", tags: ["Branding", "Identity", "Strategy"], year: "2023" },
  { title: "Clearify SaaS", category: "Product", result: "4.9★ Rating", desc: "Product design overhaul for a project management tool. User satisfaction scores jumped from 3.2 to 4.9 stars following redesign.", gradient: "from-cyan-500 via-sky-600 to-blue-700", tags: ["Product", "UX/UI", "Design"], year: "2023" },
  { title: "Taskflow", category: "Strategy", result: "$2M ARR", desc: "Growth strategy and product positioning that helped Taskflow hit $2M ARR within 18 months of launch.", gradient: "from-yellow-500 via-amber-500 to-orange-600", tags: ["Strategy", "Growth", "Ops"], year: "2024" },
  { title: "PerspectiveAI", category: "Digital", result: "10x Scale", desc: "Digital transformation project that automated 80% of their manual workflows, allowing them to scale 10x without adding headcount.", gradient: "from-violet-600 via-purple-600 to-fuchsia-700", tags: ["Digital", "AI", "Automation"], year: "2024" },
];

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  const getSlug = (text: string) => text.toLowerCase().replace(/\s+/g, '-');

  useEffect(() => {
    const initGSAP = async () => {
      try {
        const { default: gsap } = await import("gsap");
        gsap.fromTo(".reveal-hero-item",
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power4.out",
            clearProps: "all"
          }
        );
      } catch (error) {
        console.error("GSAP failed:", error);
      }
    };
    initGSAP();
  }, []);

  useEffect(() => {
    const animate = async () => {
      try {
        const { default: gsap } = await import("gsap");
        gsap.fromTo(".project-item",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power3.out" }
        );
      } catch (error) {
        console.error("Animation failed:", error);
      }
    };
    animate();
  }, [active]);

  return (
    <div className="min-h-screen pt-20 bg-[#050505] text-white">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <div className="reveal-hero-item inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black tracking-[0.3em] text-accent mb-8 uppercase">
              <Sparkles size={12} /> Our Portfolio
            </div>

            <h1 className="reveal-hero-item font-display font-bold text-6xl md:text-8xl text-white leading-[0.85] tracking-tighter mb-8">
              Work That <span className="text-accent italic">Moves</span> <br /> the Needle.
            </h1>

            <p className="reveal-hero-item text-zinc-400 text-xl md:text-2xl leading-relaxed max-w-2xl font-light italic border-l-2 border-white/10 pl-8">
              Real projects. Real results. Every case study represents a partnership built on trust, craft, and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={sectionRef} className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="flex flex-wrap gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-3 rounded-xl text-[11px] font-black tracking-widest uppercase transition-all duration-300 ${active === cat
                  ? "bg-accent text-black shadow-[0_10px_30px_rgba(200,255,0,0.2)] scale-105"
                  : "bg-white/5 text-zinc-500 hover:text-white border border-white/5 hover:border-white/20"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(({ title, result, desc, gradient, tags, year }) => (
              <Link
                key={title}
                href={`/projects/${getSlug(title)}`}
                className="project-item group relative bg-[#0a0a0a] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-accent/30 transition-all duration-500 block"
              >
                {/* Visual Header - Reduced Height (h-52) */}
                <div className={`relative h-52 bg-gradient-to-br ${gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-700`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display font-bold text-7xl text-white/10 group-hover:text-white/20 transition-all duration-700 group-hover:scale-110 uppercase">
                      {title[0]}
                    </span>
                  </div>

                  <div className="absolute top-6 right-6 bg-black/50 backdrop-blur-md text-accent text-[10px] font-black px-4 py-1.5 rounded-full border border-white/10 uppercase">
                    {result}
                  </div>
                  <div className="absolute bottom-6 left-6 text-white/50 text-[10px] font-black tracking-[0.2em] uppercase">{year}</div>
                </div>

                {/* Content Body - Adjusted Padding */}
                <div className="p-8 space-y-5">
                  <h3 className="font-display font-bold text-2xl text-white group-hover:text-accent transition-colors tracking-tight">
                    {title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 font-light">
                    {desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="text-[9px] font-black tracking-widest px-3 py-1 rounded-lg bg-white/5 text-zinc-400 border border-white/5 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links Row - White Text as requested */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-white group-hover:text-accent transition-colors">
                      <span className="text-[10px] font-black uppercase tracking-widest">View Case Study</span>
                      <ExternalLink size={14} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-500">
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-40 border-t border-white/5 bg-gradient-to-b from-transparent to-accent/[0.02]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-display font-bold text-5xl md:text-7xl text-white tracking-tighter">
            Next Level <span className="text-accent italic">Success</span> Story?
          </h2>
          <p className="text-zinc-500 text-xl font-light italic">Let&apos;s build something that people actually care about.</p>
          <div className="pt-10 flex justify-center">
            <Button size="md" href="/contact" className="px-12 py-6 rounded-full bg-accent text-black font-black hover:scale-110 transition-all duration-500 shadow-[0_20px_50px_rgba(200,255,0,0.2)] group">
              Start Conversation <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}