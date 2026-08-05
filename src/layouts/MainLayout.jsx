import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="font-body bg-cream overflow-x-hidden">
      {/* site-wide structured data — tells Google this is an educational
          organization, helps with rich results in search */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "ShikshaSutraa",
            url: "https://shikshasutraa.com",
            logo: "https://shikshasutraa.com/logo.png",
            description:
              "Career-focused learning platform offering live, mentor-led bootcamps in Digital Marketing, Graphic Design, and Content Creation.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Chandigarh",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-98765-43210",
              contactType: "customer service",
            },
          })}
        </script>
      </Helmet>

      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}