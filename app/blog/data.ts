export type BlogCategory =
  | "SEO"
  | "AEO"
  | "GEO"
  | "Google Ads"
  | "Meta Ads"
  | "Digital Marketing";

export type BlogPost = {
  id: number;
  title: string;
  category: BlogCategory;
  excerpt: string;
  date: string;
  image: string;
};

export const blogCategories: Array<"All" | BlogCategory> = [
  "All",
  "SEO",
  "AEO",
  "GEO",
  "Google Ads",
  "Meta Ads",
  "Digital Marketing",
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How AI Search Is Changing the Way Brands Need to Rank",
    category: "AEO",
    excerpt:
      "A practical breakdown of how answer-focused search and AI discovery are reshaping visibility strategies for brands.",
    date: "2026-08-12",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "SEO Playbook for High-Intent Traffic in 2026",
    category: "SEO",
    excerpt:
      "From technical fixes to authority growth, here is the framework behind sustainable organic visibility.",
    date: "2026-08-08",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Meta Ads That Convert: Creative Testing That Actually Moves Metrics",
    category: "Meta Ads",
    excerpt:
      "A closer look at campaign testing frameworks, performance signals and scaling strategies that help ads convert.",
    date: "2026-08-03",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Why GEO Strategy Is Becoming Essential for Modern Search",
    category: "GEO",
    excerpt:
      "Brands that structure their content and data clearly are earning more visibility in AI-powered discovery systems.",
    date: "2026-07-28",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Google Ads Campaign Setup for Performance-Focused Growth",
    category: "Google Ads",
    excerpt:
      "A realistic framework for structure, audience segmentation, and optimization when running acquisition campaigns.",
    date: "2026-07-18",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Digital Marketing Strategy That Connects Brand, Traffic and Revenue",
    category: "Digital Marketing",
    excerpt:
      "An integrated view of how content, performance and search work together to create stronger marketing momentum.",
    date: "2026-07-10",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
];

export const latestBlogs = [...blogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
).slice(0, 3);
