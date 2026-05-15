"use client";
import { useEffect } from "react";
import PricingSection from "@/components/sections/PricingSection";
import CTASection from "@/components/sections/CTASection";
import { Check, HelpCircle } from "lucide-react";

const faqs = [
  { q: "Do you offer custom pricing for larger projects?", a: "Absolutely. For enterprise-scale engagements or unique requirements, we create custom proposals tailored to your scope and goals." },
  { q: "What's included in the post-launch support?", a: "Bug fixes, performance monitoring, minor content updates, and a dedicated point of contact for questions or guidance during the support window." },
  { q: "How long does a typical project take?", a: "Starter packages typically deliver in 2–3 weeks. Growth projects run 4–6 weeks. Enterprise engagements are scoped individually." },
  { q: "Do you offer payment plans?", a: "Yes. We typically split payments into three milestones: project start, mid-point, and delivery. Custom arrangements are available for enterprise clients." },
  { q: "What if I need revisions beyond what's included?", a: "We charge a flat hourly rate for revisions beyond the included rounds. Growth and Enterprise clients with unlimited revisions have no additional revision costs." },
  { q: "Can I upgrade my plan midway through?", a: "Yes, you can upgrade at any time. We'll prorate the difference and incorporate any additional scope into the active engagement." },
];

export default function PricingPage() {
  useEffect(() => {
    const initGSAP = async () => {
      try {
        const { default: gsap } = await import("gsap");
        gsap.from(".pricing-page-hero > *", {
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power3.out",
          immediateRender: false,
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="pricing-page-hero text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-accent border border-accent/20 mb-6">
              PRICING
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-6xl text-text leading-[1.05] mb-6">
              Simple, Transparent <span className="accent-text">Pricing</span>
            </h1>
            <p className="text-text-dim text-xl leading-relaxed">
              No hidden fees. No vague retainers. Just clear value at every tier.
            </p>
          </div>
        </div>
      </section>

      <PricingSection />

      {/* Comparison table */}
      <section className="py-24 border-t border-glass-border">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-text text-center mb-12">
            What&apos;s <span className="accent-text">Included</span>
          </h2>
          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="grid grid-cols-4 bg-subtle px-6 py-4 text-xs font-semibold text-text-dim uppercase tracking-wider">
              <div>Feature</div>
              <div className="text-center">Starter</div>
              <div className="text-center text-accent">Growth</div>
              <div className="text-center">Enterprise</div>
            </div>
            {[
              ["Brand Identity", true, true, true],
              ["Website Design", "5 pages", "10 pages", "Custom"],
              ["SEO Setup", "Basic", "Advanced", "Full Suite"],
              ["Revisions", "2 rounds", "Unlimited", "Unlimited"],
              ["Support Duration", "30 days", "60 days", "90 days"],
              ["Strategy Session", false, true, true],
              ["Social Templates", false, true, true],
              ["Custom Integrations", false, false, true],
              ["Dedicated PM", false, false, true],
              ["24/7 Support", false, false, true],
            ].map(([feature, starter, growth, enterprise], i) => (
              <div key={i} className={`grid grid-cols-4 px-6 py-4 text-sm border-t border-glass-border ${i % 2 === 0 ? "" : "bg-white/[0.01]"}`}>
                <div className="text-text-dim">{feature}</div>
                {[starter, growth, enterprise].map((val, j) => (
                  <div key={j} className={`text-center ${j === 1 ? "text-accent" : "text-text-dim"}`}>
                    {val === true ? <Check size={16} className="mx-auto" /> :
                      val === false ? <span className="text-muted">—</span> :
                        <span className="text-xs">{val}</span>}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-text text-center mb-12">
            Frequently Asked <span className="accent-text">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="glass-card rounded-xl p-6 hover:border-white/15 transition-all group">
                <div className="flex items-start gap-3">
                  <HelpCircle size={18} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-medium text-text mb-2">{q}</h3>
                    <p className="text-text-dim text-sm leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
