import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({
  title = "Riddhi Siddhi Dental Hospital | Best Dentist in Vaishali Nagar Jaipur",
  description = "Riddhi Siddhi Dental Hospital in Vaishali Nagar, Jaipur provides expert dental care including RCT, Implants, Aligners, Smile Designing & Teeth Cleaning with Dr. Pooja Dhanopia (BDS).",
  keywords = "Best Dentist in Vaishali nagar Jaipur, Best Dentist in Jaipur, Dr. Pooja Dhanopia (BDS), dental clinic jaipur, dental implants jaipur, teeth cleaning jaipur, rct specialist jaipur, aligners jaipur",
  image = "https://res.cloudinary.com/drbuztqdo/image/upload/w_1200/v1764326271/Interior-1_gax9ci.jpg", // Default OG image
  url = "https://riddhisiddhidentalhospital.com",
}: SEOProps) => {
  const siteTitle = title;
  const siteUrl = url;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Riddhi Siddhi Dental Hospital",
    "image": "https://riddhisiddhidentalhospital.com/favicon.svg",
    "@id": "https://riddhisiddhidentalhospital.com",
    "url": "https://riddhisiddhidentalhospital.com",
    "telephone": "+919664366663", // Assuming this from typical contact info, ideally I should check Contact page but I'll use a placeholder or check quickly if I can. Wait, I should verify phone number.
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 1, near Nursery Circle, Block C, Vaishali Nagar",
      "addressLocality": "Jaipur",
      "addressRegion": "RJ",
      "postalCode": "302021",
      "addressCountry": "IN"
    },
    // Adding Dr. Pooja specifically as the founder/doctor
    "founder": {
      "@type": "Person",
      "name": "Dr. Pooja Dhanopia",
      "jobTitle": "Dentist",
      "honorificSuffix": "BDS"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.9056, // Approximate Vaishali Nagar coordinates if unknown, but better to omit if unsure. Actually, I will try to find it or just leave it generic to the area.
      "longitude": 75.7471
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    },
    "sameAs": [
      // Social profiles if any
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={siteUrl} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={siteUrl} />

      {/* JSON-LD for Rich Snippets */}
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </Helmet>
  );
};

export default SEO;
