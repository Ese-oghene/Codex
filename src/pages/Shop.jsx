import React, { useState } from 'react'
import ProductCard from "../components/ProductCard";
// import productsData from "../data/products";
import products from "../data/products"; 


import Book from "../assets/images/booklaw.png";
import Suit from "../assets/images/lawatire.png";
import Shoe from "../assets/images/lawshoe.png";


const categories = [
  "All",
  "Books",
  "Corporate Wear",
  "Footwear",
];


const Shop = () => {

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchTerm, setSearchTerm] = useState("");


  // Filter logic

  const filteredProducts = products.filter(product => {
  // category filter
  const categoryMatch =
    selectedCategory === "All" ||
    product.category === selectedCategory;

  // search filter
  const searchMatch =
   product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  product.author?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  product.brand?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  product.tags?.some(tag =>
    tag.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return categoryMatch && searchMatch;
});


  return (
    <section className="bg-black text-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <h1 className="font-serif text-4xl mb-4">Shop</h1>
          <p className="text-gray-400">
            Browse our collection of legal resources and professional essentials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* Sidebar */}
          <aside className="lg:col-span-1 border border-[var(--secondary)]/30 p-6 h-fit">


          {/* Search */}
        <div className="mb-10">
          <h3 className="uppercase tracking-widest text-sm text-[var(--secondary)] mb-4">
            Search
          </h3>

          <input type="text" placeholder="Search books or author..." value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-transparent border border-[var(--secondary)]/50 text-white
              placeholder-gray-500 outline-none focus:border-[var(--secondary)]"
          />
          
        </div>

            <h3 className="uppercase tracking-widest text-sm text-[var(--secondary)] mb-6">
              Categories
            </h3>

            <ul className="space-y-4 text-sm">
              {categories.map(category => (
                <li
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer transition
                    ${
                      selectedCategory === category
                        ? "text-[var(--secondary)] font-semibold"
                        : "text-gray-300 hover:text-[var(--secondary)]"
                    }`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </aside>

          {/* Products Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="text-gray-400">
                No products found.
              </p>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Shop