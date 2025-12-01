import Link from "next/link";
import { siteConfig } from "@/site.config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.business.name}`,
  description: `Learn about ${siteConfig.business.name} - ${siteConfig.about.experience} of professional septic and well drilling services. Licensed, insured, and locally owned.`,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Your trusted partner for septic and well services since {siteConfig.about.yearEstablished}
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
            <div className="text-lg text-gray-700 space-y-4">
              <p>
                Founded in {siteConfig.about.yearEstablished}, {siteConfig.business.name} has been serving the{" "}
                {siteConfig.business.address.city} community and surrounding areas with dedication and expertise.
                What started as a small, family-owned operation has grown into one of the region's most trusted
                septic and well service providers.
              </p>
              <p>
                We understand that septic and well systems are critical to your property's functionality and
                your family's health. That's why we've built our reputation on quality workmanship, honest
                communication, and reliable service.
              </p>
              <p>
                Today, our team of certified technicians continues to uphold the values that have made us
                successful: integrity, expertise, and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose {siteConfig.business.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {siteConfig.about.highlights.map((highlight, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="text-5xl mb-4 text-primary-600">✓</div>
                <h3 className="text-xl font-semibold text-gray-900">{highlight}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">
                {new Date().getFullYear() - parseInt(siteConfig.about.yearEstablished)}+
              </div>
              <div className="text-gray-600 text-lg">Years in Business</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600 text-lg">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600 text-lg">Emergency Service</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Our Commitment to You
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary-700">Quality Workmanship</h3>
              <p className="text-gray-700">
                We use only the highest quality materials and latest techniques to ensure your septic
                and well systems function properly for years to come.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary-700">Transparent Pricing</h3>
              <p className="text-gray-700">
                No hidden fees or surprise charges. We provide detailed estimates before beginning
                any work so you know exactly what to expect.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary-700">Expert Technicians</h3>
              <p className="text-gray-700">
                Our team is fully licensed, insured, and EPA certified. We invest in ongoing training
                to stay current with industry best practices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-primary-700">Customer Service</h3>
              <p className="text-gray-700">
                From your first call to project completion, we're committed to providing exceptional
                service and clear communication every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900">
            Serving Your Community
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We're proud to serve the following areas with professional septic and well services:
          </p>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {siteConfig.serviceAreas.map((area, index) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust {siteConfig.business.name} for their
            septic and well service needs.
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
