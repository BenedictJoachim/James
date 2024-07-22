import { motion } from 'framer-motion';

const Trainer = () => (
  <section className="bg-gray-100 py-20">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      <motion.img 
        src="/path-to-trainer.jpg" 
        alt="Trainer" 
        className="w-full md:order-2 md:w-1/2 rounded-lg"
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
          Experienced Personal Trainer
        </motion.h2>
        <p className="text-gray-700">Details about the trainer...</p>
      </div>
    </div>
  </section>
);

export default Trainer;
