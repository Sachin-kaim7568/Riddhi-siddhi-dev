import { useState } from "react";
import type { BlogPostData } from "@/data/blogPosts";
import Reveal from "./Reveal";

const PostFaq = ({ post }: { post: BlogPostData }) => {
  const [open, setOpen] = useState<number | null>(null);
  if (!post.faqs.length) return null;

  return (
    <section className="pb" id="faq">
      <div className="wrap">
        <Reveal>
          <h2 className="sec">Frequently Asked Questions</h2>
        </Reveal>
        {post.faqs.map((f, i) => (
          <Reveal key={f.q}>
            <details open={open === i}>
              <summary
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(open === i ? null : i);
                }}
              >
                {f.q}
              </summary>
              <p>{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default PostFaq;