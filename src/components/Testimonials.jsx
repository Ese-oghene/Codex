import React from 'react'

import Tunde from "../assets/images/testimonials/ayo.jpg";
import Chioma from "../assets/images/testimonials/pic.jpg";
import Ayo from "../assets/images/testimonials/ayo.jpg";

const testimonials = [
  {
    name: "Barr. Tunde Adebayo",
    role: "Legal Practitioner",
    image: Tunde,
    message:
      "D’Codex has completely changed how I access legal materials. From textbooks to electronic law reports, everything is in one place.",
  },
  {
    name: "Chioma Okeke",
    role: "Law Student",
    image: Chioma,
    message:
      "Finding authentic law textbooks used to be stressful. D’Codex made it easy and reliable.",
  },
  {
    name: "Ayo Williams",
    role: "Corporate Consultant",
    image: Ayo,
    message:
      "The quality of their corporate wear is excellent. Professional, classy, and delivered on time.",
  },
];


const Testimonials = () => {

    return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[var(--secondary)] uppercase tracking-widest text-sm">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl mt-4">
            Trusted by Professionals
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="border border-[var(--secondary)]/30 p-8 text-center hover:border-[var(--secondary)] transition"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-6 border-2 border-[var(--secondary)]"
              />

              {/* Message */}
              <p className="text-gray-300 italic mb-6">
                “{item.message}”
              </p>

              {/* Name */}
              <h4 className="font-semibold text-[var(--secondary)]">
                {item.name}
              </h4>

              {/* Role */}
              <p className="text-sm text-gray-400">
                {item.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );

}

export default Testimonials