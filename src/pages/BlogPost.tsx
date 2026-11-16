import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import NotFound from "./NotFound";
import { clinic, getPostBySlug } from "@/data/blogPosts";
import PostHero from "@/components/blogpost/PostHero";
import PostToc from "@/components/blogpost/PostToc";
import PostBody from "@/components/blogpost/PostBody";
import PostCta from "@/components/blogpost/PostCta";
import PostFaq from "@/components/blogpost/PostFaq";
import PostComments from "@/components/blogpost/PostComments";
import "@/blogpost.css";

const BlogPost = () => {
  const { slug } = useParams();
  const post = getPostBySlug(slug);

  if (!post) return <NotFound />;

  const url = `${clinic.url}/blogs/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: new URL(post.image, clinic.url).href,
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: { "@type": "Organization", name: clinic.name },
    publisher: { "@type": "Organization", name: clinic.name, url: clinic.url },
    mainEntityOfPage: url,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="rsp-page">
      <Helmet>
        <title>{`${post.title}`}</title>
        <meta name="description" content={post.description} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        {post.faqs.length > 0 && (
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        )}
      </Helmet>

      <PostHero post={post} />

      <div className="post-layout">
        <PostToc post={post} />
        <PostBody post={post} />
      </div>

      <PostCta post={post} />
      <PostFaq post={post} />
      <PostComments />
      
    </div>
  );
};

export default BlogPost;