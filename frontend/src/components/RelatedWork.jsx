import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FadeUp } from "./Reveal";
import ProjectCard from "./ProjectCard";
import { getProjectsByService } from "../content/projects";
import { getService } from "../content/services";

export default function RelatedWork({ serviceSlug, excludeSlug, title, eyebrow = "Related work", max = 3 }) {
  const projects = getProjectsByService(serviceSlug)
    .filter((p) => p.slug !== excludeSlug)
    .slice(0, max);

  if (projects.length === 0) return null;

  const service = getService(serviceSlug);
  const heading = title || `${service ? service.title : "Related"} projects`;

  return (
    <section data-testid="related-work" className="py-16 md:py-24 bg-cloud/40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <FadeUp>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-cadet mb-4">{eyebrow}</p>
            <h2 className="font-heading font-bold tracking-tight text-charcoal text-3xl md:text-4xl leading-tight">{heading}</h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Link to="/work" className="group inline-flex items-center gap-2 text-charcoal font-heading font-semibold whitespace-nowrap">
              View all work
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-charcoal text-warm transition-colors duration-300 group-hover:bg-cadet group-hover:text-midnight">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </FadeUp>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
