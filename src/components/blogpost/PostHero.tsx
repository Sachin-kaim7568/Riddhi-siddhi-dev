import { Link } from "react-router-dom";
import type { BlogPostData } from "@/data/blogPosts";
import PostHead from "./PostHead";

const PostHero = ({ post }: { post: BlogPostData }) => (
  <>
    <nav className="crumbs-b" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      <span>/</span>
      <Link to="/blogs">Blog</Link>
      <span>/</span>
      {post.shortTitle}
    </nav>

    <figure className="feat">
      <div className="feat-img">
        <img
          src={post.image}
          alt={post.imageAlt}
          width={1200}
          height={675}
          fetchPriority="high"
        />
      </div>

      <PostHead post={post} />
    </figure>
  </>
);

export default PostHero;