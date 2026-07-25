import { motion } from "framer-motion";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { programs } from "../../data/siteData";
import { fadeUp, revealViewport, staggerContainer } from "../../utils/animation";

const tagStyles = {
  upcoming: "bg-yellow text-ink",
  soon: "bg-blue text-cream",
  hot: "bg-orange text-cream",
};

const rotations = ["-rotate-1", "rotate-1", "-rotate-1", "rotate-1"];

export default function PopularPrograms() {
  return (
    <section id="programs" className="bg-ink py-20 sm:py-28 relative overflow-hidden">
      {/* faint dotted texture */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <span className="font-hand text-2xl text-yellow rotate-1 inline-block">
              Pick your track
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-cream mt-1">
              Our Popular Programs
            </h2>
          </div>
          <a
            href="#"
            className="hidden sm:inline-flex items-center gap-1.5 font-display font-semibold text-cream/80 hover:text-orange transition-colors"
          >
            View All Programs <FiArrowRight />
          </a>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              variants={fadeUp}
              custom={i * 0.08}
              className={`group relative rounded-2xl bg-cream p-6 shadow-[6px_8px_0_rgba(0,0,0,0.25)] transition-transform duration-300 ${rotations[i]} hover:rotate-0 hover:-translate-y-2`}
            >
              <span
                className={`inline-block rounded-md px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${tagStyles[program.tagStyle]}`}
              >
                {program.tag}
              </span>

              <h3 className="mt-4 font-display font-bold text-lg text-ink leading-snug min-h-[3.4rem]">
                {program.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-ink/45">{program.meta}</p>

              <ul className="mt-4 space-y-2">
                {program.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink/65">
                    <FiCheck className="mt-0.5 shrink-0 text-orange" />
                    {f}
                  </li>
                ))}
              </ul>

              <button className="mt-6 w-full rounded-xl bg-ink py-3 font-display font-semibold text-sm text-cream transition-colors group-hover:bg-orange">
                {program.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center sm:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 font-display font-semibold text-cream/80"
          >
            View All Programs <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
