// ==========================================
// CORE TYPE DEFINITIONS FOR PROJECTS MODEL
// ==========================================

export interface Project {
  title: string;
  slug: string;
  category: string;
  result: string;
  desc: string;
  challenge: string;
  solution: string;
  gradient: string;
  tags: string[];
  year: string;
  link: string;
  image?: string;
}

// ==========================================
// GLOBAL STATIC ASSET URI PATHS
// ==========================================

const GLOBAL_PREMIUM_IMAGE = "/projects/img.jpg";

// ==========================================
// PRODUCTION COMPLIANT CASE STUDIES DATA SOURCE
// ==========================================

export const PROJECTS_DATA: Project[] = [
  {
    title: "Meridian Finance",
    slug: "meridian-finance",
    category: "Strategy",
    result: "+300% Revenue",
    desc: "Complete rebrand and digital transformation.",
    challenge: "Fragmented brand identity.",
    solution: "Visual overhaul.",
    gradient: "from-blue-600 via-violet-600 to-purple-700",
    tags: ["Strategy", "Branding", "Web"],
    year: "2024",
    link: "/projects/meridian-finance",
    image: GLOBAL_PREMIUM_IMAGE,
  },
  {
    title: "Nova Health",
    slug: "nova-health",
    category: "Healthcare",
    result: "99.9% Uptime",
    desc: "Connecting patients with global healthcare instantly.",
    challenge: "Critical latency issues during data load frames.",
    solution: "Decentralized architecture integrations.",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700",
    tags: ["Healthcare", "AI", "App"],
    year: "2025",
    link: "/projects/nova-health",
    image: GLOBAL_PREMIUM_IMAGE,
  },
  {
    title: "Apex Studio",
    slug: "apex-studio",
    category: "Design",
    result: "3x Inquiries",
    desc: "Showcasing architecture landmarks via heavy interactive grids.",
    challenge: "Static visibility limits scaling representation.",
    solution: "Fluid layouts with high visual asset pacing.",
    gradient: "from-orange-500 via-red-600 to-pink-700",
    tags: ["Design", "Architecture", "Web"],
    year: "2026",
    link: "/projects/apex-studio",
    image: GLOBAL_PREMIUM_IMAGE,
  },
  {
    title: "Stratos AI",
    slug: "stratos-ai",
    category: "Cloud Computing",
    result: "10x Analytics",
    desc: "Streamlining cloud operations effortlessly.",
    challenge: "Complex infrastructure controls.",
    solution: "Simplified visualization engines.",
    gradient: "from-indigo-600 to-purple-800",
    tags: ["AI", "Cloud", "Systems"],
    year: "2026",
    link: "/projects/stratos-ai",
    image: GLOBAL_PREMIUM_IMAGE,
  },
  {
    title: "Clearify SaaS",
    slug: "clearify",
    category: "SaaS Solutions",
    result: "+180% Growth",
    desc: "Clean data transparency architecture layouts.",
    challenge: "Overloaded functional onboarding phases.",
    solution: "Progressive visual rendering paths.",
    gradient: "from-teal-400 to-emerald-600",
    tags: ["SaaS", "Data", "UX"],
    year: "2026",
    link: "/projects/clearify",
    image: GLOBAL_PREMIUM_IMAGE,
  },
  {
    title: "Perspective AI",
    slug: "perspectiveai",
    category: "Artificial Intelligence",
    result: "10x Insight",
    desc: "Advanced data visualization for enterprise teams.",
    challenge: "Complex ML outputs were hard to visualize.",
    solution: "Interactive 3D data engine implementation.",
    gradient: "from-purple-500 to-blue-600",
    tags: ["AI", "Analytics", "Web"],
    year: "2026",
    link: "/projects/perspectiveai",
    image: GLOBAL_PREMIUM_IMAGE,
  },
  {
    title: "Bloom Agency",
    slug: "bloom-agency",
    category: "E-Commerce",
    result: "55% Conversion",
    desc: "Bridging modern aesthetic parameters with commerce utilities.",
    challenge: "High retention drops during cart update tasks.",
    solution: "Fluid animations during immediate transactional changes.",
    gradient: "from-pink-500 to-rose-700",
    tags: ["E-Com", "Creative", "Marketing"],
    year: "2026",
    link: "/projects/bloom-agency",
    image: GLOBAL_PREMIUM_IMAGE,
  },
  {
    title: "Taskflow",
    slug: "taskflow",
    category: "Productivity",
    result: "+25% Focus",
    desc: "Minimalist task structures optimized for engineering flow.",
    challenge: "Noisy notifications blocking primary workspaces.",
    solution: "Context-aware alert groupings and tags.",
    gradient: "from-amber-500 via-orange-600 to-red-700",
    tags: ["Productivity", "Utility", "Minimal"],
    year: "2025",
    link: "/projects/taskflow",
    image: GLOBAL_PREMIUM_IMAGE,
  }
];