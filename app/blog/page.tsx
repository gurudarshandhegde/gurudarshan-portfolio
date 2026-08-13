"use client";

import { useMemo, useState } from "react";
import { blogCategories, blogPosts, type BlogCategory } from "./data";

const POSTS_PER_PAGE = 4;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | BlogCategory>("All");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = useMemo(() => {
    const sortedPosts = [...blogPosts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    return sortedPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase()) ||
        post.category.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const paginatedPosts = filteredPosts.slice(
    (safeCurrentPage - 1) * POSTS_PER_PAGE,
    safeCurrentPage * POSTS_PER_PAGE,
  );

  const featuredPost = paginatedPosts[0] ?? filteredPosts[0] ?? blogPosts[0];

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-zinc-200/70 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="/" className="flex items-center gap-3 text-lg font-bold tracking-tight">
            <img src="/logo-mark.svg" alt="Gurudarshan logo" className="h-9 w-9 rounded-full object-cover" />
            <span>GURUDARSHAN</span>
          </a>

          <nav className="flex items-center">
            <a href="tel:+916362441641" className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 pt-28 pb-16 lg:px-8">
        <nav className="mb-8 flex items-center gap-2 text-sm text-zinc-500">
          <a href="/" className="transition hover:text-zinc-900">
            Home
          </a>
          <span>/</span>
          <span className="text-zinc-900">Blog</span>
        </nav>
        <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-zinc-50 shadow-sm">
          <img
            src={featuredPost.image}
            alt={featuredPost.title}
            className="h-[280px] w-full object-cover sm:h-[360px] lg:h-[440px]"
          />

          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
                Latest publish
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
                {featuredPost.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
                {featuredPost.excerpt}
              </p>
            </div>

            <div className="flex flex-col justify-center rounded-2xl border border-zinc-200 bg-white p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                {featuredPost.category}
              </span>
              <p className="mt-4 text-sm text-zinc-500">
                Published on {new Date(featuredPost.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <a
                href="#posts"
                className="mt-6 inline-flex w-fit rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700"
              >
                Read article
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
                }}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  selectedCategory === category
                    ? "border-zinc-900 bg-zinc-900 text-white"
                    : "border-zinc-300 bg-white text-zinc-700 hover:border-zinc-900"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <label className="flex w-full max-w-md items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-600">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search blog articles"
              className="w-full border-0 bg-transparent text-sm text-zinc-800 outline-none placeholder:text-zinc-400"
            />
          </label>
        </div>

        <div id="posts" className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {paginatedPosts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-52 w-full object-cover"
              />

              <div className="p-6">
                <div className="flex items-center justify-between gap-3 text-xs font-medium uppercase tracking-[0.18em] text-zinc-500">
                  <span>{post.category}</span>
                  <span>
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold tracking-tight text-zinc-900">
                  {post.title}
                </h2>

                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {post.excerpt}
                </p>

                <button
                  type="button"
                  className="mt-6 inline-flex rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-800 transition hover:border-zinc-900"
                >
                  Read more
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredPosts.length > 0 && totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
              disabled={safeCurrentPage === 1}
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>

            <span className="text-sm font-medium text-zinc-600">
              Page {safeCurrentPage} of {totalPages}
            </span>

            <button
              type="button"
              onClick={() => setCurrentPage((page) => Math.min(totalPages, page + 1))}
              disabled={safeCurrentPage === totalPages}
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}

        {filteredPosts.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center text-zinc-600">
            No blogs match your search or category selection.
          </div>
        )}
      </section>
    </main>
  );
}
