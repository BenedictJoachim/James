import { motion } from 'framer-motion';

const Services = () => (
  <section className="bg-gray-100 py-20">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">My Services</h2>
      <div className="flex flex-wrap justify-center space-x-6">
        <motion.div 
          className="w-full md:w-1/3 p-4 bg-black text-white rounded-lg shadow-md"
          whileHover={{ scale: 1.1 }}
        >
          <h3 className="text-xl font-semibold mb-4">Service 1</h3>
          <p>Details about the service...</p>
        </motion.div>
        {/* Add more service details similarly */}
      </div>
    </div>
  </section>
);

export default Services;
