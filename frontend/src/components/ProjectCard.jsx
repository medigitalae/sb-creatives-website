import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { FALLBACK_IMAGE } from "../content/projects";

export default function ProjectCard({ project, className = "", index = 0 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <motion.div
      ref={ref}
      data-testid={`project-card-${project.slug}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: index * 0.05 }}
      className={`group relative ${className}`}
    >
      <Link to={`/work/${project.slug}`} className="block">
        <div className="relative overflow-hidden rounded-2xl border border-cloud bg-white aspect-[4/3]">
          <motion.img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={(e) => {
              if (e.currentTarget.src !== FALLBACK_IMAGE) e.currentTarget.src = FALLBACK_IMAGE;
            }}
            style={{ y }}
            className="absolute inset-0 h-[116%] w-full object-cover -top-[8%] transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-midnight/50 via-transparent to-transparent opacity-70" />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className="inline-block rounded-full bg-warm/90 backdrop-blur px-3 py-1 text-xs font-medium text-charcoal">
              {project.category}
            </span>
          </div>
          <div className="absolute bottom-4 right-4 h-11 w-11 rounded-full bg-cadet flex items-center justify-center opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
            <ArrowUpRight size={18} className="text-midnight" />
          </div>
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-4">
          <div>
            <h3 className="font-heading font-bold text-charcoal text-xl md:text-2xl leading-tight">
              {project.title}
            </h3>
            <p className="text-graphite text-sm mt-1">{project.tag} · {project.client}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
