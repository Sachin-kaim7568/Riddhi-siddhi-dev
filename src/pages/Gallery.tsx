import { useState, useCallback, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const rawImages = [
  "https://ik.imagekit.io/17ss4cqrjc/Rsdh/IMG-20260131-WA0001.jpg",
  "https://res.cloudinary.com/drbuztqdo/image/upload/w_900/v1764326271/Interior-1_gax9ci.jpg",
  "https://ik.imagekit.io/17ss4cqrjc/Rsdh/IMG-20260131-WA0009.jpg",
  "https://ik.imagekit.io/17ss4cqrjc/Rsdh/IMG-20260131-WA0012.jpg",
  "https://res.cloudinary.com/drbuztqdo/image/upload/w_900/v1764326271/Machine_ak6t4e.jpg",
  "https://ik.imagekit.io/17ss4cqrjc/Rsdh/IMG-20260131-WA0007.jpg",
  "https://ik.imagekit.io/17ss4cqrjc/Rsdh/IMG-20260131-WA0006.jpg",
  "https://res.cloudinary.com/drbuztqdo/image/upload/w_900/v1764326272/Interior-2_j39wia.jpg",
  "https://ik.imagekit.io/17ss4cqrjc/Rsdh/IMG-20260131-WA0004.jpg",
  "https://ik.imagekit.io/17ss4cqrjc/Rsdh/IMG-20260131-WA0011.jpg",
  "https://res.cloudinary.com/drbuztqdo/image/upload/w_900/v1764326272/Machine_1_nc03su.jpg",
  "https://ik.imagekit.io/17ss4cqrjc/Rsdh/IMG-20260131-WA0002.jpg",
  "https://ik.imagekit.io/17ss4cqrjc/Rsdh/IMG-20260131-WA0005.jpg",
  "https://res.cloudinary.com/drbuztqdo/image/upload/w_900/v1764326271/Machine_ak6t4e.jpg",
  "https://ik.imagekit.io/17ss4cqrjc/Rsdh/IMG-20260131-WA0010.jpg",
  "https://ik.imagekit.io/17ss4cqrjc/Rsdh/IMG-20260131-WA0008.jpg",
];

const galleryImages = rawImages.map((src, index) => {
  const isImageKit = src.includes("ik.imagekit.io");

  return {
    id: index,
    thumb: isImageKit ? `${src}?tr=w-600,q-80,f-auto` : src,
    full: isImageKit ? `${src}?tr=w-1600,q-90,f-auto` : src,
  };
});

const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % galleryImages.length);
    }
  }, [selectedIndex]);

  const prevImage = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (selectedIndex - 1 + galleryImages.length) % galleryImages.length
      );
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, nextImage, prevImage]);

  return (
    <>
      <Helmet>
        <title>
          Photo Gallery of Riddhi Siddhi Dental Hospital Jaipur
        </title>

        <meta
          name="description"
          content="Explore the photo gallery of Riddhi Siddhi Dental Hospital, featuring patient photos, dental treatments, and clinic experiences to showcase our dental care."
        />

        <link
          rel="canonical"
          href="https://riddhisiddhidentalhospital.com/gallery"
        />
      </Helmet>

      <div className="min-h-screen pt-16 md:pt-24 pb-8">
        {/* Intro Section */}
        <div className="bg-primary/5 py-6 md:py-8 mb-8 border-y border-primary/10">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full">
              Image Gallery
            </span>

            <h1 className="font-heading font-bold text-2xl md:text-4xl text-primary mb-3 uppercase tracking-tight">
              Transformations Through Expertise
            </h1>

            <p className="text-muted-foreground text-base md:text-lg mb-0 leading-relaxed max-w-2xl mx-auto">
              Experience the power of skilled dental care. Our gallery
              showcases actual patient transformations, illustrating
              our commitment to restoring smiles and improving oral health.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <Card
                key={image.id}
                onClick={() => openLightbox(index)}
                className="overflow-hidden cursor-pointer border-0 group rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 bg-transparent"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-muted rounded-lg">
                  <img
                    src={image.thumb}
                    alt={`Patient Transformation ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </Card>
            ))}
          </div>

          {/* Lightbox / Modal */}
          {selectedIndex !== null && (
            <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center p-2 md:p-6 select-none animate-in fade-in duration-300">
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black/80 backdrop-blur-xl"
                onClick={closeLightbox}
              />

              {/* Close Button */}
              <div className="absolute top-0 right-0 p-4 z-50 flex justify-end">
                <button
                  onClick={closeLightbox}
                  className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md"
                  aria-label="Close lightbox"
                >
                  <X className="w-6 h-6 md:w-8 md:h-8" />
                </button>
              </div>

              {/* Main Image Container */}
              <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-2 md:left-8 p-3 md:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md z-50 pointer-events-auto"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6 md:w-10 md:h-10" />
                </button>

                <div className="relative w-full h-[85vh] flex items-center justify-center px-12 md:px-24">
                  <img
                    src={galleryImages[selectedIndex].full}
                    alt={`Expanded Transformation ${selectedIndex + 1}`}
                    className="max-w-full max-h-full object-contain drop-shadow-2xl animate-in zoom-in-95 duration-300 pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-2 md:right-8 p-3 md:p-4 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors backdrop-blur-md z-50 pointer-events-auto"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6 md:w-10 md:h-10" />
                </button>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-6 left-0 right-0 text-center text-white/80 text-sm tracking-[0.2em] font-medium z-50">
                {selectedIndex + 1} / {galleryImages.length}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
