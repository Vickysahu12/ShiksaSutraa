import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { PiBookOpenTextDuotone } from "react-icons/pi";
import { navLinks } from "../../data/siteData";
import { menuSlide } from "../../utils/animation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_2px_20px_rgba(11,29,58,0.08)]"
          : "bg-cream/70 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-8 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 shrink-0">
          <span className="grid place-items-center w-10 h-10 rounded-xl bg-ink text-cream">
            <PiBookOpenTextDuotone className="text-xl" />
          </span>
          <span className="leading-tight">
            <span className="block font-display font-bold text-lg text-ink tracking-tight">
              Shiksha<span className="text-orange">Sutraa</span>
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.2em] text-ink/50 uppercase">
              Learn · Practice · Grow
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8 font-medium text-ink/70">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="relative py-1 transition-colors hover:text-ink after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-orange after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#programs"
          className="hidden lg:inline-flex items-center rounded-full bg-orange px-6 py-2.5 font-display font-semibold text-cream shadow-[0_6px_20px_rgba(255,107,26,0.35)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(255,107,26,0.45)]"
        >
          Enroll Now
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-lg text-ink"
          aria-label="Toggle menu"
        >
          {open ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuSlide}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden overflow-hidden border-t border-ink/10 bg-cream"
          >
            <ul className="flex flex-col px-5 py-4 gap-1 font-medium text-ink/80">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 border-b border-ink/5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <a
                href="#programs"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full bg-orange px-6 py-3 font-display font-semibold text-cream"
              >
                Enroll Now
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
