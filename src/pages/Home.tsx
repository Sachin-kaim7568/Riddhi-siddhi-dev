import { motion } from "framer-motion";
import { Smile, Award, Clock, Shield, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";
import SEO from "@/components/SEO";
import TestimonialSlider from "@/components/TestimonialSlider";
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const galleryPreview = [
  {
    id: 1,
    src: "https://res.cloudinary.com/drbuztqdo/image/upload/w_900/v1764326271/Interior-1_gax9ci.jpg",
    alt: "Modern Clinic Interior",
    category: "Clinic"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    alt: "Advanced Dental Procedures",
    category: "Procedures"
  },
  {
    id: 3,
    src: "https://media.istockphoto.com/id/1388931724/photo/shot-of-a-young-woman-checking-her-results-in-the-dentists-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=eQ4nkgTz8jBJykTDhwUd2R9uOlmdfghZhN7pajch6zM=",
    alt: "Happy Patient Smiles",
    category: "Results"
  }
];

const highlights = [
  {
    icon: Smile,
    title: "Personalized consultations",
    description: "Discussion of any concerns you may have",
  },
  {
    icon: Award,
    title: "A variety of dental treatments",
    description: "Understand what procedures are recommended and what aftercare is required ",
  },
  {
    icon: Clock,
    title: "Understanding of sterilization",
    description: "Learn more about how we manage infection control within our clinic ",
  },
  {
    icon: Shield,
    title: "Attention to hygiene",
    description: "Learn about the clinic's sterilization and infection-control practices during your visit.",
  },
];

import { services as allServices } from "@/data/services";

// Get top 4 services for the home page to maintain design consistency
const featuredServices = allServices.slice(0, 4);

const Home = () => {
  return (
    <div className="min-h-screen pt-16 md:pt-20 pb-8">
<SEO
  title="Dental Hospital in Jaipur | Riddhi Siddhi Dental Hospital"
  description="Need a dentist in Jaipur? Riddhi Siddhi Dental Hospital in Vaishali Nagar provides root canal treatment, implants, aligners and smile designing. Contact us."
/>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Hero Slider */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <HeroSlider />
        </motion.section>

        {/* Highlights */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary text-center mb-4">
            Why Choose Riddhi Siddhi Dental Hospital
          </h2>
          <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
            At Riddhi Siddhi Dental Hospital we know that everyone has different concerns when it comes to dental care. Our team will take the time to understand your specific concerns, then will help you understand what is the best option for you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-smooth">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* About Preview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="bg-card rounded-3xl shadow-soft p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
                About Riddhi Siddhi Dental Hospital
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Riddhi Siddhi Dental Hospital aims to provide dental care to all patients in Vaishali Nagar, Jaipur. 
                Under the guidance of Dr. Pooja Dhanopia (BDS), we offer a range of dental treatments including root canals, dental implants, and clear braces. We aim to help patients understand their dental issues and what treatments they may need to help them.
                We can help you with a general dental checkup or any treatments you may wish to do. Please get in touch with us. 

              </p>
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold transition-smooth shadow-medium"
                >
                  Find out more about our hospital.
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Services Preview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary text-center mb-12">
            Dental Treatment & Services  in Jaipur
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
                Find out more about dental services available at Riddhi Siddhi Dental Hospital, Vaishali Nagar. You will receive the most suitable treatment for your teeth, after consultation.  
              </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="p-6 shadow-soft hover:shadow-medium transition-smooth h-full flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.description}</p>
                  </div>
                  <Link
                    to={`/services/${service.slug}`}
                    className="text-sm text-primary hover:text-primary/80 font-medium transition-smooth inline-block"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More →
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-full font-heading font-semibold transition-smooth shadow-soft"
              >
                View All Dental Services
              </motion.button>
            </Link>
          </div>
        </motion.section>

        {/* Gallery Preview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-4">
                Explore Our Dental Hospital
              </h2>
              <p className="text-muted-foreground text-lg">
                Take a look around our dental hospital. See what our dental clinic looks like and what we do. 
              </p>
            </div>
            <Link to="/gallery">
              <Button variant="outline" className="hidden md:flex gap-2" aria-label="View full photo gallery">
                View Our Gallery <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryPreview.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative overflow-hidden rounded-2xl shadow-soft aspect-[4/3]"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-white font-heading font-semibold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {item.alt}
                    </p>
                    <p className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      {item.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link to="/gallery">
              <Button variant="outline" className="w-full">
                View Our Gallery
              </Button>
            </Link>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary text-center mb-12 Patients">
  Patients Experience
</h2>

<div className="patients-exp-content">
  <p className="text-muted-foreground leading-relaxed mb-6 patients-exp-text">
    When choosing a dental hospital it's important to know what patients have to say. This will give you an insight into how well they communicated with their dentist, how they were treated and how they were looked after while in the clinic.
  </p>

  <p className="text-muted-foreground leading-relaxed mb-6 patients-exp-text">
    See what real patients have said about Riddhi Siddhi Dental Hospital.
  </p>
</div>

<TestimonialSlider />

<div className="patients-exp-cta">
  <Link to="/contact">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-heading font-semibold transition-smooth shadow-medium"
    >
      Contact us to find out more
    </motion.button>
  </Link>
</div>
          
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary mb-6">
                  Ready to Visit Us?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  Experience world-class dental care at Riddhi Siddhi Dental Hospital. Book your appointment today and take the first step towards a healthy smile.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-sm text-muted-foreground">1st Floor, Shop 2, Shree Gulab Market, 10/18, Near Akshardham Temple Chouraha, Vaishali Nagar, Jaipur - 302021</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-sm text-muted-foreground">+91-7737 1293 68</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="w-full sm:w-auto shadow-medium text-lg">
                      Book Appointment
                    </Button>
                  </Link>
                  <a href="tel:+917737129368">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5 text-lg">
                      Call Now
                    </Button>
                  </a>
                </div>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-medium hidden lg:block">
                <img
                  src="https://res.cloudinary.com/drbuztqdo/image/upload/w_900/v1764326272/Machine_1_nc03su.jpg"
                  alt="Modern Dental Clinic Reception"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="800"
                  height="400"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Home;
