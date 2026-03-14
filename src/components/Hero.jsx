import React from 'react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        
        <h1 className="font-serif text-4xl md:text-6xl leading-tight">
          <span className="text-[var(--secondary)]">
            D’Codex
          </span>
          <br />
         Where Law meets Timeless craftsmanship
        </h1>

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
         Premium professional accessories crafted with you in mind
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="bg-[var(--secondary)] text-black px-8 py-3 uppercase tracking-widest text-sm hover:bg-yellow-500 transition">
            Shop Now
          </button>

          {/* <button className="border border-[var(--secondary)] px-8 py-3 uppercase tracking-widest text-sm hover:bg-[var(--secondary)] hover:text-black transition">
            View Subscriptions
          </button> */}
        </div>

      </div>
    </section>
  )
}

export default Hero
