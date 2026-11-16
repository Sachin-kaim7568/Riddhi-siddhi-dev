import type { BlogPostData, ListItem } from "@/data/blogPosts";

const renderItem = (it: ListItem) =>
  typeof it === "string" ? (
    it
  ) : (
    <>
      <strong>{it.b}</strong> {it.t}
    </>
  );

const PostBody = ({ post }: { post: BlogPostData }) => (
  <div className="article">
    {post.body.map((b, i) => {
      switch (b.type) {
        case "p":
          return (
            <p key={i} className={b.lead ? "lead-p" : undefined}>
              {b.text}
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