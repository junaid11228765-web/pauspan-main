"use client";

import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Projects", href: "/projects" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const handleNavClick = (href: string) => {
    setExpanded(false);
  };

  // Helper function to check if a route is active
  const isActiveRoute = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      {/* Top Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-obsidian/90 backdrop-blur-xl border-b border-glass-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 bg-accent rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                <div className="absolute inset-1.5 bg-obsidian rounded-md rotate-45" />
                <span className="absolute inset-0 flex items-center justify-center text-accent font-display font-bold text-sm z-10">
                  P
                </span>
              </div>
              <span className="font-display font-bold text-xl tracking-wide text-white">
                Pauspan
              </span>
            </a>

            {/* Right Section - Social Icon + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Social Icon */}
              <a
                href="#"
                className="text-text-dim hover:text-accent transition-colors p-2"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>

              {/* CTA Buttons */}
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" href="/contact">
                  Contact Us
                </Button>
                <Button variant="primary" size="sm" href="/contact">
                  Get Started
                </Button>
              </div>
            </div>

            {/* Mobile placeholder */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                href="#"
                className="text-text-dim hover:text-accent transition-colors p-2"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Bottom Navbar - Menu Toggle */}
      <div className="fixed bottom-0 left-0 right-0 z-50 w-full mx-auto flex items-center justify-center pb-6 pt-20">
        <div className="transition-all duration-500 w-full md:w-auto px-4">
          {/* Mobile Layout */}
          <div className="md:hidden w-full">
            <div className="relative w-full flex items-center justify-center">
              {/* Container that adjusts based on expanded state */}
              <motion.div
                className="flex items-center w-full justify-center px-[10px]"
                animate={{
                  marginLeft: expanded ? 0 : "calc(50% - 50px)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                  mass: 0.8,
                  duration: 0.5,
                }}
              >
                {/* Toggle Button for Mobile */}
                <motion.button
                  onClick={() => setExpanded(!expanded)}
                  className="bg-accent w-16 h-16 rounded-full flex items-center justify-center border-2 border-black relative z-10 flex-shrink-0 hover:scale-105 transition-transform"
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    x: expanded ? 0 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 20,
                    mass: 0.8,
                    duration: 0.5,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                >
                  <motion.div
                    animate={{ rotate: expanded ? 180 : 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <span className="text-white font-display font-bold text-xl">+</span>
                  </motion.div>
                </motion.button>

                {/* Sliding Menu Container for Mobile */}
                <AnimatePresence>
                  {expanded && (
                    <motion.div
                      initial={{ width: 0, opacity: 0, x: -20 }}
                      animate={{
                        width: "calc(100% - 4rem)",
                        opacity: 1,
                        x: 0,
                      }}
                      exit={{ width: 0, opacity: 0, x: -20 }}
                      transition={{
                        width: {
                          type: "spring",
                          stiffness: 150,
                          damping: 20,
                          mass: 0.8,
                          duration: 0.5,
                        },
                        opacity: {
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1],
                        },
                        x: {
                          duration: 0.4,
                          ease: [0.4, 0, 0.2, 1],
                        },
                      }}
                      className="flex items-center bg-obsidian/90 backdrop-blur-xl border border-glass-border py-2 pl-4 pr-2 rounded-r-full ml-2 overflow-hidden"
                    >
                      {/* Scrollable Content */}
                      <div className="flex items-center gap-2 overflow-x-auto w-full">
                        {/* Navigation Items for Mobile */}
                        <div className="flex items-center gap-2 flex-shrink-0">
                          {navItems.map(({ title, href }, index) => {
                            const isActive = isActiveRoute(href);
                            return (
                              <motion.a
                                key={title}
                                href={href}
                                onClick={() => handleNavClick(href)}
                                className={`font-bold relative px-2 text-[10px] py-1 transition-colors duration-200 rounded-full cursor-pointer whitespace-nowrap flex-shrink-0 ${
                                  isActive
                                    ? "bg-accent text-obsidian"
                                    : "text-text-dim hover:text-text hover:bg-accent/20"
                                }`}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: 0.1 + index * 0.05,
                                  duration: 0.3,
                                  ease: [0.4, 0, 0.2, 1],
                                }}
                              >
                                {title}
                              </motion.a>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:flex w-full justify-center items-center gap-6">
            <AnimatePresence mode="wait">
              {!expanded ? (
                <motion.div
                  key="icons-and-toggle"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="flex items-center justify-center gap-6"
                >
                  {/* Left Social Icons */}
                  <motion.a
                    href="#"
                    className="bg-accent text-black p-3 rounded-full hover:scale-110 transition-transform"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <Instagram size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-accent text-black p-3 rounded-full hover:scale-110 transition-transform"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                  >
                    <Twitter size={20} />
                  </motion.a>

                  {/* Center Toggle Button */}
                  <motion.button
                    key="toggle-button"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    onClick={() => setExpanded(true)}
                    onMouseEnter={() => setExpanded(true)}
                    className="relative w-20 h-20 bg-accent rounded-full flex items-center justify-center border-4 border-black hover:scale-110 transition-transform"
                  >
                    <span className="text-black font-display font-bold text-2xl leading-none">P</span>
                  </motion.button>

                  {/* Right Social Icons */}
                  <motion.a
                    href="#"
                    className="bg-accent text-black p-3 rounded-full hover:scale-110 transition-transform"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                  <motion.a
                    href="#"
                    className="bg-accent text-black p-3 rounded-full hover:scale-110 transition-transform"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                  >
                    <Github size={20} />
                  </motion.a>
                </motion.div>
              ) : (
                <motion.div
                  key="nav"
                  onMouseLeave={() => setExpanded(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="flex flex-row items-center gap-4 bg-accent/20 backdrop-blur-xl border border-glass-border px-8 py-4 rounded-full w-auto h-auto"
                >
                  {/* Navigation Items for Desktop */}
                  <div className="flex flex-row gap-2">
                    {navItems.map(({ title, href }) => {
                      const isActive = isActiveRoute(href);
                      return (
                        <motion.a
                          key={title}
                          href={href}
                          onClick={() => handleNavClick(href)}
                          className={`font-bold relative px-4 text-sm py-2 transition-colors duration-200 rounded-full whitespace-nowrap ${
                            isActive
                              ? "bg-accent text-obsidian"
                              : "text-text-dim hover:text-text hover:bg-accent/20"
                          }`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: 0.1,
                            duration: 0.3,
                            ease: [0.4, 0, 0.2, 1],
                          }}
                        >
                          {title}
                        </motion.a>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
