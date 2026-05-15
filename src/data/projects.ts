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
}

export const projectsData: Project[] = [
  { 
    title: "Meridian Finance", 
    slug: "meridian-finance",
    category: "Strategy", 
    result: "+300% Revenue", 
    desc: "Complete rebrand and digital transformation for a $50M fintech firm.",
    challenge: "The client struggled with a fragmented brand identity and an outdated legacy system that hindered growth.",
    solution: "We implemented a full visual overhaul and built a custom React-based dashboard to streamline client operations.",
    gradient: "from-blue-600 via-violet-600 to-purple-700", 
    tags: ["Strategy", "Branding", "Web"], 
    year: "2024" 
  },
  { 
    title: "Nova Health", 
    slug: "nova-health",
    category: "Product", 
    result: "+150% Signups", 
    desc: "Redesigning a healthcare platform serving 1M+ patients.",
    challenge: "High drop-off rates during the signup process were costing the company potential users.",
    solution: "Simplified the user journey and introduced a mobile-first UI approach.",
    gradient: "from-emerald-500 via-teal-600 to-cyan-700", 
    tags: ["UX/UI", "Product", "Mobile"], 
    year: "2024" 
  },
  // Baqi 6 projects bhi isi tarah yahan add kar dein...
];