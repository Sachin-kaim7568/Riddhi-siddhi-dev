import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PageBanner from "@/components/PageBanner";

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find((s) => s.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen pt-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Service Not Found</h2>
        <Button onClick={() => navigate("/services")}>Back to Services</Button>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      <Helmet>
        <title>{service.metaTitle}</title>
        <meta name="description" content={service.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://riddhisiddhidentalhospital.com/services/${service.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            "name": service.title,
            "description": service.description,
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Vaishali Nagar, Jaipur"
            },
            "provider": {
              "@type": "Dentist",
              "name": "Riddhi Siddhi Dental Hospital",
              "url": "https://riddhisiddhidentalhospital.com",
              "image": "https://riddhisiddhidentalhospital.com/favicon.svg"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen pt-16 md:pt-24 pb-12">
        <PageBanner title={service.title} backgroundImage={service.image} />

        <div className="container mx-auto px-4 md:px-6 lg:px-8 mt-12">
          {/* Back Button */}
          <Link to="/services" className="inline-flex items-center text-primary mb-8 hover:translate-x-[-4px] transition-transform">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-medium mb-8">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" width="1200" height="600" />
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h1 className="font-heading font-bold text-3xl md:text-4xl text-primary">
                    {service.title}
                  </h1>
                </div>

                <div className="prose max-w-none text-muted-foreground leading-relaxed text-lg">
                  <p>{service.details}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-secondary/30 p-8 rounded-3xl"
              >
                <h3 className="font-heading font-semibold text-2xl text-primary mb-6">
                  Why Choose This Treatment?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-foreground/90 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 shadow-soft sticky top-24">
                <h3 className="font-heading font-semibold text-xl text-primary mb-4">
                  Book an Appointment
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Ready to transform your smile? Schedule a consultation with Dr. Pooja Dhanopia today.
                </p>
                <div className="space-y-4">
                  <a href="tel:+917737129368" className="block">
                    <Button className="w-full font-heading font-semibold shadow-medium h-12 text-lg">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                  </a>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary/5 h-12"
                    onClick={() => window.open(`https://wa.me/+917737129368?text=Hi, I want to book an appointment for ${service.title}`, "_blank")}
                  >
                    Chat on WhatsApp
                  </Button>
                </div>
              </Card>

              {/* Other Services */}
              <div className="bg-card rounded-2xl p-6 border border-border">
                <h4 className="font-heading font-semibold text-lg mb-4">Other Services</h4>
                <div className="space-y-3">
                  {services
                    .filter((s) => s.slug !== slug)
                    .map((s) => (
                      <Link
                        key={s.id}
                        to={`/services/${s.slug}`}
                        className="block p-3 rounded-xl hover:bg-muted transition-colors text-sm font-medium text-muted-foreground hover:text-primary"
                      >
                        {s.title}
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
