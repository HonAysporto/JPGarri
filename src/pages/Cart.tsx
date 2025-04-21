import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Navigation from "../components/Navigation";

// Define Product type
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  quantity: number;
};

const Cart: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]); // State for the cart

  // Load the cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Remove item from cart
  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Calculate total price and quantity
  const getTotal = () => {
    let totalPrice = 0;
    let totalQuantity = 0;
    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
      totalQuantity += item.quantity;
    });
    return { totalPrice, totalQuantity };
  };

  const { totalPrice, totalQuantity } = getTotal();

  // Function to generate the WhatsApp message
  const generateWhatsAppMessage = () => {
    const productDetails = cart
      .map(
        (item) =>
          `${item.name} (Qty: ${item.quantity}) - ₦${(item.price * item.quantity).toLocaleString()}`
      )
      .join("\n");

     
      

    const message = `Order Details:\n\n${productDetails}\n\nTotal Quantity: ${totalQuantity}\nTotal Price: ₦${totalPrice.toLocaleString()}\n\nPlease confirm the order.`;
  
    return encodeURIComponent(message);
  };

  // Function to open WhatsApp with the order message
  const handleWhatsAppRedirect = () => {
    const message = generateWhatsAppMessage();
    const phoneNumber = "2348146451247"; // Replace with the WhatsApp phone number (including country code)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    console.log(message);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <motion.h1
        className="text-3xl font-bold text-green-800 text-center mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your Cart
      </motion.h1>

      {cart.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cart.map((product, index) => (
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
                  className="h-48 w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-green-700">{product.name}</h2>
                  <p className="text-sm text-gray-600 mt-1">{product.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-green-900 font-bold">
                      ₦{(product.price * product.quantity).toLocaleString()}
                    </p>
                    <p className="text-gray-600">Qty: {product.quantity}</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="mt-4 w-full bg-red-600 text-white py-2 rounded-full hover:bg-red-700 transition"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-8 max-w-6xl mx-auto bg-white p-6 shadow-lg rounded-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-between">
              <h3 className="text-xl font-semibold text-green-700">Total Quantity</h3>
              <p className="text-green-900 font-bold">{totalQuantity}</p>
            </div>
            <div className="flex justify-between mt-4">
              <h3 className="text-xl font-semibold text-green-700">Total Price</h3>
              <p className="text-green-900 font-bold">
                ₦{totalPrice.toLocaleString()}
              </p>
            </div>
            <button
              onClick={handleWhatsAppRedirect}
              className="mt-6 w-full bg-green-700 text-white py-2 rounded-full hover:bg-green-800 transition"
            >
              Proceed to WhatsApp
            </button>
          </motion.div>
        </>
      ) : (
        <motion.p
          className="text-center text-lg text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Your cart is empty. Add some items to the cart!
        </motion.p>
      )}
    </div>
       <Navigation />
       </>
  );
};

export default Cart;
