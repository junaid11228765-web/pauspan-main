"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We dive deep into your business, audience, and competitive landscape to build a solid strategic foundation.",
    features: ["Stakeholder interviews", "Market research", "Competitor analysis", "Goal mapping"],
    tags: ["Research", "Strategy", "Planning"],
    images: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=700&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=500&fit=crop&q=80",
    ],
  },
  {
    num: "02",
    title: "Concept & Design",
    desc: "From strategy, we craft compelling concepts and visual systems, iterating rapidly until every element is exactly right.",
    features: ["Mood boarding", "Wireframing", "Visual design", "Prototype testing"],
    tags: ["Design", "Branding", "UX/UI"],
    images: [
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=700&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=700&h=500&fit=crop&q=80",
    ],
  },
  {
    num: "03",
    title: "Build & Refine",
    desc: "With approved designs in hand, our experts build with precision and craft, maintaining constant communication throughout.",
    features: ["Development sprints", "Quality assurance", "Performance optimization", "Client review"],
    tags: ["Engineering", "QA", "DevOps"],
    images: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=700&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&h=500&fit=crop&q=80",
    ],
  },
  {
    num: "04",
    title: "Launch & Grow",
    desc: "We ensure a smooth launch and stay engaged long-term to help you grow, scale, and improve results over time.",
    features: ["Launch strategy", "Analytics setup", "Team training", "Ongoing support"],
    tags: ["Growth", "Analytics", "Support"],
    images: [
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=700&h=500&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=500&fit=crop&q=80",
    ],
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card text-xs text-accent border border-accent/20 mb-6">
            OUR PROCESS
          </div>
          <h2 className="font-display font-bold text-4xl sm:text-5xl text-text mb-6">
            How We Turn <span className="accent-text">Vision</span> Into Reality
          </h2>
          <p className="text-text-dim">
            A proven process refined over hundreds of engagements, engineered for clarity and exceptional outcomes.
          </p>
        </div>

        <div className="space-y-6">
          {steps.map(({ num, title, desc, features, tags, images }, i) => (
            <motion.div
              key={num}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.005 }}
              className="group bg-obsidian border border-white/10 hover:border-accent/30 rounded-2xl transition-colors duration-300"
            >
              <div className="rounded-2xl p-2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                  {/* LEFT: Step info */}
                  <div className="py-6 px-5 border border-white/10 rounded-xl flex flex-col md:h-[320px]">
                    {/* Step number + title */}
                    <div className="flex items-center gap-3 mb-auto">
                      <span className="font-display font-black text-2xl text-accent/40 leading-none select-none">
                        {num}
                      </span>
                      <h3 className="font-display font-bold text-lg text-text leading-snug">
                        {title}
                      </h3>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 pt-6">
                      {features.map((feature, fi) => (
                        <motion.div
                          key={fi}
                          className="flex items-center gap-3 group/feature"
                          initial={{ x: -16, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: fi * 0.08 + 0.3 }}
                        >
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 90 }}
                            transition={{ duration: 0.25 }}
                          >
                            <CheckCircle
                              size={16}
                              className="text-accent/50 shrink-0 group-hover/feature:text-accent transition-colors duration-300"
                            />
                          </motion.div>
                          <span className="text-text-dim text-sm group-hover/feature:text-text transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tags */}
                    <motion.div
                      className="flex flex-wrap gap-2 pt-5"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                    >
                      {tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className="text-xs px-3 py-1.5 rounded-lg border border-accent/20 bg-accent/10 text-accent font-medium hover:bg-accent/20 hover:border-accent/40 transition-all duration-200 cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                  </div>

                  {/* MIDDLE image */}
                  <motion.div
                    className="relative h-48 md:h-[320px] rounded-xl overflow-hidden border border-white/10 group-hover:border-accent/20 transition-colors duration-500"
                    initial={{ scale: 0.85, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <Image
                      src={images[0]}
                      alt={`${title} — 1`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </motion.div>

                  {/* RIGHT image */}
                  <motion.div
                    className="relative h-48 md:h-[320px] rounded-xl overflow-hidden border border-white/10 group-hover:border-accent/20 transition-colors duration-500"
                    initial={{ scale: 0.85, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.45, duration: 0.6 }}
                  >
                    <Image
                      src={images[1]}
                      alt={`${title} — 2`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </motion.div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
