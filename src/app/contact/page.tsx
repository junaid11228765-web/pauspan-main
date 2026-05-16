"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { gsap } from "gsap";

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "hello@pauspan.com", href: "mailto:hello@pauspan.com" },
  { icon: Phone, label: "Call Us", value: "+1 (234) 567-890", href: "tel:+1234567890" },
  { icon: MapPin, label: "Visit Us", value: "New York, NY 10001", href: "#" },
];

const services = [
  "InfluenceHer", "Chef Colin", "Safari Coin",
  "Cynq AI", "Re-Morph", "Beks Media", "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });

  const containerRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  useEffect(() => {
    if (!containerRef.current) return;

    // Smooth and robust animation execution using context scoping
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-animate",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen pt-20 bg-black">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-accent/4 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl flex flex-col items-start">
            <div className="contact-animate inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-accent border border-accent/20 mb-6 opacity-0">
              CONTACT
            </div>
            <h1 className="contact-animate font-display font-bold text-5xl sm:text-6xl text-white leading-[1.05] mb-6 opacity-0">
              Let&apos;s Build <span className="accent-text">Together</span>
            </h1>
            <p className="contact-animate text-gray-400 text-xl leading-relaxed opacity-0">
              Tell us about your project and we&apos;ll get back to you within 24 hours with a tailored proposal.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: contact info */}
            <div className="space-y-6">
              <div>
                <h2 className="font-display font-semibold text-2xl text-white mb-2">Get in Touch</h2>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We typically respond within a few hours. For urgent matters, give us a call.
                </p>
              </div>

              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href}
                  className="flex items-center gap-4 glass-card rounded-xl p-5 hover:border-accent/20 hover:text-accent transition-all group">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors">
                    <Icon size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-1">{label}</div>
                    <div className="text-sm text-white font-medium">{value}</div>
                  </div>
                </a>
              ))}

              <div className="glass-card rounded-xl p-6">
                <h3 className="font-display font-semibold text-white mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="text-white">9am – 6pm EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white">10am – 2pm EST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-white opacity-40">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="glass-card rounded-2xl p-16 text-center">
                  <CheckCircle2 size={56} className="text-accent mx-auto mb-6" />
                  <h3 className="font-display font-bold text-3xl text-white mb-4">Message Received!</h3>
                  <p className="text-gray-400 max-w-sm mx-auto">
                    Thank you for reaching out. We&apos;ll review your project and be in touch within 24 hours.
                  </p>
                  <Button variant="primary" className="mt-8" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Full Name *</label>
                      <input
                        type="text" required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Smith"
                        className="w-full bg-subtle border border-glass-border rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-accent/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-2">Email *</label>
                      <input
                        type="type" required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-subtle border border-glass-border rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-accent/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Company</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Your Company Name"
                      className="w-full bg-subtle border border-glass-border rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-accent/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Service Interested In</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-subtle border border-glass-border rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-accent/40 transition-colors appearance-none"
                    >
                      <option value="" className="bg-surface">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-surface">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Tell Us About Your Project *</label>
                    <textarea
                      required rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your project, goals, timeline, and any other details..."
                      className="w-full bg-subtle border border-glass-border rounded-xl px-4 py-3 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-accent/40 transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full justify-center gap-2">
                    Send Message
                    <Send size={16} />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}