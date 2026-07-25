import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  PiVideoCameraDuotone,
  PiBookOpenTextDuotone,
  PiMonitorPlayDuotone,
  PiUserFocusDuotone,
  PiCertificateDuotone,
  PiInfinityDuotone,
  PiCheckBold,
} from "react-icons/pi";
import { FiArrowRight, FiX } from "react-icons/fi";
import { whyUs } from "../../data/siteData";
import { fadeUp, revealViewport, staggerContainer } from "../../utils/animation";

const icons = [
  PiVideoCameraDuotone,
  PiBookOpenTextDuotone,
  PiMonitorPlayDuotone,
  PiUserFocusDuotone,
  PiCertificateDuotone,
  PiInfinityDuotone,
];

function Card({ item, i, onOpen }) {
  const Icon = icons[i % icons.length];

  return (
    <div className="group relative flex flex-col text-left rounded-2xl border border-ink/8 bg-white p-6 sm:p-7 shrink-0 w-[16rem] sm:w-auto transition-all duration-300 hover:-translate-y-1.5 hover:border-orange/30 hover:shadow-[0_16px_32px_rgba(11,29,58,0.08)]">
      <span className="grid place-items-center w-14 h-14 rounded-2xl bg-ink/5 text-ink text-2xl transition-colors group-hover:bg-orange group-hover:text-cream">
        <Icon />
      </span>
      <p className="mt-5 font-display font-bold text-ink text-base">{item.title}</p>
      <p className="mt-1.5 text-sm text-ink/50 leading-relaxed flex-1">{item.desc}</p>
      <button
        type="button"
        onClick={() => onOpen(item)}
        className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-display font-semibold text-orange"
      >
        Know More
        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
      </button>
    </div>
  );
}

function DetailModal({ item, index, onClose }) {
  useEffect(() => {
    if (!item) return;

    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  if (!item) return null;
  const Icon = icons[index % icons.length];

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-ink/60 backdrop-blur-sm overflow-y-auto"
      >
        <div className="min-h-full flex items-center justify-center p-5">
          <motion.div
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl bg-cream p-7 sm:p-8 shadow-2xl my-8"
          >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 grid place-items-center w-9 h-9 rounded-full text-ink/50 hover:bg-ink/5 hover:text-ink transition-colors"
          >
            <FiX className="text-lg" />
          </button>

          <span className="grid place-items-center w-14 h-14 rounded-2xl bg-orange text-cream text-2xl">
            <Icon />
          </span>

          <h3 className="mt-5 font-display font-extrabold text-2xl text-ink">
            {item.title}
          </h3>
          <p className="mt-1.5 text-sm text-ink/55">{item.desc}</p>

          <ul className="mt-6 space-y-3">
            {item.points.map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm text-ink/70">
                <span className="grid place-items-center w-5 h-5 rounded-full bg-orange/10 text-orange shrink-0 mt-0.5">
                  <PiCheckBold className="text-[10px]" />
                </span>
                {point}
              </li>
            ))}
          </ul>

          <a
            href="#programs"
            onClick={onClose}
            className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 font-display font-semibold text-cream transition-transform hover:-translate-y-0.5"
          >
            Explore Courses
            <FiArrowRight />
          </a>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function WhyChooseUs() {
  const [selected, setSelected] = useState(null);
  const marqueeItems = [...whyUs, ...whyUs];
  const selectedIndex = selected ? whyUs.findIndex((w) => w.title === selected.title) : 0;

  return (
    <section id="why-us" className="bg-cream py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="max-w-xl"
        >
          <span className="font-hand text-2xl text-orange -rotate-1 inline-block">
            Why us?
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mt-1">
            Why Shiksha<span className="text-orange">Sutraa</span>?
          </h2>
          <p className="mt-3 text-ink/55">
            Everything you need to learn, grow &amp; succeed — built around
            how you'll actually use it.
          </p>
        </motion.div>

        {/* Mobile: auto-scrolling marquee */}
        <div className="mt-10 sm:hidden -mx-5 px-5 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_6%,black_94%,transparent)]">
          <div
            className="flex gap-4 w-max animate-marquee-cards"
            style={{ animationPlayState: selected ? "paused" : "running" }}
          >
            {marqueeItems.map((item, i) => (
              <Card key={`${item.title}-${i}`} item={item} i={i} onOpen={setSelected} />
            ))}
          </div>
        </div>

        {/* Tablet & desktop: static grid */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="hidden sm:grid mt-12 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5"
        >
          {whyUs.map((item, i) => (
            <motion.div key={item.title} variants={fadeUp} custom={i * 0.06}>
              <Card item={item} i={i} onOpen={setSelected} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <DetailModal item={selected} index={selectedIndex} onClose={() => setSelected(null)} />
    </section>
  );
}