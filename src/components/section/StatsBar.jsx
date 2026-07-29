import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { PiUsersThreeDuotone, PiChalkboardTeacherDuotone, PiMonitorPlayDuotone, PiTrophyDuotone } from "react-icons/pi";
import { stats } from "../../data/siteData";
import { fadeUp, revealViewport, staggerContainer } from "../../utils/animation";

const icons = [PiUsersThreeDuotone, PiChalkboardTeacherDuotone, PiMonitorPlayDuotone, PiTrophyDuotone];

function Counter({ value, suffix, onDone }) {
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
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        onDone?.();
      }
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

function StatCard({ stat, i }) {
  const Icon = icons[i];
  const [counted, setCounted] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      custom={i * 0.08}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex items-center gap-3 rounded-2xl px-2 py-1 overflow-hidden cursor-default"
    >
      {/* shimmer sweep on hover */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-orange/8 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <motion.span
        initial={{ scale: 0, rotate: -20 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={revealViewport}
        whileHover={{ rotate: -12, scale: 1.08 }}
        transition={{
          scale: { type: "spring", stiffness: 260, damping: 16, delay: 0.15 + i * 0.08 },
          rotate: { type: "spring", stiffness: 300, damping: 12 },
        }}
        className="relative grid place-items-center w-11 h-11 rounded-xl bg-orange/10 text-orange text-xl shrink-0"
      >
        <Icon />
      </motion.span>

      <div className="leading-tight relative">
        <p className="font-display font-extrabold text-xl sm:text-2xl text-ink">
          <Counter value={stat.value} suffix={stat.suffix} onDone={() => setCounted(true)} />
        </p>
        <p className="text-xs sm:text-sm text-ink/50 font-medium">{stat.label}</p>

        {/* tiny "done" underline draw after count finishes */}
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: counted ? 1 : 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
          className="absolute -bottom-1 left-0 h-[2px] w-8 bg-orange rounded-full"
        />
      </div>
    </motion.div>
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
        {stats.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} i={i} />
        ))}
      </motion.div>
    </div>
  );
}