import MentorsHero from "../components/section/MentorsHero";
import MentorSpotlight from "../components/section/MentorSpotlight";
import MentorsGrid from "../components/section/MentorsGrid";
import MentorStats from "../components/section/MentorStats";
import MentorsCTA from "../components/section/MentorsCTA";

export default function Mentors() {
  return (
    <>
      <MentorsHero />
      <MentorSpotlight />
      <MentorsGrid />
      <MentorStats />
      <MentorsCTA />
    </>
  );
}