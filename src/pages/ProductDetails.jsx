import React from 'react'
import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/cart.context";

const ProductDetails = () => {
  
   const { addToCart } = useCart();

   const { id } = useParams();

  const product = products.find(
    item => item.id === Number(id)
  );

    if (!product) {
    return (
      <section className="bg-black text-white min-h-screen flex items-center justify-center">
        Product not found
      </section>
    );
  }


  return (
     <section className="bg-black text-white min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-6">

        <Link
          to="/shop"
          className="text-[var(--secondary)] mb-10 inline-block"
        >
          ← Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[450px] object-cover border border-[var(--secondary)]/30"
          />

          {/* Details */}
          <div>
            <h1 className="font-serif text-4xl mb-4">
              {product.name}
            </h1>

            <p className="text-[var(--secondary)] text-2xl mb-6">
              {product.price}
            </p>

            <p className="text-gray-300 mb-10">
              {product.description}
            </p>

            <button  onClick={() => addToCart(product)} className="bg-[var(--secondary)] text-black px-8 py-3">
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProductDetails