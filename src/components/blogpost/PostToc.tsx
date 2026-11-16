import { useEffect, useState } from "react";
import type { BlogPostData } from "@/data/blogPosts";

const PostToc = ({ post }: { post: BlogPostData }) => {
  const headings = post.body.filter(
    (b): b is Extract<BlogPostData["body"][number], { type: "h2" }> => b.type === "h2"
  );
  const [active, setActive] = useState("");

  useEffect(() => {
    const els = headings
      .map((h) => document.getElementById(h.id))
      .filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-20% 0px -70% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [post.slug]);

  return (
    <aside className="toc-side">
      <nav className="toc" aria-label="Table of contents">
        <h2 className="toc-title">In this article</h2>
        <ol>
          {headings.map((h) => (
            <li key={h.id}>
              <a href={`#${h.id}`} className={active === h.id ? "on" : ""}>
                {h.text}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
};

export default PostToc;