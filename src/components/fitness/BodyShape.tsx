import { motion } from 'framer-motion';

const BodyShape = () => (
  <section className="bg-white py-20">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      <motion.img 
        src="/path-to-image.jpg" 
        alt="Body Shape" 
        className="w-full md:w-1/2 rounded-lg"
        initial={{ x: -100, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 1 }}
      />
      <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ x: 100, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          Change Your Body Shape
        </motion.h2>
        <p className="text-gray-700">Details about changing body shape...</p>
      </div>
    </div>
  </section>
);

export default BodyShape;
