import { Link } from "react-router-dom";
import { getPostBySlug, type BlogPostData } from "@/data/blogPosts";
import Reveal from "./Reveal";

const Tooth = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 3.5C4.5 3.5 3.5 6 4 8.5c.4 2.2 1.5 3.5 1.8 6 .3 2.5.7 6 2.7 6 1.7 0 1.3-3.8 2.3-5.2.3-.4.7-.6 1.2-.6s.9.2 1.2.6c1 1.4.6 5.2 2.3 5.2 2 0 2.4-3.5 2.7-6 .3-2.5 1.4-3.8 1.8-6 .5-2.5-.5-5-3-5-1.5 0-2.3.9-4 .9S8.5 3.5 7 3.5z" />
  </svg>
);

const PostRelated = ({ post }: { post: BlogPostData }) => {
  if (!post.related.length) return null;

  return (
    <section className="rel" id="related">
      <div className="rel-container">
        <Reveal>
          <h2 className="sec">Related Dental Health Articles</h2>
        </Reveal>
        <div className="rel-grid">
          {post.related.map((r) => {
            const to = getPostBySlug(r.slug) ? `/blogs/${r.slug}` : "/blogs";
            return (
              <Reveal key={r.slug} className="rel-card">
                <Link className="rel-img" to={to} aria-label={r.title}>
                  <Tooth />
                  {r.image && <img src={r.image} alt={r.title} width={600} height={400} loading="lazy" />}
                </Link>
                <div className="rel-body">
                  <h3>{r.title}</h3>
                  <Link className="more" to={to}>
                    Read More →
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PostRelated;