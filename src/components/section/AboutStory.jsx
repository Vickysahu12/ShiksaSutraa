import { motion } from "framer-motion";
import { fadeUp, revealViewport, staggerContainer } from "../../utils/animation";
import SectionSeam from "./SectionSeam";

const paragraphs = [
  "**SHIIKSHAA SUTRAA** is a career-focused learning platform dedicated to preparing individuals for the fast-growing world of eCommerce and Digital Business. Our mission is to bridge the gap between theoretical education and practical industry skills by providing training that is relevant, hands-on, and aligned with current market demands.",
  "Our programs are designed with a strong focus on real business processes, helping learners develop the confidence and expertise required to work across leading eCommerce platforms, digital tools, marketplaces, and business operations.",
  "At SHIIKSHAA SUTRAA, we believe that true learning comes through practical exposure, continuous guidance, and industry-oriented training. Every module is structured to equip students with job-ready skills, professional knowledge, and the mindset needed to succeed in today's competitive environment.",
  "Whether you're a student, a job seeker, or someone looking to upgrade your career, SHIIKSHAA SUTRAA is committed to helping you learn, grow, and build a successful future with confidence.",
];

// Renders a paragraph, bolding text wrapped in **double asterisks**
function FormattedParagraph({ text }) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-display font-bold text-ink">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export default function AboutStory() {
  return (
    <>
      <SectionSeam />
      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="relative pl-5 sm:pl-7 space-y-5"
          >
            {/* scroll-linked accent bar — gives the paragraph block a spine so it reads as
                one settled column instead of loose stacked lines */}
            <div className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full bg-ink/10 overflow-hidden">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={revealViewport}
                transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
                style={{ transformOrigin: "top" }}
                className="w-full h-full bg-orange"
              />
            </div>

            {paragraphs.map((para, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                custom={i * 0.08}
                className="text-ink/65 text-base sm:text-lg leading-relaxed"
              >
                <FormattedParagraph text={para} />
              </motion.p>
            ))}

            <motion.div
              variants={fadeUp}
              custom={paragraphs.length * 0.08 + 0.1}
              whileHover={{ rotate: 0, scale: 1.03 }}
              className="!mt-10 inline-block -rotate-1 rounded-md bg-yellow px-5 py-2.5 font-hand text-xl sm:text-2xl text-ink shadow-[3px_4px_0_rgba(0,0,0,0.2)] cursor-default"
            >
              Learn. Practice. Grow. Succeed.
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}