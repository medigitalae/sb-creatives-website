import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FadeUp } from "../components/Reveal";
import { DarkCTA } from "../components/Sections";
import { getArticle, INSIGHTS } from "../content/insights";
import SEO from "../components/SEO";

export default function Article() {
  const { slug } = useParams();
  const article = getArticle(slug);
  if (!article) return <Navigate to="/insights" replace />;

  const more = INSIGHTS.filter((a) => a.slug !== slug).slice(0, 2);

  return (
    <div data-testid="article-page">
      <SEO 
        title={`${article.title} — SB Creatives Insights`} 
        description={article.excerpt || `Read our insight on ${article.title} by SB Creatives.`} 
      />
      <section className="pt-32 md:pt-40 pb-8 bg-warm">
        <div className="mx-auto max-w-3xl px-6 md:px-8">
          <FadeUp>
            <Link to="/insights" className="inline-flex items-center gap-2 text-graphite hover:text-charcoal transition-colors duration-300 text-sm font-medium mb-8">
              <ArrowLeft size={16} /> All insights
            </Link>
          </FadeUp>
          <FadeUp>
            <span className="text-xs uppercase tracking-widest text-cadet">{article.readTime}</span>
            <h1 className="mt-4 font-heading font-extrabold tracking-tighter text-charcoal text-4xl md:text-6xl leading-[0.98]">{article.title}</h1>
            <p className="mt-6 text-graphite text-lg md:text-xl leading-relaxed">{article.excerpt}</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="mt-8 flex flex-wrap gap-2 pb-8 border-b border-cloud">
              {article.related.map((r) => (
                <span key={r} className="rounded-full bg-seafoam/40 px-4 py-1.5 text-xs font-medium text-midnight">{r}</span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <article className="pb-16 md:pb-24 bg-warm">
        <div className="mx-auto max-w-3xl px-6 md:px-8 space-y-10">
          {article.sections.map((s) => (
            <FadeUp key={s.heading}>
              <h2 className="font-heading font-bold text-charcoal text-2xl md:text-3xl mb-4">{s.heading}</h2>
              <p className="text-graphite text-lg leading-relaxed">{s.body}</p>
            </FadeUp>
          ))}
        </div>
      </article>

      <section className="pb-8 bg-warm">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-cadet mb-8">More insights</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {more.map((a) => (
              <Link key={a.slug} to={`/insights/${a.slug}`} className="group rounded-2xl border border-cloud bg-warm p-8 transition-colors duration-300 hover:border-cadet">
                <span className="text-xs uppercase tracking-widest text-graphite">{a.readTime}</span>
                <h3 className="mt-3 font-heading font-bold text-charcoal text-xl md:text-2xl leading-snug group-hover:text-ocean transition-colors duration-300">{a.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <DarkCTA
        title="Need help turning the thinking into a clear plan?"
        body="Share the brief with SB Creatives and we will help identify the right next step."
        label="Start a project"
      />
    </div>
  );
}
