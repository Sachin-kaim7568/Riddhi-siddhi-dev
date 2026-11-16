import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PageBanner from "@/components/PageBanner";
import bannerContact from "@/assets/banner-contact.jpg";

const Contact = () => {
  const handleWhatsApp = () => {
    const phone = "+917737129368";
    const message =
      "Hello, I would like to inquire about your dental services.";

    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      <Helmet>
        <title>
          Contact Riddhi Siddhi Dental Hospital in Jaipur Today
        </title>

        <meta
          name="description"
          content="Contact Riddhi Siddhi Dental Hospital in Vaishali Nagar, Jaipur, for appointment enquiries, clinic directions, and information about available dental treatments."
        />

        <link
          rel="canonical"
          href="https://riddhisiddhidentalhospital.com/contact"
        />
      </Helmet>

      <div className="min-h-screen pt-16 md:pt-24 pb-8">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <PageBanner
            title="Contact Us"
            backgroundImage={bannerContact}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Card className="p-6 shadow-medium">
                <h2 className="font-heading font-bold text-2xl text-primary mb-6">
                  Get In Touch
                </h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-primary mb-1">
                        Address
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        1st Floor, Shop 2, Shree Gulab Market, 10/18,
                        <br />
                        Near Akshardham Temple Chouraha,
                        <br />
                        Vaishali Nagar, Jaipur - 302021
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-primary mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:+917737129368"
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        +91-7737 1293 68
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-primary mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:riddhisiddhidentalhospital@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-smooth break-all"
                      >
                        riddhisiddhidentalhospital@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-primary mb-1">
                        Instagram
                      </h3>
                      <a
                        href="https://instagram.com/the_gooddoctor99"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-smooth"
                      >
                        @the_gooddoctor99
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-primary mb-1">
                        Clinic Hours
                      </h3>
                      <div className="text-muted-foreground space-y-1">
                        <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                        <p>Sunday: By Appointment Only</p>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  className="mt-6"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={handleWhatsApp}
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-medium font-heading font-semibold"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Contact via WhatsApp
                  </Button>
                </motion.div>
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full overflow-hidden shadow-medium">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.1202087706542!2d75.73467616334767!3d26.901059340399367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5d5358dece7%3A0x1eed92a50d77bcff!2sRiddhi%20siddhi%20dental%20hospital!5e1!3m2!1sen!2sin!4v1764494888725!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "500px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Riddhi Siddhi Dental Hospital Location"
                />
              </Card>
            </motion.div>
          </div>

          {/* Emergency Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 shadow-medium text-center">
              <h2 className="font-heading font-bold text-2xl text-primary mb-3">
                Emergency Dental Care
              </h2>

              <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                Experiencing a dental emergency? Don't wait! Contact us
                immediately for urgent care. We provide same-day
                appointments for dental emergencies.
              </p>

              <a href="tel:+917737129368">
                <Button className="bg-destructive hover:bg-destructive/90 text-destructive-foreground shadow-medium font-heading font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Call : +91-7737 1293 68
                </Button>
              </a>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
