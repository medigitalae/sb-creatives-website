import { motion } from "framer-motion";

const EASE = [0.76, 0, 0.24, 1];

// Line-by-line masked reveal. Pass an array of strings (lines).
export const RevealHeading = ({ lines, className = "", delay = 0, testId }) => {
  return (
    <span className={className} data-testid={testId}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.12em]">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: EASE, delay: delay + i * 0.12 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export const FadeUp = ({ children, delay = 0, className = "", y = 40 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.8, ease: EASE, delay }}
  >
    {children}
  </motion.div>
);

export const StaggerReveal = ({ children, className = "" }) => (
  <motion.div
    className={className}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.08 } },
    }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = "" }) => (
  <motion.div
    className={className}
    variants={{
      hidden: { opacity: 0, y: 24 },
      show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
    }}
  >
    {children}
  </motion.div>
);
