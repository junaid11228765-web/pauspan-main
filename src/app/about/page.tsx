"use client";
import { useEffect, useRef } from "react";
import { Target, Heart, Zap, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

const values = [
  { icon: Target, title: "Results First", desc: "Everything we do is measured against one question: does this drive real outcomes for our clients?", color: "#C8FF00" },
  { icon: Heart, title: "Deep Partnership", desc: "We don't work for you. We work with you. Your success is our success — always.", color: "#EC4899" },
  { icon: Zap, title: "Relentless Speed", desc: "We move fast without sacrificing quality. Speed is a competitive advantage we deliver.", color: "#F59E0B" },
  { icon: Users, title: "Radical Transparency", desc: "No fluff. No hidden surprises. Clear communication at every stage of every engagement.", color: "#06B6D4" },
];

const team = [
  { name: "Jordan Pauspan", role: "Founder & CEO", bio: "10+ years building and scaling businesses. Former operator, obsessed with measurable growth.", gradient: "from-violet-600 to-blue-700" },
  { name: "Maya Chen", role: "Head of Design", bio: "Award-winning designer with a background in cognitive psychology. Obsessed with beautiful, functional work.", gradient: "from-pink-600 to-rose-700" },
  { name: "Luca Romano", role: "Head of Strategy", bio: "Former McKinsey consultant who left to build something with real craft and accountability.", gradient: "from-emerald-600 to-teal-700" },
  { name: "Aisha Williams", role: "Head of Growth", bio: "Data-driven growth marketer who has scaled 20+ brands from seed to Series B and beyond.", gradient: "from-orange-500 to-red-600" },
];

export default function AboutPage() {
  useEffect(() => {
    const initGSAP = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".about-hero > *", {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          immediateRender: false,
        });

        gsap.from(".value-card", {
          y: 50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: ".values-section", start: "top 80%" },
        });

        gsap.from(".team-card", {
          y: 50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: ".team-section", start: "top 80%" },
        });

        // Rotating element
        gsap.to(".about-rotator", {
          rotation: 360,
          duration: 30,
          repeat: -1,
          ease: "none",
          transformOrigin: "center center",
        });
      } catch (error) {
        console.error("GSAP initialization failed:", error);
      }
    };
    initGSAP();
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/4 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="about-hero space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-accent border border-accent/20">
                ABOUT PAUSPAN
              </div>
              <h1 className="font-display font-bold text-5xl sm:text-6xl text-text leading-[1.05]">
                We&apos;re Not an Agency.
                <br />
                <span className="accent-text">We&apos;re Your Partner.</span>
              </h1>
              <p className="text-text-dim text-lg leading-relaxed">
                Pauspan was founded on a simple belief: that businesses deserve service partners who are as invested in their success as they are. We bring elite-level expertise without the bureaucracy, and we hold ourselves accountable to real results.
              </p>
              <p className="text-text-dim leading-relaxed">
                Since our founding, we&apos;ve worked with over 200 companies across 30+ industries, from venture-backed startups to enterprise firms. What unites all our work is a relentless focus on outcomes over outputs.
              </p>
              <div className="flex gap-4">
                <Button variant="primary" href="/contact">
                  Work With Us <ArrowRight size={16} />
                </Button>
                <Button variant="outline" href="/projects">
                  Our Work
                </Button>
              </div>
            </div>

            {/* Decorative element */}
            <div className="relative flex items-center justify-center h-96">
              <div
                className="about-rotator absolute w-80 h-80 rounded-full border border-accent/15"
                style={{ background: "conic-gradient(from 0deg, transparent 0deg, rgba(200,255,0,0.05) 90deg, transparent 180deg)" }}
              />
              <div className="absolute w-56 h-56 rounded-full border border-white/5 bg-gradient-to-br from-accent/10 to-transparent" />
              <div className="relative z-10 text-center">
                <div className="font-display font-bold text-7xl text-accent">200+</div>
                <div className="text-text-dim text-sm mt-2">Brands Transformed</div>
              </div>
              <div className="absolute top-8 right-8 glass-card rounded-xl p-4 text-center">
                <div className="font-display font-bold text-2xl text-text">$50M+</div>
                <div className="text-xs text-text-dim mt-1">Revenue Generated</div>
              </div>
              <div className="absolute bottom-8 left-8 glass-card rounded-xl p-4 text-center">
                <div className="font-display font-bold text-2xl text-text">98%</div>
                <div className="text-xs text-text-dim mt-1">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 values-section border-t border-glass-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-accent border border-accent/20 mb-6">
              OUR VALUES
            </div>
            <h2 className="font-display font-bold text-4xl text-text">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="value-card glass-card rounded-2xl p-7 hover:border-white/15 transition-all group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: `${color}20`, color }}>
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-lg text-text mb-3">{title}</h3>
                <p className="text-text-dim text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 team-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-accent border border-accent/20 mb-6">
              THE TEAM
            </div>
            <h2 className="font-display font-bold text-4xl text-text">
              The People Behind <span className="accent-text">Pauspan</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, bio, gradient }) => (
              <div key={name} className="team-card glass-card rounded-2xl overflow-hidden hover:border-white/15 transition-all group">
                <div className={`h-40 bg-gradient-to-br ${gradient} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-display font-bold text-4xl text-white/20">{name[0]}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg text-text mb-1">{name}</h3>
                  <div className="text-xs text-accent mb-3">{role}</div>
                  <p className="text-text-dim text-sm leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
