import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { motion } from 'framer-motion';

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Products = lazy(() => import("./pages/Products"));
const About = lazy(() => import("./pages/About"));
const Cart = lazy(() => import("./pages/Cart"));

// Loader component with zooming effect
const Loader: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen bg-white flex items-center justify-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
    >
      {/* Add your JP logo here */}
      <motion.div
        className="w-20 h-20 bg-green-700 text-white flex items-center justify-center rounded-full"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
      >
        <span className="font-bold text-xl">JP</span>
      </motion.div>
    </motion.div>
  );
};

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Suspense>
  );
};

export default App;
