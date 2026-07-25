import { motion } from "framer-motion";
import { PageHero, DarkCTA, SectionHeading } from "../components/Sections";
import { FadeUp } from "../components/Reveal";
import CountUp from "../components/CountUp";
import { ABOUT, STATS } from "../content/site";
import { SERVICES } from "../content/services";
import SEO from "../components/SEO";

export default function About() {
  return (
    <div data-testid="about-page">
      <SEO 
        title="About Us — SB Creatives" 
        description="Learn about SB Creatives. Ideas become stronger when every part of the process connects. Discover our integrated team and 12+ years of craft." 
      />
      <PageHero
        eyebrow="The studio"
        lines={["Ideas become stronger", "when every part of the"]}
        accentLine="process connects."
        sub={ABOUT.heroBody}
      />

      {/* Intro */}
      <section className="py-16 md:py-24 bg-warm">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <FadeUp className="lg:col-span-5">
            <h2 className="font-heading font-bold tracking-tight text-charcoal text-3xl md:text-4xl leading-tight">{ABOUT.introTitle}</h2>
          </FadeUp>
          <FadeUp delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <p className="text-graphite text-lg md:text-xl leading-relaxed">{ABOUT.introBody}</p>
          </FadeUp>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-cloud/40 border-y border-cloud">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.06}>
              <CountUp value={s.value} className="font-heading font-extrabold text-charcoal text-5xl md:text-6xl tracking-tighter" />
              <p className="mt-3 text-graphite text-sm md:text-base">{s.label}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* What makes it different */}
      <section className="py-20 md:py-28 bg-warm">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          <SectionHeading eyebrow="What makes the approach different" title={ABOUT.differenceTitle} />
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ABOUT.differences.map((d, i) => (
              <FadeUp key={d.title} delay={i * 0.05}>
                <div className="rounded-2xl border border-cloud bg-warm p-8 h-full">
                  <span className="font-heading font-extrabold text-cadet text-2xl">0{i + 1}</span>
                  <h3 className="mt-4 font-heading font-bold text-charcoal text-xl">{d.title}</h3>
                  <p className="mt-3 text-graphite text-[15px] leading-relaxed">{d.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section data-testid="principles" className="py-20 md:py-28 bg-cloud/40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          <SectionHeading eyebrow="Principles" title="How we make decisions." />
          <div className="mt-12 border-t border-cloud">
            {ABOUT.principles.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.04}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 py-8 border-b border-cloud">
                  <span className="lg:col-span-1 font-heading font-extrabold text-cadet text-2xl">0{i + 1}</span>
                  <h3 className="lg:col-span-5 font-heading font-bold text-charcoal text-2xl md:text-3xl">{p.title}</h3>
                  <p className="lg:col-span-6 text-graphite text-lg leading-relaxed">{p.body}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28 bg-warm">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          <SectionHeading eyebrow="Process" title="Structured enough to stay clear. Flexible enough to fit the brief." />
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {ABOUT.process.map((p, i) => (
              <FadeUp key={p} delay={i * 0.06}>
                <div className="rounded-2xl border border-cloud bg-warm p-6 h-full">
                  <span className="font-heading font-extrabold text-cadet text-3xl tracking-tighter">0{i + 1}</span>
                  <p className="mt-4 font-heading font-semibold text-charcoal text-[15px] leading-snug">{p}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-24 bg-cloud/40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          <FadeUp>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-cadet mb-8">Capabilities</p>
          </FadeUp>
          <div className="flex flex-wrap gap-3">
            {SERVICES.map((s, i) => (
              <FadeUp key={s.slug} delay={i * 0.04}>
                <span className="inline-block rounded-full border border-charcoal/15 bg-warm px-6 py-3 font-heading font-semibold text-charcoal text-lg md:text-xl">{s.title}</span>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <DarkCTA
        title="Bring us the brief, even if it is still taking shape."
        body="We can help turn an early idea or complex requirement into a clear, practical plan."
        label="Start a project"
      />
    </div>
  );
}
