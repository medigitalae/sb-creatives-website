import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageHero, DarkCTA } from "../components/Sections";
import { FadeUp } from "../components/Reveal";
import ServiceIllustration from "../components/ServiceIllustration";
import { SERVICES } from "../content/services";
import SEO from "../components/SEO";

export default function Services() {
  return (
    <div data-testid="services-page">
      <SEO 
        title="Our Services — SB Creatives" 
        description="Explore our services including Brand & Creative, Digital & Web, Retail & Spatial Design, Print & Merchandise, and 3D Printing Solutions." 
      />
      <PageHero
        eyebrow="Services"
        lines={["Connected capabilities", "for brands that need"]}
        accentLine="ideas to move."
        sub="From identity and campaigns to digital platforms, retail environments, print and specialist production, we bring the right capabilities together around the brief."
      />

      <section className="pb-8 bg-warm">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          <FadeUp>
            <div className="rounded-2xl border border-cloud bg-cloud/40 p-8 md:p-10">
              <h2 className="font-heading font-bold text-charcoal text-2xl md:text-3xl tracking-tight">Start with one need. Build around the real objective.</h2>
              <p className="mt-4 max-w-3xl text-graphite text-lg leading-relaxed">
                You do not need to select every service before speaking with us. Come with a clear brief, an early-stage idea or a business problem. We will help define the right scope and identify which capabilities should work together.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-warm">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 space-y-6">
          {SERVICES.map((s, i) => (
            <FadeUp key={s.slug} delay={i * 0.04}>
              <Link
                to={`/services/${s.slug}`}
                data-testid={`service-link-${s.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 items-center rounded-2xl border border-cloud bg-warm p-8 md:p-10 transition-colors duration-300 hover:border-cadet hover:bg-seafoam/15"
              >
                <div className="lg:col-span-2 flex items-center gap-4">
                  <div className="h-20 w-20">
                    <ServiceIllustration name={s.illustration} />
                  </div>
                </div>
                <div className="lg:col-span-3">
                  <span className="font-heading font-semibold text-graphite text-sm">{s.index}</span>
                  <h3 className="font-heading font-bold text-charcoal text-3xl md:text-4xl tracking-tight transition-transform duration-300 group-hover:translate-x-1">{s.title}</h3>
                </div>
                <p className="lg:col-span-5 text-graphite text-[15px] md:text-base leading-relaxed">{s.cardBlurb}</p>
                <div className="lg:col-span-2 flex lg:justify-end">
                  <span className="inline-flex items-center gap-2 text-charcoal font-heading font-semibold text-sm">
                    Explore
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-charcoal text-warm transition-colors duration-300 group-hover:bg-cadet group-hover:text-midnight">
                      <ArrowUpRight size={16} />
                    </span>
                  </span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      <DarkCTA
        title="Not sure where the project fits?"
        body="That is normal. Share the objective and the current stage of the work. We will recommend a practical starting point without forcing the brief into a predefined package."
        label="Talk to the team"
      />
    </div>
  );
}
