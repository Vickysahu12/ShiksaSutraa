import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import { PiPaperPlaneTiltDuotone } from "react-icons/pi";

export default function EnrollmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    classLevel: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Yahan baad mein API / Formspree / backend connect kar sakte ho
    console.log(formData);

    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] bg-ink/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xl max-h-[92dvh] overflow-y-auto rounded-[2rem] bg-cream shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute right-5 top-5 z-10 grid h-10 w-10 place-items-center rounded-full bg-ink/5 text-ink/60 transition hover:bg-ink/10 hover:text-ink"
              >
                <HiX className="text-xl" />
              </button>

              {!submitted ? (
                <div className="p-6 sm:p-9">
                  {/* Header */}
                  <div className="mb-7 pr-10">
                    <span className="mb-3 inline-flex rounded-full bg-orange/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange">
                      Start your journey
                    </span>

                    <h2 className="font-display text-3xl font-bold leading-tight text-ink sm:text-4xl">
                      Let's get you{" "}
                      <span className="text-orange">started.</span>
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-ink/60 sm:text-base">
                      Fill in your details and our team will get in touch with
                      you shortly.
                    </p>
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-ink">
                          Full Name
                        </label>

                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                          className="w-full rounded-xl border border-ink/10 bg-white/60 px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-orange focus:ring-4 focus:ring-orange/10"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-ink">
                          Email Address
                        </label>

                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          required
                          className="w-full rounded-xl border border-ink/10 bg-white/60 px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-orange focus:ring-4 focus:ring-orange/10"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* Phone */}
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-ink">
                          Phone Number
                        </label>

                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          required
                          className="w-full rounded-xl border border-ink/10 bg-white/60 px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-orange focus:ring-4 focus:ring-orange/10"
                        />
                      </div>

                      {/* Class */}
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-ink">
                          Interested In
                        </label>

                        <select
                          name="classLevel"
                          value={formData.classLevel}
                          onChange={handleChange}
                          required
                          className="w-full rounded-xl border border-ink/10 bg-white/60 px-4 py-3.5 text-sm text-ink outline-none transition focus:border-orange focus:ring-4 focus:ring-orange/10"
                        >
                          <option value="">Select a program</option>
                          <option value="class-9-10">Class 9–10</option>
                          <option value="class-11-12">Class 11–12</option>
                          <option value="competitive">Competitive Exams</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="mb-2 block text-sm font-semibold text-ink">
                        Anything you'd like to tell us?
                        <span className="ml-1 font-normal text-ink/40">
                          (Optional)
                        </span>
                      </label>

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Tell us a little about what you're looking for..."
                        className="w-full resize-none rounded-xl border border-ink/10 bg-white/60 px-4 py-3.5 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-orange focus:ring-4 focus:ring-orange/10"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-full bg-orange px-6 py-4 font-display font-semibold text-cream shadow-[0_8px_24px_rgba(255,107,26,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(255,107,26,0.4)]"
                    >
                      Submit Enrollment Request
                      <PiPaperPlaneTiltDuotone className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>

                    <p className="text-center text-xs text-ink/40">
                      We'll never spam you. Your information stays private.
                    </p>
                  </form>
                </div>
              ) : (
                /* Success State */
                <div className="flex min-h-[450px] flex-col items-center justify-center px-6 py-12 text-center sm:px-10">
                  <div className="mb-6 grid h-20 w-20 place-items-center rounded-full bg-orange/10 text-4xl">
                    🎉
                  </div>

                  <h2 className="font-display text-3xl font-bold text-ink">
                    You're on the list!
                  </h2>

                  <p className="mt-3 max-w-sm text-ink/60">
                    Thanks for reaching out. Our team will connect with you
                    soon.
                  </p>

                  <button
                    onClick={handleClose}
                    className="mt-8 rounded-full bg-ink px-7 py-3.5 font-semibold text-cream transition hover:-translate-y-0.5"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}