import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { PageHero, DarkCTA } from "../components/Sections";
import { FadeUp } from "../components/Reveal";
import ServiceIllustration from "../components/ServiceIllustration";
import RelatedWork from "../components/RelatedWork";
import { getService, SERVICES, OFFERING_IMAGES } from "../content/services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <Navigate to="/services" replace />;

  const others = SERVICES.filter((s) => s.slug !== slug);

  return (
    <div data-testid="service-detail-page">
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

      {/* Related work for this service */}
      <RelatedWork serviceSlug={service.slug} eyebrow="Related work" title="Selected work in this service" />

      <DarkCTA title={service.ctaTitle} body={service.ctaBody} label={service.ctaLabel} />
    </div>
  );
}
