import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cart.context";
import logo from "../assets/logo/dcodex-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[var(--primary)] text-white sticky top-0 z-50 border-b border-[var(--secondary)]/30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="D'Codex Logo"
              className="h-10 md:h-15 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-sm uppercase tracking-widest">
            <li><Link to="/" className="hover:text-[var(--secondary)]">Home</Link></li>
            <li><Link to="/shop" className="hover:text-[var(--secondary)]">Shop</Link></li>
            <li><Link to="/subscriptions" className="hover:text-[var(--secondary)]">Subscriptions</Link></li>
            <li><Link to="/about" className="hover:text-[var(--secondary)]">About</Link></li>
            <li><Link to="/contact" className="hover:text-[var(--secondary)]">Contact</Link></li>
          </ul>

          {/* Right */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <Link to="/cart" className="relative hidden md:block">
              🛒
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-2xl"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-[#0f172a] text-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-6 flex justify-between items-center border-b border-gold/30">
          <span className="font-serif text-xl text-gold">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="text-2xl"
          >
            ×
          </button>
        </div>

        <ul className="flex flex-col p-6 space-y-6 uppercase tracking-wider">
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/shop" onClick={() => setOpen(false)}>Shop</Link></li>
          <li><Link to="/subscriptions" onClick={() => setOpen(false)}>Subscriptions</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>

          {/* Mobile Cart */}
          <li className="flex items-center justify-between">
            <Link to="/cart" onClick={() => setOpen(false)}>Cart</Link>
            {totalItems > 0 && (
              <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
