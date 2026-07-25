import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import { heroBadges } from "../../data/siteData";
import { fadeUp, staggerContainer, tapeIn } from "../../utils/animation";

// This is the full section background
import hero from "../../assets/images/hero.webp";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[92vh] flex items-center bg-ink"
    >
      {/* background photo */}
      <img
        src={hero}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-28 relative w-full">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          animate="visible"
          className="max-w-xl"
        >
          <motion.span
            variants={tapeIn}
            custom={-2}
            className="inline-block -rotate-2 rounded-md bg-yellow px-4 py-1.5 font-hand text-lg text-ink shadow-[3px_4px_0_rgba(0,0,0,0.25)]"
          >
            Practical Skills. Real Growth.
          </motion.span>

          <motion.h1
            variants={fadeUp}
            custom={0.1}
            className="mt-6 font-display font-extrabold text-black text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-[3.4rem]"
          >
            Learn Today,
            <br />
            <span className="relative inline-block text-orange">
              Lead Tomorrow.
              <svg
                viewBox="0 0 300 20"
                className="absolute left-0 -bottom-2 w-full h-4 text-orange"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 14C60 4 240 4 298 14"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="mt-6 max-w-md text-black/70 text-lg leading-relaxed"
          >
            Industry-relevant learning programs designed by experts to help
            you build a career that actually goes somewhere.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="mt-8 flex flex-wrap items-center gap-5"
          >
            <a
              href="#programs"
              className="group inline-flex items-center gap-2 rounded-full bg-orange px-7 py-3.5 font-display font-semibold text-cream shadow-[0_8px_24px_rgba(255,107,26,0.4)] transition-transform hover:-translate-y-0.5"
            >
              Explore Courses
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <button className="group inline-flex items-center gap-2 font-display font-semibold text-black">
              <span className="grid place-items-center w-11 h-11 rounded-full border-2 border-cream/25 transition-colors group-hover:border-orange group-hover:text-orange">
                <FiPlay />
              </span>
              Watch Video
            </button>
          </motion.div>

          {/* floating glass badges, sit on top of the photo like sticky notes */}
          <motion.div
            variants={staggerContainer(0.1, 0.4)}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap gap-3"
          >
            {heroBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                variants={tapeIn}
                custom={i % 2 === 0 ? -2 : 2}
                className="rounded-lg bg-cream/10 backdrop-blur-md border border-cream/15 px-4 py-2.5 text-xs sm:text-sm font-semibold text-black"
              >
                {badge.label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}