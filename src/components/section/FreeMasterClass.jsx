import { motion } from "framer-motion";
import { PiGraduationCapDuotone, PiUsersThreeDuotone } from "react-icons/pi";
import { masterclassStats } from "../../data/siteData";
import { fadeUp, revealViewport, staggerContainer } from "../../utils/animation";

export default function FreeMasterClass() {
  return (
    <section id="masterclass" className="bg-cream px-5 sm:px-8 py-16">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="max-w-7xl mx-auto rounded-3xl bg-blue relative overflow-hidden px-6 sm:px-10 py-10 sm:py-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
      >
        {/* drifting glow blobs */}
        <motion.div
          animate={{ x: [0, -10, 0], y: [0, 10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-10 -top-10 w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-white/10"
        />
        <motion.div
          animate={{ x: [0, 8, 0], y: [0, -8, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -left-6 -bottom-10 w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-white/10"
        />

        <motion.div
          variants={fadeUp}
          whileHover={{ rotate: -8, scale: 1.06 }}
          transition={{ type: "spring", stiffness: 280, damping: 14 }}
          className="shrink-0 grid place-items-center w-16 h-16 rounded-2xl bg-white/15 text-cream text-3xl relative cursor-default"
        >
          <PiGraduationCapDuotone />
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.1}
          className="flex-1 text-center lg:text-left relative"
        >
          <p className="font-display font-extrabold text-lg sm:text-xl lg:text-2xl text-cream leading-snug">
            We offer a <span className="text-yellow">FREE Masterclass</span>{" "}
            before the launch of every course
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          className="flex gap-6 sm:gap-8 relative shrink-0"
        >
          {masterclassStats.map((s, i) => (
            <motion.div key={s.label} variants={fadeUp} custom={i * 0.08} className="text-center">
              <p className="font-display font-extrabold text-xl sm:text-2xl text-cream">{s.value}</p>
              <p className="text-[11px] sm:text-xs text-cream/70 max-w-[6rem] sm:max-w-[7rem]">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.a
          variants={fadeUp}
          custom={0.2}
          href="#"
          whileTap={{ scale: 0.96 }}
          className="relative shrink-0 w-full lg:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-yellow px-6 py-3.5 font-display font-semibold text-ink shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-0.5"
        >
          <PiUsersThreeDuotone className="text-lg" />
          <span className="text-sm sm:text-base">Notify Me for Next Masterclass</span>
        </motion.a>
      </motion.div>
    </section>
  );
}