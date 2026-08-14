"use client";

import Image from "next/image";

const trustedBrands = [
  {
    name: "Lavish Eventzz",
    logo: "/logos/Lavish_Logo.webp",
    alt: "Lavish Eventzz logo"
  },
  {
    name: "Shreem Marmo",
    logo: "/logos/Shreem Marmo Logo.webp",
    alt: "Shreem Marmo logo"
  },
  {
    name: "Nakshatra Namaha Creations",
    logo: "/logos/NNC Logo.webp",
    alt: "Nakshatra Namaha Creations logo"
  },
  {
    name: "Make My Document",
    logo: "/logos/Make My Document Logo.webp",
    alt: "Make My Document logo"
  },
  {
    name: "Success Edge",
    logo: "/logos/Success Edge Logo.webp",
    alt: "Success Edge logo"
  }
];

const aboutStats = [
  { value: "3+", label: "Years of SEO Experience" },
  { value: "35+", label: "First-Page Keyword Rankings" },
  { value: "SEO Expert", label: "Based in Bangalore" },
  { value: "Technical SEO", label: "& Content Strategy" },
  { value: "SEO + AEO + GEO", label: "Search Optimization" },
  { value: "National & International", label: "Brand Experience" },
];

const specializations = [
  {
    title: "SEO",
    description:
      "Improve your website’s organic visibility with a search strategy built around technical health, relevant keywords, quality content, and search intent.",
    tags: ["Technical SEO", "On-Page SEO", "Keyword Research", "Content SEO", "Off-Page SEO"],
    icon: SearchIcon,
  },
  {
    title: "AEO",
    description:
      "Optimize content to provide clear, useful answers that can be surfaced in featured snippets, AI-generated answers, and other answer-focused search experiences.",
    tags: ["Search Intent", "Question Optimization", "Structured Content", "Featured Snippets"],
    icon: AnswerIcon,
  },
  {
    title: "GEO",
    description:
      "Prepare your brand and content for the growing world of generative search and AI-powered discovery.",
    tags: ["AI Search Visibility", "Entity Optimization", "Content Authority", "Generative Search"],
    icon: SparkIcon,
  },
];

const approachSteps = [
  {
    number: "01",
    title: "Analyze",
    text: "Understand the website, business, competitors, search landscape, and existing organic performance.",
  },
  {
    number: "02",
    title: "Strategize",
    text: "Identify the right keywords, content opportunities, technical priorities, and search opportunities.",
  },
  {
    number: "03",
    title: "Optimize",
    text: "Improve technical SEO, on-page elements, content, internal linking, and overall search relevance.",
  },
  {
    number: "04",
    title: "Measure",
    text: "Track rankings, visibility, traffic, and keyword performance to identify what is working and where to improve.",
  },
  {
    number: "05",
    title: "Evolve",
    text: "Continuously adapt the strategy as search engines, user behavior, and AI-powered search evolve.",
  },
];

const reasons = [
  {
    title: "Data-Driven Strategy",
    text: "Every SEO decision starts with research, search data, and business objectives.",
    icon: TrendIcon,
  },
  {
    title: "Technical Understanding",
    text: "I focus on the technical foundation that helps search engines crawl, understand, and index your website effectively.",
    icon: CodeIcon,
  },
  {
    title: "Content With Search Intent",
    text: "Content is created and optimized around what users are actually searching for — not simply around keywords.",
    icon: SearchIntentIcon,
  },
  {
    title: "Future-Ready Search",
    text: "SEO is evolving. My approach considers traditional search alongside AEO and GEO to prepare brands for AI-driven discovery.",
    icon: FutureIcon,
  },
  {
    title: "Transparent Approach",
    text: "Clear priorities, measurable progress, and straightforward communication without unnecessary complexity.",
    icon: ShieldIcon,
  },
];

