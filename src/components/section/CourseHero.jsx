import { motion } from "framer-motion";
import { fadeUp, staggerContainer, tapeIn } from "../../utils/animation";

export default function CourseHero() {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      {/* dotted texture */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* drifting glow blobs */}
      <motion.div
        animate={{ x: [0, 16, 0], y: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-orange/15 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -14, 0], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-blue/15 blur-3xl"
      />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <motion.div variants={staggerContainer(0.12)} initial="hidden" animate="visible">
          <motion.span
            variants={tapeIn}
            custom={-2}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="inline-block -rotate-2 rounded-md bg-yellow px-4 py-1.5 font-hand text-lg text-ink shadow-[3px_4px_0_rgba(0,0,0,0.25)] cursor-default"
          >
            50+ Live Projects
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={0.1}
            className="mt-6 font-display font-extrabold text-cream text-[2.1rem] leading-[1.15] sm:text-5xl lg:text-6xl sm:leading-[1.08]"
          >
            Explore. Learn. Build.
            <br />
            Your Career Starts <span className="text-orange">Here.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="mt-5 max-w-md mx-auto text-cream/60 text-base sm:text-lg leading-relaxed"
          >
            Industry-ready courses designed to turn learners into
            job-ready professionals.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}