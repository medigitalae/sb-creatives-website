import { useState, useMemo } from "react";
import { PageHero, DarkCTA } from "../components/Sections";
import { FadeUp } from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS, WORK_FILTERS } from "../content/projects";
import SEO from "../components/SEO";

export default function Work() {
  const [active, setActive] = useState("All Work");

  const filtered = useMemo(
    () => (active === "All Work" ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div data-testid="work-page">
      <SEO 
        title="Our Work & Projects — SB Creatives" 
        description="Browse our portfolio of brand applications, digital transformations, and retail environments for ambitious businesses." 
      />
      <PageHero
        eyebrow="Selected work"
        lines={["Work shaped around", "real business and"]}
        accentLine="brand challenges."
        sub="Explore selected identity, campaign, digital, retail and production work delivered across different sectors and customer experiences."
      />

      <section className="pb-6 bg-warm">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          <FadeUp>
            <div className="flex flex-wrap gap-2">
              {WORK_FILTERS.map((f) => (
                <button
                  key={f}
                  data-testid={`filter-${f.replace(/[^a-z0-9]/gi, "-").toLowerCase()}`}
                  onClick={() => setActive(f)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 border ${
                    active === f
                      ? "bg-charcoal text-warm border-charcoal"
                      : "bg-transparent text-graphite border-cloud hover:border-charcoal hover:text-charcoal"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="pb-24 md:pb-32 pt-8 bg-warm">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
          {filtered.length === 0 ? (
            <p className="text-graphite text-lg py-20" data-testid="no-projects">No projects match this filter.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {filtered.map((p, i) => (
                <ProjectCard key={p.slug} project={p} index={i} />
              ))}
            </div>
          )}
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
