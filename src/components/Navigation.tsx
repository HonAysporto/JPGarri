import { House, Info, ShoppingBag } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navLinks = [
    { to: "/", label: "Home", icon: <House size={20} />, delay: 0.2 },
    { to: "/products", label: "Products", icon: <ShoppingBag size={20} />, delay: 0.4 },
    { to: "/about", label: "About", icon: <Info size={20} />, delay: 0.6 },
 
  ];

  return (
    <nav className="sticky w-full bottom-0 left-0 right-0 bg-white border-t shadow-inner flex justify-around py-2 z-50">
      {navLinks.map(({ to, label, icon, delay }) => {
        const isActive = currentPath === to;

        return (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, type: "spring" }}
          >
            <Link
              to={to}
              className={`flex flex-col items-center ${
                isActive ? "text-green-700 font-medium" : "text-gray-600"
              }`}
            >
              {icon}
              <span className="text-xs">{label}</span>
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
};

export default Navigation;
