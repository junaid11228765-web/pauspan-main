"use client";

import { Twitter, Linkedin, Instagram, Github, ArrowUpRight, Mail, MapPin } from "lucide-react";

// ==========================================
// CORE DATA PLATFORM MAP CONFIGURATIONS
// ==========================================

const FOOTER_LINKS_CONFIG = {
  "Frontend Portfolios": [
    { label: "InfluenceHer", href: "#" },
    { label: "Chef Colin", href: "https://chef-colin.vercel.app/" },
    { label: "Safari Coin", href: "https://safari-coin.vercel.app/" },
    { label: "Cynq AI", href: "https://cynq-ai.vercel.app/en" },
    { label: "Re-Morph", href: "https://re-morph.vercel.app/" },
    { label: "Beks Media", href: "http://beks-media.vercel.app/" },
  ],
  "Full Stack Projects": [
    { label: "Digital Twin", href: "#" },
    { label: "Slay Canvas", href: "#" },
    { label: "Faris", href: "#" },
    { label: "AI Complaint Setter", href: "#" },
    { label: "Malakah", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Case Studies", href: "#" },
  ]
};

const SOCIALS_CONFIG = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];

// ==========================================
// MAIN REUSABLE STRUCTURE FOOTER COMPONENT
// ==========================================

export default function Footer() {
  return (
    <footer className="relative border-t mt-[6rem] border-white/5 bg-obsidian overflow-visible z-10">

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/5">

          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-accent rounded-lg rotate-45" />
                <div className="absolute inset-1.5 bg-obsidian rounded-md rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center text-accent font-display font-bold text-sm z-10">P</span>
              </div>
              <span className="font-display font-bold text-xl text-white">Pauspan</span>
            </div>

            <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-8">
              Expertly crafting frontend experiences and full-stack solutions.
            </p>

            <div className="space-y-4">
              <a href="mailto:hello@pauspan.com" className="flex items-center gap-3 text-sm text-white/70 hover:text-accent transition-all duration-300 group w-fit">
                <Mail size={15} className="group-hover:scale-110 transition-transform" />
                hello@pauspan.com
              </a>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <MapPin size={15} />
                Kamra Kalan, Punjab
              </div>
            </div>
          </div>

          {Object.entries(FOOTER_LINKS_CONFIG).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-[11px] text-white tracking-[0.2em] uppercase mb-8">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="text-[13px] text-white/60 hover:text-[#C8FF00] flex items-center gap-2 group transition-all duration-300 ease-out relative z-50 w-fit cursor-pointer py-0.5"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C8FF00] transition-all duration-300 group-hover:w-full opacity-50" />
                      </span>
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 ease-out text-[#C8FF00] shrink-0"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 relative">
          <p className="text-white/40 text-[10px] tracking-widest uppercase">
            © {new Date().getFullYear()} Pauspan. Built for Excellence.
          </p>

          <div className="flex items-center gap-4">
            {SOCIALS_CONFIG.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="w-10 h-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-white/60 hover:text-[#C8FF00] hover:border-[#C8FF00]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}