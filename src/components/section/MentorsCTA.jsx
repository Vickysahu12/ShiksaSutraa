import { motion } from "framer-motion";
import { PiHandshakeDuotone } from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";
import { fadeUp, revealViewport, staggerContainer } from "../../utils/animation";

export default function MentorsCTA() {
  return (
    <section className="px-5 sm:px-8 pb-20 sm:pb-24">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="max-w-7xl mx-auto rounded-[2.5rem] bg-ink relative overflow-hidden px-6 sm:px-12 py-10 sm:py-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left"
      >
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:22px_22px]" />
        <motion.div
          animate={{ x: [0, -14, 0], y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-14 -left-14 w-48 h-48 rounded-full bg-orange/20 blur-2xl"
        />

        <motion.div variants={fadeUp} className="relative flex-1">
          <p className="font-display font-extrabold text-xl sm:text-2xl text-cream">
            Want to mentor with us?
          </p>
          <p className="mt-1.5 text-sm text-cream/60">
            Join our mission to upskill the next generation of tech professionals.
          </p>
        </motion.div>

        <motion.a
          variants={fadeUp}
          custom={0.1}
          href="/contact"
          className="group relative shrink-0 inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 font-display font-semibold text-cream shadow-[0_8px_24px_rgba(255,107,26,0.4)] transition-transform hover:-translate-y-0.5"
        >
          <PiHandshakeDuotone className="text-lg" />
          Apply Now
          <span className="grid place-items-center w-6 h-6 rounded-full bg-cream/20 transition-transform duration-300 group-hover:rotate-45">
            <FiArrowUpRight className="text-sm" />
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}