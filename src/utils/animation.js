// Shared Framer Motion variants — keep motion consistent across the site.
// Import what you need: import { fadeUp, staggerContainer } from "../../utils/animation";

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, delay, ease: "easeOut" },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren, delayChildren },
  },
});

// Default viewport settings for scroll-triggered reveals
export const revealViewport = { once: true, amount: 0.25 };

// Slight rotate-in for "index card" / sticky-note style elements
export const tapeIn = {
  hidden: { opacity: 0, y: 24, rotate: 0 },
  visible: (rotate = -2) => ({
    opacity: 1,
    y: 0,
    rotate,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

// Mobile menu slide
export const menuSlide = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: "auto", transition: { duration: 0.35, ease: "easeInOut" } },
  exit: { opacity: 0, height: 0, transition: { duration: 0.25, ease: "easeInOut" } },
};
