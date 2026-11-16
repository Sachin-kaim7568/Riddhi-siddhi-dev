import { User, CalendarDays } from "lucide-react";
import { clinic, type BlogPostData } from "@/data/blogPosts";

const PostHead = ({ post }: { post: BlogPostData }) => (
  <div className="post-head">
    <h1>{post.title}</h1>
    <div className="meta">
      <span>
        <User />
        Published by <b>{clinic.name}</b>
      </span>
      <span>
        <CalendarDays />
        <time dateTime={post.dateISO}>{post.date}</time>
      </span>
    </div>
  </div>
);

export default PostHead;