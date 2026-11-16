import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { clinic, type BlogPostData } from "@/data/blogPosts";
import Reveal from "./Reveal";

const PostCta = ({ post }: { post: BlogPostData }) => (
  <section className="pb" id="cta">
    <div className="wrap">
      <Reveal className="bcta">
        <h2>{post.cta.title}</h2>
        <p>{post.cta.text}</p>
        <div className="row">
          <Link to="/contact" className="btn btn-teal">
            Book an Appointment
          </Link>
          <a href={`tel:${clinic.phone}`} className="btn btn-line">
            <Phone />
            Call Now
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);

export default PostCta;