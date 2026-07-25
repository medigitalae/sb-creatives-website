import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { PageHero, DarkCTA } from "../components/Sections";
import { FadeUp } from "../components/Reveal";
import { INSIGHTS } from "../content/insights";
import SEO from "../components/SEO";

export default function Insights() {
  const [featured, ...rest] = INSIGHTS;
  return (
    <div data-testid="insights-page">
      <SEO 
        title="Insights & Articles — SB Creatives" 
        description="Practical articles on brand consistency, digital decisions, retail experiences and the way creative work moves from strategy into execution." 
      />
      <PageHero
        eyebrow="Insights"
        lines={["Useful thinking for", "brands that want to"]}
        accentLine="grow with clarity."
        sub="Practical articles on brand consistency, digital decisions, retail experiences and the way creative work moves from strategy into execution."
      />

      <section className="pb-8 bg-warm">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          <FadeUp>
            <Link to={`/insights/${featured.slug}`} data-testid={`article-${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-12 gap-8 rounded-2xl bg-midnight text-warm p-8 md:p-12 grain relative overflow-hidden">
              <div className="relative lg:col-span-8">
                <span className="text-xs uppercase tracking-widest text-cadet">{featured.readTime}</span>
                <h2 className="mt-4 font-heading font-extrabold tracking-tight text-3xl md:text-5xl leading-tight group-hover:text-cadet transition-colors duration-300">{featured.title}</h2>
                <p className="mt-5 max-w-2xl text-warm/70 text-lg leading-relaxed">{featured.excerpt}</p>
              </div>
              <div className="relative lg:col-span-4 flex lg:items-end lg:justify-end">
                <span className="inline-flex items-center gap-2 text-cadet font-heading font-semibold">
                  Read article
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-cadet text-midnight transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    <ArrowUpRight size={18} />
                  </span>
                </span>
              </div>
            </Link>
          </FadeUp>
        </div>
      </section>

      <section className="py-8 pb-24 md:pb-32 bg-warm">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {rest.map((a, i) => (
            <FadeUp key={a.slug} delay={i * 0.06}>
              <Link to={`/insights/${a.slug}`} data-testid={`article-${a.slug}`} className="group flex flex-col h-full rounded-2xl border border-cloud bg-warm p-8 transition-colors duration-300 hover:border-cadet">
                <span className="text-xs uppercase tracking-widest text-graphite">{a.readTime}</span>
                <h3 className="mt-4 font-heading font-bold text-charcoal text-xl md:text-2xl leading-snug group-hover:text-ocean transition-colors duration-300 flex-1">{a.title}</h3>
                <p className="mt-3 text-graphite text-[15px] leading-relaxed">{a.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-charcoal font-heading font-semibold text-sm">
                  Read article
                  <ArrowUpRight size={16} className="text-cadet transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      <DarkCTA
        title="Have an idea, brief or business challenge?"
        body="Share the brief with SB Creatives and we will help identify the right next step."
        label="Start a conversation"
      />
    </div>
  );
}
