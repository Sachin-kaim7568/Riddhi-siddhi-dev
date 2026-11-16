import { useState } from "react";
import SEO from "@/components/SEO";
import BlogHero from "@/components/blog/BlogHero";
import BlogToolbar from "@/components/blog/BlogToolbar";
import BlogFeatured from "@/components/blog/BlogFeatured";
import BlogGrid from "@/components/blog/BlogGrid";
import BlogCta from "@/components/blog/BlogCta";

const Blog = () => {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");

  return (
    <div className="rsb-page">
      <SEO />
      <BlogHero />

      <div className="rsb-container">
        <BlogToolbar category={category} onCategory={setCategory} query={query} onQuery={setQuery} />
        <BlogFeatured />
        <BlogGrid category={category} query={query} />
        <BlogCta />
      </div>
    </div>
  );
};

export default Blog;