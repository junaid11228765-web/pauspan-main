"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useMemo, useState, useRef } from "react";
import {
    ArrowLeft,
    CheckCircle2,
    Target,
    MoveRight,
    ExternalLink,
    Sparkles,
    Cpu
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { projects } from "../page";

export default function CaseStudyPage() {
    const params = useParams();
    const router = useRouter();
    const [hasMounted, setHasMounted] = useState(false);
    const containerRef = useRef(null);

    const getSlug = (text: string) => text.toLowerCase().replace(/\s+/g, '-');

    const project = useMemo(() =>
        projects.find((p) => getSlug(p.title) === params.casestudy)
        , [params.casestudy]);

    useEffect(() => {
        setHasMounted(true);
        if (project) {
            const initGSAP = async () => {
                try {
                    const { default: gsap } = await import("gsap");
                    const { ScrollTrigger } = await import("gsap/ScrollTrigger");
                    gsap.registerPlugin(ScrollTrigger);

                    const tl = gsap.timeline();
                    tl.fromTo(".reveal-hero",
                        { y: 40, opacity: 0 },
                        { y: 0, opacity: 1, duration: 1, ease: "power4.out", stagger: 0.15 }
                    )
                        .fromTo(".reveal-card",
                            { y: 50, opacity: 0, scale: 0.98 },
                            { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "expo.out" },
                            "-=0.6"
                        );
                } catch (e) { console.error("GSAP Error:", e); }
            };
            initGSAP();
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [project]);

    if (!project) return null;

    const projectData = project as any;
    const detailImage1 = projectData.gallery?.[0] || "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070";
    const detailImage2 = projectData.gallery?.[1] || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070";

    return (
        <main ref={containerRef} className={`min-h-screen bg-[#050505] text-slate-300 selection:bg-accent selection:text-black pb-20 transition-opacity duration-700 ${hasMounted ? 'opacity-100' : 'opacity-0'}`}>

            {/* Navbar: No Symbols + Right Hover */}
            <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-[#050505]/60 backdrop-blur-xl">
                <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                    <button onClick={() => router.back()} className="group flex items-center gap-4 text-[12px] font-black tracking-widest uppercase text-white transition-all">
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-all duration-500">
                            <ArrowLeft size={18} />
                        </div>
                        Go Back
                    </button>

                    <div className="hidden md:flex items-center gap-4 group cursor-pointer">
                        <div className="text-[11px] font-bold tracking-[0.4em] text-white/40 uppercase group-hover:text-white transition-all duration-500">
                            Case Study {projectData.year || '2026'}
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse group-hover:scale-150 transition-transform" />
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative pt-56 pb-24 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="reveal-hero inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/5 border border-accent/20 text-[10px] font-black tracking-widest text-accent mb-12 uppercase">
                        <Sparkles size={12} className="animate-pulse" /> {projectData.category}
                    </div>
                    <h1 className="reveal-hero text-7xl md:text-9xl font-display font-bold text-white tracking-tighter leading-[0.85] mb-20 italic uppercase">
                        {projectData.title}
                    </h1>
                </div>
            </header>

            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20">
                <div className="lg:col-span-8 space-y-32">

                    {/* CENTER CARD: Dual Images (Left & Right both filled) */}
                    <div className="reveal-card relative rounded-[3.5rem] overflow-hidden border border-white/10 bg-[#080808] shadow-[0_0_80px_rgba(0,0,0,1)]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
                            {/* Left Image Section */}
                            <div className="relative overflow-hidden border-r border-white/5 group/left">
                                <img
                                    src={projectData.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964"}
                                    className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover/left:scale-110"
                                    alt="Visual One"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover/left:bg-black/10 transition-colors duration-700" />
                                <div className="absolute top-12 left-12 text-white font-display font-bold text-4xl tracking-tighter italic drop-shadow-2xl">Main Concept</div>
                            </div>

                            {/* Right Image Section */}
                            <div className="relative overflow-hidden group/right bg-neutral-900">
                                <img
                                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070"
                                    className="w-full h-full object-cover opacity-60 grayscale group-hover/right:grayscale-0 group-hover/right:opacity-100 group-hover/right:scale-110 transition-all duration-[2s]"
                                    alt="Visual Two"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover/right:bg-transparent transition-colors duration-700" />
                                <div className="absolute bottom-12 left-12 text-[11px] font-black uppercase tracking-[0.5em] text-white/50 group-hover:text-accent transition-colors">Visual Logic</div>
                                <div className="absolute bottom-12 right-12 h-2 w-2 rounded-full bg-accent animate-ping" />
                            </div>
                        </div>
                    </div>

                    {/* Narrative Section */}
                    <article className="reveal-hero space-y-10">
                        <div className="flex items-center gap-6">
                            <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-black">
                                <Target size={28} />
                            </div>
                            <h2 className="text-white text-4xl font-display font-bold uppercase italic tracking-tight underline decoration-accent/20 underline-offset-8">Strategy</h2>
                        </div>
                        <p className="text-slate-400 text-3xl leading-[1.3] font-light max-w-4xl border-l-2 border-white/5 pl-12 hover:border-accent transition-colors duration-500">
                            {projectData.desc}
                        </p>
                    </article>

                    {/* Lower Gallery Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="reveal-card relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/5 bg-neutral-900 group shadow-2xl transition-transform hover:-translate-y-4 duration-700">
                            <img src={detailImage1} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.2s]" />
                            <div className="absolute top-10 left-10 text-[10px] font-black uppercase tracking-widest text-white/30 group-hover:text-white transition-colors">Design Module</div>
                        </div>
                        <div className="reveal-card relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/5 bg-neutral-900 md:translate-y-20 group shadow-2xl transition-transform hover:-translate-y-4 duration-700">
                            <img src={detailImage2} className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.2s]" />
                            <div className="absolute top-10 left-10 text-[10px] font-black uppercase tracking-widest text-white/30 group-hover:text-white transition-colors">Development</div>
                        </div>
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="lg:col-span-4">
                    <div className="reveal-card sticky top-36 p-12 rounded-[3.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-3xl space-y-16 hover:border-accent/20 transition-all duration-700">
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 text-accent text-[11px] font-black uppercase tracking-widest">
                                <Cpu size={16} /> Technical Stack
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {projectData.tags?.map((tag: string) => (
                                    <span key={tag} className="px-5 py-3 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-black text-white/40 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all uppercase cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest">Core Deliverables</p>
                            <ul className="space-y-4">
                                {["Architecture", "Interface Design", "Performance"].map(item => (
                                    <li key={item} className="flex items-center gap-4 text-[13px] font-bold text-slate-400 group/item">
                                        <CheckCircle2 size={16} className="text-accent/30 group-hover/item:text-accent transition-colors" /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Button className="w-full h-24 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-accent hover:text-black transition-all duration-500 font-black tracking-widest text-[11px] uppercase flex justify-between px-10 group">
                            Launch Case <ExternalLink size={18} className="group-hover:rotate-45 transition-transform" />
                        </Button>
                    </div>
                </aside>
            </section>

            {/* Footer */}
            <section className="reveal-hero py-60 text-center mt-40 border-t border-white/5">
                <h2 className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter italic mb-10 opacity-30 hover:opacity-100 hover:text-accent transition-all duration-1000 cursor-default">
                    Next Digital Level
                </h2>
                <Button size="md" href="/contact" className="px-16 py-7 h-auto rounded-full bg-accent text-black font-black uppercase text-xs hover:scale-110 transition-all shadow-[0_20px_50px_rgba(200,255,0,0.25)]">
                    Start Project
                </Button>
            </section>
        </main>
    );
}