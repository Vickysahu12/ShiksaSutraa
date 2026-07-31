import { useState } from "react";
import { motion } from "framer-motion";
import { FiClock, FiMonitor, FiArrowUpRight } from "react-icons/fi";
import { courseCategories, coursesData } from "../../data/siteData";
import { fadeUp, revealViewport, staggerContainer } from "../../utils/animation";

const tagStyles = {
  upcoming: "bg-yellow text-ink",
  soon: "bg-blue text-cream",
  hot: "bg-orange text-cream",
};

const rotations = ["-rotate-1", "rotate-1", "-rotate-1", "rotate-1", "rotate-1", "-rotate-1"];

export default function CourseCatalog() {
  const [active, setActive] = useState("All Courses");

  const filtered =
    active === "All Courses"
      ? coursesData
      : coursesData.filter((c) => c.category === active);

  return (
    <section className="bg-cream py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Filter pills */}
        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="flex flex-wrap justify-center gap-3"
        >
          {courseCategories.map((cat) => (
            <motion.button
              key={cat}
              variants={fadeUp}
              onClick={() => setActive(cat)}
              whileTap={{ scale: 0.94 }}
              className={`rounded-full px-5 py-2.5 text-sm font-display font-semibold transition-all ${
                active === cat
                  ? "bg-orange text-cream shadow-[3px_4px_0_rgba(0,0,0,0.15)]"
                  : "bg-white text-ink/60 border border-ink/8 hover:border-orange/30"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          key={active}
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate="visible"
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((course, i) => (
            <motion.div
              key={course.id}
              variants={fadeUp}
              custom={i * 0.06}
              className={`group relative flex flex-col rounded-2xl border border-ink/8 bg-white p-6 overflow-hidden shadow-[4px_5px_0_rgba(11,29,58,0.08)] transition-all duration-300 ${rotations[i % rotations.length]} hover:-translate-y-1.5 hover:rotate-0 hover:shadow-[6px_10px_0_rgba(255,107,26,0.15)]`}
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-orange/6 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              <button
                aria-label={`View ${course.title}`}
                className="absolute -right-2.5 -top-2.5 grid h-8 w-8 place-items-center rounded-full bg-orange text-cream shadow-[0_4px_12px_rgba(255,107,26,0.4)] transition-transform duration-300 hover:rotate-45 hover:scale-110"
              >
                <FiArrowUpRight className="text-sm" />
              </button>

              <span
                className={`relative inline-block w-fit rounded-md px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${tagStyles[course.tagStyle]}`}
              >
                {course.tag}
              </span>

              <h3 className="relative mt-4 font-display font-bold text-ink text-lg leading-snug min-h-[3.4rem]">
                {course.title}
              </h3>
              <p className="relative mt-1.5 text-sm text-ink/50 leading-relaxed flex-1">
                {course.desc}
              </p>

              <div className="relative mt-4 flex flex-wrap gap-4 text-xs font-medium text-ink/50">
                <span className="flex items-center gap-1.5">
                  <FiClock className="text-orange" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <FiMonitor className="text-orange" />
                  {course.mode}
                </span>
              </div>

              <div className="relative mt-5 flex items-center gap-2">
                {course.originalPrice && (
                  <span className="text-sm text-ink/35 line-through">
                    {course.originalPrice}
                  </span>
                )}
                <span className="font-display font-extrabold text-xl text-ink">
                  {course.price}
                </span>
              </div>

              <button className="relative mt-5 w-full rounded-xl bg-ink py-3 font-display text-sm font-semibold text-cream transition-colors group-hover:bg-orange">
                {course.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}