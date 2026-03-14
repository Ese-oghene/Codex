import { Link } from "react-router-dom";

const categories = [
  {
    title: "Law Textbooks & Materials",
    description: "Hard copy and digital legal resources for professionals.",
  },
  {
    title: "Lawyers’ Robes",
    description: "Wigs and gowns for lawyers and judges.",
  },
  {
    title: "Corporate Wear",
    description: "Premium suits and corporate footwear for men and women.",
  },
  {
    title: "Electronic Law Reports",
    description: "Subscription-based access to cases and laws.",
  },
];

const CategorySection = () => {
  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <h2 className="text-center font-serif text-3xl md:text-4xl mb-16">
          What We Offer
        </h2>

        {/* BOXES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to="/shop"
              className="border border-[var(--secondary)]/30 p-8 hover:border-[var(--secondary)] transition"
            >
              <h3 className="font-serif text-xl mb-4 text-[var(--secondary)]">
                {category.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {category.description}
              </p>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CategorySection;
