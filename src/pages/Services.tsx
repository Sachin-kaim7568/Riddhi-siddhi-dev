
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Card } from "@/components/ui/card";
import { services } from "@/data/services";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Dental Services in Jaipur | Riddhi Siddhi Dental Hospital</title>
        <meta
          name="description"
          content="Explore dental services at Riddhi Siddhi Dental Hospital in Jaipur: root canal treatment, implants, clear aligners and smile designing. Contact us today!"
        />
        <link
          rel="canonical"
          href="https://riddhisiddhidentalhospital.com/services"
        />
      </Helmet>

      <div className="min-h-screen pt-16 md:pt-24 pb-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mt-8 mb-16">
            <span className="bg-primary/10 text-primary font-semibold tracking-wider uppercase px-4 py-2 rounded-full text-sm inline-block mb-4">
              Comprehensive Dental Care
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-slate-800 leading-tight mb-6 uppercase">
              Get your beautiful smile at Complete Dental Care in Jaipur
             </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
             At Riddhi Siddhi Dental Hospital, Vaishali Nagar. We provide comprehensive dental services like general dentistry, root canal treatment, dental implants, orthodontic treatment (braces, clear aligner), smile designing etc. Our aim is to provide painless dental treatment with customized dental treatment to give you a healthy and confident smile.            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Link
                    to={`/services/${service.slug}`}
                    className="block h-full"
                    aria-label={`View details for ${service.title}`}
                  >
                    <Card className="h-full p-6 shadow-soft hover:shadow-medium transition-smooth flex flex-col group border-primary/5 hover:border-primary/20">
                      <div className="mb-6 rounded-2xl overflow-hidden h-48 w-full">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                          <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                        </div>

                        <h3 className="font-heading font-semibold text-xl text-primary group-hover:text-accent transition-colors">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                        {service.description}
                      </p>

                      <div className="flex items-center text-primary font-medium text-sm group-hover:translate-x-2 transition-transform">
                        View Details <ArrowRight className="w-4 h-4 ml-2" />
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
