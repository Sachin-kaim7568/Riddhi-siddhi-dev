import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Info, Briefcase, Image as ImageIcon, Phone } from "lucide-react";
import logoCard from "/favicon.svg";

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: Info },
    { name: "Blogs", path: "/blogs", icon: Info },
    { name: "Services", path: "/services", icon: Briefcase },
    { name: "Gallery", path: "/gallery", icon: ImageIcon },
    { name: "Contact", path: "/contact", icon: Phone },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-soft"
      >
        <div className="container mx-auto px-10 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-medium">
                <img src={logoCard} alt="Riddhi Siddhi Dental Hospital" className="w-full h-full object-cover" width="48" height="48" />
              </div>
              <div>
                <div className="font-heading font-semibold text-lg text-primary leading-tight">
                  Riddhi Siddhi
                </div>
                <p className="text-xs text-muted-foreground">Dental Hospital</p>
              </div>
            </Link>

            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative group"
                >
                  <span
                    className={`text-sm font-medium transition-smooth ${isActive(item.path)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                      }`}
                  >
                    {item.name}
                  </span>
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Bottom Navbar */}
      <motion.nav
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/98 backdrop-blur-md border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      >
        <div className="flex items-center justify-around px-2 py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className="flex flex-col items-center gap-1 min-w-[60px]"
              >
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className={`relative p-2 rounded-xl transition-smooth ${isActive(item.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground"
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="mobileActiveTab"
                      className="absolute inset-0 bg-primary rounded-xl -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.div>
                <span
                  className={`text-xs font-medium transition-smooth ${isActive(item.path) ? "text-primary" : "text-muted-foreground"
                    }`}
                >
                  {item.name}
                </span>
              </Link>
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile Top Header (Logo only) */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="md:hidden fixed top-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-b border-border shadow-soft"
      >
        <div className="flex items-center justify-center py-3">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden shadow-medium">
              <img src={logoCard} alt="Riddhi Siddhi" className="w-full h-full object-cover" width="40" height="40" />
            </div>
            <div>
              <div className="font-heading font-semibold text-base text-primary leading-tight">
                Riddhi Siddhi Dental Hospital
              </div>
            </div>
          </Link>
        </div>
      </motion.header>
    </>
  );
};

export default Navbar;
