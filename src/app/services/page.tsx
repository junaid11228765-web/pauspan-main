"use client";

import { useEffect, useRef } from "react";
import { Layers, Zap, BarChart3, Globe, Palette, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

// ==========================================
// DATA ARCHITECTURE LAYER CONFIGURATIONS
// ==========================================

const SERVICES_DATA_CONFIG = [
  {
    icon: Layers,
    title: "Strategy Consulting",
    shortDesc: "Deep market analysis and tailored frameworks that accelerate growth.",
    longDesc: "We begin with a comprehensive audit of your market position, competitive landscape, and internal capabilities. Our strategists synthesize this into an actionable roadmap with clear milestones, KPIs, and accountability structures.",
    features: ["Market & competitor research", "Growth roadmap creation", "OKR framework setup", "Quarterly strategy reviews", "Executive alignment workshops"],
    color: "#C8FF00",
    gradient: "from-accent/20 to-accent/10",
  },
  {
    icon: Palette,
    title: "Brand Development",
    shortDesc: "Memorable identities that resonate and differentiate in crowded markets.",
    longDesc: "From naming and positioning to full visual identity systems, we create brands that people remember and trust. Every touchpoint is considered, every element deliberate.",
    features: ["Brand naming & positioning", "Logo & visual identity", "Brand guidelines & systems", "Messaging framework", "Social media templates"],
    color: "#C8FF00",
    gradient: "from-accent/20 to-accent/10",
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    shortDesc: "Modernizing operations and unlocking new value through technology.",
    longDesc: "We assess your current technology stack, identify inefficiencies, and architect a transformation plan that moves the needle without disrupting your operations.",
    features: ["Tech stack audit & planning", "Process automation", "Custom integrations", "Data infrastructure", "Team training & enablement"],
    color: "#C8FF00",
    gradient: "from-accent/20 to-accent/10",
  },
  {
    icon: BarChart3,
    title: "Growth Marketing",
    shortDesc: "Data-driven campaigns engineered to maximize acquisition and retention.",
    longDesc: "We design and execute multi-channel growth strategies grounded in data. From paid acquisition to organic content and lifecycle marketing, every campaign is measurable and optimizable.",
    features: ["Paid media management", "SEO & content strategy", "Email & lifecycle marketing", "Analytics & attribution", "Conversion rate optimization"],
    color: "#C8FF00",
    gradient: "from-accent/20 to-accent/10",
  },
  {
    icon: Zap,
    title: "Product Design",
    shortDesc: "User-obsessed experiences that convert visitors into loyal customers.",
    longDesc: "We combine research, psychology, and craft to design products that people love using. Our design process is collaborative, iterative, and always anchored in real user needs.",
    features: ["User research & testing", "Wireframing & prototyping", "UI design systems", "Interaction design", "Handoff & developer support"],
    color: "#C8FF00",
    gradient: "from-accent/20 to-accent/10",
  },
  {
    icon: Shield,
    title: "Operations & Scale",
    shortDesc: "Streamlined processes and robust infrastructure to support growth.",
    longDesc: "As you scale, operational complexity grows. We build the systems, documentation, and processes that let you grow without breaking things — from team structure to technology.",
    features: ["Operational audit", "SOPs & documentation", "Team structure design", "Vendor management", "Scalability planning"],
    color: "#C8FF00",
    gradient: "from-accent/20 to-accent/10",
  },
];

// ==========================================
// APP DIRECTORY CORE SERVICES PAGE COMPONENT
// ==========================================

export default function ServicesPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initGSAP = async () => {
      try {
        const { default: gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(".services-hero > *", {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          immediateRender: false,
        });

        gsap.from(".service-detail-card", {
          y: 50,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: ".services-grid",
            start: "top 80%"
          },
        });
      } catch (error) {
        console.error("GSAP initialization failed:", error);
      }
    };
    initGSAP();
  }, []);

  return (
    <div className="min-h-screen pt-20">

      {/* Hero Presentation Layout */}
      <section ref={heroRef} className="py-32 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="services-hero max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-accent border border-accent/20 mb-6">
              SERVICES
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-text leading-[1.05] mb-8">
              What We Do <span className="accent-text">Best</span>
            </h1>
            <p className="text-text-dim text-xl leading-relaxed max-w-xl mb-10">
              Six core service areas, each staffed by specialists obsessed with
              delivering measurable results for your business.
            </p>
            <div className="flex gap-4">
              <Button variant="primary" size="lg" href="/contact">
                Start a Project <ArrowRight size={16} />
              </Button>
              <Button variant="outline" size="lg" href="/projects">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Operational Metric Matrix Grid */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 services-grid">
          <div className="space-y-8">
            {SERVICES_DATA_CONFIG.map(({ icon: Icon, title, shortDesc, longDesc, features, color, gradient }, i) => (
              <div
                key={title}
                className="service-detail-card glass-card rounded-2xl p-8 lg:p-12 hover:border-white/15 transition-all duration-300 group overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row gap-10">

                    {/* Left Meta Informational Deck */}
                    <div className="lg:w-80 shrink-0">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                        style={{ background: `${color}20`, color }}
                      >
                        <Icon size={26} />
                      </div>
                      <div
                        className="text-5xl font-display font-bold mb-4 opacity-10"
                        style={{ color }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h2 className="font-display font-bold text-2xl text-text mb-3">
                        {title}
                      </h2>
                      <p className="text-text-dim text-sm leading-relaxed">
                        {shortDesc}
                      </p>
                    </div>

                    {/* Right Features Breakdown Matrix */}
                    <div className="flex-1">
                      <p className="text-text-dim leading-relaxed mb-8">
                        {longDesc}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {features.map((f) => (
                          <div key={f} className="flex items-center gap-3 text-sm">
                            <CheckCircle2 size={16} style={{ color }} />
                            <span className="text-text-dim">{f}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8">
                        <a
                          href="/contact"
                          className="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
                          style={{ color }}
                        >
                          Get started with {title} <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}