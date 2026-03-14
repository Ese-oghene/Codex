import Book from "../assets/images/booklaw.png";
import Book1 from "../assets/images/lawbook.png";
import Suit from "../assets/images/lawatire.png";
import Shoe from "../assets/images/lawshoe.png";

const productsData = [
  {
    id: 1,
    name: "Law Textbook",
    author: "T. O. Elias",
    price: "₦25,000",
    image: Book,
    category: "Books",
    tags: ["law", "textbook", "legal"],
    description:
      "A comprehensive law textbook for students and legal practitioners.",
  },

   {
    id: 2,
    name: "Tech law book",
    author: "O. T. Elene",
    price: "₦25,000",
    image: Book1,
    category: "Books",
    tags: ["law", "textbook", "legal"],
    description:
      "A comprehensive law textbook for students and legal practitioners.",
  },

  {
    id: 3,
    name: "Corporate Suit",
    price: "₦85,000",
    image: Suit,
    category: "Corporate Wear",
    description:
      "Premium corporate suit designed for court and corporate settings.",
  },
  {
    id: 4,
    name: "Leather Shoes",
    price: "₦45,000",
    image: Shoe,
    category: "Footwear",
    tags: ["shoes", "leather", "formal"],
    description:
      "High-quality leather shoes suitable for long professional hours.",
  },
];

export default productsData;
