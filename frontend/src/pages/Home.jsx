import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";
import Marquee from "react-fast-marquee";
import { ArrowUpRight, ArrowRight, Layers } from "lucide-react";
import { RevealHeading, FadeUp } from "../components/Reveal";
import { DarkCTA, SectionHeading } from "../components/Sections";
import ProjectCard from "../components/ProjectCard";
import ServiceIllustration from "../components/ServiceIllustration";
import CountUp from "../components/CountUp";
import CircularText from "../components/CircularText";
import { SERVICES } from "../content/services";
import { PROJECTS } from "../content/projects";
import { HOME, HOW_WE_WORK, INDUSTRIES, STATS } from "../content/site";
import { INSIGHTS } from "../content/insights";

const EASE = [0.76, 0, 0.24, 1];

function DarkHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Mouse parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const p1x = useTransform(sx, [-0.5, 0.5], [-30, 30]);
  const p1y = useTransform(sy, [-0.5, 0.5], [-24, 24]);
  const p2x = useTransform(sx, [-0.5, 0.5], [24, -24]);
  const p2y = useTransform(sy, [-0.5, 0.5], [18, -18]);
  const p3x = useTransform(sx, [-0.5, 0.5], [-14, 14]);

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const Sparkle = ({ className, size = 24, delay = 0 }) => (
    <motion.span
      aria-hidden
      className={`absolute text-cadet ${className}`}
      style={{ fontSize: size }}
      animate={{ rotate: [0, 90, 0], opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay }}
    >
      ✦
    </motion.span>
  );

  return (
    <section
      ref={ref}
      data-testid="hero"
      onMouseMove={onMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-midnight text-warm grain"
    >
      {/* Grid lines */}
      <div className="absolute inset-0 hero-grid" />
      {/* Moving gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob-1 absolute top-[-10%] right-[5%] h-[500px] w-[500px] rounded-full bg-cadet/25 blur-[120px]" />
        <div className="blob-2 absolute bottom-[-15%] left-[-5%] h-[460px] w-[460px] rounded-full bg-ocean/25 blur-[120px]" />
        <div className="absolute top-[30%] left-[40%] h-[300px] w-[300px] rounded-full bg-seafoam/10 blur-[100px]" />
      </div>

      {/* Floating decorative shapes (mouse parallax) */}
      <motion.div style={{ x: p1x, y: p1y }} className="pointer-events-none absolute top-[18%] right-[12%] hidden md:block">
        <div className="h-24 w-24 rounded-full border border-cadet/40" />
      </motion.div>
      <motion.div style={{ x: p2x, y: p2y }} className="pointer-events-none absolute bottom-[24%] right-[26%] hidden md:block">
        <div className="h-4 w-4 rounded-full bg-cadet" />
      </motion.div>
      <motion.div style={{ x: p3x }} className="pointer-events-none absolute top-[30%] left-[6%] hidden lg:block">
        <div className="h-16 w-16 rounded-2xl border border-white/15 rotate-12" />
      </motion.div>
      <Sparkle className="top-[24%] left-[46%] hidden md:block" size={20} />
      <Sparkle className="bottom-[30%] left-[14%] hidden md:block" size={28} delay={1.5} />
      <Sparkle className="top-[16%] right-[38%] hidden lg:block" size={16} delay={3} />

      {/* Rotating badge */}
      <div className="pointer-events-none absolute bottom-[16%] right-[8%] hidden lg:flex items-center justify-center">
        <CircularText className="text-cadet/70" size={128} text="SB CREATIVES · CREATIVE · DIGITAL · RETAIL · PRINT · 3D · " />
        <span className="absolute h-3 w-3 rounded-full bg-cadet" />
      </div>

      <motion.div style={{ y: textY, opacity: fade }} className="relative mx-auto max-w-[1600px] w-full px-6 md:px-12 lg:px-16 pt-32 pb-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-8">
          <span className="h-2 w-2 rounded-full bg-cadet animate-pulse" />
          <span className="text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-cadet">{HOME.eyebrow}</span>
        </motion.div>

        <h1 className="font-heading font-extrabold tracking-tighter text-warm text-[12vw] leading-[0.9] md:text-[8vw] lg:text-[7vw] max-w-6xl">
          <RevealHeading lines={["Creative that", "moves brands"]} testId="hero-headline" />
          <span className="block overflow-hidden pb-[0.12em]">
            <motion.span
              className="block text-cadet italic"
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, ease: EASE, delay: 0.24 }}
            >
              forward.
            </motion.span>
          </span>
        </h1>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <FadeUp delay={0.5} className="lg:col-span-6 lg:col-start-7">
            <p className="text-warm/70 text-lg md:text-xl leading-relaxed max-w-xl">{HOME.positioning}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/contact" data-testid="hero-cta-primary" className="group inline-flex items-center gap-2 rounded-full bg-cadet px-7 py-4 text-sm font-heading font-semibold text-midnight transition-colors duration-300 hover:bg-warm">
                Start a project
                <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link to="/work" data-testid="hero-cta-secondary" className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-heading font-semibold text-warm transition-colors duration-300 hover:border-cadet hover:text-cadet">
                Explore our work
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </motion.div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 py-5 flex items-center justify-between">
          <span className="text-warm/50 text-sm">{HOME.supportLine}</span>
          <motion.span
            className="hidden md:block text-warm/40 text-xs tracking-[0.2em] uppercase"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll to explore
          </motion.span>
        </div>
      </div>
    </section>
  );
}

