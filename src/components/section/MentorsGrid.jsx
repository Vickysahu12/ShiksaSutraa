import { motion } from "framer-motion";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { mentorsData } from "../../data/siteData";
import { fadeUp, revealViewport, staggerContainer } from "../../utils/animation";
import SectionSeam from "./SectionSeam";
import mentorA from "../../assets/images/mentors/mentor12.webp";
import mentorB from "../../assets/images/mentors/mentor11.webp";

// only pair up data with the photos we actually have right now —
// add more entries to `photos` as more mentor images come in, no other
// code needs to change
const photos = [mentorA, mentorB];
const mentors = mentorsData
  .slice(0, photos.length)
  .map((mentor, i) => ({ ...mentor, photo: photos[i] }));

const rotations = ["-rotate-1", "rotate-1", "-rotate-1", "rotate-1"];

export default function MentorsGrid() {
  return (
    <>
      <SectionSeam />
      <section className="bg-cream py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="text-center max-w-xl mx-auto mb-10 sm:mb-12"
          >
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-ink">
              Our Mentors
            </h2>
            <p className="mt-2 text-ink/55 text-sm sm:text-base">
              Industry professionals who've walked the path — now guiding yours.
            </p>
          </motion.div>

          {/* flex-wrap + justify-center instead of a fixed grid-cols-4 —
              this self-adjusts and stays centered whether there are 2, 3, or 6 mentors */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="flex flex-wrap justify-center gap-5 sm:gap-6"
          >
            {mentors.map((mentor, i) => (
              <motion.div
                key={mentor.name}
                variants={fadeUp}
                custom={i * 0.08}
                className={`group relative flex flex-col w-full max-w-[15rem] sm:w-56 rounded-2xl border border-ink/8 bg-white p-4 sm:p-5 shadow-[3px_4px_0_rgba(11,29,58,0.06)] transition-all duration-300 ${rotations[i % rotations.length]} hover:-translate-y-1.5 hover:rotate-0 hover:border-orange/30 hover:shadow-[5px_8px_0_rgba(255,107,26,0.15)]`}
              >
                <div className="rounded-xl overflow-hidden aspect-square">
                  <img
                    src={mentor.photo}
                    alt={mentor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-3">
                  <p className="font-display font-bold text-ink text-sm sm:text-base leading-snug">
                    {mentor.name}
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm text-ink/50 leading-snug">
                    {mentor.role}
                  </p>

                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {mentor.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md bg-ink/5 px-2 py-0.5 text-[10px] font-semibold text-ink/60"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-ink/5 flex items-center gap-2 text-ink/40">
                  <motion.a
                    whileHover={{ scale: 1.15, color: "#FF6B1A" }}
                    href={mentor.socials.linkedin}
                    aria-label={`${mentor.name} LinkedIn`}
                    className="grid place-items-center w-7 h-7 rounded-full bg-ink/5"
                  >
                    <FaLinkedinIn className="text-xs" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.15, color: "#FF6B1A" }}
                    href={mentor.socials.twitter}
                    aria-label={`${mentor.name} Twitter`}
                    className="grid place-items-center w-7 h-7 rounded-full bg-ink/5"
                  >
                    <FaTwitter className="text-xs" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}