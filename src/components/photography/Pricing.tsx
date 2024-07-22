import { motion } from 'framer-motion';

const Pricing = () => {
  const cardVariants = {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="bg-[#121212] text-white py-16 px-8 lg:px-32">
      <h2 className="text-4xl font-bold text-center mb-8">The Perfect Plan for Your Needs</h2>
      <p className="text-center mb-12">Our transparent pricing makes it easy to find a plan that works within your financial constraints.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="bg-gray-800 rounded-lg p-8 shadow-lg"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
          <h3 className="text-2xl font-bold mb-4">PACKAGE ONE</h3>
          <p className="text-4xl font-bold mb-4">TSH 300,000/-</p>
          <p className="mb-4">Perfect for special days</p>
          <ul className="list-disc list-inside mb-4">
            <li>30 MINUTES SESSION</li>
            <li>10-15 EDITED PICTURES</li>
            <li>ONE LOCATION</li>
            <li>ONE 5 x 7 PRINT</li>
            <li>ONLINE ACCESS</li>
          </ul>
          <button className="bg-green-500 text-white py-2 px-4 rounded">BOOK NOW ➜</button>
        </motion.div>
        <motion.div
          className="bg-gray-800 rounded-lg p-8 shadow-lg"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
          <h3 className="text-2xl font-bold mb-4">PACKAGE TWO</h3>
          <p className="text-4xl font-bold mb-4">TSH 700,000/-</p>
          <p className="mb-4">For real fashionistas</p>
          <ul className="list-disc list-inside mb-4">
            <li>ONE HOUR SESSION</li>
            <li>20-25 EDITED PICTURES</li>
            <li>ONE LOACTION</li>
            <li>8 x 10 CANVAS PRINT</li>
            <li>ONLINE ACCESS</li>
          </ul>
          <button className="bg-green-500 text-white py-2 px-4 rounded">BOOK NOW ➜</button>
        </motion.div>
        <motion.div
          className="bg-gray-800 rounded-lg p-8 shadow-lg"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
        >
          <h3 className="text-2xl font-bold mb-4">PACKAGE 3</h3>
          <p className="text-4xl font-bold mb-4">TSH 999,000/-</p>
          <p className="mb-4">For quality content</p>
          <ul className="list-disc list-inside mb-4">
            <li>UP TO FIVE HOURS SESSION</li>
            <li>25+ EDITED PICTURES</li>
            <li>2+ LOCATIONS</li>
            <li>16 x 20 CANVAS PRINT</li>
            <li>ONLINE ACCESS</li>
          </ul>
          <button className="bg-green-500 text-white py-2 px-4 rounded">BOOK NOW ➜</button>
        </motion.div>
      </div>
      <div className="mt-12 bg-green-200 rounded-full flex justify-between items-center px-4 py-2 md:flex-row text-center">
        <h1 className='text-[#35A22F] text-2xl'>Secure an appointment right away.</h1>
        <button className="bg-[#35A22F] text-white py-3 px-6 rounded-full">Book SESSION Now!</button>
      </div>
    </div>
  );
};

export default Pricing;
