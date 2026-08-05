import ContactHero from "../components/section/ContactHero";
import ContactMain from "../components/section/ContactMain";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <>
    // pages/Contact.jsx
<SEO
  title="Contact Us"
  description="Have questions about a course, a mentor, or your career path? Get in touch with ShikshaSutraa."
  path="/contact"
/>
      <ContactHero />
      <ContactMain />
    </>
  );
}