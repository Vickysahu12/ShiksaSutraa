import Hero from "../components/section/Hero";
import StatsBar from "../components/section/StatsBar";
import WhyChooseUs from "../components/section/WhyChooseUs";
import LearningJourney from "../components/section/LearningJourney";
import PopularPrograms from "../components/section/PopularPrograms";
import FreeMasterClass from "../components/section/FreeMasterClass";
import Testimonials from "../components/section/Testimonials";
import AsSeenOn from "../components/section/AsSeenOn";
import FAQ from "../components/section/Faq";
import CTASection from "../components/section/CTASection";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <>
    <SEO
        title="Learn Digital Marketing, Design & Content Creation"
        description="Industry-ready bootcamps in Digital Marketing, Graphic Design, and Content Creation — live classes, real mentors, and placement support in Chandigarh."
        path="/"
      />
      <Hero />
      <StatsBar />
      <WhyChooseUs />
      <LearningJourney />
      <PopularPrograms />
      <FreeMasterClass />
      <Testimonials />
      <AsSeenOn />
      <FAQ />
      <CTASection />
    </>
  );
}