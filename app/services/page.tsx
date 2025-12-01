import Link from "next/link";
import { siteConfig } from "@/site.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `Services | ${siteConfig.business.name}`,
  description: `Professional septic and well drilling services including ${siteConfig.services.map(s => s.name.toLowerCase()).join(', ')}.`,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Comprehensive septic and well solutions for residential and commercial properties.
            {siteConfig.about.experience} of reliable service.
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-16">
            {siteConfig.services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center scroll-mt-24`}
              >
                <div className="flex-1">
                  <div className="text-6xl mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">{service.name}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                  {/* Service-specific details */}
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="font-semibold text-lg mb-3 text-gray-900">What We Offer:</h3>
                    <ul className="space-y-2 text-gray-700">
                      {getServiceDetails(service.id).map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary-600 mr-2">✓</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Request Service
                  </Link>
                </div>

                <div className="flex-1">
                  <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg aspect-square flex items-center justify-center text-8xl">
                    {service.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Service Guarantee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-lg mb-2">Fast Response</h3>
              <p className="text-gray-600 text-sm">Quick turnaround on all service requests</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💯</div>
              <h3 className="font-bold text-lg mb-2">Quality Work</h3>
              <p className="text-gray-600 text-sm">Professional results every time</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="font-bold text-lg mb-2">Licensed & Insured</h3>
              <p className="text-gray-600 text-sm">Fully certified and covered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold text-lg mb-2">Fair Pricing</h3>
              <p className="text-gray-600 text-sm">Competitive rates with no hidden fees</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Service? We're Here to Help
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate or emergency service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-lg"
            >
              {siteConfig.cta.primary}
            </Link>
            <a
              href={`tel:${siteConfig.business.phone}`}
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-500 transition-colors text-lg border-2 border-white"
            >
              Call: {siteConfig.business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// Helper function to get service-specific details
function getServiceDetails(serviceId: string): string[] {
  const details: Record<string, string[]> = {
    "septic-installation": [
      "Complete system design and planning",
      "Soil testing and site evaluation",
      "Permit acquisition assistance",
      "Professional installation by certified technicians",
      "Residential and commercial systems",
      "Compliance with all local regulations",
    ],
    "septic-repair": [
      "Diagnostic inspections",
      "Tank pumping and cleaning",
      "Drain field repair and replacement",
      "Emergency repairs",
      "Preventive maintenance programs",
      "System upgrades and modifications",
    ],
    "well-drilling": [
      "Residential and commercial drilling",
      "Water quality testing",
      "Well location and siting",
      "Deep and shallow wells",
      "Modern drilling equipment",
      "Compliance with state regulations",
    ],
    "well-pump": [
      "Pump installation and replacement",
      "Pressure system setup",
      "Pump repairs and maintenance",
      "Water pressure optimization",
      "Energy-efficient pump options",
      "Emergency pump service",
    ],
    "inspections": [
      "Pre-purchase inspections",
      "System health assessments",
      "Water quality testing",
      "Compliance inspections",
      "Detailed reporting",
      "Expert recommendations",
    ],
    "emergency": [
      "24/7 availability",
      "Rapid response time",
      "Immediate problem assessment",
      "Emergency repairs",
      "Backup and temporary solutions",
      "Expert troubleshooting",
    ],
  };

  return details[serviceId] || [];
}
