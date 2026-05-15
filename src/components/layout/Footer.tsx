import { Twitter, Linkedin, Instagram, Github, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Strategy Consulting", href: "/services" },
    { label: "Digital Transformation", href: "/services" },
    { label: "Brand Development", href: "/services" },
    { label: "Product Design", href: "/services" },
    { label: "Growth Marketing", href: "/services" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/projects" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "#" },
  ],
};

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Github, href: "#", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative border-t mt-[6rem] border-glass-border overflow-hidden">
      {/* Background orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto  px-6 lg:px-8 pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-glass-border">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-accent rounded-lg rotate-45" />
                <div className="absolute inset-1.5 bg-obsidian rounded-md rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center text-accent font-display font-bold text-sm z-10">
                  P
                </span>
              </div>
              <span className="font-display font-bold text-xl text-white">Pauspan</span>
            </div>
            <p className="text-text-dim text-sm leading-relaxed max-w-xs mb-8">
              We craft extraordinary service solutions that transform businesses. 
              Premium quality, impeccable execution, measurable results.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@pauspan.com" className="flex items-center gap-3 text-sm text-text-dim hover:text-accent transition-colors group">
                <Mail size={15} className="group-hover:text-accent transition-colors" />
                hello@pauspan.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-sm text-text-dim hover:text-accent transition-colors group">
                <Phone size={15} />
                +1 (234) 567-890
              </a>
              <div className="flex items-center gap-3 text-sm text-text-dim">
                <MapPin size={15} />
                New York, NY 10001
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-sm text-text tracking-wider uppercase mb-5">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-text-dim hover:text-text flex items-center gap-1 group transition-colors"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-dim text-xs">
            © {new Date().getFullYear()} Pauspan. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 glass-card rounded-lg flex items-center justify-center text-text-dim hover:text-accent hover:border-accent/30 transition-all hover:scale-110"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
