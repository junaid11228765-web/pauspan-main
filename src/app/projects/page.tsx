"use client";

import { useState, useEffect, useRef } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ==========================================
// STATIC ARCHITECTURE CONFIG DATA MODULES
// ==========================================

const CATEGORIES_CONFIG = ["All", "Strategy", "Branding", "Digital", "Product", "Growth"];

const PROJECTS_DATA_CONFIG = [
    {
        title: "Meridian Finance",
        category: "Strategy",
        result: "+300% Revenue",
        desc: "Complete rebrand and digital transformation for a $50M fintech firm.",
        gradient: "from-blue-600 via-violet-600 to-purple-700",
        tags: ["Strategy", "Branding", "Web"],
        year: "2024",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Nova Health",
        category: "Product",
        result: "+150% Signups",
        desc: "Redesigning a healthcare platform serving 1M+ patients.",
        gradient: "from-emerald-500 via-teal-600 to-cyan-700",
        tags: ["UX/UI", "Product", "Mobile"],
        year: "2024",
        image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Apex Studio",
        category: "Growth",
        result: "50K Users",
        desc: "A multi-channel growth strategy that took an indie studio from 0 to 50,000 users.",
        gradient: "from-orange-500 via-red-500 to-pink-600",
        tags: ["Marketing", "Growth", "Social"],
        year: "2023",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Stratos AI",
        category: "Digital",
        result: "Series A",
        desc: "End-to-end AI integration and operations overhaul for a B2B SaaS.",
        gradient: "from-indigo-500 via-blue-600 to-cyan-600",
        tags: ["Tech", "AI", "Ops"],
        year: "2024",
        image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Bloom Agency",
        category: "Branding",
        result: "3x Clients",
        desc: "Full brand identity and positioning work for a boutique creative agency.",
        gradient: "from-pink-500 via-rose-500 to-red-600",
        tags: ["Branding", "Identity", "Strategy"],
        year: "2023",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Clearify SaaS",
        category: "Product",
        result: "4.9★ Rating",
        desc: "Product design overhaul for a project management tool.",
        gradient: "from-cyan-500 via-sky-600 to-blue-700",
        tags: ["Product", "UX/UI", "Design"],
        year: "2023",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "Taskflow",
        category: "Strategy",
        result: "$2M ARR",
        desc: "Growth strategy and product positioning for Taskflow.",
        gradient: "from-yellow-500 via-amber-500 to-orange-600",
        tags: ["Strategy", "Growth", "Ops"],
        year: "2024",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
    },
    {
        title: "PerspectiveAI",
        category: "Digital",
        result: "10x Scale",
        desc: "Digital transformation project that automated 80% of workflows.",
        gradient: "from-violet-600 via-purple-600 to-fuchsia-700",
        tags: ["Digital", "AI", "Automation"],
        year: "2024",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
    },
];

// ==========================================
// CORE PORTFOLIO WORKCASE INTERFACE VIEW
// ==========================================

export default function ProjectsPage() {
    const [active, setActive] = useState("All");
    const containerRef = useRef<HTMLDivElement>(null);

    const filteredProjects = active === "All"
        ? PROJECTS_DATA_CONFIG
        : PROJECTS_DATA_CONFIG.filter((p) => p.category === active);

    const getSlug = (title: string) => title.toLowerCase().replace(/\s+/g, '-');

    useEffect(() => {
        let ctx: any;
        const initGSAP = async () => {
            try {
                const { default: gsap } = await import("gsap");
                ctx = gsap.context(() => {
                    gsap.to(".premium-entrance", {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: "power3.out",
                        delay: 0.05,
                    });
                }, containerRef);
            } catch (error) {
                console.error("GSAP entrance context animation failed:", error);
            }
        };

        initGSAP();
        return () => ctx && ctx.revert();
    }, []);

    useEffect(() => {
        const animateItems = async () => {
            try {
                const { default: gsap } = await import("gsap");
                gsap.fromTo(".project-card",
                    { opacity: 0, y: 15 },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.05,
                        duration: 0.5,
                        ease: "power2.out",
                    }
                );
            } catch (error) {
                console.error("GSAP dynamic re-render sequence tracking crashed:", error);
            }
        };
        animateItems();
    }, [active]);

    return (
        <div ref={containerRef} className="min-h-screen pt-20 bg-obsidian">

            {/* Title Header Deck Segment */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <div className="premium-entrance translate-y-8 opacity-0 inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-accent border border-accent/20 mb-6 uppercase tracking-widest">
                            Our Work
                        </div>
                        <h1 className="premium-entrance translate-y-8 opacity-0 font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6">
                            Work That <span className="text-accent italic">Moves</span> the Needle
                        </h1>
                        <p className="premium-entrance translate-y-8 opacity-0 text-white/60 text-xl leading-relaxed">
                            Real projects. Real results. Every case study represents a partnership built on trust, craft, and accountability.
                        </p>
                    </div>
                </div>
            </section>

            {/* Grid Filtering Controls and Case Output */}
            <section className="pb-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">

                    <div className="flex flex-wrap gap-3 mb-12">
                        {CATEGORIES_CONFIG.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActive(cat)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${active === cat
                                        ? "bg-accent text-black font-bold shadow-[0_0_20px_rgba(200,255,0,0.3)]"
                                        : "bg-white/5 text-white/60 hover:text-white border border-white/10"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map(({ title, result, desc, gradient, tags, year, image }) => (
                            <Link
                                key={title}
                                href={`/projects/${getSlug(title)}`}
                                className="project-card opacity-0 block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-400 group"
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={image}
                                        alt={title}
                                        fill
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-75"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} mix-blend-multiply opacity-60`} />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="font-display font-bold text-5xl text-white/20 group-hover:text-white/40 transition-transform duration-500 group-hover:scale-110">
                                            {title[0]}
                                        </span>
                                    </div>

                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                        <ExternalLink className="text-white" size={18} />
                                        <span className="text-white text-sm font-bold uppercase tracking-tighter font-sans">
                                            View Case Study
                                        </span>
                                    </div>

                                    <div className="absolute top-4 right-4 bg-accent text-black text-[10px] font-black px-3 py-1 rounded-full uppercase z-10">
                                        {result}
                                    </div>
                                    <div className="absolute top-4 left-4 text-white/60 text-[10px] font-bold z-10">
                                        {year}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-accent transition-colors">
                                        {title}
                                    </h3>
                                    <p className="text-white/50 text-sm leading-relaxed mb-4 line-clamp-2">
                                        {desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[10px] px-2 py-0.5 rounded-md bg-white/5 text-white/40 border border-white/5 uppercase font-bold tracking-wider"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="inline-flex items-center gap-2 text-[10px] text-accent font-black uppercase tracking-widest group-hover:gap-3 transition-all">
                                        Read Case Study <ArrowRight size={14} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </section>

        </div>
    );
}