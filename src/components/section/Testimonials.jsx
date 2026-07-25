import { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { testimonials } from "../../data/siteData";
import { fadeUp, revealViewport } from "../../utils/animation";

function TCard({ t }) {
  return (
    <div className="shrink-0 w-[19rem] sm:w-80 rounded-2xl bg-white border border-ink/8 p-6 flex flex-col">
      <div className="flex gap-0.5 text-yellow text-sm">
        {Array.from({ length: t.rating }).map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>
      <p className="mt-3 text-sm text-ink/65 leading-relaxed flex-1">
        "{t.quote}"
      </p>
      <div className="mt-5 flex items-center gap-3">
        <span className="grid place-items-center w-10 h-10 rounded-full bg-orange/10 font-display font-bold text-orange text-sm shrink-0">
          {t.name.split(" ").map((w) => w[0]).join("")}
        </span>
        <div className="leading-tight">
          <p className="font-display font-bold text-sm text-ink">{t.name}</p>
          <p className="text-xs text-ink/45">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [paused, setPaused] = useState(false);

  const rowA = testimonials.slice(0, 4);
  const rowB = testimonials.slice(4, 8);
  const loopA = [...rowA, ...rowA];
  const loopB = [...rowB, ...rowB];

  return (
    <section
      className="bg-cream py-20 sm:py-28"
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="text-center max-w-xl mx-auto"
        >
          <span className="font-hand text-2xl text-orange -rotate-1 inline-block">
            In their words
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mt-1">
            What Our Students Say
          </h2>
          <p className="mt-3 text-ink/55 text-sm">
            1,000+ students, real feedback. Hover to pause and read.
          </p>
        </motion.div>
      </div>

      {/* Row A — scrolls left */}
      <div
        className="mt-12 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex gap-5 w-max animate-marquee-left"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {loopA.map((t, i) => (
            <TCard key={`a-${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Row B — scrolls right, opposite direction for visual rhythm */}
      <div
        className="mt-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex gap-5 w-max animate-marquee-right"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {loopB.map((t, i) => (
            <TCard key={`b-${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-6 py-3 font-display font-semibold text-sm text-ink hover:border-orange hover:text-orange transition-colors"
          >
            View All Stories <FiArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}