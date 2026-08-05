import { Helmet } from "react-helmet-async";

const SITE_NAME = "ShikshaSutraa";
const SITE_URL = "https://shikshasutraa.com"; // domain final hote hi yahan update karna
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`; // 1200x630 image banani hogi, Step 6 dekh

export default function SEO({
  title,
  description,
  path = "/",
  ogImage = DEFAULT_OG_IMAGE,
}) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph — WhatsApp, LinkedIn, Facebook link previews */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}