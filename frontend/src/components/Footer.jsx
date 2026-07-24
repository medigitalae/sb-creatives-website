import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { CONTACT, FOOTER, LOGO_WHITE } from "../content/site";
import { SERVICES } from "../content/services";
import CircularText from "./CircularText";

function FooterLink({ to, label, testId }) {
  return (
    <li>
      <Link to={to} data-testid={testId} className="group inline-flex items-center gap-1.5 text-warm/70 hover:text-warm transition-colors duration-300 text-[15px]">
        <span className="relative">
          {label}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-cadet transition-all duration-300 group-hover:w-full" />
        </span>
        <ArrowUpRight size={13} className="text-cadet opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
      </Link>
    </li>
  );
}

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer data-testid="footer" className="relative bg-midnight text-warm overflow-hidden grain">
      {/* Funky accent blobs */}
      <div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-cadet/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-ocean/15 blur-[120px]" />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 pt-20 md:pt-28 pb-8">
        {/* Closing CTA */}
        <div className="pb-16 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-cadet mb-6">Let's make something worth noticing</p>
            <Link to="/contact" data-testid="footer-contact-link" className="group inline-flex items-start gap-4">
              <span className="font-heading font-extrabold tracking-tighter leading-[0.88] text-6xl md:text-8xl text-warm">
                Start a
                <br />
                <span className="text-stroke-cadet transition-colors duration-500 group-hover:text-cadet group-hover:[-webkit-text-stroke:0]">project.</span>
              </span>
              <span className="mt-2 inline-flex h-14 w-14 items-center justify-center rounded-full bg-cadet text-midnight transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                <ArrowUpRight size={28} />
              </span>
            </Link>
            <p className="mt-8 max-w-xl text-warm/60 text-[15px] leading-relaxed">{FOOTER.closing}</p>
          </div>

          {/* Rotating badge with logo mark */}
          <div className="relative hidden lg:flex items-center justify-center shrink-0">
            <CircularText className="text-cadet" size={190} duration={26} text="SB CREATIVES · KOCHI · INDIA · SINCE DAY ONE · " />
            <img src={LOGO_WHITE} alt="" aria-hidden className="absolute h-20 w-auto" />
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-16">
          <div className="col-span-2 lg:col-span-4">
            <img src={LOGO_WHITE} alt="SB Creatives" className="h-16 w-auto mb-6" />
            <p className="text-warm/60 text-[15px] leading-relaxed max-w-xs">{FOOTER.description}</p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-graphite mb-5">Company</p>
            <ul className="space-y-3">
              {FOOTER.company.map((l) => (
                <FooterLink key={l.to} to={l.to} label={l.label} />
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-graphite mb-5">Services</p>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <FooterLink key={s.slug} to={`/services/${s.slug}`} label={s.title} />
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-graphite mb-5">Reach us</p>
            <a href={`mailto:${CONTACT.email}`} data-testid="footer-email" className="block text-warm hover:text-cadet transition-colors duration-300 text-lg font-heading font-semibold mb-5">
              {CONTACT.email}
            </a>
            <p className="text-warm/70 text-[15px] leading-relaxed">
              {CONTACT.legal}
              <br />
              {CONTACT.addressLines.map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>
            <button onClick={scrollTop} data-testid="back-to-top" className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm font-heading font-semibold text-warm transition-colors duration-300 hover:border-cadet hover:text-cadet">
              Back to top
              <ArrowUp size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Giant marquee wordmark */}
      <div className="relative border-t border-white/10 py-6 overflow-hidden">
        <Marquee speed={30} gradient={false} autoFill>
          {["SB CREATIVES", "✦", "CREATIVE STUDIO", "✦"].map((t, i) => (
            <span key={i} className={`mx-6 font-heading font-extrabold tracking-tighter text-4xl md:text-6xl ${t === "✦" ? "text-cadet" : "text-white/[0.06]"}`} style={t !== "✦" ? { WebkitTextStroke: "1px rgba(255,255,255,0.15)" } : {}}>
              {t}
            </span>
          ))}
        </Marquee>
      </div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-warm/50 text-sm">© {new Date().getFullYear()} {CONTACT.legal} Creative, digital, retail & production.</p>
        <div className="flex items-center gap-6">
          {FOOTER.legal.map((l) => (
            <Link key={l.to} to={l.to} className="text-warm/50 hover:text-cadet transition-colors duration-300 text-sm">{l.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
