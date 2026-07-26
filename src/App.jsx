import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/section/Hero";
import StatsBar from "./components/section/StatsBar";
import WhyChooseUs from "./components/section/WhyChooseUs";
import LearningJourney from "./components/section/LearningJourney";
import PopularPrograms from "./components/section/PopularPrograms";
import FreeMasterClass from "./components/section/FreeMasterClass";
import Testimonials from "./components/section/Testimonials";
import AsSeenOn from "./components/section/AsSeenOn";
import FAQ from "./components/section/Faq";
import CTASection from "./components/section/CTASection";

export default function App() {
  return (
    <div className="font-body bg-cream overflow-x-hidden">
      <Navbar />
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
      <Footer />
    </div>
  );
}