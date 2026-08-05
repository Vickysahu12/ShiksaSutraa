import {
  FiInstagram,
  FiYoutube,
  FiLinkedin,
  FiSend,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { footerLinks, contactInfo } from "../../data/siteData";
import Logo from "../../assets/images/Logoo.webp";

function Column({ title, links }) {
  return (
    <div>
      <p className="mb-4 font-display text-sm font-bold text-cream">
        {title}
      </p>

      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              className="text-sm text-cream/55 transition-colors hover:text-orange"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="footer" className="bg-ink pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 border-b border-cream/10 pb-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* =========================
              BRAND
          ========================== */}
          <div className="lg:col-span-2">
            <a href="/" className="inline-flex items-center">
              <img
                src={Logo}
                alt="ShikshaSutraa"
                className="h-14 w-auto object-contain select-none sm:h-16"
                draggable={false}
              />
            </a>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/50">
              We're on a mission to provide practical skills and
              industry-relevant training that helps students become
              job-ready and build successful careers.
            </p>

            <div className="mt-5 flex gap-3">
              {[FiInstagram, FiYoutube, FiLinkedin, FiSend].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full border border-cream/15 text-cream/60 transition-all duration-300 hover:-translate-y-1 hover:border-orange hover:text-orange"
                >
                  <Icon className="text-base" />
                </a>
              ))}
            </div>
          </div>

          {/* =========================
              QUICK LINKS
          ========================== */}
          <Column
            title="Quick Links"
            links={footerLinks.quickLinks}
          />

          {/* =========================
              PROGRAMS
          ========================== */}
          <Column
            title="Programs"
            links={footerLinks.programs}
          />

          {/* =========================
              CONTACT
          ========================== */}
          <div>
            <p className="mb-4 font-display text-sm font-bold text-cream">
              Contact Us
            </p>

            <ul className="space-y-3 text-sm text-cream/55">
              <li className="flex items-center gap-2.5">
                <FiPhone className="shrink-0 text-orange" />
                {contactInfo.phone}
              </li>

              <li className="flex items-center gap-2.5">
                <FiMail className="shrink-0 text-orange" />
                {contactInfo.email}
              </li>

              <li className="flex items-start gap-2.5">
                <FiMapPin className="mt-0.5 shrink-0 text-orange" />
                {contactInfo.address}
              </li>
            </ul>
          </div>
        </div>

        {/* =========================
            COPYRIGHT
        ========================== */}
        <div className="pt-6 text-center">
          <p className="text-xs text-cream/35">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-cream">
              ShikshaSutraa
            </span>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}