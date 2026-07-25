import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";
import { FadeUp } from "../components/Reveal";

const EASE = [0.76, 0, 0.24, 1];

export default function NotFound() {
  return (
    <div data-testid="not-found-page" className="bg-warm min-h-screen">
      <SEO 
        title="Page Not Found — SB Creatives" 
        description="The page you are looking for does not exist or has been moved." 
      />
      
      <section className="relative overflow-hidden pt-40 pb-24 md:pb-32 min-h-[80vh] flex flex-col justify-center">
        <div className="pointer-events-none absolute -top-10 -left-10 h-80 w-80 rounded-full bg-seafoam/40 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-cadet/10 blur-[100px]" />

        <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8">
              
              <FadeUp>
                <p className="text-xs font-medium tracking-[0.2em] uppercase text-cadet mb-6">
                  404 Error
                </p>
              </FadeUp>

              <h1 className="font-heading font-extrabold tracking-tighter text-charcoal text-5xl md:text-7xl leading-[0.92] mb-6">
                <span className="block overflow-hidden pb-[0.12em]">
                  <motion.span
                    className="block bg-gradient-to-r from-cadet via-ocean to-cadet bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, ease: EASE, delay: 0 }}
                  >
                    Looks like this idea
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-[0.12em]">
                  <motion.span
                    className="block text-charcoal"
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1, ease: EASE, delay: 0.12 }}
                  >
                    hasn't been built yet.
                  </motion.span>
                </span>
              </h1>
              
              <FadeUp delay={0.3}>
                <p className="mt-8 text-graphite text-lg leading-relaxed max-w-md mb-12">
                  The page you're looking for doesn't exist, has been moved, or is temporarily unavailable. 
                  Let's get you back to something that does exist.
                </p>
                
                <Link 
                  to="/" 
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-8 py-4 text-sm font-semibold text-warm transition-all duration-300 hover:bg-cadet hover:-translate-y-1 hover:shadow-lg"
                >
                  <ArrowLeft size={16} />
                  Return Home
                </Link>
              </FadeUp>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
