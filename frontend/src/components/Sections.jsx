import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { RevealHeading, FadeUp } from "./Reveal";

const EASE = [0.76, 0, 0.24, 1];

// Light page hero for inner pages
export function PageHero({ eyebrow, lines, accentLine, sub, testId = "page-hero" }) {
  return (
    <section data-testid={testId} className="relative overflow-hidden pt-40 pb-16 md:pb-24 bg-warm">
      <div className="pointer-events-none absolute -top-10 right-10 h-72 w-72 rounded-full bg-seafoam/40 blur-3xl" />
      <div className="pointer-events-none absolute top-40 -left-20 h-64 w-64 rounded-full bg-cadet/15 blur-3xl" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
        {eyebrow && (
          <FadeUp>
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-cadet mb-6">{eyebrow}</p>
          </FadeUp>
        )}
        <h1 className="font-heading font-extrabold tracking-tighter text-charcoal text-5xl md:text-7xl leading-[0.95] max-w-5xl">
          <RevealHeading lines={lines} />
          {accentLine && (
            <span className="block overflow-hidden pb-[0.12em]">
              <motion.span
                className="block text-cadet italic"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 1, ease: EASE, delay: lines.length * 0.12 }}
              >
                {accentLine}
              </motion.span>
            </span>
          )}
        </h1>
        {sub && (
          <FadeUp delay={0.3}>
            <p className="mt-8 max-w-2xl text-graphite text-lg md:text-xl leading-relaxed">{sub}</p>
          </FadeUp>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, className = "" }) {
  return (
    <FadeUp className={className}>
      {eyebrow && <p className="text-xs font-medium tracking-[0.2em] uppercase text-cadet mb-4">{eyebrow}</p>}
      <h2 className="font-heading font-bold tracking-tight text-charcoal text-4xl md:text-5xl leading-tight max-w-3xl">
        {title}
      </h2>
    </FadeUp>
  );
}

export function DarkCTA({ title, body, label = "Start a project", to = "/contact", testId = "cta-section" }) {
  return (
    <section data-testid={testId} className="relative overflow-hidden bg-midnight text-warm grain">
      <div className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-cadet/15 blur-3xl" />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 py-24 md:py-32 flex flex-col lg:flex-row lg:items-end justify-between gap-10">
        <div className="max-w-2xl">
          <FadeUp>
            <h2 className="font-heading font-extrabold tracking-tighter leading-[0.95] text-4xl md:text-6xl">{title}</h2>
          </FadeUp>
          {body && (
            <FadeUp delay={0.1}>
              <p className="mt-6 text-warm/70 text-lg leading-relaxed">{body}</p>
            </FadeUp>
          )}
        </div>
        <FadeUp delay={0.15}>
          <Link
            to={to}
            data-testid={`${testId}-btn`}
            className="group inline-flex items-center gap-3 rounded-full bg-cadet px-8 py-5 text-base font-heading font-semibold text-midnight transition-colors duration-300 hover:bg-warm whitespace-nowrap"
          >
            {label}
            <ArrowUpRight size={20} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
