import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const BlogFeatured = () => {
  // featured: true wala post, nahi mila to pehla post
  const post = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  if (!post) return null;

  return (
    <article className="rsb-featured">
      <div className="rsb-thumb t1" style={{ padding: 0, overflow: "hidden" }}>
        <img
          src={post.image}
          alt={post.imageAlt}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>

      <div className="rsb-featured-body">
        <span className="rsb-tag">Featured · {post.category}</span>
        <h2>{post.title}</h2>
        <div className="rsb-meta">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        <p>{post.excerpt}</p>
        <Link to={`/blogs/${post.slug}`} className="rsb-readmore">
          Read full article →
        </Link>
      </div>
    </article>
  );
};

export default BlogFeatured;