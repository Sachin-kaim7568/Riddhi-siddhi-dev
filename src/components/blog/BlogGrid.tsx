import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

// Ek page pe kitne cards dikhane hain. Abhi 6 articles hain, to pager tab dikhega jab articles 6 se zyada honge.
// Pager test karna ho to ise 3 kar do (2 pages ban jayenge).
const POSTS_PER_PAGE = 5;

// Asli articles ab src/data/blogPosts.ts se aate hain. Wahan naya post add karo, yahan kuch nahi badalna.
// Neeche ke samples sirf reference ke liye hain (category chips ki value se match honi chahiye:
// "Oral Care" | "Treatments" | "Cosmetic" | "Kids").
//
// {
//   category: "Oral Care",
//   tag: "Oral Care",
//   title: "How Often Should You Get Your Teeth Scaled?",
//   date: "10 Oct 2026",
//   readTime: "4 min read",
//   text: "Scaling and polishing removes plaque and tartar that brushing cannot. Learn the ideal gap between cleanings and the signs you are overdue.",
//   to: "/services/scaling-polishing",
//   theme: "t2",
// },
// {
//   category: "Cosmetic",
//   tag: "Cosmetic Dentistry",
//   title: "Teeth Whitening: What Works and What to Avoid",
//   date: "7 Oct 2026",
//   readTime: "5 min read",
//   text: "From professional whitening to home habits, understand which options are safe for your enamel and how long results last.",
//   to: "/services/teeth-whitening",
//   theme: "t3",
// },
// {
//   category: "Treatments",
//   tag: "Treatments",
//   title: "Dental Implants: Are You a Good Candidate?",
//   date: "3 Oct 2026",
//   readTime: "7 min read",
//   text: "Implants are the closest thing to a natural tooth. We explain the process, healing time and who benefits the most.",
//   to: "/services/dental-implants",
//   theme: "t4",
// },
// {
//   category: "Kids",
//   tag: "Kids Dentistry",
//   title: "Your Child's First Dental Visit: A Parent's Guide",
//   date: "28 Sep 2026",
//   readTime: "4 min read",
//   text: "When to start, what to expect and simple ways to make the first visit stress-free for your little one.",
//   to: "/services/kids-dentistry",
//   theme: "t5",
// },
// {
//   category: "Cosmetic",
//   tag: "Cosmetic Dentistry",
//   title: "Clear Aligners vs. Metal Braces: Which Is Right for You?",
//   date: "22 Sep 2026",
//   readTime: "6 min read",
//   text: "Compare comfort, cost, treatment time and lifestyle impact to choose the straightening option that suits you.",
//   to: "/services/clear-aligners",
//   theme: "t6",
// },
// {
//   category: "Oral Care",
//   tag: "Oral Care",
//   title: "Why Do My Teeth Feel Sensitive? Causes and Fixes",
//   date: "15 Sep 2026",
//   readTime: "5 min read",
//   text: "Sharp pain with hot or cold drinks is common but treatable. Find out what triggers it and when to see a dentist.",
//   to: "/services/sensitive-teeth-treatment",
//   theme: "t1",
// },

const ToothIcon = () => (
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <path
      d="M31 24C31 14 40 12 47 17c2 1.3 4 1.3 6 0 7-5 16-3 16 7 0 12-4 18-5 30-1 14-3 28-9 28-5 0-4-15-6-20-2 5-1 20-6 20-6 0-8-14-9-28-1-12-5-18-5-30z"
      fill="none"
      stroke="currentColor"
      strokeWidth="4.5"
      strokeLinejoin="round"
    />
    <path d="M40 46c6 8 14 8 20 0" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
  </svg>
);

type Props = {
  category: string;
  query: string;
};

const BlogGrid = ({ category, query }: Props) => {
  const [page, setPage] = useState(1);
  const topRef = useRef<HTMLDivElement>(null);

  // Featured card pe jo post dikhta hai wo grid mein dobara nahi aayega
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const pool = blogPosts.filter((p) => p !== featured);

  const q = query.trim().toLowerCase();

  const filtered = pool.filter((p) => {
    const inCategory = category === "all" || p.category === category;
    const haystack = `${p.category} ${p.title} ${p.date} ${p.readTime} ${p.excerpt}`.toLowerCase();
    return inCategory && haystack.includes(q);
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const current = Math.min(page, totalPages);
  const visible = filtered.slice((current - 1) * POSTS_PER_PAGE, current * POSTS_PER_PAGE);

  // filter ya search badalne par wapas page 1 pe
  useEffect(() => {
    setPage(1);
  }, [category, query]);

  const goTo = (n: number) => {
    setPage(n);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Featured ke alawa koi post hi nahi hai to grid poori chhupa do
  if (pool.length === 0) return null;

  return (
    <>
      <div ref={topRef} className="rsb-grid-anchor" />

      <div className="rsb-grid">
        {visible.map((p, i) => (
          <article className="rsb-card" key={p.slug}>
            <div className={`rsb-thumb t${(i % 6) + 1}`} style={p.image ? { padding: 0, overflow: "hidden" } : undefined}>
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              ) : (
                <ToothIcon />
              )}
            </div>
            <div className="rsb-card-body">
              <span className="rsb-tag">{p.category}</span>
              <h3>{p.title}</h3>
              <div className="rsb-meta">
                <span>{p.date}</span>
                <span>•</span>
                <span>{p.readTime}</span>
              </div>
              <p>{p.excerpt}</p>
              <Link to={`/blogs/${p.slug}`} className="rsb-readmore">
                Read more →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="rsb-empty">No articles found. Try a different search or category.</p>
      )}

      {totalPages > 1 && (
        <nav className="rsb-pager" aria-label="Blog pages">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              className={n === current ? "active" : ""}
              aria-label={`Page ${n}`}
              aria-current={n === current ? "page" : undefined}
              onClick={() => goTo(n)}
            >
              {n}
            </button>
          ))}
          {current < totalPages && (
            <button type="button" aria-label="Next page" onClick={() => goTo(current + 1)}>
              →
            </button>
          )}
        </nav>
      )}
    </>
  );
};

export default BlogGrid;