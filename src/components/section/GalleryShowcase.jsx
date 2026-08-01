import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlay, FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { galleryCategories, galleryItems } from "../../data/siteData";
import { fadeUp, revealViewport, staggerContainer } from "../../utils/animation";

const rotations = ["-rotate-1", "rotate-1", "-rotate-1", "rotate-1", "rotate-1", "-rotate-1", "-rotate-1", "rotate-1"];

function Lightbox({ item, items, onClose, onNav }) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-5"
      >
        <button
          onClick={(e) => { e.stopPropagation(); onNav(-1); }}
          aria-label="Previous"
          className="hidden sm:grid absolute left-4 top-1/2 -translate-y-1/2 place-items-center w-11 h-11 rounded-full bg-cream/10 text-cream hover:bg-orange transition-colors"
        >
          <FiChevronLeft className="text-xl" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); onNav(1); }}
          aria-label="Next"
          className="hidden sm:grid absolute right-4 top-1/2 -translate-y-1/2 place-items-center w-11 h-11 rounded-full bg-cream/10 text-cream hover:bg-orange transition-colors"
        >
          <FiChevronRight className="text-xl" />
        </button>

        <motion.div
          key={item.id}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 12 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl rounded-2xl overflow-hidden bg-ink shadow-2xl"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-3 right-3 z-10 grid h-10 w-10 place-items-center rounded-full bg-ink/60 text-cream backdrop-blur-sm hover:bg-orange transition-colors"
          >
            <FiX className="text-lg" />
          </button>

          {item.type === "video" ? (
            <video src={item.src} controls autoPlay className="w-full max-h-[75vh] object-contain bg-black" />
          ) : (
            <img src={item.src} alt={item.alt || ""} className="w-full max-h-[75vh] object-contain" />
          )}

          {item.caption && (
            <div className="p-4 flex items-center justify-between">
              <p className="text-sm text-cream/70 font-medium">{item.caption}</p>
              <span className="text-xs text-cream/40 uppercase tracking-wide">{item.category}</span>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function GalleryShowcase() {
  const [filter, setFilter] = useState("all");
  const [activeId, setActiveId] = useState(null);

  const filtered = filter === "all" ? galleryItems : galleryItems.filter((g) => g.type === filter);
  const active = galleryItems.find((g) => g.id === activeId) || null;

  const handleNav = (dir) => {
    const idx = filtered.findIndex((g) => g.id === activeId);
    const next = filtered[(idx + dir + filtered.length) % filtered.length];
    setActiveId(next.id);
  };

  return (
    <section className="bg-cream py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Filter tabs */}
        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="flex justify-center gap-3"
        >
          {galleryCategories.map((cat) => (
            <motion.button
              key={cat.key}
              variants={fadeUp}
              onClick={() => setFilter(cat.key)}
              whileTap={{ scale: 0.94 }}
              className={`rounded-full px-5 py-2.5 text-sm font-display font-semibold transition-all ${
                filter === cat.key
                  ? "bg-ink text-cream shadow-[3px_4px_0_rgba(0,0,0,0.15)]"
                  : "bg-white text-ink/60 border border-ink/8 hover:border-orange/30"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          key={filter}
          variants={staggerContainer(0.06)}
          initial="hidden"
          animate="visible"
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5"
        >
          {filtered.map((item, i) => (
            <motion.button
              key={item.id}
              variants={fadeUp}
              custom={i * 0.05}
              onClick={() => setActiveId(item.id)}
              whileHover={{ y: -4 }}
              className={`group relative aspect-square rounded-2xl overflow-hidden bg-white border border-ink/8 shadow-[3px_4px_0_rgba(11,29,58,0.06)] transition-all duration-300 ${rotations[i % rotations.length]} hover:rotate-0 hover:shadow-[5px_8px_0_rgba(255,107,26,0.15)]`}
            >
              <img
                src={item.thumbnail}
                alt={item.alt || ""}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-300" />

              {item.type === "video" && (
                <motion.span whileHover={{ scale: 1.15 }} className="absolute inset-0 grid place-items-center">
                  <span className="grid place-items-center w-11 h-11 rounded-full bg-cream/90 text-ink text-lg shadow-lg opacity-90 group-hover:opacity-100 transition-opacity">
                    <FiPlay className="translate-x-0.5" />
                  </span>
                </motion.span>
              )}

              {/* caption slides up on hover */}
              <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-ink/85 to-transparent p-3">
                <p className="text-cream text-xs font-semibold text-left">{item.caption}</p>
              </div>

              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </motion.button>
          ))}
        </motion.div>
      </div>

      <Lightbox item={active} items={filtered} onClose={() => setActiveId(null)} onNav={handleNav} />
    </section>
  );
}