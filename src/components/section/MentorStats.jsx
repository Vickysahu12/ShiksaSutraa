import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  PiUsersThreeDuotone,
  PiClockDuotone,
  PiStudentDuotone,
  PiBuildingsDuotone,
} from "react-icons/pi";
import { mentorStats } from "../../data/siteData";
import { fadeUp, revealViewport, staggerContainer } from "../../utils/animation";
import SectionSeam from "./SectionSeam";

const icons = [PiUsersThreeDuotone, PiClockDuotone, PiStudentDuotone, PiBuildingsDuotone];

function Counter({ raw }) {
  const match = raw.match(/(\d+)(.*)/);
  const value = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1000;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function MentorStats() {
  return (
    <>
      <SectionSeam />
      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 rounded-3xl bg-white border border-ink/8 shadow-[4px_5px_0_rgba(11,29,58,0.06)] px-6 sm:px-10 py-8 sm:py-9"
          >
            {mentorStats.map((stat, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeUp}
                  custom={i * 0.08}
                  className="flex flex-col items-center justify-center text-center gap-2"
                >
                  <motion.span
                    initial={{ scale: 0, rotate: -20 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={revealViewport}
                    whileHover={{ rotate: -12, scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 + i * 0.08 }}
                    className="grid place-items-center w-11 h-11 rounded-xl bg-orange/10 text-orange text-xl"
                  >
                    <Icon />
                  </motion.span>
                  <p className="font-display font-extrabold text-xl sm:text-2xl text-ink leading-none">
                    <Counter raw={stat.value} />
                  </p>
                  <p className="text-xs sm:text-sm text-ink/50 font-medium leading-tight max-w-[7rem]">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}