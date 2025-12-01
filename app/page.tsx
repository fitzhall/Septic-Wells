import Link from "next/link";
import { getSiteConfig } from "@/lib/get-site-config";
import { StructuredData } from "@/components/StructuredData";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ demo?: string }>;
}) {
  const params = await searchParams;
  const siteConfig = getSiteConfig(params);
  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="local-business" />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 to-primary-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {siteConfig.business.tagline}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              {siteConfig.about.experience} serving {siteConfig.business.address.city} and surrounding areas with professional septic and well services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center text-lg"
              >
                {siteConfig.cta.primary}
              </Link>
              <a
                href={`tel:${siteConfig.business.phone}`}
                className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-500 transition-colors text-center text-lg border-2 border-white"
              >
                {siteConfig.cta.secondary}: {siteConfig.business.phone}
              </a>
            </div>
          </div>
        </div>
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose {siteConfig.business.name}?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.about.highlights.map((highlight: string, index: number) => (
              <div key={index} className="text-center p-6">
                <div className="text-5xl mb-4">✓</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{highlight}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            We offer comprehensive septic and well services for residential and commercial properties.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {siteConfig.services.map((service: any) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={`/services#${service.id}`}
                  className="text-primary-600 font-semibold hover:text-primary-700"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Areas We Serve
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Proudly serving the following communities:
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {siteConfig.serviceAreas.map((area: string, index: number) => (
              <span
                key={index}
                className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services Banner */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🚨</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">24/7 Emergency Services Available</h2>
          <p className="text-xl mb-6">
            Septic or well emergency? We're here to help, day or night.
          </p>
          <a
            href={`tel:${siteConfig.business.phone}`}
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
          >
            Call Now: {siteConfig.business.phone}
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your septic or well project. Our experienced team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors text-lg"
            >
              {siteConfig.cta.primary}
            </Link>
            <Link
              href="/about"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-lg border-2 border-primary-600"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
