import CourseHero from "../components/section/CourseHero";
import CourseCatalog from "../components/section/CourseCatalog";
import CourseComparison from "../components/section/CourseComparison";
import CourseCTA from "../components/section/CourseCTA";
import SEO from "../components/SEO";

export default function Course() {
  return (
    <>
    // pages/Course.jsx
<SEO
  title="Courses — Digital Marketing, Design & Content"
  description="Explore ShikshaSutraa's live, mentor-led bootcamps in AI-powered Digital Marketing, Graphic Designing, Canva, and Content Creation. Offline batches in Chandigarh."
  path="/course"
/>
      <CourseHero />
      <CourseCatalog />
      <CourseComparison />
      <CourseCTA />
    </>
  );
}