const specializations = [
  {
    title: "SEO",
    description:
      "Building search visibility through technical SEO, on-page optimization, content strategy and authority building.",
  },
  {
    title: "AEO",
    description:
      "Optimizing content to provide clear, useful answers across search experiences and answer-focused platforms.",
  },
  {
    title: "GEO",
    description:
      "Structuring content and brand information to improve visibility across generative search and AI-driven experiences.",
  },
  {
    title: "Meta Ads",
    description:
      "Creating and optimizing Meta campaigns focused on awareness, engagement, leads and conversions.",
  },
  {
    title: "Google Ads",
    description:
      "Planning and managing Google Ads campaigns with a focus on relevant traffic, leads and measurable results.",
  },
];

const skills = [
  "Keyword Research",
  "On-Page SEO",
  "Technical SEO",
  "Content Strategy",
  "Google Search Console",
  "Google Analytics",
  "Google Ads",
  "Meta Ads",
  "Conversion Tracking",
  "AEO",
  "GEO",
  "Performance Marketing",
];

const caseStudies = [
  {
    category: "SEO",
    title: "SEO Growth & Visibility",
    description:
      "A look at the strategy, optimization process and measurable outcomes behind an SEO project.",
  },
  {
    category: "Performance Marketing",
    title: "Paid Campaign Optimization",
    description:
      "Campaign planning, audience targeting, creative testing and performance optimization.",
  },
  {
    category: "Digital Marketing",
    title: "Integrated Digital Strategy",
    description:
      "Combining organic search, paid advertising and content to create a stronger digital presence.",
  },
];

const experience = [
  {
    period: "Experience",
    title: "Digital Marketing",
    description:
      "Working across SEO, paid advertising, content and digital growth initiatives.",
  },
  {
    period: "Specialization",
    title: "Search & Performance",
    description:
      "Focused on SEO, AEO, GEO, Google Ads and Meta Ads.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Navigation */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-200/70 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a
            href="#home"
            className="text-lg font-bold tracking-tight"
          >
            GURUDARSHAN
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="#home"
              className="text-sm font-medium text-zinc-600 transition hover:text-black"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-zinc-600 transition hover:text-black"
            >
              About
            </a>
            <a
              href="#case-studies"
              className="text-sm font-medium text-zinc-600 transition hover:text-black"
            >
              Case Studies
            </a>
            <a
              href="/blog"
              className="text-sm font-medium text-zinc-600 transition hover:text-black"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Banner */}
      <section
        id="home"
        className="flex min-h-screen items-center border-b border-zinc-200 px-6 pt-20 lg:px-8"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Digital Marketing Portfolio
            </p>

            <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Gurudarshan
              <br />
              <span className="text-zinc-400">D Hegde</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-600">
              A professional portfolio showcasing work across SEO, AEO, GEO,
              Meta Ads and Google Ads.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#case-studies"
                className="rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-zinc-700"
              >
                View Case Studies
              </a>

              <a
                href="#contact"
                className="rounded-full border border-zinc-300 px-7 py-3.5 text-sm font-semibold transition hover:border-zinc-900"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-lg rounded-[2rem] bg-zinc-100 p-8">
              <div className="flex h-full items-end rounded-[1.5rem] border border-zinc-200 bg-white p-8">
                <div>
                  <p className="text-sm uppercase tracking-widest text-zinc-400">
                    Focus
                  </p>
                  <p className="mt-3 text-4xl font-bold tracking-tight">
                    Search.
                    <br />
                    Performance.
                    <br />
                    Growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-b border-zinc-200 px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              01 / About
            </p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
              Turning digital marketing into measurable growth.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-600">
              This section will introduce your professional journey,
              approach to digital marketing and the type of work you
              specialize in.
            </p>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-600">
              We can replace this placeholder with your actual professional
              story once we finalize the content.
            </p>
          </div>
        </div>
      </section>

      {/* Specialization */}
      <section
        id="specialization"
        className="border-b border-zinc-200 bg-zinc-50 px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
              02 / Specialization
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Areas of specialization
            </h2>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 md:grid-cols-2 lg:grid-cols-5">
            {specializations.map((item) => (
              <article key={item.title} className="bg-white p-7">
                <h3 className="text-xl font-bold">{item.title}</h3>

                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="border-b border-zinc-200 px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            03 / Skills
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section
        id="case-studies"
        className="border-b border-zinc-200 bg-zinc-950 px-6 py-24 text-white lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
              04 / Case Studies
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
              Selected work
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {caseStudies.map((study, index) => (
              <article
                key={study.title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:bg-white/[0.08]"
              >
                <span className="text-sm text-zinc-500">
                  0{index + 1}
                </span>

                <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                  {study.category}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {study.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-zinc-400">
                  {study.description}
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-block text-sm font-semibold underline underline-offset-4"
                >
                  View project →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="border-b border-zinc-200 px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
            05 / Experience
          </p>

          <div className="mt-14 divide-y divide-zinc-200 border-y border-zinc-200">
            {experience.map((item) => (
              <div
                key={item.title}
                className="grid gap-4 py-8 md:grid-cols-4"
              >
                <p className="text-sm font-medium text-zinc-400">
                  {item.period}
                </p>

                <div className="md:col-span-3">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-3 max-w-2xl leading-7 text-zinc-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section
        id="blogs"
        className="border-b border-zinc-200 bg-zinc-50 px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">
                06 / Blogs
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                Thoughts & insights
              </h2>
            </div>

            <a
              href="/blog"
              className="text-sm font-semibold underline underline-offset-4"
            >
              View all blogs →
            </a>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-zinc-200 bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                SEO
              </p>
              <h3 className="mt-4 text-xl font-bold">
                SEO Insights & Strategies
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Articles about search optimization, content and organic
                growth.
              </p>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                Paid Media
              </p>
              <h3 className="mt-4 text-xl font-bold">
                Google & Meta Ads
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Practical insights into paid advertising and campaign
                optimization.
              </p>
            </article>

            <article className="rounded-2xl border border-zinc-200 bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
                Search
              </p>
              <h3 className="mt-4 text-xl font-bold">
                AEO & GEO
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Exploring the changing landscape of search and AI-driven
                discovery.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-6 py-24 lg:px-8 lg:py-32"
      >
        <div className="mx-auto max-w-7xl rounded-3xl bg-zinc-950 px-8 py-16 text-white sm:px-12 lg:px-20 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            07 / Contact
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Let&apos;s connect.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            Have a project, opportunity or idea you would like to discuss?
            Get in touch.
          </p>

          <a
            href="mailto:your@email.com"
            className="mt-10 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
          <p>© 2026 Gurudarshan D Hegde. All rights reserved.</p>
          <p>Built with Next.js.</p>
        </div>
      </footer>
    </main>
  );
}