import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const images = [
  "/Images/plenty1kg.jpg",
  "/Images/Garrisugarmilkgroundut.jpg",
  "/Images/eba.jpg",
  "/Images/Whiteyellowgarri.jpg",
];

const About = () => {
  return (
    <>
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-gray-50"
      >
        <section className="px-4 py-10 max-w-5xl mx-auto">
          <motion.h1
            className="text-3xl font-bold text-green-800 text-center mb-6"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            About Joe Providence Garri
          </motion.h1>

          {images.map((img, index) => (
            <motion.div
              key={index}
              className="mb-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={img}
                alt={`Garri visual ${index + 1}`}
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              {index === 1 && (
                <div className="text-center mt-6 px-4">
                  <h2 className="text-xl font-semibold text-green-700 mb-2">
                    Pure & Crunchy Garri – The Taste of Tradition!
                  </h2>
                  <p className="text-gray-700 text-sm leading-relaxed max-w-2xl mx-auto">
                    Looking for the perfect bowl of garri to enjoy as eba or a refreshing drink?
                    Our Pure & Crunchy Garri is carefully processed, 100% natural, and rich in essential nutrients.
                    Whether you love it soaked with sugar, milk, and peanuts or as a smooth swallow with your favorite soup,
                    our garri delivers unmatched taste and quality.
                  </p>
                  <ul className="text-sm text-green-800 font-medium mt-4 space-y-1">
                    <li>✔ Crisp & Crunchy Texture</li>
                    <li>✔ Stone-Free & Sand-Free</li>
                    <li>✔ Rich in Energy & Fiber</li>
                    <li>✔ Perfect for Drinking or Making Eba</li>
                  </ul>
                  <p className="mt-4 text-sm text-gray-600">
                    Enjoy the true taste of home with every spoonful. Available in different sizes – Get yours today!
                  </p>
                </div>
              )}
            </motion.div>
          ))}

          {/* Health Benefits Section */}
          <motion.section
            className="mt-16 bg-white shadow-md p-6 rounded-xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-green-800 mb-4 text-center">
              Health Benefits of Garri
            </h2>
            <ul className="text-gray-700 text-sm space-y-3 list-disc pl-6 max-w-2xl mx-auto">
              <li>Rich source of carbohydrates for energy</li>
              <li>Contains fiber which aids digestion</li>
              <li>Low in fat and cholesterol-free</li>
              <li>Helps to promote gut health</li>
              <li>Affordable and nutritious meal option</li>
            </ul>
          </motion.section>

          {/* Map Section */}
          <motion.section
            className="mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold text-green-700 mb-4 text-center">
              Find Us Here
            </h2>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
                className="w-full h-64 border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.section>
        </section>
      </motion.div>
      <Footer />
      <Navigation />
    </>
  );
};

export default About;