function Marq() {
  return (
    <section data-testid="marquee" className="py-8 md:py-12 bg-warm border-b border-cloud overflow-hidden">
      <Marquee speed={40} gradient={false} autoFill>
        {SERVICES.map((s, i) => (
          <div key={s.slug} className="flex items-center">
            <span className={`mx-8 font-heading font-extrabold tracking-tighter text-5xl md:text-7xl ${i % 2 === 0 ? "text-charcoal" : "text-stroke-cadet"}`}>{s.title}</span>
            <span className="text-cadet text-4xl md:text-6xl">✦</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
}

function Positioning() {
  return (
    <section className="relative py-20 md:py-32 bg-warm overflow-hidden">
      <motion.div
        aria-hidden
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-40 top-1/2 -translate-y-1/2 h-[520px] w-[520px] rounded-full border border-dashed border-cadet/25"
      >
        <span className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-cadet" />
        <span className="absolute top-1/2 -right-2 h-3 w-3 -translate-y-1/2 rounded-full bg-ocean" />
      </motion.div>
      <motion.div
        aria-hidden
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="pointer-events-none absolute -right-24 top-1/2 -translate-y-1/2 h-[360px] w-[360px] rounded-full border border-seafoam/50"
      />
      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <FadeUp className="lg:col-span-4">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-cadet">Connected by design</p>
        </FadeUp>
        <FadeUp delay={0.1} className="lg:col-span-8">
          <p className="font-heading font-semibold text-charcoal text-2xl md:text-4xl leading-snug tracking-tight">
            {HOME.positioningBody}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

function ServicesBlock() {
  return (
    <section data-testid="services-preview" className="py-20 md:py-32 bg-cloud/40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
        <SectionHeading eyebrow="What we do" title={HOME.serviceIntroTitle} />
        <FadeUp delay={0.1}>
          <p className="mt-6 max-w-2xl text-graphite text-lg leading-relaxed">{HOME.serviceIntroBody}</p>
        </FadeUp>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <FadeUp key={s.slug} delay={i * 0.06}>
              <Link
                to={`/services/${s.slug}`}
                data-testid={`service-card-${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-cloud bg-warm p-8 transition-colors duration-300 hover:border-cadet"
              >
                <div className="flex items-start justify-between">
                  <div className="h-20 w-20 -ml-2">
                    <ServiceIllustration name={s.illustration} />
                  </div>
                  <span className="font-heading font-semibold text-graphite text-sm">{s.index}</span>
                </div>
                <h3 className="mt-6 font-heading font-bold text-charcoal text-2xl tracking-tight">{s.title}</h3>
                <p className="mt-3 text-graphite text-[15px] leading-relaxed flex-1">{s.cardBlurb}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-charcoal font-heading font-semibold text-sm">
                  Explore service
                  <ArrowUpRight size={16} className="text-cadet transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            </FadeUp>
          ))}

          {/* Speciality feature card */}
          <FadeUp delay={0.36}>
            <div className="flex h-full flex-col justify-between rounded-2xl bg-midnight text-warm p-8 grain relative overflow-hidden">
              <div className="relative">
                <Layers className="text-cadet" size={28} />
                <h3 className="mt-6 font-heading font-bold text-2xl tracking-tight leading-snug">{HOME.specialityTitle}</h3>
                <p className="mt-3 text-warm/70 text-[15px] leading-relaxed">{HOME.specialityBody}</p>
              </div>
              <Link to="/services/retail-spatial-design" className="relative mt-8 inline-flex items-center gap-2 text-cadet font-heading font-semibold text-sm">
                Explore Retail & Spatial Design
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function SelectedWork() {
  const featured = PROJECTS.filter((p) =>
    ["puma-speedcat", "on-cloud-footwear-wall-concept", "nox-dubai", "blu-chocolates"].includes(p.slug)
  );
  const spans = ["lg:col-span-7", "lg:col-span-5", "lg:col-span-5", "lg:col-span-7"];
  return (
    <section data-testid="selected-work" className="py-20 md:py-32 bg-warm">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <SectionHeading eyebrow="Selected work" title="Work created to be noticed, understood and remembered." />
          <FadeUp delay={0.1}>
            <Link to="/work" data-testid="see-all-work" className="group inline-flex items-center gap-2 text-charcoal font-heading font-semibold whitespace-nowrap">
              View all work
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-charcoal text-warm transition-colors duration-300 group-hover:bg-cadet group-hover:text-midnight">
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </FadeUp>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} className={spans[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowWeWork() {
  return (
    <section data-testid="how-we-work" className="py-20 md:py-32 bg-cloud/40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
        <SectionHeading eyebrow="How we work" title="Clear thinking. Connected execution." />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-cloud rounded-2xl overflow-hidden border border-cloud">
          {HOW_WE_WORK.map((s, i) => (
            <FadeUp key={s.step} delay={i * 0.06} className="bg-warm p-8 md:p-10">
              <span className="font-heading font-extrabold text-cadet text-4xl tracking-tighter">{s.step}</span>
              <h3 className="mt-5 font-heading font-bold text-charcoal text-xl md:text-2xl">{s.title}</h3>
              <p className="mt-3 text-graphite text-[15px] leading-relaxed">{s.body}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

function Integrated() {
  return (
    <section className="py-20 md:py-32 bg-warm">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <FadeUp className="lg:col-span-5">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-cadet mb-4">Integrated capabilities</p>
          <h2 className="font-heading font-bold tracking-tight text-charcoal text-3xl md:text-4xl leading-tight">{HOME.integratedTitle}</h2>
          <p className="mt-6 text-graphite text-lg leading-relaxed">{HOME.integratedBody}</p>
        </FadeUp>
        <FadeUp delay={0.15} className="lg:col-span-6 lg:col-start-7">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-graphite mb-6">Built for ambitious teams at every stage</p>
          <div className="flex flex-wrap gap-3">
            {INDUSTRIES.map((ind) => (
              <span key={ind} className="inline-block rounded-full border border-cloud bg-warm px-5 py-2.5 text-charcoal text-sm font-medium">{ind}</span>
            ))}
          </div>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <CountUp value={s.value} className="font-heading font-extrabold text-charcoal text-4xl tracking-tighter" />
                <p className="mt-2 text-graphite text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

function InsightsPreview() {
  return (
    <section data-testid="insights-preview" className="py-20 md:py-32 bg-cloud/40">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading eyebrow="Insights" title="Useful thinking for brands that want to grow with clarity." />
          <FadeUp delay={0.1}>
            <Link to="/insights" className="group inline-flex items-center gap-2 text-charcoal font-heading font-semibold whitespace-nowrap">
              View insights
              <ArrowRight size={18} className="text-cadet transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeUp>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {INSIGHTS.map((a, i) => (
            <FadeUp key={a.slug} delay={i * 0.05}>
              <Link to={`/insights/${a.slug}`} className="group flex flex-col rounded-2xl border border-cloud bg-warm p-8 transition-colors duration-300 hover:border-cadet h-full">
                <span className="text-xs uppercase tracking-widest text-graphite">{a.readTime}</span>
                <h3 className="mt-4 font-heading font-bold text-charcoal text-xl md:text-2xl leading-snug group-hover:text-ocean transition-colors duration-300">{a.title}</h3>
                <p className="mt-3 text-graphite text-[15px] leading-relaxed">{a.excerpt}</p>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div data-testid="home-page">
      <DarkHero />
      <Marq />
      <Positioning />
      <ServicesBlock />
      <SelectedWork />
      <HowWeWork />
      <Integrated />
      <InsightsPreview />
      <DarkCTA
        title="Have an idea, brief or business challenge?"
        body={HOME.finalCtaBody}
        label="Start a conversation"
      />
    </div>
  );
}
