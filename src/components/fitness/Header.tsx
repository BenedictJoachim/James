import { motion } from 'framer-motion';

const Header = () => (
      <section className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
            <motion.h1 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 1 }}
              className="text-4xl md:text-6xl font-bold"
            >
              Personal Training with <br /> <span className='text-orange-500'>Savanna Mike.</span>
            </motion.h1> 
            <div className="container mx-auto py-20 text-center">
                <motion.button 
                  whileHover={{ scale: 1.1 }} 
                  className="mt-10 bg-orange-500 text-white py-2 px-6 rounded-full"
                >
                  Get In Touch
                </motion.button>
            </div>
        </motion.div>
    </section>

);

export default Header;
