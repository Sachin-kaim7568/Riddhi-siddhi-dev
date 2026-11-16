import { useRef, useState, type FormEvent } from "react";
import { clinic } from "@/data/blogPosts";
import Reveal from "./Reveal";

const PostComments = () => {
  const t0 = useRef(Date.now());
  const [msg, setMsg] = useState<{ text: string; err?: boolean } | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const comment = String(fd.get("comment") || "").trim();
    const website = String(fd.get("website") || "");

    if (!name || !comment || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setMsg({ text: "Please fill in your name, a valid email and your comment.", err: true });
      return;
    }
    // bots: success dikhao, kuch bhejo mat
    if (website || Date.now() - t0.current < 3000) {
      setMsg({ text: "Thank you! Your comment is awaiting moderation." });
      form.reset();
      return;
    }
    if ((comment.match(/https?:\/\/|www\./gi) || []).length > 1) {
      setMsg({ text: "Comments with more than one link are not accepted. Please remove the extra links.", err: true });
      return;
    }
    if (clinic.commentEndpoint) {
      try {
        const r = await fetch(clinic.commentEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, comment, page: window.location.href }),
        });
        if (!r.ok) throw new Error("failed");
      } catch {
        setMsg({ text: "Sorry, your comment could not be sent. Please try again later.", err: true });
        return;
      }
    }
    setMsg({ text: "Thank you! Your comment has been submitted and is awaiting moderation." });
    form.reset();
  };

  return (
    <section className="pb cm" id="comments">
      <div className="wrap">
        <Reveal>
          <h2 className="sec">Leave a Reply</h2>
        </Reveal>
        <p className="cm-note">
          Your email address will not be published. All comments are moderated before they appear.
        </p>
        <form onSubmit={onSubmit} noValidate>
          <div className="field">
            <label htmlFor="cn">Name *</label>
            <input id="cn" name="name" type="text" required autoComplete="name" maxLength={80} />
          </div>
          <div className="field">
            <label htmlFor="ce">Email *</label>
            <input id="ce" name="email" type="email" required autoComplete="email" maxLength={120} />
          </div>
          <div className="field">
            <label htmlFor="cc">Comment *</label>
            <textarea id="cc" name="comment" rows={6} required maxLength={1500} />
          </div>
          <div className="hp" aria-hidden="true">
            <label>
              Leave this field empty
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <button className="btn btn-teal" type="submit">
            Submit Comment
          </button>
          {msg && (
            <div className={`form-msg${msg.err ? " err" : ""}`} role="status">
              {msg.text}
            </div>
          )}
          <p className="fine">Protected against spam. Comments with multiple links are held back automatically.</p>
        </form>
      </div>
    </section>
  );
};

export default PostComments;