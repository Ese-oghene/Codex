import React from 'react'
import { Link } from "react-router-dom";
import Briefcase from "../assets/images/hero-image.png";
import Wallet from "../assets/images/wallet.png";
import Lawatire from "../assets/images/lawatire.png";
import Lawbook from "../assets/images/lawbook.png";
import Men from "../assets/images/men.png";
import Lawshoe from "../assets/images/lawshoe.png";
import Lawbook2 from "../assets/images/booklaw.png";

// Temporary dummy data
const products = [
  {
    id: 1,
    name: "Corporate Wallet",
    price: "₦45,000",
    image1: Men,
    image2: Lawatire,
  }, 
  {
    id: 2,
    name: "Law Textbook",
    price: "₦15,000",
    image1: Lawbook,
    image2: Lawbook2,
  },
  {
    id: 3,
    name: "Leather Briefcase",
    price: "₦25,000",
     image1: Briefcase,
    image2:  Lawshoe,
  },
];


const FeaturedProducts = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-12">
          <h2 className="font-serif text-3xl">Featured Products</h2>
          <Link to="/shop" className="text-[var(--secondary)] text-sm uppercase">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group border border-[var(--secondary)]/30 p-4 hover:border-[var(--secondary)] transition"
            >
              {/* Image Hover Effect */}
              <div className="relative w-full h-72 mb-4 overflow-hidden">
                <img
                  src={product.image1}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={product.image2}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>

              <h3 className="font-serif text-lg mb-2">{product.name}</h3>
              <p className="text-[var(--secondary)] font-semibold">
                {product.price}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


export default FeaturedProducts