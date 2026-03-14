// import React from 'react'
// import { useCart } from "../context/cart.context";
// import { useNavigate } from "react-router-dom";


// const Checkout = () => {

//    const { cart, clearCart } = useCart();
//   const navigate = useNavigate();

//   const total = cart.reduce((sum, item) => {
//     const price = Number(item.price.replace(/[₦,]/g, ""));
//     return sum + price * item.quantity;
//   }, 0);

//   if (cart.length === 0) {
//     return (
//       <section className="min-h-screen flex items-center justify-center text-gray-400">
//         Your cart is empty
//       </section>
//     );
//   }


//   return (
//     <section className="bg-black text-white min-h-screen py-24">
//       <div className="max-w-3xl mx-auto px-6">
//         <h1 className="font-serif text-3xl mb-10">Checkout</h1>

//         {/* Order Summary */}
//         <div className="space-y-6 mb-10">
//           {cart.map(item => (
//             <div
//               key={item.id}
//               className="flex justify-between border-b border-[var(--secondary)]/30 pb-4"
//             >
//               <span>
//                 {item.name} × {item.quantity}
//               </span>
//               <span>{item.price}</span>
//             </div>
//           ))}
//         </div>

//         {/* Total */}
//         <div className="flex justify-between text-xl mb-12">
//           <span>Total</span>
//           <span className="text-[var(--secondary)]">
//             ₦{total.toLocaleString()}
//           </span>
//         </div>

//         {/* Actions */}
//         <button
//           onClick={() => {
//             clearCart();
//             navigate("/");
//           }}
//           className="w-full bg-[var(--secondary)] text-black py-4 text-lg"
//         >
//           Place Order
//         </button>
//       </div>
//     </section>
//   )
// }

// export default Checkout


import React from "react";
import { useCart } from "../context/cart.context";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  // 🔹 Convert ₦25,000 → 25000
  const parsePrice = price =>
    Number(price.replace(/[₦,]/g, ""));

  const subtotal = cart.reduce(
    (sum, item) => sum + parsePrice(item.price) * item.quantity,
    0
  );

  // 🚫 Guard: no checkout with empty cart
  if (cart.length === 0) {
    return (
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 text-white">
        <h2 className="text-2xl font-serif mb-4">
          No items to checkout
        </h2>
        <Link
          to="/shop"
          className="bg-[var(--secondary)] text-black px-8 py-3"
        >
          Go to Shop
        </Link>
      </section>
    );
  }

  const handleSubmit = e => {
    e.preventDefault();

    // 🚧 Later: payment + backend
    clearCart();
    navigate("/");
    alert("Order placed successfully 🎉");
  };

  return (
    <section className="max-w-6xl mx-auto py-24 px-4 text-white">
      <h1 className="font-serif text-2xl md:text-3xl mb-10">
        Checkout
      </h1>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-3 gap-12"
      >
        {/* CUSTOMER INFO */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl font-medium mb-4">
            Customer Details
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              required
              placeholder="First Name"
              className="bg-transparent border px-4 py-3"
            />
            <input
              required
              placeholder="Last Name"
              className="bg-transparent border px-4 py-3"
            />
          </div>

          <input
            required
            type="email"
            placeholder="Email Address"
            className="bg-transparent border px-4 py-3 w-full"
          />

          <input
            required
            placeholder="Phone Number"
            className="bg-transparent border px-4 py-3 w-full"
          />

          <textarea
            required
            placeholder="Delivery Address"
            rows="4"
            className="bg-transparent border px-4 py-3 w-full"
          />
        </div>

        {/* ORDER SUMMARY */}
        <div className="border border-[var(--secondary)]/30 p-6 h-fit">
          <h2 className="text-xl mb-6 font-medium">
            Order Summary
          </h2>

          <div className="space-y-4 text-sm">
            {cart.map(item => (
              <div
                key={item.id}
                className="flex justify-between"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>
                  ₦
                  {(
                    parsePrice(item.price) * item.quantity
                  ).toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-[var(--secondary)]/30 my-6" />

          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>₦{subtotal.toLocaleString()}</span>
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-[var(--secondary)] text-black py-3"
          >
            Place Order
          </button>
        </div>
      </form>
    </section>
  );
};

export default Checkout;
