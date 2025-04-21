import { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Define the Product type
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
};

const Header: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const cartItems: Product[] = JSON.parse(cart);
      const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
      setCount(totalQuantity);
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md px-4 py-3 flex items-center justify-between">
      {/* Left: Logo + Brand */}
      <div className="flex items-center space-x-2">
        {/* Motioned Inline SVG JP Logo */}
        <motion.div
          className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <span className="text-white font-bold text-sm">JP</span>
        </motion.div>
        <span className="text-lg font-bold text-green-800">Joe Providence</span>
      </div>

      {/* Right: Cart */}
      <div className="relative">
        <Link to="/cart">
          <ShoppingCart className="w-6 h-6 text-green-800" />
        </Link>
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
            {count}
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
