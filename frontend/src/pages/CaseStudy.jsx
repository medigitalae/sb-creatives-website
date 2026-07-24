import { useParams, Navigate, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FadeUp } from "../components/Reveal";
import { DarkCTA } from "../components/Sections";
import { getProject, PROJECTS, FALLBACK_IMAGE } from "../content/projects";

export default function CaseStudy() {
  const { slug } = useParams();
  const project = getProject(slug);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  if (!project) return <Navigate to="/work" replace />;

  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <div data-testid="case-study-page">
      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 md:pt-36 bg-warm">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          <FadeUp>
            <Link to="/work" className="inline-flex items-center gap-2 text-graphite hover:text-charcoal transition-colors duration-300 text-sm font-medium mb-8">
              <ArrowLeft size={16} /> All work
            </Link>
          </FadeUp>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="rounded-full bg-seafoam/50 px-4 py-1.5 text-xs font-medium text-midnight">{project.category}</span>
            <span className="text-graphite text-sm">{project.tag}</span>
            <span className="text-graphite text-sm">· {project.year}</span>
          </div>
          <FadeUp>
            <h1 className="font-heading font-extrabold tracking-tighter text-charcoal text-5xl md:text-7xl leading-[0.95] max-w-4xl">{project.title}</h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-6 max-w-2xl text-graphite text-lg md:text-xl leading-relaxed">{project.excerpt}</p>
          </FadeUp>
        </div>

        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-cloud aspect-[16/9]">
            <motion.img
              src={project.image}
              alt={project.title}
              style={{ y: imgY }}
              onError={(e) => { if (e.currentTarget.src !== FALLBACK_IMAGE) e.currentTarget.src = FALLBACK_IMAGE; }}
              className="absolute inset-0 h-[120%] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-warm">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <FadeUp className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 space-y-8">
              <div>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-cadet mb-4">Client</p>
                <p className="font-heading font-bold text-charcoal text-2xl">{project.client}</p>
              </div>
              <div>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-cadet mb-4">Services</p>
                <ul className="space-y-2">
                  {project.services.map((s) => (
                    <li key={s} className="text-charcoal text-[15px] border-b border-cloud pb-2">{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeUp>

          <div className="lg:col-span-8 space-y-12">
            {[
              { h: "Project overview", b: project.overview },
              { h: "The brief", b: project.brief },
              { h: "Our approach", b: project.approach },
            ].map((blk) => (
              <FadeUp key={blk.h}>
                <h2 className="font-heading font-bold text-charcoal text-2xl md:text-3xl mb-4">{blk.h}</h2>
                <p className="text-graphite text-lg leading-relaxed">{blk.b}</p>
              </FadeUp>
            ))}

            <FadeUp>
              <h2 className="font-heading font-bold text-charcoal text-2xl md:text-3xl mb-6">What we delivered</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {project.delivered.map((d) => (
                  <div key={d} className="flex items-start gap-3 py-3 border-b border-cloud">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cadet shrink-0" />
                    <span className="text-charcoal text-[15px]">{d}</span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp>
              <div className="rounded-2xl bg-cloud/50 border border-cloud p-8 md:p-10">
                <h2 className="font-heading font-bold text-charcoal text-2xl md:text-3xl mb-4">The outcome</h2>
                <p className="text-graphite text-lg leading-relaxed">{project.outcome}</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Next project */}
      <section className="pb-4 bg-warm">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          <Link to={`/work/${next.slug}`} data-testid="next-project" className="group flex items-center justify-between rounded-2xl border border-cloud p-8 md:p-10 transition-colors duration-300 hover:border-cadet">
            <div>
              <p className="text-xs uppercase tracking-widest text-graphite mb-2">Next project</p>
              <p className="font-heading font-bold text-charcoal text-2xl md:text-3xl group-hover:text-ocean transition-colors duration-300">{next.title}</p>
            </div>
            <ArrowRight size={28} className="text-cadet transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      </section>

      <DarkCTA
        title="Planning a project with similar requirements?"
        body="Let us look at the brief and help shape the right creative, digital or production approach."
        label="Start a project"
      />
    </div>
  );
}
