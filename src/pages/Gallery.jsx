import GalleryHero from "../components/section/GalleryHero";
import GalleryShowcase from "../components/section/GalleryShowcase";
import GalleryCTA from "../components/section/GalleryCTA";
import SEO from "../components/SEO";

export default function Gallery() {
  return (
    <>
      // pages/Gallery.jsx
<SEO
  title="Gallery — Moments from Our Campus"
  description="Photos and videos from ShikshaSutraa's classrooms, hackathons, demo days, and workshops."
  path="/gallery"
/>
      <GalleryHero />
      <GalleryShowcase />
      <GalleryCTA />
    </>
  );
}