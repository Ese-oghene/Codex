import React from 'react'
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="border border-[var(--secondary)]/30 p-4 hover:border-[var(--secondary)] transition 
       transition-transform transform hover:scale-105 hover:shadow-lg duration-300 cursor-pointer"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-72 object-cover mb-4"
      />

      <h3 className="font-serif text-lg mb-2">
        {product.name}
      </h3>

      <p className="text-[var(--secondary)] font-semibold">
        {product.price}
      </p>
    </Link>
  )
}

export default ProductCard