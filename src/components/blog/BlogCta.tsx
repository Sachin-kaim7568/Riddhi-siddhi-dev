import { Link } from "react-router-dom";

const BlogCta = () => {
  return (
    <section className="rsb-cta">
      <div>
        <h2>Have a dental problem? Don't wait for it to get worse.</h2>
        <p>Book a consultation with our team and get a clear diagnosis and treatment plan.</p>
      </div>
      <Link to="/contact" className="rsb-btn-light">
        Book Appointment
      </Link>
    </section>
  );
};

export default BlogCta;