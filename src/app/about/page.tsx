"use client";

import { useEffect, useRef } from "react";
import { Target, Heart, Zap, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin safely on the client side
gsap.registerPlugin(ScrollTrigger);

const values = [
  {
    icon: Target,
    title: "Results First",
    desc: "Everything we do is measured against one question: does this drive real outcomes for our clients?",
    color: "#C8FF00"
  },
  {
    icon: Heart,
    title: "Deep Partnership",
    desc: "We don't work for you. We work with you. Your success is our success — always.",
    color: "#EC4899"
  },
  {
    icon: Zap,
    title: "Relentless Speed",
    desc: "We move fast without sacrificing quality. Speed is a competitive advantage we deliver.",
    color: "#F59E0B"
  },
  {
    icon: Users,
    title: "Radical Transparency",
    desc: "No fluff. No hidden surprises. Clear communication at every stage of every engagement.",
    color: "#06B6D4"
  },
];

const team = [
  {
    name: "Jordan Pauspan",
    role: "Founder & CEO",
    bio: "10+ years building and scaling businesses. Former operator, obsessed with measurable growth.",
    gradient: "from-violet-600 to-blue-700",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Maya Chen",
    role: "Head of Design",
    bio: "Award-winning designer with a background in cognitive psychology. Obsessed with beautiful, functional work.",
    gradient: "from-pink-600 to-rose-700",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Luca Romano",
    role: "Head of Strategy",
    bio: "Former McKinsey consultant who left to build something with real craft and accountability.",
    gradient: "from-emerald-600 to-teal-700",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop"
  },
  {
    name: "Aisha Williams",
    role: "Head of Growth",
    bio: "Data-driven growth marketer who has scaled 20+ brands from seed to Series B and beyond.",
    gradient: "from-orange-500 to-red-600",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop"
  },
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    // Standard GSAP scoping with context wrapper
    const ctx = gsap.context(() => {

      // Hero Entrance Timeline
      gsap.fromTo(
        ".about-hero-animate",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      // Core Values Section Reveal
      gsap.fromTo(
        ".value-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".values-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Executive Team Section Reveal
      gsap.fromTo(
        ".team-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".team-section",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Infinitive Rotating Decorative Element
      gsap.to(".about-rotator", {
        rotation: 360,
        duration: 30,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });

    }, pageRef);

    // Revert context and kill active ScrollTriggers on unmount
    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen pt-20 bg-black">
      {/* Hero */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/4 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 flex flex-col items-start">
              <div className="about-hero-animate inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-accent border border-accent/20 opacity-0">
                ABOUT PAUSPAN
              </div>
              <h1 className="about-hero-animate font-display font-bold text-5xl sm:text-6xl text-white leading-[1.05] opacity-0">
                We&apos;re Not an Agency.
                <br />
                <span className="accent-text">We&apos;re Your Partner.</span>
              </h1>
              <p className="about-hero-animate text-gray-400 text-lg leading-relaxed opacity-0">
                Pauspan was founded on a simple belief: that businesses deserve service partners who are as invested in their success as they are. We bring elite-level expertise without the bureaucracy, and we hold ourselves accountable to real results.
              </p>
              <p className="about-hero-animate text-gray-400 leading-relaxed opacity-0">
                Since our founding, we&apos;ve worked with over 200 companies across 30+ industries, from venture-backed startups to enterprise firms. What unites all our work is a relentless focus on outcomes over outputs.
              </p>
              <div className="about-hero-animate flex gap-4 opacity-0">
                <Button variant="primary" href="/contact">
                  Work With Us <ArrowRight size={16} />
                </Button>
                <Button variant="outline" href="/projects">
                  Our Work
                </Button>
              </div>
            </div>

            {/* Decorative Matrix Element */}
            <div className="relative flex items-center justify-center h-96">
              <div
                className="about-rotator absolute w-80 h-80 rounded-full border border-accent/15"
                style={{ background: "conic-gradient(from 0deg, transparent 0deg, rgba(200,255,0,0.05) 90deg, transparent 180deg)" }}
              />
              <div className="absolute w-56 h-56 rounded-full border border-white/5 bg-gradient-to-br from-accent/10 to-transparent" />
              <div className="relative z-10 text-center">
                <div className="font-display font-bold text-7xl text-accent">200+</div>
                <div className="text-gray-400 text-sm mt-2">Brands Transformed</div>
              </div>
              <div className="absolute top-8 right-8 glass-card rounded-xl p-4 text-center">
                <div className="font-display font-bold text-2xl text-white">$50M+</div>
                <div className="text-xs text-gray-400 mt-1">Revenue Generated</div>
              </div>
              <div className="absolute bottom-8 left-8 glass-card rounded-xl p-4 text-center">
                <div className="font-display font-bold text-2xl text-white">98%</div>
                <div className="text-xs text-gray-400 mt-1">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 values-section border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-accent border border-accent/20 mb-6">
              OUR VALUES
            </div>
            <h2 className="font-display font-bold text-4xl text-white">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc, color }) => (
              <div key={title} className="value-card glass-card rounded-2xl p-7 hover:border-white/15 transition-all group opacity-0">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: `${color}20`, color }}>
                  <Icon size={22} />
                </div>
                <h3 className="font-display font-semibold text-lg text-white mb-3">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
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
            <h2 className="font-display font-bold text-4xl text-white">
              The People Behind <span className="accent-text">Pauspan</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map(({ name, role, bio, gradient, image }, index) => (
              <div key={name} className="team-card glass-card rounded-2xl overflow-hidden hover:border-white/15 transition-all group opacity-0">
                <div className="h-40 relative overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className={`object-cover ${index === 3 ? 'object-contain' : 'object-top'} group-hover:scale-105 transition-transform duration-500 brightness-90`}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} mix-blend-color opacity-40`} />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="font-display font-bold text-4xl text-white/10 group-hover:text-white/20 transition-all duration-500">
                      {name[0]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg text-white mb-1">{name}</h3>
                  <div className="text-xs text-accent mb-3">{role}</div>
                  <p className="text-gray-400 text-sm leading-relaxed">{bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}