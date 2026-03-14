// import React from "react";
// import { useCart } from "../context/cart.context";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const { cart, removeFromCart, clearCart } = useCart();

//   if (cart.length === 0) {
//     return (
//       <section className="min-h-screen flex items-center justify-center text-gray-400 px-4">
//         Your cart is empty
//       </section>
//     );
//   }

//   return (
//     <section className="max-w-4xl mx-auto py-24 px-4 text-white">
//       <h1 className="font-serif text-2xl md:text-3xl mb-8">
//         Your Cart
//       </h1>

//       <div className="space-y-6">
//         {cart.map(item => (
//           <div
//             key={item.id}
//             className="flex flex-col md:flex-row md:items-center md:justify-between
//                        border-b border-[var(--secondary)]/30 pb-4 gap-4"
//           >
//             {/* Product Info */}
//             <div className="flex-1">
//               <p className="font-medium">{item.name}</p>
//               <p className="text-gray-400 text-sm">
//                 {item.quantity} × {item.price}
//               </p>
//             </div>

//             {/* Actions */}
//             <div className="flex items-center justify-between md:justify-end gap-4">
//               <span className="text-[var(--secondary)]">
//                 {item.price}
//               </span>

//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 className="text-red-500 text-sm hover:underline"
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Actions */}
//       <div className="mt-12 flex flex-col md:flex-row gap-4">
//         <button
//           onClick={clearCart}
//           className="w-full md:w-auto bg-red-600 px-6 py-3"
//         >
//           Clear Cart
//         </button>

//         <Link
//           to="/checkout"
//           className="w-full md:w-auto bg-[var(--secondary)] text-black text-center px-8 py-3"
//         >
//           Proceed to Checkout
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default Cart;


import React from "react";
import { useCart } from "../context/cart.context";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  // 🔹 Convert ₦25,000 → 25000
  const parsePrice = price =>
    Number(price.replace(/[₦,]/g, ""));

  const subtotal = cart.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  // 🛒 EMPTY CART
  if (cart.length === 0) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 text-white">
        <div className="text-6xl mb-6">🛒</div>
        <h2 className="text-2xl font-serif mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-400 mb-6">
          Looks like you haven’t added anything yet.
        </p>
        <Link
          to="/shop"
          className="bg-[var(--secondary)] text-black px-8 py-3"
        >
          Continue Shopping
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-5xl mx-auto py-24 px-4 text-white">
      <h1 className="font-serif text-2xl md:text-3xl mb-10">
        Your Cart
      </h1>

      {/* Cart Items */}
      <div className="space-y-6">
        {cart.map(item => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row md:items-center md:justify-between
                       border-b border-[var(--secondary)]/30 pb-6 gap-6"
          >
            {/* Info */}
            <div className="flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="text-gray-400 text-sm">
                {item.price}
              </p>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={() =>
                  item.quantity === 1
                    ? removeFromCart(item.id)
                    : addToCart({ ...item, quantity: -1 })
                }
                className="border px-3 py-1"
              >
                −
              </button>

              <span className="min-w-[24px] text-center">
                {item.quantity}
              </span>

              <button
                onClick={() => addToCart(item)}
                className="border px-3 py-1"
              >
                +
              </button>
            </div>

            {/* Remove */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 text-sm hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="mt-12 flex flex-col md:flex-row md:justify-between gap-6 border-t pt-8">
        <div>
          <p className="text-gray-400">Subtotal</p>
          <p className="text-2xl font-semibold">
            ₦{subtotal.toLocaleString()}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={clearCart}
            className="bg-red-600 px-6 py-3"
          >
            Clear Cart
          </button>

          <Link
            to="/checkout"
            className="bg-[var(--secondary)] text-black px-8 py-3 text-center"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cart;

