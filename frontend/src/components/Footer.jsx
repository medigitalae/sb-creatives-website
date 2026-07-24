import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { CONTACT, FOOTER, LOGO_WHITE } from "../content/site";
import { SERVICES } from "../content/services";

export default function Footer() {
  const selectedWork = [
    { label: "PUMA SpeedCat", to: "/work/puma-speedcat" },
    { label: "On Cloud Footwear Wall", to: "/work/on-cloud-footwear-wall-concept" },
    { label: "NOX Dubai", to: "/work/nox-dubai" },
    { label: "Blu Chocolates", to: "/work/blu-chocolates" },
  ];

  return (
    <footer data-testid="footer" className="relative bg-midnight text-warm overflow-hidden grain">
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 pt-24 pb-10">
        {/* Closing CTA */}
        <div className="pb-16 border-b border-white/10">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-cadet mb-6">
            Let's make something worth noticing
          </p>
          <Link to="/contact" data-testid="footer-contact-link" className="group inline-flex items-start gap-4">
            <span className="font-heading font-extrabold tracking-tighter leading-[0.9] text-5xl md:text-7xl text-warm transition-colors duration-500 group-hover:text-cadet">
              Start a project
            </span>
            <ArrowUpRight className="mt-2 text-cadet transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2" size={40} />
          </Link>
          <p className="mt-6 max-w-xl text-warm/60 text-[15px] leading-relaxed">{FOOTER.closing}</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pt-16">
          <div className="col-span-2 lg:col-span-4">
            <img src={LOGO_WHITE} alt="SB Creatives" className="h-16 w-auto mb-6" />
            <p className="text-warm/60 text-[15px] leading-relaxed max-w-xs">{FOOTER.description}</p>
          </div>

          <div className="lg:col-span-2">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-graphite mb-5">Company</p>
            <ul className="space-y-3">
              {FOOTER.company.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-warm/70 hover:text-cadet transition-colors duration-300 text-[15px]">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-graphite mb-5">Services</p>
            <ul className="space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-warm/70 hover:text-cadet transition-colors duration-300 text-[15px]">{s.title}</Link>
                </li>
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
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-warm/50 text-sm">© {new Date().getFullYear()} {CONTACT.legal} Creative, digital, retail & production.</p>
          <div className="flex items-center gap-6">
            {FOOTER.legal.map((l) => (
              <Link key={l.to} to={l.to} className="text-warm/50 hover:text-cadet transition-colors duration-300 text-sm">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
