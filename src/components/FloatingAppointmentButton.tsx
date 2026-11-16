import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const FloatingAppointmentButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phone = "+917737 1293 68";

  const handleCall = () => {
    window.location.href = `tel:${phone}`;
    setIsOpen(false);
  };

  const handleWhatsApp = () => {
    const message = "Hello, I would like to book an appointment at Riddhi Siddhi Dental Hospital.";
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    setIsOpen(false);
  };

  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-40"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow rounded-full px-6 py-6 md:px-8 md:py-6 font-heading font-semibold transition-smooth group"
          >
            <Calendar className="w-5 h-5 mr-2 group-hover:rotate-12 transition-smooth" />
            <span className="hidden md:inline">Book Appointment</span>
            <span className="md:hidden">Book Now</span>
          </Button>
        </motion.div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-heading text-center">
              Book an Appointment
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <Button
              onClick={handleCall}
              size="lg"
              className="w-full h-16 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call Now
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="w-full h-16 text-lg bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold"
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              WhatsApp
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FloatingAppointmentButton;
