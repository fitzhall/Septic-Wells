/**
 * Demo Configurations
 *
 * Add potential client demos here. When you send them a link like:
 * https://yoursite.vercel.app?demo=hills
 *
 * It will show their customized version
 */

export const demoConfigs: Record<string, any> = {
  hills: {
    business: {
      name: "Hill's Septic & Wells",
      tagline: "Expert Septic & Well Drilling Services",
      phone: "(352) 555-1234",
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
    serviceAreas: ["Ocala", "Silver Springs", "Belleview", "Dunnellon", "Marion County"],
    seo: {
      title: "Hill's Septic & Wells | Ocala, FL",
      description: "Professional septic and well services in Ocala, FL",
      keywords: "septic ocala, well drilling ocala, septic repair florida",
      author: "Hill's Septic & Wells",
    },
    about: {
      yearEstablished: "2003",
      experience: "Over 20 years",
    },
  },

  abc: {
    business: {
      name: "ABC Septic Services",
      tagline: "Reliable Septic Solutions Since 1995",
      phone: "(555) 987-6543",
      email: "contact@abcseptic.com",
      address: {
        street: "456 Oak Avenue",
        city: "Tampa",
        state: "FL",
        zip: "33602",
      },
      hours: {
        weekday: "Monday - Friday: 8:00 AM - 5:00 PM",
        weekend: "Saturday: 9:00 AM - 2:00 PM",
        sunday: "Sunday: Closed",
      },
    },
    serviceAreas: ["Tampa", "Brandon", "Riverview", "Plant City", "Hillsborough County"],
    seo: {
      title: "ABC Septic Services | Tampa, FL",
      description: "Professional septic services in Tampa Bay area",
      keywords: "septic tampa, septic repair tampa, septic installation florida",
      author: "ABC Septic Services",
    },
    about: {
      yearEstablished: "1995",
      experience: "Over 25 years",
    },
  },

  // Add more demo clients here as needed
  template: {
    business: {
      name: "[Company Name]",
      tagline: "Expert Septic & Well Drilling Services",
      phone: "(555) 123-4567",
      email: "info@company.com",
      address: {
        street: "123 Main Street",
        city: "Your City",
        state: "ST",
        zip: "12345",
      },
      hours: {
        weekday: "Monday - Friday: 7:00 AM - 6:00 PM",
        weekend: "Saturday: 8:00 AM - 4:00 PM",
        sunday: "Sunday: Closed",
      },
    },
    serviceAreas: ["City 1", "City 2", "City 3", "County Name"],
    seo: {
      title: "Company Name | Septic & Well Services",
      description: "Professional septic and well drilling services in your area",
      keywords: "septic installation, well drilling, septic repair",
      author: "Company Name",
    },
    about: {
      yearEstablished: "2000",
      experience: "Over 20 years",
    },
  },
};
