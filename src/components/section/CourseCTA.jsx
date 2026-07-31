import { motion } from "framer-motion";
import { PiChatsCircleDuotone } from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";
import { fadeUp, revealViewport, staggerContainer } from "../../utils/animation";

export default function CourseCTA() {
  return (
    <section className="px-5 sm:px-8 pb-20 sm:pb-28">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="max-w-7xl mx-auto rounded-[2.5rem] bg-ink relative overflow-hidden px-6 sm:px-12 py-10 sm:py-12 flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left"
      >
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:22px_22px]" />
        <motion.div
          animate={{ x: [0, 14, 0], y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-14 -right-14 w-48 h-48 rounded-full bg-blue/20 blur-2xl"
        />

        <motion.span
          variants={fadeUp}
          whileHover={{ rotate: -8, scale: 1.08 }}
          transition={{ type: "spring", stiffness: 280, damping: 14 }}
          className="relative shrink-0 grid place-items-center w-16 h-16 rounded-2xl bg-white/10 text-cream text-3xl cursor-default"
        >
          <PiChatsCircleDuotone />
        </motion.span>

        <motion.div variants={fadeUp} custom={0.1} className="relative flex-1">
          <p className="font-display font-extrabold text-xl sm:text-2xl text-cream">
            Not sure which course is right for you?
          </p>
          <p className="mt-1.5 text-sm text-cream/60">
            Get personalized guidance and a roadmap tailored to your goals.
          </p>
        </motion.div>

        <motion.a
          variants={fadeUp}
          custom={0.2}
          href="/contact"
          className="group relative shrink-0 inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 font-display font-semibold text-cream shadow-[0_8px_24px_rgba(255,107,26,0.4)] transition-transform hover:-translate-y-0.5"
        >
          Talk to a Mentor
          <span className="grid place-items-center w-6 h-6 rounded-full bg-cream/20 transition-transform duration-300 group-hover:rotate-45">
            <FiArrowUpRight className="text-sm" />
          </span>
        </motion.a>
      </motion.div>
    </section>
  );
}