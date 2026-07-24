import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, ChevronDown, ArrowRight } from "lucide-react";
import { LOGO_COLOR, LOGO_WHITE } from "../content/site";
import { SERVICES } from "../content/services";
import ServiceIllustration from "./ServiceIllustration";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services", mega: true },
  { to: "/work", label: "Work" },
  { to: "/insights", label: "Insights" },
  { to: "/about", label: "About" },
];

const EASE = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
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
    setMega(false);
    setMobileServices(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMega(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onDark = isDarkTop && !scrolled && !mega;
  const solid = scrolled || mega;

  return (
    <header
      data-testid="navbar"
      onMouseLeave={() => setMega(false)}
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,padding] duration-500 ${
        solid ? "bg-warm/90 backdrop-blur-xl border-b border-cloud py-3" : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 flex items-center justify-between">
        <Link to="/" data-testid="nav-logo" className="flex items-center gap-3 group" onMouseEnter={() => setMega(false)}>
          <img src={onDark ? LOGO_WHITE : LOGO_COLOR} alt="SB Creatives" className="h-12 w-auto md:h-14 transition-opacity duration-300" />
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <div key={l.to} onMouseEnter={() => (l.mega ? setMega(true) : setMega(false))}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                data-testid={l.mega ? "services-mega-trigger" : `nav-${l.label.toLowerCase()}`}
                className={({ isActive }) =>
                  `relative flex items-center gap-1 px-5 py-2 text-sm font-medium rounded-full transition-colors duration-300 ${
                    isActive || (l.mega && mega)
                      ? onDark ? "text-warm" : "text-charcoal"
                      : onDark ? "text-warm/70 hover:text-warm" : "text-graphite hover:text-charcoal"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {(isActive || (l.mega && mega)) && (
                      <motion.span
                        layoutId="nav-pill"
                        className={`absolute inset-0 rounded-full ${onDark ? "bg-white/10" : "bg-seafoam/60"}`}
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{l.label}</span>
                    {l.mega && (
                      <ChevronDown size={14} className={`relative z-10 transition-transform duration-300 ${mega ? "rotate-180" : ""}`} />
                    )}
                  </>
                )}
              </NavLink>
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            data-testid="nav-contact-cta"
            onMouseEnter={() => setMega(false)}
            className={`hidden md:inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-heading font-semibold transition-colors duration-300 ${
              onDark ? "bg-cadet text-midnight hover:bg-warm" : "bg-charcoal text-warm hover:bg-cadet hover:text-midnight"
            }`}
          >
            Start a project
            <ArrowUpRight size={16} />
          </Link>

          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden inline-flex h-11 w-11 items-center justify-center rounded-full ${onDark ? "bg-cadet text-midnight" : "bg-charcoal text-warm"}`}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Desktop mega menu */}
      <AnimatePresence>
        {mega && (
          <motion.div
            data-testid="services-mega-panel"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="hidden md:block absolute left-0 right-0 top-full"
          >
            <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 pt-3 pb-6">
              <div className="rounded-3xl border border-cloud bg-warm/95 backdrop-blur-xl overflow-hidden shadow-[0_24px_60px_-24px_rgba(36,51,59,0.25)]">
                <div className="grid grid-cols-12">
                  {/* Promo column */}
                  <div className="col-span-4 relative bg-midnight text-warm p-8 grain overflow-hidden">
                    <div className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-cadet/20 blur-3xl" />
                    <p className="relative text-xs font-medium tracking-[0.2em] uppercase text-cadet mb-4">Our services</p>
                    <h3 className="relative font-heading font-extrabold tracking-tight text-3xl leading-tight">
                      Five disciplines, one integrated studio.
                    </h3>
                    <p className="relative mt-4 text-warm/70 text-[15px] leading-relaxed">
                      Engage one specialist service or a connected team, built around your objective.
                    </p>
                    <Link
                      to="/services"
                      data-testid="mega-view-all"
                      className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-cadet px-6 py-3 text-sm font-heading font-semibold text-midnight transition-colors duration-300 hover:bg-warm"
                    >
                      View all services
                      <ArrowRight size={16} />
                    </Link>
                  </div>

                  {/* Services grid */}
                  <div className="col-span-8 grid grid-cols-2 gap-1 p-3">
                    {SERVICES.map((s, i) => (
                      <motion.div
                        key={s.slug}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, ease: EASE, delay: 0.05 + i * 0.04 }}
                      >
                        <Link
                          to={`/services/${s.slug}`}
                          data-testid={`mega-service-${s.slug}`}
                          className="group flex items-start gap-4 rounded-2xl p-4 transition-colors duration-300 hover:bg-seafoam/30"
                        >
                          <div className="h-14 w-14 shrink-0 rounded-xl bg-cloud/50 p-1.5">
                            <ServiceIllustration name={s.illustration} />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <span className="font-heading font-bold text-charcoal text-[15px]">{s.title}</span>
                              <ArrowUpRight size={14} className="text-cadet opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                            </div>
                            <p className="mt-1 text-graphite text-[13px] leading-snug line-clamp-2">{s.tagline}</p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                    {/* filler cell to balance 5 items in 2 cols */}
                    <div className="flex items-center justify-between rounded-2xl p-4 bg-cloud/30">
                      <span className="text-graphite text-[13px] leading-snug">Not sure which fits? We'll help scope it.</span>
                      <Link to="/contact" className="ml-3 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-charcoal text-warm transition-colors duration-300 hover:bg-cadet hover:text-midnight">
                        <ArrowUpRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="md:hidden overflow-hidden bg-warm border-b border-cloud"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              <NavLink to="/" end data-testid="mobile-nav-home" className="py-3 text-2xl font-heading font-bold text-charcoal border-b border-cloud">Home</NavLink>

              {/* Services accordion */}
              <div className="border-b border-cloud">
                <button
                  onClick={() => setMobileServices((v) => !v)}
                  data-testid="mobile-services-toggle"
                  className="w-full flex items-center justify-between py-3 text-2xl font-heading font-bold text-charcoal"
                >
                  Services
                  <ChevronDown size={22} className={`transition-transform duration-300 ${mobileServices ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServices && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <div className="pb-4 pl-1 flex flex-col">
                        <Link to="/services" className="py-2 text-graphite font-medium">All services</Link>
                        {SERVICES.map((s) => (
                          <Link key={s.slug} to={`/services/${s.slug}`} data-testid={`mobile-mega-${s.slug}`} className="py-2 text-charcoal font-heading font-semibold">
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {[{ to: "/work", label: "Work" }, { to: "/insights", label: "Insights" }, { to: "/about", label: "About" }, { to: "/contact", label: "Contact" }].map((l) => (
                <NavLink key={l.to} to={l.to} data-testid={`mobile-nav-${l.label.toLowerCase()}`} className="py-3 text-2xl font-heading font-bold text-charcoal border-b border-cloud last:border-0">
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
