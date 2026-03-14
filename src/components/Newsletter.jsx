import React, { useState } from "react";
import api from "../services/api";

const Newsletter = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

 const handleSubmit = async (e) => {

    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await api.post("/newsletter/subscribe", { email });
      setMessage(res.data.message);
      setEmail("");
    } catch (err) {
      if (err.response?.status === 409) {
        setMessage("You are already subscribed.");
      } else {
        setMessage("Subscription failed. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };



  return (
 <section className="bg-black text-white py-24 border-t border-[var(--secondary)]/20">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <h2 className="font-serif text-3xl mb-4">
          Join the D’Codex Newsletter
        </h2>

        <p className="text-gray-400 mb-10">
          Get updates on new arrivals, legal resources, and exclusive offers.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="
            w-full sm:w-80
            px-5 py-3
            bg-transparent
            border border-[var(--secondary)]/50
            text-white
            placeholder-gray-500
            outline-none
            focus:border-[var(--secondary)]
            transition
        "
        />

          <button
            type="submit"
            disabled={loading}
            className="bg-[var(--secondary)] text-black px-8 py-3 uppercase tracking-widest text-sm hover:bg-yellow-500 transition"
          >
            {loading ? "Subscribing..." : "Subscribe"}
          </button>
        </form>

         {message && (
          <p className="mt-6 text-sm text-[var(--secondary)]">
            {message}
          </p>
        )}

      </div>
    </section>
  )
}

export default Newsletter