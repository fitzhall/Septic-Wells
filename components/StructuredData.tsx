import { siteConfig } from "@/site.config";

interface StructuredDataProps {
  type: "organization" | "local-business" | "service" | "breadcrumb";
  data?: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData: any = {};

  switch (type) {
    case "organization":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.business.name,
        description: siteConfig.seo.description,
        url: typeof window !== "undefined" ? window.location.origin : "",
        telephone: siteConfig.business.phone,
        email: siteConfig.business.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.business.address.street,
          addressLocality: siteConfig.business.address.city,
          addressRegion: siteConfig.business.address.state,
          postalCode: siteConfig.business.address.zip,
          addressCountry: "US",
        },
        areaServed: siteConfig.serviceAreas.map((area) => ({
          "@type": "City",
          name: area,
        })),
        ...(siteConfig.social.facebook && {
          sameAs: [
            siteConfig.social.facebook,
            siteConfig.social.instagram,
            siteConfig.social.linkedin,
          ].filter(Boolean),
        }),
      };
      break;

    case "local-business":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": typeof window !== "undefined" ? window.location.origin : "",
        name: siteConfig.business.name,
        image: typeof window !== "undefined" ? `${window.location.origin}/logo.png` : "",
        description: siteConfig.seo.description,
        telephone: siteConfig.business.phone,
        email: siteConfig.business.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.business.address.street,
          addressLocality: siteConfig.business.address.city,
          addressRegion: siteConfig.business.address.state,
          postalCode: siteConfig.business.address.zip,
          addressCountry: "US",
        },
        geo: {
          "@type": "GeoCoordinates",
          // These would need to be configured for each client
          latitude: "0.0",
          longitude: "0.0",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "07:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "08:00",
            closes: "16:00",
          },
        ],
        areaServed: siteConfig.serviceAreas.map((area) => ({
          "@type": "City",
          name: area,
        })),
      };
      break;

    case "service":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: data?.name || "Septic and Well Services",
        provider: {
          "@type": "LocalBusiness",
          name: siteConfig.business.name,
          telephone: siteConfig.business.phone,
          email: siteConfig.business.email,
        },
        areaServed: siteConfig.serviceAreas.map((area) => ({
          "@type": "City",
          name: area,
        })),
        description: data?.description || siteConfig.seo.description,
      };
      break;

    case "breadcrumb":
      structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: data?.items.map((item: any, index: number) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
