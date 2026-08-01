import { motion } from "framer-motion";
import { fadeUp, staggerContainer, tapeIn } from "../../utils/animation";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-20 sm:pt-24 pb-16 sm:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:20px_20px]" />
      <motion.div
        animate={{ x: [0, 16, 0], y: [0, 12, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-orange/15 blur-3xl"
      />

      <div className="relative max-w-2xl mx-auto px-5 sm:px-8 text-center">
        <motion.div variants={staggerContainer(0.12)} initial="hidden" animate="visible">
          <motion.span
            variants={tapeIn}
            custom={-2}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="inline-block -rotate-2 rounded-md bg-yellow px-4 py-1.5 font-hand text-lg text-ink shadow-[3px_4px_0_rgba(0,0,0,0.25)] cursor-default"
          >
            Let's talk
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={0.1}
            className="mt-6 font-display font-extrabold text-cream text-[2rem] leading-[1.15] sm:text-5xl sm:leading-[1.08]"
          >
            Get in <span className="text-orange">Touch</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="mt-5 max-w-md mx-auto text-cream/60 text-base sm:text-lg leading-relaxed"
          >
            Questions about a course, a mentor, or your career path? We're
            one message away.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}