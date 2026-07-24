import { motion } from "framer-motion";

// Rotating circular text badge. Brand-inline.
export default function CircularText({
  text = "SB CREATIVES · CREATIVE STUDIO · ",
  size = 130,
  className = "",
  duration = 22,
  color = "currentColor",
  reverse = false,
}) {
  const id = `ct-${Math.random().toString(36).slice(2, 8)}`;
  const r = 42;
  return (
    <motion.div
      aria-hidden
      className={className}
      style={{ width: size, height: size }}
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <path id={id} d={`M50,50 m-${r},0 a${r},${r} 0 1,1 ${r * 2},0 a${r},${r} 0 1,1 -${r * 2},0`} />
        </defs>
        <text fontSize="7.2" fontWeight="600" letterSpacing="1.5" fill={color} style={{ fontFamily: "Manrope, sans-serif", textTransform: "uppercase" }}>
          <textPath href={`#${id}`} startOffset="0">
            {text}
          </textPath>
        </text>
      </svg>
    </motion.div>
  );
}
