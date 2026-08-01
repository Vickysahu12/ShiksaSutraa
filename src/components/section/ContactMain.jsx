import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend } from "react-icons/fi";
import { PiCheckCircleDuotone } from "react-icons/pi";
import { contactCards } from "../../data/siteData";
import { fadeUp, revealViewport, staggerContainer } from "../../utils/animation";
import SectionSeam from "./SectionSeam";

const infoIcons = { map: FiMapPin, phone: FiPhone, mail: FiMail, clock: FiClock };
const rotations = ["-rotate-1", "rotate-1", "-rotate-1", "rotate-1"];

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up actual submission (API / email service)
    setSubmitted(true);
  };

  const fields = [
    { name: "name", label: "Full Name", type: "text" },
    { name: "email", label: "Email Address", type: "email" },
    { name: "phone", label: "Phone Number", type: "tel" },
  ];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      className="relative rounded-3xl bg-white border border-ink/8 shadow-[5px_7px_0_rgba(11,29,58,0.08)] p-6 sm:p-8 overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 18 }}
            className="flex flex-col items-center text-center py-10"
          >
            <motion.span
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 14, delay: 0.1 }}
              className="grid place-items-center w-16 h-16 rounded-full bg-orange/10 text-orange text-4xl"
            >
              <PiCheckCircleDuotone />
            </motion.span>
            <p className="mt-4 font-display font-bold text-lg text-ink">Message sent!</p>
            <p className="mt-1.5 text-sm text-ink/55 max-w-xs">
              We'll get back to you within 24 hours. Talk soon!
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm font-display font-semibold text-orange hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <p className="font-display font-bold text-lg text-ink">Send us a message</p>

            {fields.map((field) => (
              <div key={field.name} className="relative">
                <label className="block text-xs font-semibold text-ink/50 mb-1.5">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required={field.name !== "phone"}
                  onFocus={() => setFocused(field.name)}
                  onBlur={() => setFocused(null)}
                  className={`w-full rounded-xl border bg-cream/40 px-4 py-3 text-sm text-ink outline-none transition-all ${
                    focused === field.name
                      ? "border-orange ring-2 ring-orange/15"
                      : "border-ink/10"
                  }`}
                />
              </div>
            ))}

            <div>
              <label className="block text-xs font-semibold text-ink/50 mb-1.5">Message</label>
              <textarea
                required
                rows={4}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className={`w-full rounded-xl border bg-cream/40 px-4 py-3 text-sm text-ink outline-none transition-all resize-none ${
                  focused === "message"
                    ? "border-orange ring-2 ring-orange/15"
                    : "border-ink/10"
                }`}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-orange py-3.5 font-display font-semibold text-cream shadow-[0_8px_20px_rgba(255,107,26,0.35)]"
            >
              Send Message
              <FiSend className="text-sm" />
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ContactMain() {
  return (
    <>
      <SectionSeam />
      {/* pt-4/6 added so this doesn't sit flush against ContactHero above it */}
      <section className="bg-cream pt-4 sm:pt-6 pb-20 sm:pb-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <ContactForm />

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="grid grid-cols-2 gap-4"
          >
            {contactCards.map((info, i) => {
              const Icon = infoIcons[info.icon];
              return (
                <motion.div
                  key={info.label}
                  variants={fadeUp}
                  custom={i * 0.08}
                  whileHover={{ y: -3 }}
                  className={`rounded-2xl border border-ink/8 bg-white p-5 shadow-[3px_4px_0_rgba(11,29,58,0.06)] transition-all duration-300 ${rotations[i % rotations.length]} hover:rotate-0`}
                >
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-orange/10 text-orange text-lg">
                    <Icon />
                  </span>
                  <p className="mt-3 font-display font-bold text-ink text-sm">{info.label}</p>
                  <p className="mt-1 text-xs text-ink/55 leading-relaxed">{info.value}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}