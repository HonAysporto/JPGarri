import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800  text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Brand */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
         
        >
          <h2 className="text-2xl font-bold mb-2">Joe Providence Garri</h2>
          <p className="text-sm text-gray-200">
            Premium quality Garri delivered to your doorstep with care and speed.
          </p>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-2 text-sm text-gray-200">
            <li className="flex items-center gap-2"><Phone size={16} /> +234 703 551 2754</li>
            <li className="flex items-center gap-2"><Mail size={16} /> ekundayoj13@gmail.com</li>
          </ul>
        </motion.div>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-300"><Facebook size={20} /></a>
            <a href="#" className="hover:text-green-300"><Instagram size={20} /></a>
          </div>
        </motion.div>
      </div>

      <div className="text-center text-xs text-gray-300 mt-10 border-t border-green-700 pt-4">
        &copy; {new Date().getFullYear()} Joe Providence Garri. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
