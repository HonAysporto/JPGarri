import { motion } from 'framer-motion';

const reviews = [
  {
    name: 'Abegunde Ezekiel',
    review: 'It is top notch tasted and trusted, get yours and confirm.',
    location: 'Osogbo, Nigeria',
  },
  {
    name: 'Awosika Ayomide',
    review: 'Top-notch quality. Packaging was perfect and delivery was fast.The best!',
    location: 'Ogbomoso, Nigeria',
  },
  {
    name: 'Fatou Diallo',
    review: 'Best I’ve had in a long time. Will definitely order again!',
    location: 'Lagos, Nigeria',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const CustomerReviewsSection: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-gray-100 mt-10">
      <div className="text-center mb-10">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-green-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Our Customers Say
        </motion.h2>
        <p className="text-gray-600 mt-2 text-sm max-w-md mx-auto">
          Real feedback from happy customers across Africa.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-3">
        {reviews.map((review, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariant}
            className="bg-white rounded-xl p-6 shadow-md border border-green-200"
          >
            <h3 className="font-semibold text-green-700 mb-1">{review.name}</h3>
            <p className="text-sm text-gray-600 mb-2 italic">"{review.review}"</p>
            <p className="text-xs text-gray-500">{review.location}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReviewsSection;
