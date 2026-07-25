import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SEO from "../components/SEO";

export default function NotFound() {
  return (
    <div data-testid="not-found-page" className="min-h-[80vh] bg-warm flex flex-col items-center justify-center px-6 text-center relative overflow-hidden">
      <SEO 
        title="Page Not Found — SB Creatives" 
        description="The page you are looking for does not exist or has been moved." 
      />
      
      {/* Decorative background element */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cadet/5 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <h1 className="font-heading font-extrabold text-[12rem] md:text-[18rem] leading-none tracking-tighter bg-gradient-to-r from-cadet via-ocean to-cadet bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient mb-4 md:mb-8">
          404
        </h1>
        
        <div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-charcoal mb-4">
            Looks like this idea hasn't been built yet.
          </h2>
          <p className="text-graphite text-lg max-w-md mx-auto mb-10">
            The page you're looking for doesn't exist, has been moved, or is temporarily unavailable.
          </p>
          
          <Link 
            to="/" 
            className="inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-8 py-4 text-sm font-semibold text-warm transition-all duration-300 hover:bg-cadet hover:-translate-y-1 hover:shadow-lg"
          >
            <ArrowLeft size={16} />
            Return Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
