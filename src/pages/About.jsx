import AboutHero from "../components/section/AboutHero";
import AboutValues from "../components/section/AboutValues";
import AboutMilestones from "../components/section/AboutMilestones";
import AboutCTA from "../components/section/AboutCTA";
import AboutStory from "../components/section/AboutStory";
import SEO from "../components/SEO";

export default function About() {
  return (
    <>
    <SEO
  title="About Us — Our Story"
  description="SHIIKSHAA SUTRAA is a career-focused learning platform preparing individuals for the fast-growing world of eCommerce and Digital Business."
  path="/about"
/>
      <AboutHero />
      <AboutValues />
      <AboutStory/>
      <AboutMilestones />
      <AboutCTA />
    </>
  );
}