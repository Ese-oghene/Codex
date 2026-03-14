import React from 'react';
import { Link } from "react-router-dom";

import Book1Front from "../assets/images/booklaw.png";
import Book1Back from "../assets/images/lawbook.png";

import Book2Front from "../assets/images/ddd.png";
import Book2Back from "../assets/images/glasses.png";

import Book3Front from "../assets/images/lawstand.png";
import Book3Back from "../assets/images/booklaw.png";

import Book4Front from "../assets/images/high.png";
import Book4Back from "../assets/images/glasses.png";
const books = [
  {
    id: 1,
    title: "Principles of Nigerian Law",
    price: "₦18,000",
    image1: Book1Front,
    image2: Book1Back,
  },
  {
    id: 2,
    title: "Criminal Procedure Act Explained",
    price: "₦22,000",
    image1: Book2Front,
    image2: Book2Back,
  },

    {
    id: 3,
    title: "Criminal Procedure Act Explained",
    price: "₦22,000",
    image1: Book3Front,
    image2: Book3Back,
  },

    {
    id: 4,
    title: "Criminal Procedure Act Explained",
    price: "₦22,000",
    image1: Book4Front,
    image2: Book4Back,
  },
];

const LatestBooks = () => {
  return (
 <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-[var(--secondary)] uppercase tracking-widest text-sm">
              New Arrivals
            </p>
            <h2 className="font-serif text-3xl mt-2">
              Latest Law Books
            </h2>
          </div>

          <Link
            to="/shop"
            className="text-[var(--secondary)] uppercase tracking-widest text-sm"
          >
            View All →
          </Link>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {books.map((book) => (
            <div
              key={book.id}
              className="group border border-[var(--secondary)]/30 p-4 hover:border-[var(--secondary)] transition"
            >
              {/* Image Hover */}
              <div className="relative w-full h-72 mb-4 overflow-hidden">
                <img
                  src={book.image1}
                  alt={book.title}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={book.image2}
                  alt={book.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>

              <h3 className="font-serif text-sm mb-2 leading-snug">
                {book.title}
              </h3>

              <p className="text-[var(--secondary)] font-semibold">
                {book.price}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default LatestBooks