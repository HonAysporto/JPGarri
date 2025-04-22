import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Header from '../components/Header';
import CustomerReviewsSection from '../components/CustomerReviews';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

const carouselImages: string[] = [
  '/Images/plenty1kg.jpg',
  '/Images/Whiteyellowgarri.jpg',
  '/Images/inpro.jpg',
  '/Images/rawgarri.jpg',
];

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    position: 'absolute',
  }),
  center: {
    x: 0,
    opacity: 1,
    position: 'relative',
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    position: 'absolute',
  }),
};

const whyChooseUsCards = [
  {
    title: 'Organic & Fresh',
    body: 'We source only the freshest and organically grown garri for our customers.',
    image: '/Images/rawgarri2.jpg',
  },
  {
    title: 'Customer Satisfaction',
    body: 'Your satisfaction is our priority. We ensure top-notch quality in every order.',
    image: '/Images/Garrisugarmilkgroundut.jpg',
  },
  {
    title: 'Fast Delivery',
    body: 'Enjoy fast and reliable delivery services to your doorstep, anywhere in the region.',
    image: 'https://cdn-icons-png.flaticon.com/512/1046/1046784.png',
  },
];

const Home: React.FC = () => {
  const [[current, direction], setCurrent] = useState<[number, number]>([0, 1]);
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '0px 0px -100px 0px' });
  const [loading, setLoading] = useState(true);

  // Adding intentional delay for the loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop showing the loader after 1 second
    }, 1000);

    return () => clearTimeout(timer); // Clean up the timeout
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(([prev]) => [(prev + 1) % carouselImages.length, 1]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
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
  }

  return (
    <>
    <Header />
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-gray-50 flex flex-col items-center"
      >
        
        {/* Hero Branding */}
        <div className="w-full py-8 px-4 text-center bg-white rounded-b-xl shadow-sm">
          <motion.h1
            className="text-2xl sm:text-4xl font-bold text-green-800 leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Joe Providence Garri
          </motion.h1>
          <motion.span
            className="text-sm text-green-700 font-medium block mt-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            aka Sweet Garri
          </motion.span>
          <motion.p
            className="mt-3 text-gray-700 text-sm sm:text-base max-w-md mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Supplying premium Garri in different sizes – fresh, clean, and ready to go!
          </motion.p>
        </div>

        {/* Garri Image Carousel */}
        <div className="relative w-full max-w-md h-64 mt-6 mx-2 overflow-hidden rounded-2xl shadow-lg">
          <div className="absolute inset-0 bg-black/20 z-10" />
          <AnimatePresence mode="wait" custom={direction}>
            <motion.img
              key={current}
              src={carouselImages[current]}
              alt={`Garri ${current}`}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.8 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <motion.div
            className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 text-xs rounded-full z-20 shadow"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Premium Quality
          </motion.div>
        </div>

        {/* Intro Section */}
        <motion.div
          className="p-6 text-center max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-green-700 mb-2">About Our Garri</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our garri is processed with the highest hygiene standards, packaged in various sizes to suit every need. Whether you're cooking for a home meal or buying in bulk for resale, we've got you covered.
          </p>
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 bg-green-700 text-white px-6 py-2 rounded-full shadow hover:bg-green-800 transition"
            >
              View Products
            </motion.button>
          </Link>
        </motion.div>

        {/* Why Choose Us Section */}
        <section className="w-full py-12 px-4 bg-gray-200 mt-10">
          <div className="text-center mb-8">
            <motion.h2
              className="text-2xl font-bold text-green-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              Why Choose Us?
            </motion.h2>
            <p className="text-gray-600 mt-2 text-sm max-w-md mx-auto">
              Our commitment to excellence makes us the top choice for your Garri needs.
            </p>
          </div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  when: 'beforeChildren',
                  staggerChildren: 0.15,
                  ease: 'easeOut',
                },
              },
            }}
            className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto"
          >
            {whyChooseUsCards.map((card, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4, ease: 'easeOut' },
                  },
                }}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
              >
                <img src={card.image} alt={card.title} className="w-16 h-16 mx-auto mb-4 rounded-2xl" />
                <h3 className="text-lg font-semibold text-green-700">{card.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{card.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Other sections here */}
        <CustomerReviewsSection />
      </motion.div>

      <Footer />
      <Navigation />
    </>
  );
};

export default Home;
