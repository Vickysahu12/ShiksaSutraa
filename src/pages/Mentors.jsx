import MentorsHero from "../components/section/MentorsHero";
import MentorSpotlight from "../components/section/MentorSpotlight";
import MentorsGrid from "../components/section/MentorsGrid";
import MentorStats from "../components/section/MentorStats";
import MentorsCTA from "../components/section/MentorsCTA";
import SEO from "../components/SEO";

export default function Mentors() {
  return (
    <>
    // pages/Mentors.jsx
<SEO
  title="Meet Our Mentors"
  description="Learn from industry professionals who've done the work — real mentors guiding you through every module at ShikshaSutraa."
  path="/mentors"
/>
      <MentorsHero />
      <MentorSpotlight />
      <MentorsGrid />
      <MentorStats />
      <MentorsCTA />
    </>
  );
}