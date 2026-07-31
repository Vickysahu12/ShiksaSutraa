import { motion } from "framer-motion";
import { fadeUp, staggerContainer, tapeIn } from "../../utils/animation";

export default function MentorsHero() {
  return (
    <section className="relative overflow-hidden bg-cream py-20 sm:py-28">
      {/* subtle dotted texture — light version for cream bg */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(11,29,58,0.04)_1px,transparent_1px)] [background-size:20px_20px]" />

      <motion.div
        animate={{ x: [0, -14, 0], y: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-orange/10 blur-3xl"
      />

      <div className="relative max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <motion.div variants={staggerContainer(0.12)} initial="hidden" animate="visible">
          <motion.span
            variants={tapeIn}
            custom={-2}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="inline-block -rotate-2 rounded-md bg-yellow px-4 py-1.5 font-hand text-lg text-ink shadow-[3px_4px_0_rgba(0,0,0,0.25)] cursor-default"
          >
            Meet the Team
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={0.1}
            className="mt-6 font-display font-extrabold text-ink text-[1.9rem] leading-[1.2] sm:text-4xl lg:text-5xl sm:leading-[1.15]"
          >
            Learn from people who've{" "}
            <span className="text-orange">done the work.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="mt-5 max-w-md mx-auto text-ink/55 text-base sm:text-lg leading-relaxed"
          >
            Our mentors are industry leaders, builders, and educators who
            know how to teach.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}