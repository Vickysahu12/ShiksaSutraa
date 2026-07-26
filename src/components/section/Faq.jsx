import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus, FiMessageCircle } from "react-icons/fi";
import { faqs } from "../../data/siteData";
import { fadeUp, revealViewport, staggerContainer } from "../../utils/animation";

function FAQItem({ faq, index, isOpen, onToggle }) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index * 0.05}
      className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
        isOpen ? "border-orange/40 bg-orange/[0.04]" : "border-ink/8 bg-white"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center gap-4 text-left px-5 sm:px-7 py-5 sm:py-6"
      >
        <span
          className={`shrink-0 font-display font-bold text-sm w-7 h-7 rounded-full grid place-items-center transition-colors ${
            isOpen ? "bg-orange text-cream" : "bg-ink/5 text-ink/50"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex-1 font-display font-bold text-ink text-[15px] sm:text-lg leading-snug">
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`shrink-0 grid place-items-center w-8 h-8 rounded-full border transition-colors ${
            isOpen ? "border-orange text-orange bg-cream" : "border-ink/15 text-ink/50"
          }`}
        >
          <FiPlus />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="px-5 sm:px-7 pb-5 sm:pb-7 pl-[3.75rem] sm:pl-[4.75rem] pr-8 text-sm sm:text-[15px] text-ink/60 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (i) => setOpenIndex((cur) => (cur === i ? null : i));

  return (
    <section id="faq" className="bg-cream py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="text-center"
        >
          <span className="font-hand text-2xl text-orange -rotate-1 inline-block">
            Still curious?
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-ink mt-1">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-ink/55">
            Everything you were about to ask, answered before you had to.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-12 space-y-4"
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 rounded-2xl bg-ink px-6 sm:px-8 py-6 text-center sm:text-left"
        >
          <span className="grid place-items-center w-11 h-11 rounded-full bg-cream/10 text-cream text-xl shrink-0">
            <FiMessageCircle />
          </span>
          <div className="flex-1">
            <p className="font-display font-bold text-cream">Still have a question?</p>
            <p className="text-sm text-cream/55">We usually reply within a few hours.</p>
          </div>
          <a
            href="#footer"
            className="inline-flex items-center gap-1.5 rounded-full bg-orange px-6 py-3 font-display font-semibold text-sm text-cream shrink-0 transition-transform hover:-translate-y-0.5"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}