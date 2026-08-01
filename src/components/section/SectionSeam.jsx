import { motion } from "framer-motion";
import { revealViewport } from "../../utils/animation";

/**
 * Thin connective tick used between About sections.
 * Reuses the dashed-orange thread from AboutMilestones so the page
 * reads as one continuous story rather than stacked, disconnected blocks.
 */
export default function SectionSeam({ dark = false }) {
  return (
    <div className="relative h-10 sm:h-12 flex items-center justify-center" aria-hidden="true">
      <div className={`h-full w-0 border-l-2 border-dashed ${dark ? "border-cream/15" : "border-ink/15"}`} />
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={revealViewport}
        transition={{ type: "spring", stiffness: 260, damping: 16 }}
        className="absolute w-2 h-2 rounded-full bg-orange"
      />
    </div>
  );
}