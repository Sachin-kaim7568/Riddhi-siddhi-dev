import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const teamMembers = [
  {
    id: 1,
    name: "Dr. Pooja Dhanopia",
    designation: "Chief Dental Surgeon (BDS)",
    experience: "2+ Years Clinical Experience",
    description: "A dedicated Dental Surgeon (BDS, RUHS) known for her patient-centric approach and gentle treatment style. She specializes in Root Canal Treatment (RCT), Dental Implants, Clear Aligners, and Cosmetic Smile Designing. She also serves as a mentor to aspiring dental professionals.",
    image: "https://res.cloudinary.com/drbuztqdo/image/upload/w_900/v1764330368/Gemini_Generated_Image_mfkrnimfkrnimfkr_rz7gok.png",
  },
  {
    id: 2,
    name: "Dr. Jay Jadon",
    designation: "Oral & Maxillofacial Surgeon (MDS)",
    experience: "7+ Years Experience",
    description: "A distinguished surgeon specializing in Maxillofacial trauma, fractures, Oral Implantology, Facial aesthetic surgery, Oral Cancers, and TMJ. Known for his compassionate, patient-centered approach and use of advanced technologies for painless treatment.",
    image: "https://res.cloudinary.com/drbuztqdo/image/upload/w_900/v1764330368/Gemini_Generated_Image_mfkrnimfkrnimfkr_rz7gok.png",
  },
  {
    id: 3,
    name: "Dr. Pulkit Sharma",
    designation: "Orthodontist (MDS)",
    experience: "Treated 1000+ Cases",
    description: "Highly skilled expert in complex cases, cleft lip/palate, and digital orthodontics including Invisalign. An innovator holding eight Government of India patents and three national awards for academic and clinical excellence.",
    image: "https://res.cloudinary.com/drbuztqdo/image/upload/w_900/v1764330368/Gemini_Generated_Image_mfkrnimfkrnimfkr_rz7gok.png",
  },
  {
    id: 4,
    name: "Nagendra Singh",
    designation: "Dental Hygienist",
    experience: "Preventive Care Expert",
    description: "Dedicated to patient oral health through professional cleaning (scaling), preventive care procedures, and educating patients on maintaining optimal dental hygiene at home.",
    image: "https://res.cloudinary.com/drbuztqdo/image/upload/w_900/v1764330368/Gemini_Generated_Image_mfkrnimfkrnimfkr_rz7gok.png",
  },
];

const TeamSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });

  // State for Modal
  const [selectedMember, setSelectedMember] = useState(null);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative max-w-7xl mx-auto px-4 md:px-12 py-8">

      {/* Carousel Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y -ml-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex-[0_0_80%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] pl-4 min-w-0"
            >
              {/* Click Event */}
              <Card
                onClick={() => setSelectedMember(member)}
                className="overflow-hidden h-full mx-auto shadow-soft hover:shadow-medium transition-all duration-300 group cursor-pointer border-transparent hover:border-primary/20 active:scale-95"
              >
                <div className="aspect-square overflow-hidden bg-secondary/20 relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    width="400"
                    height="400"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-white/90 text-primary px-4 py-2 rounded-full text-sm font-semibold shadow-lg translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      View Profile
                    </span>
                  </div>
                </div>

                <div className="p-6 text-center bg-card">
                  <h3 className="font-heading font-semibold text-lg text-primary mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-medium">
                    {member.designation}
                  </p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 text-primary rounded-full p-3 shadow-lg hover:bg-primary hover:text-white transition-all z-10 active:scale-95"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-0 md:right-2 top-1/2 -translate-y-1/2 bg-white border border-gray-200 text-primary rounded-full p-3 shadow-lg hover:bg-primary hover:text-white transition-all z-10 active:scale-95"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* --- DETAIL MODAL START --- */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200 rounded-3xl overflow-hidden">
          {/* Modal Container - Increased Roundedness (rounded-3xl) */}
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl overflow-hidden relative flex flex-col md:flex-row max-h-[90vh] md:max-h-auto overflow-y-auto md:overflow-visible animate-in zoom-in-95 duration-300">

            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 bg-white/80 p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            {/* Left Side: Image */}
            <div
              className="
                w-full md:w-2/5 
                h-64 md:h-auto 
                relative bg-secondary/10
                overflow-hidden
                rounded-t-3xl         
                md:rounded-l-3xl      
                md:rounded-tr-none 
              "
            >
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-full object-cover"
                width="400"
                height="400"
              />
            </div>

            {/* Right Side: Content */}
            <div className="w-full md:w-3/5 p-8 flex flex-col justify-center">

              {/* Experience Badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  <Award className="w-4 h-4" />
                  {selectedMember.experience}
                </span>
              </div>

              <h2 className="text-3xl font-heading font-bold text-primary mb-1">
                {selectedMember.name}
              </h2>
              <p className="text-lg text-muted-foreground font-medium mb-6">
                {selectedMember.designation}
              </p>

              <div className="h-px w-full bg-gray-100 mb-6"></div>

              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                {selectedMember.description}
              </p>

              <div className="mt-8">
                <button
                  onClick={() => setSelectedMember(null)}
                  className="w-full md:w-auto px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium shadow-lg shadow-primary/20"
                >
                  Close Details
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
      {/* --- DETAIL MODAL END --- */}

    </div>
  );
};

export default TeamSlider;