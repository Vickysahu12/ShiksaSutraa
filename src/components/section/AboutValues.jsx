import { motion } from "framer-motion";
import {
  PiHammerDuotone,
  PiUsersFourDuotone,
  PiTargetDuotone,
  PiHandshakeDuotone,
} from "react-icons/pi";
import { FiArrowUpRight } from "react-icons/fi";
import { aboutValues } from "../../data/siteData";
import { fadeUp, revealViewport, staggerContainer } from "../../utils/animation";
import SectionSeam from "./SectionSeam";

const icons = [PiHammerDuotone, PiUsersFourDuotone, PiTargetDuotone, PiHandshakeDuotone];
// rotation now scoped to sm+ only — on a single mobile column, tilted cards just look crooked,
// not playful, so they sit flat until there's a grid for the tilt to read against
const rotations = ["sm:-rotate-1", "sm:rotate-1", "sm:-rotate-1", "sm:rotate-1"];

export default function AboutValues() {
  return (
    <>
      <SectionSeam />
      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="text-center max-w-xl mx-auto mb-10 sm:mb-12"
          >
            <span className="font-hand text-2xl text-orange -rotate-1 inline-block">
              What we stand for
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink mt-1">
              Our Values
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          >
            {aboutValues.map((item, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  custom={i * 0.08}
                  className={`group relative h-full ${rotations[i % rotations.length]} transition-all duration-300 hover:-translate-y-1.5 hover:rotate-0`}
                >
                  {/* corner arrow — direct child of outer div, never clipped */}
                  <button
                    aria-hidden="true"
                    tabIndex={-1}
                    className="absolute -right-2.5 -top-2.5 z-10 grid h-8 w-8 place-items-center rounded-full bg-orange text-cream shadow-[0_4px_12px_rgba(255,107,26,0.4)] transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110"
                  >
                    <FiArrowUpRight className="text-sm" />
                  </button>

                  {/* inner card — only this has overflow-hidden, clips the shimmer not the button */}
                  <div className="relative flex flex-col h-full rounded-2xl border border-ink/8 bg-white p-6 overflow-hidden shadow-[4px_5px_0_rgba(11,29,58,0.08)] transition-shadow duration-300 group-hover:shadow-[6px_10px_0_rgba(255,107,26,0.15)]">
                    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-orange/6 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                    <motion.span
                      whileHover={{ rotate: -10, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 12 }}
                      className="relative grid place-items-center w-14 h-14 rounded-2xl bg-ink/5 text-ink text-2xl transition-colors group-hover:bg-orange group-hover:text-cream"
                    >
                      <Icon />
                    </motion.span>

                    <p className="relative mt-5 font-display font-bold text-ink text-base">{item.title}</p>
                    <p className="relative mt-1.5 text-sm text-ink/50 leading-relaxed flex-1">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}