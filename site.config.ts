/**
 * Site Configuration
 *
 * Customize this file for each client deployment.
 * This configuration controls all the business-specific content on the website.
 */

export const siteConfig = {
  // Basic Business Information
  business: {
    name: "Hill's Septic & Wells",
    tagline: "Expert Septic & Well Drilling Services",
    phone: "(555) 123-4567",
    email: "info@hillsseptic.com",
    address: {
      street: "123 Main Street",
      city: "Ocala",
      state: "FL",
      zip: "34470",
    },
    hours: {
      weekday: "Monday - Friday: 7:00 AM - 6:00 PM",
      weekend: "Saturday: 8:00 AM - 4:00 PM",
      sunday: "Sunday: Closed",
    },
  },

  // Service Areas
  serviceAreas: [
    "Ocala",
    "Silver Springs",
    "Belleview",
    "Dunnellon",
    "Marion County",
  ],

  // Social Media Links (optional)
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },

  // SEO Configuration
  seo: {
    title: "Hill's Septic & Wells | Septic & Well Drilling Services",
    description: "Professional septic system installation, repair, and well drilling services. Licensed and insured with over 20 years of experience serving your local area.",
    keywords: "septic installation, well drilling, septic repair, septic pumping, water well, septic service",
    author: "Hill's Septic & Wells",
  },

  // Service Offerings
  services: [
    {
      id: "septic-installation",
      name: "Septic Installation",
      description: "Complete septic system design and installation for residential and commercial properties.",
      icon: "🏗️",
    },
    {
      id: "septic-repair",
      name: "Septic Repair & Maintenance",
      description: "Expert diagnosis and repair of septic system issues. Regular maintenance plans available.",
      icon: "🔧",
    },
    {
      id: "well-drilling",
      name: "Well Drilling",
      description: "Professional water well drilling services using modern equipment and techniques.",
      icon: "💧",
    },
    {
      id: "well-pump",
      name: "Well Pump Service",
      description: "Installation, repair, and replacement of well pumps and pressure systems.",
      icon: "⚙️",
    },
    {
      id: "inspections",
      name: "Inspections & Testing",
      description: "Comprehensive septic and well inspections for real estate transactions and compliance.",
      icon: "🔍",
    },
    {
      id: "emergency",
      name: "Emergency Services",
      description: "24/7 emergency response for septic and well system failures.",
      icon: "🚨",
    },
  ],

  // About Section
  about: {
    yearEstablished: "2003",
    experience: "Over 20 years",
    highlights: [
      "Licensed & Insured",
      "EPA Certified Technicians",
      "Free Estimates",
      "Emergency Services Available",
      "Residential & Commercial",
      "Locally Owned & Operated",
    ],
  },

  // Call-to-Action
  cta: {
    primary: "Get Free Estimate",
    secondary: "Call Now",
  },

  // Google Maps Embed (optional - replace with actual embed URL)
  googleMapsEmbed: "",
};

export type SiteConfig = typeof siteConfig;
