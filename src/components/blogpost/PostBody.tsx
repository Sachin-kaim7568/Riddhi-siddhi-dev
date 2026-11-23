import { Fragment } from "react";
import { parseLinks, type BlogPostData, type ListItem } from "@/data/blogPosts";

const LinkText = ({ text }: { text: string }) => (
  <>
    {parseLinks(text).map((part, i) =>
      part.href ? (
        <a key={i} href={part.href}>
          {part.text}
        </a>
      ) : (
        <Fragment key={i}>{part.text}</Fragment>
      )
    )}
  </>
);

const renderItem = (it: ListItem) =>
  typeof it === "string" ? (
    <LinkText text={it} />
  ) : (
    <>
      <strong>
        <LinkText text={it.b} />
      </strong>{" "}
      <LinkText text={it.t} />
    </>
  );

const PostBody = ({ post }: { post: BlogPostData }) => (
  <div className="article">
    {post.body.map((b, i) => {
      switch (b.type) {
        case "p":
          return (
            <p key={i} className={b.lead ? "lead-p" : undefined}>
              <LinkText text={b.text} />
            </p>
          );
        case "h2":
          return (
            <h2 key={i} id={b.id}>
              {b.text}
            </h2>
          );
        case "h3":
          return <h3 key={i}>{b.text}</h3>;
        case "ul":
          return (
            <ul key={i}>
              {b.items.map((it, j) => (
                <li key={j}>{renderItem(it)}</li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    })}
  </div>
);

export default PostBody;