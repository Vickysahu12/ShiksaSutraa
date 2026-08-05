import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { PiBookOpenTextDuotone } from "react-icons/pi";
import { navLinks } from "../../data/siteData.js";
import EnrollmentModal from "../section/EnrollmentModal.jsx";
import logo from "../../assets/images/Logoo.webp";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);

  /* -----------------------------
     Detect page scroll
  ----------------------------- */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /* -----------------------------
     Handle mobile drawer
  ----------------------------- */
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKey);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  /* -----------------------------
     Open enrollment modal
  ----------------------------- */
  const handleEnrollClick = () => {
    setOpen(false);
    setEnrollmentOpen(true);
  };

  return (
    <>
      {/* =========================
          NAVBAR
      ========================== */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream/90 backdrop-blur-md shadow-[0_2px_20px_rgba(11,29,58,0.08)]"
            : "bg-cream/70 backdrop-blur-sm"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          {/* =========================
              LOGO
          ========================== */}
          <NavLink
            to="/"
            className="flex shrink-0 items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <motion.img
  src={logo}
  alt="ShikshaSutraa"
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300, damping: 20 }}
  className="h-12 sm:h-14 lg:h-16 w-auto object-contain"
/>
          </NavLink>

          {/* =========================
              DESKTOP NAV LINKS
          ========================== */}
          <ul className="hidden items-center gap-8 font-medium text-ink/70 lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  className={({ isActive }) =>
                    `relative py-1 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-orange after:transition-all ${
                      isActive
                        ? "text-ink after:w-full"
                        : "hover:text-ink after:w-0 hover:after:w-full"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* =========================
              DESKTOP ENROLL BUTTON
          ========================== */}
          <motion.button
            onClick={handleEnrollClick}
            whileHover={{ y: -2, boxShadow: "0 10px 24px rgba(255,107,26,0.45)" }}
            whileTap={{ scale: 0.96 }}
            className="hidden items-center rounded-full bg-orange px-6 py-2.5 font-display font-semibold text-cream shadow-[0_6px_20px_rgba(255,107,26,0.35)] lg:inline-flex"
          >
            Enroll Now
          </motion.button>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}
          <button
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-lg text-ink lg:hidden"
            aria-label="Open menu"
          >
            <HiMenu className="text-2xl" />
          </button>
        </nav>
      </motion.header>

      {/* =========================
          MOBILE DRAWER
      ========================== */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[90] bg-ink/50 backdrop-blur-[2px] lg:hidden"
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed right-0 top-0 z-[100] flex h-dvh w-[82%] max-w-xs flex-col bg-cream shadow-[-8px_0_30px_rgba(11,29,58,0.15)] lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex shrink-0 items-center justify-between border-b border-ink/8 px-5 py-4">
                <motion.img
  src={logo}
  alt="ShikshaSutraa"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.3 }}
  className="h-10 w-auto object-contain"
/>

                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="grid h-9 w-9 place-items-center rounded-full text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink"
                >
                  <HiX className="text-xl" />
                </button>
              </div>

              {/* Mobile Links */}
              <ul className="flex flex-1 flex-col gap-1 overflow-y-auto px-5 py-4 font-medium text-ink/80">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.15 + i * 0.05,
                      duration: 0.3,
                    }}
                  >
                    <NavLink
                      to={link.href}
                      end={link.href === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `block border-b border-ink/5 py-3.5 text-base ${
                          isActive ? "text-orange font-semibold" : ""
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile Enroll Button */}
              <div className="shrink-0 border-t border-ink/8 px-5 py-5">
                <button
                  onClick={handleEnrollClick}
                  className="inline-flex w-full items-center justify-center rounded-full bg-orange px-6 py-3.5 font-display font-semibold text-cream shadow-[0_8px_20px_rgba(255,107,26,0.35)] transition-transform hover:-translate-y-0.5"
                >
                  Enroll Now
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* =========================
          ENROLLMENT MODAL
      ========================== */}
      <EnrollmentModal
        isOpen={enrollmentOpen}
        onClose={() => setEnrollmentOpen(false)}
      />
    </>
  );
}