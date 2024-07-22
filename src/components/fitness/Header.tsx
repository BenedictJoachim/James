import { motion } from 'framer-motion';

const Header = () => (
  <header className="bg-black text-white">
    <div className="container mx-auto py-20 text-center">
      <motion.h1 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold"
      >
        Personal Training with Savanna Mike.
      </motion.h1>
      <motion.button 
        whileHover={{ scale: 1.1 }} 
        className="mt-10 bg-orange-500 text-white py-2 px-6 rounded-full"
      >
        Learn More
      </motion.button>
    </div>
  </header>
);

export default Header;
