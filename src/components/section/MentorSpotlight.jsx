import { motion } from "framer-motion";
import { PiQuotesDuotone } from "react-icons/pi";
import { mentorSpotlight } from "../../data/siteData";
import { fadeUp, revealViewport } from "../../utils/animation";
import spotlightPhoto from "../../assets/images/mentors/mentor6.webp";

export default function MentorSpotlight() {
  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="relative rounded-3xl bg-white border border-ink/8 shadow-[5px_7px_0_rgba(11,29,58,0.08)] px-6 py-8 sm:px-10 sm:py-10"
        >
          <span className="inline-flex font-hand text-xl text-orange -rotate-1 mb-6">
            Mentor Spotlight
          </span>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center sm:items-start text-center sm:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
              viewport={revealViewport}
              whileHover={{ rotate: 0, scale: 1.03 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-4 border-cream shadow-[4px_5px_0_rgba(255,107,26,0.2)]"
            >
              <img
                src={spotlightPhoto}
                alt={mentorSpotlight.name}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="flex-1">
              <PiQuotesDuotone className="hidden sm:block text-orange/25 text-4xl mb-1" />
              <p className="font-display font-medium text-ink/80 text-base sm:text-lg leading-relaxed">
                {mentorSpotlight.quote}
              </p>
              <p className="mt-4 font-display font-bold text-ink">
                {mentorSpotlight.name}
              </p>
              <p className="text-sm text-ink/50">{mentorSpotlight.role}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}