// pages/Contact.jsx
import { motion } from "framer-motion";
import { fadeUp, revealViewport } from "../utils/animation";

export default function Contact() {
  return (
    <section className="bg-cream py-24 sm:py-32 min-h-[60vh]">
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="font-hand text-2xl text-orange -rotate-1 inline-block"
        >
          Get in touch
        </motion.span>
        <motion.h1
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-2 font-display font-extrabold text-3xl sm:text-4xl text-ink"
        >
          Contact Us
        </motion.h1>
        <motion.p
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-4 text-ink/55"
        >
          Contact form yahan aayega — fields (name/email/message ya kuch aur) bata do.
        </motion.p>
      </div>
    </section>
  );
}