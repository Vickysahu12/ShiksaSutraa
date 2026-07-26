import { motion } from "framer-motion";
import {
  PiUserPlusDuotone,
  PiChalkboardTeacherDuotone,
  PiHammerDuotone,
  PiBriefcaseDuotone,
} from "react-icons/pi";
import { journeySteps } from "../../data/SiteData";
import { fadeUp, revealViewport } from "../../utils/Animation";

const icons = [PiUserPlusDuotone, PiChalkboardTeacherDuotone, PiHammerDuotone, PiBriefcaseDuotone];

export default function LearningJourney() {
  return (
    <section className="bg-cream py-20 sm:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="text-center max-w-xl mx-auto"
        >
          <span className="font-hand text-2xl text-orange -rotate-1 inline-block">
            The roadmap
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mt-1">
            Your Learning Journey
          </h2>
          <p className="mt-3 text-ink/55">
            Four steps from "just enrolled" to "hired" — no fluff in between.
          </p>
        </motion.div>

        {/* Desktop: horizontal roadmap with a scroll-drawn dashed line */}
        <div className="hidden lg:block relative mt-20">
          <div className="absolute left-[12.5%] right-[12.5%] top-8 h-0 border-t-2 border-dashed border-ink/20" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={revealViewport}
            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
            style={{ transformOrigin: "left" }}
            className="absolute left-[12.5%] right-[12.5%] top-8 h-0 border-t-2 border-dashed border-orange"
          />

          <div className="relative grid grid-cols-4 gap-8">
            {journeySteps.map((step, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={revealViewport}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={revealViewport}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                        delay: 0.35 + i * 0.25,
                      }}
                      className="grid place-items-center w-16 h-16 rounded-full bg-ink text-cream text-2xl shadow-[0_10px_24px_rgba(11,29,58,0.2)]"
                    >
                      <Icon />
                    </motion.span>
                    <span className="absolute -bottom-1.5 -right-1.5 grid place-items-center w-6 h-6 rounded-full bg-orange text-cream text-[11px] font-display font-bold border-2 border-cream">
                      {i + 1}
                    </span>
                  </div>
                  <p className="mt-5 font-display font-bold text-ink">{step.title}</p>
                  <p className="mt-2 text-sm text-ink/55 leading-relaxed max-w-[15rem]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile & tablet: vertical roadmap */}
        <div className="lg:hidden relative mt-14">
          <div className="absolute left-8 top-2 bottom-2 w-0 border-l-2 border-dashed border-ink/20" />
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={revealViewport}
            transition={{ duration: 1.4, ease: [0.65, 0, 0.35, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-8 top-2 bottom-2 w-0 border-l-2 border-dashed border-orange"
          />

          <div className="relative space-y-10">
            {journeySteps.map((step, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={revealViewport}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-5 items-start"
                >
                  <div className="relative shrink-0">
                    <span className="grid place-items-center w-16 h-16 rounded-full bg-ink text-cream text-2xl shadow-[0_10px_24px_rgba(11,29,58,0.2)]">
                      <Icon />
                    </span>
                    <span className="absolute -bottom-1.5 -right-1.5 grid place-items-center w-6 h-6 rounded-full bg-orange text-cream text-[11px] font-display font-bold border-2 border-cream">
                      {i + 1}
                    </span>
                  </div>
                  <div className="pt-2.5">
                    <p className="font-display font-bold text-ink">{step.title}</p>
                    <p className="mt-1.5 text-sm text-ink/55 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}