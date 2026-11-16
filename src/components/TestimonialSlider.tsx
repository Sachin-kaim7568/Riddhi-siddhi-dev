import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    text: "Excellent dental care! Dr. Pooja and her team made my root canal treatment completely painless. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Sharma",
    text: "Best dental clinic in Jaipur. The staff is very professional and caring. My smile makeover exceeded my expectations!",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Verma",
    text: "Got my dental implants done here. The process was smooth and the results are amazing. Thank you team!",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Patel",
    text: "Very happy with my clear aligner treatment. The clinic is modern and hygienic. Great experience overall!",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikram Singh",
    text: "Professional service and state-of-the-art equipment. Dr. Pooja is very skilled and patient. Definitely coming back!",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const [mounted, setMounted] = useState(false);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(true);

  // FIX 2: Loop disabled for smoother React State animations
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
    containScroll: "trimSnaps",
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  if (!mounted) return <div className="h-64" />;

  return (
    // FIX 1: Added explicit padding logic so buttons fit inside visually
    <div className="relative max-w-7xl mx-auto px-2 md:px-12">
      <div className="overflow-hidden py-8" ref={emblaRef}> {/* py-8 added for shadow space */}
        <div className="flex gap-4 md:gap-6 pl-4 pr-5">
          {testimonials.map((testimonial, index) => {
            const isCenter = index === selectedIndex;

            return (
              <motion.div
                key={testimonial.id}
                // Adjusted widths for better mobile/tablet view
                className="flex-[0_0_85%] sm:flex-[0_0_60%] md:flex-[0_0_45%] lg:flex-[0_0_35%]"
                animate={{
                  scale: isCenter ? 1.05 : 0.9,
                  opacity: isCenter ? 1 : 0.6,
                }}
                transition={{ duration: 0.4, type: "spring" }}
              >
                <Card
                  className={`p-6 min-h-[220px] h-full flex flex-col justify-between transition-shadow duration-300 ${isCenter ? "shadow-glow border-primary/50" : "shadow-sm border-transparent"
                    }`}
                >
                  <div>
                    <Quote className="w-8 h-8 md:w-10 md:h-10 text-primary/30 mb-4" />
                    <p className="text-muted-foreground leading-relaxed mb-4 italic text-sm md:text-base">
                      "{testimonial.text}"
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-lg">
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="font-heading font-semibold text-primary">
                      {testimonial.name}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* FIX 1: Buttons Logic - Hide if disabled, positioned safely */}
      <button
        onClick={scrollPrev}
        disabled={!prevBtnEnabled}
        className={`absolute left-0 md:left-2 top-1/2 -translate-y-1/2 bg-card border border-primary/20 text-primary rounded-full p-2 md:p-3 shadow-medium transition-all z-10 ${!prevBtnEnabled ? "opacity-0 pointer-events-none" : "hover:scale-110 hover:bg-primary hover:text-white"
          }`}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={scrollNext}
        disabled={!nextBtnEnabled}
        className={`absolute right-0 md:right-2 top-1/2 -translate-y-1/2 bg-card border border-primary/20 text-primary rounded-full p-2 md:p-3 shadow-medium transition-all z-10 ${!nextBtnEnabled ? "opacity-0 pointer-events-none" : "hover:scale-110 hover:bg-primary hover:text-white"
          }`}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default TestimonialSlider;