const caseStudies = [
  {
    title: "Lavish Eventzz",
    text: "SEO strategy focused on improving organic visibility and strengthening search presence.",
  },
  {
    title: "Shreem Marmo",
    text: "Search optimization focused on improving keyword visibility and building a stronger organic foundation.",
  },
  {
    title: "Nakshatra Namaha Creations",
    text: "SEO efforts focused on improving search visibility and connecting the brand with relevant search intent.",
  },
];

const seoDeskPosts = [
  { title: "SEO, AEO & GEO: What Is Changing in Search?", tag: "Search Strategy" },
  { title: "How to Improve Content Visibility in AI Search", tag: "AI Discovery" },
  { title: "Technical SEO Fixes That Create Long-Term Growth", tag: "Technical SEO" },
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <circle cx="11" cy="11" r="6" />
      <path d="M16 16L21 21" strokeLinecap="round" />
    </svg>
  );
}

function AnswerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <path d="M7 8.5C7 6.6 8.6 5 10.5 5h3C15.4 5 17 6.6 17 8.5V9c0 1.9-1.6 3.5-3.5 3.5h-3C9.6 12.5 8 10.9 8 9v-.5" strokeLinecap="round" />
      <path d="M9 16.5h6M12 14v6" strokeLinecap="round" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" strokeLinejoin="round" />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <path d="M3 17L9 11L13 15L21 7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 7H21V13" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <path d="M9 8L5 12L9 16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 8L19 12L15 16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 5L11 19" strokeLinecap="round" />
    </svg>
  );
}

function SearchIntentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <circle cx="11" cy="11" r="5" />
      <path d="M16 16L21 21" strokeLinecap="round" />
      <path d="M10 8H12V12L14 14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FutureIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <path d="M12 3V8M12 21V16M3 12H8M16 12H21M5.5 5.5L8.5 8.5M15.5 15.5L18.5 18.5M18.5 5.5L15.5 8.5M8.5 15.5L5.5 18.5" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6">
      <path d="M12 3L18 5.5V11C18 15.5 15.3 19.2 12 21C8.7 19.2 6 15.5 6 11V5.5L12 3Z" strokeLinejoin="round" />
      <path d="M9.5 12L11.3 13.8L14.8 10.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
      <path d="M5 12H19" strokeLinecap="round" />
      <path d="M13 6L19 12L13 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BrandsCarousel() {
  // Duplicate brands array for seamless infinite scrolling
  const duplicatedBrands = [...trustedBrands, ...trustedBrands];

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .brands-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
          width: 200%;
        }

        .brands-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div 
        className="relative w-full overflow-hidden"
      >
        <div className="brands-scroll">
          {duplicatedBrands.map((brand, index) => (
            <div key={`${brand.name}-${index}`} className="flex-shrink-0 px-3 w-1/5">
              <div className="rounded-2xl border border-black/10 bg-white px-6 py-8 flex items-center justify-center h-[180px]">
                <Image
                  src={brand.logo}
                  alt={brand.alt}
                  width={160}
                  height={120}
                  className="max-w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#171717]">
      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3 text-lg font-bold tracking-[0.08em] text-[#171717]">
            <Image src="/logo-mark.svg" alt="Gurudarshan logo" width={34} height={34} className="h-[34px] w-[34px] rounded-full object-cover" />
            <span>GURUDARSHAN</span>
          </a>

          <a
            href="tel:+916362441641"
            className="inline-flex items-center justify-center rounded-full bg-[#171717] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black"
          >
            Contact
          </a>
        </div>
      </header>

      <section className="px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-zinc-500">SEO Expert in Bangalore</p>
            <h1 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.06em] text-[#171717] sm:text-5xl lg:text-7xl">
              Gurudarshan D Hegde
            </h1>

            <h2 className="mt-6 text-2xl font-semibold leading-tight text-[#171717] sm:text-3xl lg:text-[2.2rem]">
              I Help Businesses Build Visibility That Lasts.
            </h2>

            <p className="mt-6 max-w-[680px] text-base leading-8 text-zinc-700 sm:text-lg">
              I&apos;m Gurudarshan D Hegde, an SEO Expert in Bangalore with 3+ years of experience in helping businesses improve their organic visibility, search rankings, and online presence.
            </p>

            <p className="mt-5 max-w-[680px] text-base leading-8 text-zinc-700 sm:text-lg">
              My approach combines <span className="font-semibold text-[#171717]">SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO)</span> to help brands become more visible across traditional search engines and emerging AI-powered search experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="tel:+916362441641"
                className="inline-flex items-center justify-center rounded-xl bg-[#171717] px-6 py-3.5 text-base font-bold text-white transition hover:bg-black"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-6 h-40 w-40 rounded-full bg-zinc-200 blur-3xl" />
            <div className="absolute -right-6 bottom-4 h-44 w-44 rounded-full bg-zinc-200 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.02),_rgba(255,255,255,1)_68%)] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
              <Image
                src="/hero-portrait.webp"
                alt="Gurudarshan D Hegde portrait"
                width={780}
                height={900}
                priority
                className="h-full w-full rounded-[1.6rem] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#f6f6f6] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <h3 className="text-2xl font-bold tracking-[-0.04em] text-[#171717] sm:text-3xl">Worked with Businesses</h3>
            <p className="max-w-xl text-base leading-7 text-zinc-700">
              Helping brands strengthen their search presence.
            </p>
          </div>

          <div className="mt-8">
            <BrandsCarousel />
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">About Me</p>
              <h3 className="mt-5 text-3xl font-bold tracking-[-0.05em] text-[#171717] sm:text-5xl">
                Turning Search Into Sustainable Growth
              </h3>
              <p className="mt-6 text-base leading-8 text-zinc-700 sm:text-lg">
                I&apos;m an SEO professional focused on building search strategies that go beyond rankings. From technical SEO and keyword strategy to content optimization and AI-search visibility, I work on creating a stronger and more discoverable online presence for businesses.
              </p>
              <p className="mt-5 text-base leading-8 text-zinc-700 sm:text-lg">
                With experience working with both national and international brands, my focus is simple — <span className="font-semibold text-[#171717]">improve visibility, attract the right audience, and build long-term organic growth.</span>
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {aboutStats.map((item) => (
                <div key={item.label} className="rounded-[1.6rem] border border-black/10 bg-[#f7f7f7] p-5 text-center text-[#171717] shadow-[0_18px_40px_rgba(0,0,0,0.04)]">
                  <div className="text-3xl font-black tracking-[-0.05em] text-[#171717] sm:text-4xl">{item.value}</div>
                  <div className="mt-3 text-base font-medium leading-6 text-zinc-700">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#f3f3f3] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">What I Specialize In</p>
          <h3 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-[#171717] sm:text-5xl">
            Search Strategies Built for How People Search Today
          </h3>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {specializations.map(({ title, description, tags, icon: Icon }) => (
              <article key={title} className="rounded-[1.8rem] border border-black/10 bg-white p-6 shadow-[0_16px_42px_rgba(0,0,0,0.04)]">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#171717] text-white">
                  <Icon />
                </div>

                <h4 className="text-3xl font-bold tracking-[-0.04em] text-[#171717]">{title}</h4>
                <p className="mt-4 text-base leading-7 text-zinc-700">{description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-black/10 bg-[#f7f7f7] px-3 py-1.5 text-xs font-medium text-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">My Approach</p>
          <h3 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-[#171717] sm:text-5xl">
            A Practical Approach to Organic Growth
          </h3>
          <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-700 sm:text-lg">
            I believe SEO should be based on <span className="font-semibold text-[#171717]">research, strategy, execution, and continuous improvement</span> — not shortcuts.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {approachSteps.map((step) => (
              <div key={step.number} className="rounded-[1.6rem] border border-black/10 bg-[#fafafa] p-5">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-zinc-600">{step.number}</div>
                <h4 className="mt-4 text-2xl font-bold text-[#171717]">{step.title}</h4>
                <p className="mt-4 text-sm leading-7 text-zinc-700">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Why Work With Me?</p>
          <h3 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-[#171717] sm:text-5xl">
            SEO With a Focus on Visibility, Not Just Rankings
          </h3>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {reasons.map(({ title, text, icon: Icon }) => (
              <div key={title} className="rounded-[1.6rem] border border-black/10 bg-[#f9f9f9] p-5">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#171717] text-white">
                  <Icon />
                </div>
                <h4 className="text-xl font-bold text-[#171717]">{title}</h4>
                <p className="mt-3 text-sm leading-7 text-zinc-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#f5f5f5] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Case Studies</p>
          <h3 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-[#171717] sm:text-5xl">
            SEO Strategies. Measurable Outcomes.
          </h3>
          <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-700 sm:text-lg">
            Explore selected projects where SEO strategies were used to improve organic visibility, keyword rankings, and search performance.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.title} className="rounded-[1.8rem] border border-black/10 bg-white p-6">
                <h4 className="text-2xl font-bold text-[#171717]">{study.title}</h4>
                <p className="mt-5 text-base leading-7 text-zinc-700">{study.text}</p>
                <a href="tel:+916362441641" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#171717]">
                  View Case Study <ArrowRight />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <a href="tel:+916362441641" className="inline-flex items-center gap-2 rounded-xl border border-black/15 bg-white px-6 py-3.5 text-base font-bold text-[#171717] transition hover:border-black/30">
              View All Case Studies <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px] rounded-[2rem] border border-black/10 bg-[#fafafa] p-8 sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">The Search Landscape Is Changing</p>
          <h3 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-[#171717] sm:text-5xl">
            Search Is No Longer Just Google.
          </h3>
          <p className="mt-6 text-base leading-8 text-zinc-700 sm:text-lg">
            People are discovering businesses through <span className="font-semibold text-[#171717]">Google, AI Overviews, ChatGPT, Gemini, Perplexity, and other AI-powered experiences.</span>
          </p>
          <p className="mt-5 text-base leading-8 text-zinc-700 sm:text-lg">
            A modern search strategy needs to account for more than traditional rankings.
          </p>
          <p className="mt-8 text-2xl font-semibold leading-relaxed text-[#171717] sm:text-3xl">
            SEO gets you discovered.<br />
            AEO helps you get answered.<br />
            GEO helps you get mentioned.
          </p>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#f5f5f5] px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Let&apos;s Build Your Search Visibility</p>
          <h3 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-[#171717] sm:text-5xl">
            Ready to Improve Your Organic Presence?
          </h3>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-700 sm:text-lg">
            Whether you need to improve existing rankings, build a stronger SEO foundation, or prepare your brand for AI-powered search, let&apos;s discuss where your website currently stands and where it can go.
          </p>

          <div className="mt-8">
            <a
              href="tel:+916362441641"
              className="inline-flex items-center justify-center rounded-xl bg-[#171717] px-7 py-3.5 text-base font-bold text-white transition hover:bg-black"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">Latest From My SEO Desk</p>
          <h3 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-[#171717] sm:text-5xl">
            Insights on SEO, AEO & GEO
          </h3>
          <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-700 sm:text-lg">
            Practical insights, experiments, strategies, and observations about search optimization, technical SEO, content, and the evolving world of AI search.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {seoDeskPosts.map((post) => (
              <article key={post.title} className="rounded-[1.8rem] border border-black/10 bg-[#fafafa] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">{post.tag}</p>
                <h4 className="mt-4 text-2xl font-bold leading-tight text-[#171717]">{post.title}</h4>
                <a href="/blog" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#171717]">
                  Explore article <ArrowRight />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <a href="/blog" className="inline-flex items-center gap-2 rounded-xl border border-black/15 bg-white px-6 py-3.5 text-base font-bold text-[#171717] transition hover:border-black/30">
              Explore All Blogs <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-[1400px] items-center justify-center text-center text-sm text-zinc-600">
          <p>© 2026 Gurudarshan D Hegde. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}