import { motion } from "framer-motion";
import { aboutMilestones } from "../../data/siteData";
import { fadeUp, revealViewport } from "../../utils/animation";
import SectionSeam from "./SectionSeam";

export default function AboutMilestones() {
  return (
    <>
      <SectionSeam />
      <section className="bg-cream py-16 sm:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="text-center max-w-xl mx-auto mb-14 sm:mb-16"
          >
            <span className="font-hand text-2xl text-orange -rotate-1 inline-block">
              How far we've come
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink mt-1">
              Our Milestones
            </h2>
          </motion.div>

          {/* Desktop: horizontal roadmap */}
          <div className="hidden lg:block relative">
            <div className="absolute left-[12.5%] right-[12.5%] top-8 h-0 border-t-2 border-dashed border-ink/20" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={revealViewport}
              transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              style={{ transformOrigin: "left" }}
              className="absolute left-[12.5%] right-[12.5%] top-8 h-0 border-t-2 border-dashed border-orange"
            />

            <div className="relative grid grid-cols-4 gap-8">
              {aboutMilestones.map((step, i) => (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={revealViewport}
                  transition={{ duration: 0.45, delay: 0.25 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={revealViewport}
                    whileHover={{ scale: 1.1, y: -4 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.3 + i * 0.15 }}
                    className="grid place-items-center w-16 h-16 rounded-full bg-ink text-cream font-display font-extrabold text-sm shadow-[0_10px_24px_rgba(11,29,58,0.2)] cursor-default"
                  >
                    {step.year}
                  </motion.span>
                  <p className="mt-5 font-display font-bold text-ink">{step.title}</p>
                  <p className="mt-2 text-sm text-ink/55 leading-relaxed max-w-[15rem]">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile & tablet: vertical roadmap */}
          <div className="lg:hidden relative">
            <div className="absolute left-8 top-2 bottom-2 w-0 border-l-2 border-dashed border-ink/20" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={revealViewport}
              transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              style={{ transformOrigin: "top" }}
              className="absolute left-8 top-2 bottom-2 w-0 border-l-2 border-dashed border-orange"
            />

            <div className="relative space-y-10">
              {aboutMilestones.map((step, i) => (
                <motion.div
                  key={step.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={revealViewport}
                  transition={{ duration: 0.45, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-5 items-start"
                >
                  <span className="shrink-0 grid place-items-center w-16 h-16 rounded-full bg-ink text-cream font-display font-extrabold text-sm shadow-[0_10px_24px_rgba(11,29,58,0.2)]">
                    {step.year}
                  </span>
                  <div className="pt-2.5">
                    <p className="font-display font-bold text-ink">{step.title}</p>
                    <p className="mt-1.5 text-sm text-ink/55 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}