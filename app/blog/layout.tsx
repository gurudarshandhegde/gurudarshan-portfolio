import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Blog | SEO, AEO, GEO Meta Ads & Google Ads",
  description:
    "Explore practical insights, strategies and trends in SEO, AEO, GEO, Meta Ads and Google Ads to improve search visibility, reach the right audience and grow online.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
