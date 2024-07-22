import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center">
                <div className="w-full md:pl-6 md:w-1/2 text-center md:text-left mt-10 md:mt-0">
                    <motion.h1
                        className="text-3xl font-bold mb-4"
                        initial={{ x: 100, opacity: 0 }} 
                        animate={{ x: 0, opacity: 1 }} 
                        transition={{ duration: 1 }}
                    >
                        Hi! My name is savanna Mike
                    </motion.h1>
                    <h2>Your new Coach</h2>
                    <p>Let's shake things up! I'm <span>Savanna</span>, your personal cheerleader and fitness coach. Ready to help you crush your goals and feel amazing. No boring workouts here - just fun, effective plans tailored to YOU. Let's get started! 
                    </p>
                    <motion.button 
                        whileHover={{ scale: 1.1 }} 
                        className="mt-10 bg-orange-500 text-white py-2 px-6 rounded-full"
                    >
                        Let's Get It
                    </motion.button>
                </div>
                <motion.img 
                    src="/path-to-image.jpg" 
                    alt="Body Shape" 
                    className="w-full md:w-1/2 rounded-lg"
                    initial={{ x: -100, opacity: 0 }} 
                    animate={{ x: 0, opacity: 1 }} 
                    transition={{ duration: 1 }}
                />
            </div>
        </section>
    );
};

export default Hero;