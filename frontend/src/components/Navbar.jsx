import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { LOGO_URL } from "../content/site";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/insights", label: "Insights" },
  { to: "/about", label: "About" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isDarkTop = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // On the home hero (dark) when not scrolled, use light text
  const onDark = isDarkTop && !scrolled;

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,padding] duration-500 ${
        scrolled
          ? "bg-warm/85 backdrop-blur-xl border-b border-cloud py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 flex items-center justify-between">
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-3 group">
          <img
            src={LOGO_URL}
            alt="SB Creatives"
            className={`h-11 w-auto md:h-12 transition-all duration-300 ${
              onDark ? "brightness-0 invert" : ""
            }`}
          />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              data-testid={`nav-${l.label.toLowerCase()}`}
              className={({ isActive }) =>
                `relative px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                  isActive
                    ? onDark ? "text-warm" : "text-charcoal"
                    : onDark ? "text-warm/70 hover:text-warm" : "text-graphite hover:text-charcoal"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className={`absolute inset-0 rounded-full ${onDark ? "bg-white/10" : "bg-seafoam/60"}`}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">{l.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            data-testid="nav-contact-cta"
            className={`hidden md:inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-semibold transition-colors duration-300 ${
              onDark
                ? "bg-cadet text-midnight hover:bg-warm"
                : "bg-charcoal text-warm hover:bg-cadet hover:text-midnight"
            }`}
          >
            Start a project
            <ArrowUpRight size={16} />
          </Link>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full ${
              onDark ? "bg-cadet text-midnight" : "bg-charcoal text-warm"
            }`}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
            className="md:hidden overflow-hidden bg-warm border-b border-cloud"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {[...LINKS, { to: "/contact", label: "Contact" }].map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  data-testid={`mobile-nav-${l.label.toLowerCase()}`}
                  className="py-3 text-2xl font-heading font-bold text-charcoal border-b border-cloud last:border-0"
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
