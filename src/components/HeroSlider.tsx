import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import H1 from "@/assets/H1.jpg";
import H2 from "@/assets/H2.jpg";
import H3 from "@/assets/H3.jpg";
import H4 from "@/assets/H4.jpg";

const slides = [
  {
    title: "Riddhi Siddhi Dental Hospital in Jaipur",
    subtitle: "Your Beautiful Smile is our Priority",
    description: "We provide full dental services in Vaishali Nagar, Jaipur, according to your oral health requirements.",
    image: H3,
    buttonText: "Know More About Our Services",
    link: "https://riddhisiddhidentalhospital.com/services",
  },
  {
    title: "Dental Implants in Jaipur",
    subtitle: "Get your smile back with confidence. ",
    description: "At Riddhi Siddhi Dental Hospital we offer dental implants in Vaishali Nagar, Jaipur to help you regain your smile.",
    image: H2,
    buttonText: "Know More About Dental Implants",
    link: "https://riddhisiddhidentalhospital.com/services/dental-implants",
  },
  {
    title: "Invisible Braces in Jaipur",
    subtitle: "Straighten your teeth with confidence.",
    description: "At Riddhi Siddhi Dental Hospital we offer invisible braces in Vaishali Nagar, Jaipur.",
    image: H1,
    buttonText: "Know More About Clear Aligners",
    link: "https://riddhisiddhidentalhospital.com/services/clear-aligners",
  },
  {
    title: "Smile Designing in Jaipur",
    subtitle: "Make your smile look beautiful.",
    description: "We offer individualized smile designing treatments at Riddhi Siddhi Dental Hospital in Vaishali Nagar, Jaipur.",
    image: H4,
    buttonText: "Know More About Smile Designing",
    link: "https://riddhisiddhidentalhospital.com/services/smile-designing",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[250px] md:h-[450px] overflow-hidden rounded-3xl shadow-glow mt-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
            loading="eager"
            width="1920"
            height="1080"
            // @ts-ignore - fetchPriority is valid but React types might not know it yet
            fetchpriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="container mx-auto px-4 md:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="max-w-4xl mx-auto"
              >
                <motion.h1
                  className="font-heading font-bold text-2xl md:text-6xl lg:text-7xl text-primary-foreground mb-4 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  className="font-heading text-xl md:text-2xl text-primary-foreground/90 mb-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
                <motion.p
                  className="text-base hidden md:block md:text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                >
                  {slides[currentSlide].description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="hidden md:inline-flex bg-card hover:bg-card/90 text-primary shadow-medium rounded-full px-8 py-6 font-heading font-semibold transition-smooth"
                  >
                    <a href={slides[currentSlide].link}>
                      {slides[currentSlide].buttonText}
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-1 top-1/2 -translate-y-1/2 bg-card/40 backdrop-blur-sm hover:bg-card text-primary p-3 rounded-full shadow-medium transition-smooth z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-card/40 backdrop-blur-sm hover:bg-card text-primary p-3 rounded-full shadow-medium transition-smooth z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-smooth ${index === currentSlide ? "bg-primary w-8" : "bg-muted-foreground/50"
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
