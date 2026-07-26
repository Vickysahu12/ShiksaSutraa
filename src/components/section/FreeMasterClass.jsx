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
        <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-white/10" />
        <div className="absolute -left-6 -bottom-10 w-40 h-40 rounded-full bg-white/10" />

        <motion.div variants={fadeUp} className="shrink-0 grid place-items-center w-16 h-16 rounded-2xl bg-white/15 text-cream text-3xl relative">
          <PiGraduationCapDuotone />
        </motion.div>

        <motion.div variants={fadeUp} custom={0.1} className="flex-1 text-center lg:text-left relative">
          <p className="font-display font-extrabold text-xl sm:text-2xl text-cream">
            We offer a <span className="text-yellow">FREE Masterclass</span>{" "}
            before the launch of every course
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.15}
          className="flex gap-8 relative"
        >
          {masterclassStats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display font-extrabold text-2xl text-cream">{s.value}</p>
              <p className="text-xs text-cream/70 max-w-[7rem]">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.a
          variants={fadeUp}
          custom={0.2}
          href="#"
          className="relative shrink-0 inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3.5 font-display font-semibold text-ink shadow-[0_8px_20px_rgba(0,0,0,0.15)] transition-transform hover:-translate-y-0.5"
        >
          <PiUsersThreeDuotone className="text-lg" />
          Notify Me for Next Masterclass
        </motion.a>
      </motion.div>
    </section>
  );
}
