import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { fadeUp, revealViewport, staggerContainer } from "../../utils/animation";

export default function CTASection() {
  return (
    <section className="px-5 sm:px-8 pb-20 sm:pb-28">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="max-w-7xl mx-auto rounded-[2.5rem] bg-ink relative overflow-hidden px-6 sm:px-14 py-14 sm:py-16 text-center"
      >
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:22px_22px]" />
        <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-orange/20 blur-2xl" />
        <div className="absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-blue/20 blur-2xl" />

        <motion.span
          variants={fadeUp}
          className="relative font-hand text-2xl text-yellow -rotate-1 inline-block"
        >
          Your career glow-up starts here
        </motion.span>

        <motion.h2
          variants={fadeUp}
          custom={0.1}
          className="relative mt-2 font-display font-extrabold text-3xl sm:text-5xl text-cream max-w-2xl mx-auto leading-tight"
        >
          Ready to build skills that actually get you hired?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={0.2}
          className="relative mt-4 text-cream/60 max-w-md mx-auto"
        >
          Join 1,000+ students already learning with mentors who've done the
          work, not just taught the theory.
        </motion.p>

        <motion.div variants={fadeUp} custom={0.3} className="relative mt-8">
          <a
            href="#programs"
            className="group inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 font-display font-semibold text-cream shadow-[0_10px_30px_rgba(255,107,26,0.4)] transition-transform hover:-translate-y-0.5"
          >
            Explore Courses
            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
