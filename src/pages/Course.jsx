import CourseHero from "../components/section/CourseHero";
import CourseCatalog from "../components/section/CourseCatalog";
import CourseComparison from "../components/section/CourseComparison";
import CourseCTA from "../components/section/CourseCTA";

export default function Course() {
  return (
    <>
      <CourseHero />
      <CourseCatalog />
      <CourseComparison />
      <CourseCTA />
    </>
  );
}