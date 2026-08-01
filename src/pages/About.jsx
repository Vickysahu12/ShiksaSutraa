import AboutHero from "../components/section/AboutHero";
import AboutValues from "../components/section/AboutValues";
import AboutMilestones from "../components/section/AboutMilestones";
import AboutCTA from "../components/section/AboutCTA";
import AboutStory from "../components/section/AboutStory";

export default function About() {
  return (
    <>
      <AboutHero />
      <AboutValues />
      <AboutStory/>
      <AboutMilestones />
      <AboutCTA />
    </>
  );
}