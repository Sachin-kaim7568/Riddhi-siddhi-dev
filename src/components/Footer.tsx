import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "@/data/services";

const Footer = () => {
  // Select top 5 popular treatments for the footer
  const popularTreatments = services.slice(0, 5);

  return (
    <footer className="bg-card border-t border-border py-12 mb-20 md:mb-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-heading font-semibold text-lg text-primary mb-4">
              Riddhi Siddhi Dental Hospital
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for premium dental care in Jaipur. Specializing in RCT, Implants, Aligners, and Smile Designing.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-heading font-semibold text-lg text-primary mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Gallery", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Treatments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="font-heading font-semibold text-lg text-primary mb-4">
              Treatments
            </h3>
            <ul className="space-y-2">
              {popularTreatments.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-heading font-semibold text-lg text-primary mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  1ST FLOOR , SHREE GULAB MARKET, NEAR HOPE HOSPITAL,AKASHARDHAM CHOURAHA , VAISHALI NAGAR , JAIPUR -302021
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+917737129368" className="text-muted-foreground hover:text-primary transition-smooth">
                  +91-7737 1293 68
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:riddhisiddhidentalhospital@gmail.com" className="text-muted-foreground hover:text-primary transition-smooth break-all">
                  riddhisiddhidentalhospital@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Instagram className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="https://instagram.com/the_gooddoctor99" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-smooth">
                  @the_gooddoctor99
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  <strong>Timing:</strong> 10 AM – 2 PM / 5 PM – 8 PM (Monday – Sunday)
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-border text-center"
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Riddhi Siddhi Dental Hospital. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
