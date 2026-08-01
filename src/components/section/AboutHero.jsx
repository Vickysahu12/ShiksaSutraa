import { motion } from "framer-motion";
import { fadeUp, staggerContainer, tapeIn } from "../../utils/animation";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-20 sm:pt-28 pb-16 sm:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(11,29,58,0.04)_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* two ambient blobs instead of one, gives the hero a touch more depth without adding noise */}
      <motion.div
        animate={{ x: [0, -14, 0], y: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-orange/10 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-blue/10 blur-3xl hidden sm:block"
      />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <motion.div variants={staggerContainer(0.12)} initial="hidden" animate="visible">
          <motion.span
            variants={tapeIn}
            custom={-2}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="inline-block -rotate-2 rounded-md bg-yellow px-4 py-1.5 font-hand text-lg text-ink shadow-[3px_4px_0_rgba(0,0,0,0.25)] cursor-default"
          >
            Our story
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={0.1}
            className="mt-6 font-display font-extrabold text-ink text-[2rem] leading-[1.15] sm:text-5xl sm:leading-[1.08]"
          >
            Built by learners, <span className="text-orange">for learners.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="mt-5 max-w-md mx-auto text-ink/55 text-base sm:text-lg leading-relaxed"
          >
            We started ShikshaSutraa because we were tired of courses that
            taught theory and called it a career.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}