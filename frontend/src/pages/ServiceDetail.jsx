import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowUpRight, Layers, Droplet, Zap, Maximize } from "lucide-react";
import { PageHero, DarkCTA } from "../components/Sections";
import { FadeUp } from "../components/Reveal";
import ServiceIllustration from "../components/ServiceIllustration";
import RelatedWork from "../components/RelatedWork";
import { getService, SERVICES, OFFERING_IMAGES } from "../content/services";
import SEO from "../components/SEO";
import SmartQRPromo from "../components/SmartQRPromo";

const ICON_MAP = {
  Layers: Layers,
  Droplet: Droplet,
  Zap: Zap,
  Maximize: Maximize
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <Navigate to="/services" replace />;

  const others = SERVICES.filter((s) => s.slug !== slug);

  return (
    <div data-testid="service-detail-page">
      <SEO 
        title={`${service.title} Services — SB Creatives`} 
        description={service.heroBody || `Learn more about our ${service.title} services at SB Creatives.`} 
      />
      <PageHero
        eyebrow={`Services · ${service.index}`}
        lines={[service.heroHeadline]}
        sub={service.heroBody}
      />

      {/* Illustration + where we help */}
      <section className="pb-8 bg-warm">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <FadeUp className="lg:col-span-4">
            <div className="rounded-2xl border border-cloud bg-cloud/40 p-10 flex items-center justify-center">
              <div className="h-48 w-48">
                <ServiceIllustration name={service.illustration} />
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.1} className="lg:col-span-8">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-cadet mb-6">{service.whereWeHelpTitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
              {service.whereWeHelp.map((w, i) => (
                <div key={i} className="flex items-start gap-3 py-3 border-b border-cloud">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cadet shrink-0" />
                  <span className="text-charcoal text-[15px] leading-relaxed">{w}</span>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Technologies Section (conditionally rendered) */}
      {service.technologies && (
        <section className="py-16 md:py-24 bg-cloud/20 border-t border-b border-cloud">
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
            <FadeUp>
              <div className="max-w-3xl mb-16">
                <h2 className="font-heading font-bold tracking-tight text-charcoal text-3xl md:text-4xl mb-6">Our 3D Printing Arsenal</h2>
                <p className="text-graphite text-lg leading-relaxed">{service.technologyIntro}</p>
              </div>
            </FadeUp>
            <div className="space-y-0">
              {service.technologies.map((tech, i) => {
                const Icon = ICON_MAP[tech.icon] || Check;
                return (
                  <FadeUp key={tech.name} delay={0.1}>
                    <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start border-t border-cloud py-12 md:py-16 transition-colors duration-500 hover:bg-white/40 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-16 lg:px-16">
                      
                      <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="h-16 w-16 rounded-2xl bg-seafoam/40 flex items-center justify-center text-ocean shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:bg-ocean group-hover:text-seafoam">
                          <Icon size={32} strokeWidth={1.5} />
                        </div>
                        <div>
                          <h3 className="font-heading font-extrabold text-charcoal text-2xl md:text-3xl mb-2 tracking-tight">{tech.name}</h3>
                          <p className="text-cadet font-semibold tracking-wide text-sm uppercase">{tech.subtitle}</p>
                        </div>
                      </div>
                      
                      <div className="lg:col-span-8">
                        <p className="text-charcoal text-lg md:text-xl leading-relaxed mb-10 font-medium">
                          {tech.body}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                          <div className="relative pl-6 border-l-2 border-seafoam">
                            <p className="text-xs font-bold uppercase tracking-wider text-ocean mb-3">
                              Why we love it
                            </p>
                            <p className="text-graphite text-[15px] leading-relaxed">
                              {tech.love}
                            </p>
                          </div>
                          
                          <div className="relative pl-6 border-l-2 border-cloud">
                            <p className="text-xs font-bold uppercase tracking-wider text-charcoal mb-3">
                              Perfect for
                            </p>
                            <p className="text-graphite text-[15px] leading-relaxed">
                              {tech.perfect}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Offerings */}
      <section className="py-16 md:py-24 bg-warm">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          <FadeUp>
            <h2 className="font-heading font-bold tracking-tight text-charcoal text-3xl md:text-4xl mb-12">What we offer</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.offerings.map((o, i) => (
              <FadeUp key={o.title} delay={(i % 2) * 0.08}>
                <div className="group h-full overflow-hidden rounded-2xl border border-cloud bg-warm transition-colors duration-300 hover:border-cadet">
                  <div className="relative aspect-[16/9] overflow-hidden bg-cloud/60">
                    <img
                      src={(OFFERING_IMAGES[service.slug] || [])[i]}
                      alt={o.title}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/30 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-heading font-bold text-charcoal text-xl md:text-2xl">{o.title}</h3>
                    <p className="mt-3 text-graphite text-[15px] leading-relaxed">{o.body}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {o.outputs.map((out) => (
                        <span key={out} className="inline-flex items-center gap-1.5 rounded-full bg-seafoam/40 px-3 py-1.5 text-xs font-medium text-midnight">
                          <Check size={12} className="text-ocean" />
                          {out}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 bg-cloud/40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          <FadeUp>
            <h2 className="font-heading font-bold tracking-tight text-charcoal text-3xl md:text-4xl mb-12">Working process</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {service.process.map((p, i) => (
              <FadeUp key={p} delay={i * 0.06}>
                <div className="rounded-2xl border border-cloud bg-warm p-6 h-full">
                  <span className="font-heading font-extrabold text-cadet text-3xl tracking-tighter">0{i + 1}</span>
                  <p className="mt-4 font-heading font-semibold text-charcoal text-lg leading-snug">{p}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 md:py-24 bg-warm">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          <FadeUp>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-cadet mb-8">Explore other services</p>
          </FadeUp>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {others.map((s, i) => (
              <FadeUp key={s.slug} delay={i * 0.04}>
                <Link to={`/services/${s.slug}`} className="group flex items-center justify-between rounded-2xl border border-cloud bg-warm p-6 transition-colors duration-300 hover:border-cadet">
                  <span className="font-heading font-semibold text-charcoal text-sm md:text-base">{s.title}</span>
                  <ArrowUpRight size={18} className="text-graphite transition-all duration-300 group-hover:text-cadet group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Conditionally render Smart QR Promo for the Printing & Merchandise page */}
      {service.slug === "printing-merchandise" && <SmartQRPromo />}

      {/* Related work for this service */}
      <RelatedWork serviceSlug={service.slug} eyebrow="Related work" title="Selected work in this service" />

      <DarkCTA title={service.ctaTitle} body={service.ctaBody} label={service.ctaLabel} />
    </div>
  );
}
