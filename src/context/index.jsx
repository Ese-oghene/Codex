import { CartProvider } from "./cart.context";
// import { AuthProvider } from "./auth.context"; (later)

export const AppProviders = ({ children }) => {
  return (
    <CartProvider>
      {/* <AuthProvider> */}
        {children}
      {/* </AuthProvider> */}
    </CartProvider>
  );
};
