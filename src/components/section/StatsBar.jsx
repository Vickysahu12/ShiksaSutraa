import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PiUsersThreeDuotone, PiChalkboardTeacherDuotone, PiMonitorPlayDuotone, PiTrophyDuotone } from "react-icons/pi";
import { stats } from "../../data/siteData";
import { fadeUp, revealViewport, staggerContainer } from "../../utils/animation";

const icons = [PiUsersThreeDuotone, PiChalkboardTeacherDuotone, PiMonitorPlayDuotone, PiTrophyDuotone];

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
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
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 -mt-8 sm:-mt-10 relative z-10">
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 rounded-3xl bg-white/90 backdrop-blur border border-ink/5 shadow-[0_20px_50px_rgba(11,29,58,0.1)] px-6 sm:px-10 py-7 sm:py-8"
      >
        {stats.map((stat, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={i * 0.08}
              className="flex items-center gap-3"
            >
              <span className="grid place-items-center w-11 h-11 rounded-xl bg-orange/10 text-orange text-xl shrink-0">
                <Icon />
              </span>
              <div className="leading-tight">
                <p className="font-display font-extrabold text-xl sm:text-2xl text-ink">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs sm:text-sm text-ink/50 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
