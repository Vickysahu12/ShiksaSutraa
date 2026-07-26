import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiCheck,
  FiArrowRight,
  FiArrowUpRight,
  FiX,
  FiClock,
  FiMapPin,
} from "react-icons/fi";

import { programs } from "../../data/siteData";
import { fadeUp, revealViewport, staggerContainer } from "../../utils/animation";

import EnrollmentModal from "./EnrollmentModal";

const tagStyles = {
  upcoming: "bg-yellow text-ink",
  soon: "bg-blue text-cream",
  hot: "bg-orange text-cream",
};

const rotations = ["-rotate-1", "rotate-1", "-rotate-1", "rotate-1"];

/* =========================================
   PROGRAM DETAIL MODAL
========================================= */

function DetailModal({ program, onClose, onPrebook }) {
  useEffect(() => {
    if (!program) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [program, onClose]);

  if (!program) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] overflow-y-auto bg-ink/60 backdrop-blur-sm"
      >
        <div className="flex min-h-full items-center justify-center p-5">
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{
              duration: 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-8 w-full max-w-lg rounded-2xl bg-cream p-7 shadow-2xl sm:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-ink/50 transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <FiX className="text-lg" />
            </button>

            {/* Tag */}
            <span
              className={`inline-block rounded-md px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${tagStyles[program.tagStyle]}`}
            >
              {program.tag}
            </span>

            {/* Title */}
            <h3 className="mt-4 pr-8 font-display text-2xl font-extrabold leading-snug text-ink">
              {program.title}
            </h3>

            {/* Meta */}
            <div className="mt-3 flex flex-wrap gap-4 text-xs font-medium text-ink/50">
              <span className="flex items-center gap-1.5">
                <FiClock className="text-orange" />
                {program.duration}
              </span>

              <span className="flex items-center gap-1.5">
                <FiMapPin className="text-orange" />
                {program.mode}
              </span>
            </div>

            {/* Overview */}
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              {program.overview}
            </p>

            {/* Features */}
            <p className="mt-6 font-display text-sm font-bold uppercase tracking-wide text-ink">
              What's included
            </p>

            <ul className="mt-3 space-y-2">
              {program.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-ink/65"
                >
                  <FiCheck className="mt-0.5 shrink-0 text-orange" />
                  {feature}
                </li>
              ))}
            </ul>

            {/* Curriculum */}
            <p className="mt-6 font-display text-sm font-bold uppercase tracking-wide text-ink">
              Curriculum breakdown
            </p>

            <ol className="mt-3 space-y-2.5">
              {program.curriculum.map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-3 text-sm text-ink/65"
                >
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-ink/8 text-[10px] font-bold text-ink">
                    {i + 1}
                  </span>

                  {step}
                </li>
              ))}
            </ol>

            {/* PREBOOK BUTTON */}
            <button
              onClick={() => {
                onClose();
                onPrebook(program);
              }}
              className="mt-7 w-full rounded-xl bg-orange py-3.5 font-display text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
            >
              {program.cta}
            </button>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* =========================================
   POPULAR PROGRAMS
========================================= */

export default function PopularPrograms() {
  const [selected, setSelected] = useState(null);
  const [prebookProgram, setPrebookProgram] = useState(null);

  return (
    <>
      <section
        id="programs"
        className="relative overflow-hidden bg-ink py-20 sm:py-28"
      >
        {/* Dotted Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          {/* Section Header */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
          >
            <div>
              <span className="inline-block rotate-1 font-hand text-2xl text-yellow">
                Pick your track
              </span>

              <h2 className="mt-1 font-display text-3xl font-extrabold text-cream sm:text-4xl">
                Our Popular Programs
              </h2>
            </div>

            <a
              href="#"
              className="hidden items-center gap-1.5 font-display font-semibold text-cream/80 transition-colors hover:text-orange sm:inline-flex"
            >
              View All Programs
              <FiArrowRight />
            </a>
          </motion.div>

          {/* Program Cards */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {programs.map((program, i) => (
              <motion.div
                key={program.title}
                variants={fadeUp}
                custom={i * 0.08}
                className={`group relative rounded-2xl bg-cream p-6 shadow-[6px_8px_0_rgba(0,0,0,0.25)] transition-transform duration-300 ${rotations[i]} hover:-translate-y-2 hover:rotate-0`}
              >
                {/* Arrow */}
                <button
                  onClick={() => setSelected(program)}
                  aria-label={`View details for ${program.title}`}
                  className="absolute -right-3 -top-3 grid h-10 w-10 place-items-center rounded-full bg-orange text-cream shadow-[0_6px_16px_rgba(255,107,26,0.4)] transition-transform duration-300 hover:rotate-45 hover:scale-110"
                >
                  <FiArrowUpRight className="text-lg" />
                </button>

                {/* Tag */}
                <span
                  className={`inline-block rounded-md px-3 py-1 text-[11px] font-bold uppercase tracking-wide ${tagStyles[program.tagStyle]}`}
                >
                  {program.tag}
                </span>

                {/* Title */}
                <h3 className="mt-4 min-h-[3.4rem] pr-2 font-display text-lg font-bold leading-snug text-ink">
                  {program.title}
                </h3>

                <p className="mt-1 text-xs font-medium text-ink/45">
                  {program.meta}
                </p>

                {/* Features */}
                <ul className="mt-4 space-y-2">
                  {program.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-ink/65"
                    >
                      <FiCheck className="mt-0.5 shrink-0 text-orange" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* View Details */}
                <button
                  onClick={() => setSelected(program)}
                  className="mt-6 w-full rounded-xl bg-ink py-3 font-display text-sm font-semibold text-cream transition-colors group-hover:bg-orange"
                >
                  {program.cta}
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile View All */}
          <div className="mt-12 flex justify-center sm:hidden">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 font-display font-semibold text-cream/80"
            >
              View All Programs
              <FiArrowRight />
            </a>
          </div>
        </div>
      </section>

      {/* =========================
          PROGRAM DETAIL MODAL
      ========================== */}

      <DetailModal
        program={selected}
        onClose={() => setSelected(null)}
        onPrebook={(program) => setPrebookProgram(program)}
      />

      {/* =========================
          PREBOOK FORM MODAL
      ========================== */}

      <EnrollmentModal
        isOpen={Boolean(prebookProgram)}
        onClose={() => setPrebookProgram(null)}
        program={prebookProgram}
      />
    </>
  );
}