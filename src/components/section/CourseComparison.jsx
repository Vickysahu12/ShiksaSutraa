import { motion } from "framer-motion";
import { PiCheckCircleDuotone } from "react-icons/pi";
import { courseComparison } from "../../data/siteData";
import { fadeUp, revealViewport, staggerContainer } from "../../utils/animation";

export default function CourseComparison() {
  return (
    <section className="bg-cream pb-20 sm:pb-24">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="text-center"
        >
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
            Which Course Fits <span className="text-orange">Your Goal?</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-10 overflow-x-auto rounded-2xl border border-ink/8 bg-white shadow-[4px_5px_0_rgba(11,29,58,0.06)]"
        >
          <table className="w-full min-w-[560px] text-left">
            <thead>
              <tr className="border-b border-ink/8">
                <th className="p-4 text-sm font-display font-bold text-ink/70">Goal</th>
                <th className="p-4 text-sm font-display font-bold text-ink">Bootcamp</th>
                <th className="p-4 text-sm font-display font-bold text-ink/70">Self-Paced</th>
                <th className="p-4 text-sm font-display font-bold text-ink/70">Free Masterclass</th>
              </tr>
            </thead>
            <tbody>
              {courseComparison.map((row, i) => (
                <motion.tr
                  key={row.goal}
                  variants={fadeUp}
                  custom={i * 0.06}
                  className="border-b border-ink/5 last:border-0"
                >
                  <td className="p-4 text-sm font-semibold text-ink/70">{row.goal}</td>
                  <td className="p-4 text-sm text-ink bg-orange/5">
                    <span className="flex items-center gap-1.5">
                      <PiCheckCircleDuotone className="text-orange shrink-0" />
                      {row.bootcamp}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-ink/60">{row.selfPaced}</td>
                  <td className="p-4 text-sm text-ink/60">{row.masterclass}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}