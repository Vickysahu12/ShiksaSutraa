import { FiInstagram, FiYoutube, FiLinkedin, FiSend, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { PiBookOpenTextDuotone } from "react-icons/pi";
import { footerLinks, contactInfo } from "../../data/SiteData";

function Column({ title, links }) {
  return (
    <div>
      <p className="font-display font-bold text-cream text-sm mb-4">{title}</p>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-sm text-cream/55 hover:text-orange transition-colors">
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
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-cream/10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-cream text-ink">
                <PiBookOpenTextDuotone />
              </span>
              <span className="font-display font-bold text-lg text-cream">
                Shiksha<span className="text-orange">Sutraa</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-cream/50 leading-relaxed max-w-xs">
              We're on a mission to provide practical skills and
              industry-relevant training to help you grow.
            </p>
            <div className="flex gap-3 mt-5">
              {[FiInstagram, FiYoutube, FiLinkedin, FiSend].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid place-items-center w-9 h-9 rounded-full border border-cream/15 text-cream/60 hover:border-orange hover:text-orange transition-colors"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          <Column title="Quick Links" links={footerLinks.quickLinks} />
          <Column title="Programs" links={footerLinks.programs} />

          <div>
            <p className="font-display font-bold text-cream text-sm mb-4">Contact Us</p>
            <ul className="space-y-3 text-sm text-cream/55">
              <li className="flex items-center gap-2.5">
                <FiPhone className="text-orange shrink-0" /> {contactInfo.phone}
              </li>
              <li className="flex items-center gap-2.5">
                <FiMail className="text-orange shrink-0" /> {contactInfo.email}
              </li>
              <li className="flex items-start gap-2.5">
                <FiMapPin className="text-orange shrink-0 mt-0.5" /> {contactInfo.address}
              </li>
            </ul>
          </div>
        </div>

        <p className="pt-6 text-center text-xs text-cream/35">
          © {new Date().getFullYear()} ShikshaSutraa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
