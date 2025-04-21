import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

// Define Product type
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number; // Added quantity field
};

// Sample product data
const products: Product[] = [
  {
    id: 1,
    name: "Small Garri Pack",
    description: "Perfect for personal use (1kg).",
    price: 1200,
    image: "/Images/1kg upclose.jpg",
    quantity: 1
  },
  {
    id: 2,
    name: "Medium Garri Pack",
    description: "Ideal for families (2kg).",
    price:2400,
    image: "/Images/plenty1kg.jpg",
    quantity: 1
  },
  {
    id: 3,
    name: "Big Garri Pack",
    description: "Great for resellers or big homes (5kg).",
    price: 6000,
    image: "/Images/garriproduction.jpg",
    quantity: 1
  },
  {
    id: 4,
    name: "Milk Garri",
    description: "New improved Garri garnished with Milk",
    price: 2000,
    image: "/Images/rawgarri.jpg",
    quantity: 1
  },
];

const ProductPage: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Add item to cart with quantity handling
  const addToCart = (product: Product) => {
    // Check if the product already exists in the cart
    const existingProduct = cart.find((item) => item.id === product.id);
    let updatedCart;

    if (existingProduct) {
      // If the product exists, increase the quantity
      updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // If the product does not exist, add it with quantity 1
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.location.reload()
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 px-4 py-10">
        <motion.h1
          className="text-2xl font-bold text-green-800 text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Our Garri Products
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden"
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-60 w-full object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-green-700">
                  {product.name}
                </h2>
                <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                <p className="text-green-900 font-bold mt-2">
                  ₦{product.price.toLocaleString()}
                </p>
                <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full bg-green-700 text-white py-2 rounded-full hover:bg-green-800 transition"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
      <Navigation />
    </>
  );
};

export default ProductPage;
