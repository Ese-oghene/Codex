import React from 'react'

const features = [
  {
    title: "Curated Legal Resources",
    description:
      "Carefully selected law textbooks, materials, and references tailored for legal professionals.",
  },
  {
    title: "Professional-Grade Attire",
    description:
      "Premium wigs, gowns, suits, and corporate wear designed to meet professional standards.",
  },
  {
    title: "Trusted Digital Law Reports",
    description:
      "Subscription-based access to up-to-date cases and laws anytime, anywhere.",
  },
  {
    title: "Secure Payments & Delivery",
    description:
      "Safe payment gateways with reliable nationwide delivery you can trust.",
  },
];

const WhyChoose = () => {
  return (
   <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-[var(--secondary)] uppercase tracking-widest text-sm">
            Why Choose Us
          </p>

          <h2 className="font-serif text-3xl md:text-4xl mt-4">
            Why Choose D’Codex
          </h2>

          <p className="text-gray-400 mt-6">
            D’Codex is built to serve the legal and professional community with
            trusted resources, premium products, and reliable digital solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="border border-[var(--secondary)]/30 p-8 hover:border-[var(--secondary)] transition"
            >
              <h3 className="font-serif text-xl mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default WhyChoose