// import { createContext, useContext, useState } from "react";

// const CartContext = createContext(null);

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart((prev) => {
//       const existing = prev.find(item => item.id === product.id);

//       if (existing) {
//         return prev.map(item =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       }

//       return [...prev, { ...product, quantity: 1 }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCart(prev => prev.filter(item => item.id !== id));
//   };

//   const clearCart = () => setCart([]);

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within CartProvider");
//   }
//   return context;
// };


import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

const CART_STORAGE_KEY = "dcodex_cart";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const storedCart = localStorage.getItem(CART_STORAGE_KEY);
      return storedCart ? JSON.parse(storedCart) : [];
    } catch {
      return [];
    }
  });

  // 🔹 Persist cart whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);

      if (existing) {
      return prev.map(item =>
        item.id === product.id
          ? {
              ...item,
              quantity:
                product.quantity === -1
                  ? item.quantity - 1
                  : item.quantity + 1,
            }
          : item
      ).filter(item => item.quantity > 0);
    }

      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem(CART_STORAGE_KEY);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

