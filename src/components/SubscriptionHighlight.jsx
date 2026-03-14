import React from 'react';
import { Link } from "react-router-dom";

const SubscriptionHighlight = () => {
  return (
     <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT: TEXT */}
          <div>
            <p className="text-[var(--secondary)] uppercase tracking-widest text-sm mb-4">
              Digital Access
            </p>

            <h2 className="font-serif text-3xl md:text-4xl mb-6">
              Electronic Law Reports & Legal Resources
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Access a comprehensive library of cases, statutes, and legal
              materials through our secure digital platform. Stay informed and
              prepared with up-to-date legal information anytime, anywhere.
            </p>

            <p className="text-gray-400 leading-relaxed mb-10">
              Our subscription plans are designed for lawyers, judges, law
              students, and professionals who need reliable legal resources at
              their fingertips.
            </p>

            <Link
              to="/subscriptions"
              className="inline-block bg-[var(--secondary)] text-black px-10 py-4 uppercase tracking-widest text-sm hover:bg-yellow-500 transition"
            >
              View Subscription Plans
            </Link>
          </div>

          {/* RIGHT: HIGHLIGHT CARD */}
          <div className="border border-[var(--secondary)]/40 p-12 relative">
            <p className="text-[var(--secondary)] text-sm uppercase tracking-widest mb-6">
              What You Get
            </p>

            <ul className="space-y-6 text-gray-300">
              <li>✔ Access to court decisions & judgments</li>
              <li>✔ Updated statutes & regulations</li>
              <li>✔ Searchable digital library</li>
              <li>✔ Secure cloud-based access</li>
              <li>✔ Multi-device compatibility</li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}

export default SubscriptionHighlight