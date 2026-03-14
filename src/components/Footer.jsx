import React from 'react'
import { Link } from "react-router-dom";
import logo from "../assets/logo/dcodex-logo.png"; // your logo image

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-[var(--secondary)]/30">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="D'Codex Logo"
              className="h-12 mb-6"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              D’Codex is a one-stop marketplace for legal professionals,
              offering premium law books, professional attire, and
              electronic legal resources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[var(--secondary)] uppercase tracking-widest text-sm mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shop" className="hover:text-[var(--secondary)]">Shop</Link></li>
              <li><Link to="/about" className="hover:text-[var(--secondary)]">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--secondary)]">Contact</Link></li>
              <li><Link to="/subscriptions" className="hover:text-[var(--secondary)]">Subscriptions</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-[var(--secondary)] uppercase tracking-widest text-sm mb-6">
              Categories
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/shop" className="hover:text-[var(--secondary)]">Law Textbooks</Link></li>
              <li><Link to="/shop" className="hover:text-[var(--secondary)]">Lawyers’ Robes</Link></li>
              <li><Link to="/shop" className="hover:text-[var(--secondary)]">Corporate Wear</Link></li>
              <li><Link to="/shop" className="hover:text-[var(--secondary)]">Electronic Law Reports</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[var(--secondary)] uppercase tracking-widest text-sm mb-6">
              Contact
            </h4>
            <p className="text-sm text-gray-400 mb-3">
              Email: support@dcodex.com
            </p>
            <p className="text-sm text-gray-400 mb-6">
              Phone: +234 800 000 0000
            </p>

            {/* Social Icons (text for now) */}
            <div className="flex gap-4 text-sm">
              <a href="#" className="hover:text-[var(--secondary)]">Facebook</a>
              <a href="#" className="hover:text-[var(--secondary)]">Twitter</a>
              <a href="#" className="hover:text-[var(--secondary)]">LinkedIn</a>
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--secondary)]/20 py-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} D’Codex. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer