// import React from 'react';
// import { IoBagHandleOutline } from 'react-icons/io5';
// import HeroPng from "../../assets/fruit-plate.png";
// import LeafPng from "../../assets/leaf.png";
// import { motion } from 'framer-motion';
// import { FadeRight } from '../Utility/animation';

// const Hero = () => {
//   return (
//     <section>
//       <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
//         <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
//           <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
//             <motion.h1 
//               variants={FadeRight(0.6)}
//               initial="hidden"
//               animate="visible"
//               className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia">
//               Healthy
//               <br />
//               Fresh <span className="text-secondary">Fruits!</span>
//             </motion.h1>
//             <motion.p
//             variants={FadeRight(0.9)}
//             initial="hidden"
//             animate="visible"
//             className="text-2xl tracking-wide">Order Now For Fresh Healthy Life</motion.p>
//             <motion.p 
//             variants={FadeRight(1.2)}
//             initial="hidden"
//             animate="visible"
//             className="text-gray-400">
//               Healthy and yummy food for fresh morning breakfast. Eat daily for 
//               good health and mind. Order now and get 20% off on your first order.
//             </motion.p>
//             <motion.div 
//               variants={FadeRight(1.5)}
//               initial="hidden"
//               animate="visible" className="flex justify-center md:justify-start">
//               <button className="primary-btn flex items-center gap-2">
//                 <span>
//                   <IoBagHandleOutline />
//                 </span>
//                 Order Now
//               </button>
//             </motion.div>
//           </div>
//         </div>
//         <div className="flex justify-center items-center">
//           <motion.img
//           initial={{opacity:0,x:200,rotate:75}} 
//           animate={{opacity:1,x:0,rotate:0}} 
//           transition={{duration:1,delay:0.2}}
//             src={HeroPng} 
//             alt="A plate of fresh fruit" 
//             className="w-[350px] md:w-[550px] drop-shadow"
//           />
//         </div>
//         <div className="absolute top-14 md:top-0 right-1/2 blur-0 opacity-80 rotate-[40deg]">
//           <motion.img
           
//           initial={{opacity:0,x:-200,rotate:75}} 
//           animate={{opacity:1,x:0,rotate:0}} 
//           transition={{duration:1,delay:1.5}}
//             src={LeafPng} 
//             alt="Decorative leaf element" 
//             className="w-full md:max-w-[300px]" 
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React, { useState } from 'react';
import { IoBagHandleOutline } from 'react-icons/io5';
import HeroPng from "../../assets/fruit-plate.png";
import LeafPng from "../../assets/leaf.png";
import { motion } from 'framer-motion';
import { FadeRight } from '../Utility/animation';

const Hero = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative">
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <motion.h1 
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-averia"
            >
              Healthy
              <br />
              Fresh <span className="text-secondary">Fruits!</span>
            </motion.h1>

            <motion.p
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              className="text-2xl tracking-wide"
            >
              Order Now For Fresh Healthy Life
            </motion.p>

            <motion.p 
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-gray-400"
            >
              Healthy and yummy food for fresh morning breakfast. Eat daily for 
              good health and mind. Order now and get 20% off on your first order.
            </motion.p>

            <motion.div 
              variants={FadeRight(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button
                onClick={() => setShowForm(true)}
                className="primary-btn flex items-center gap-2"
              >
                <IoBagHandleOutline />
                Order Now
              </button>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            src={HeroPng}
            alt="A plate of fresh fruit"
            className="w-[350px] md:w-[550px] drop-shadow"
          />
        </div>

        <div className="absolute top-14 md:top-0 right-1/2 blur-0 opacity-80 rotate-[40deg]">
          <motion.img
            initial={{ opacity: 0, x: -200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            src={LeafPng}
            alt="Decorative leaf element"
            className="w-full md:max-w-[300px]"
          />
        </div>
      </div>

      {/* Order Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative shadow-lg">
            <button
              className="absolute top-2 right-4 text-xl text-gray-600"
              onClick={() => setShowForm(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">Place Your Order</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border px-4 py-2 rounded-md"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border px-4 py-2 rounded-md"
              />
              <textarea
                rows="3"
                placeholder="Your Order Details"
                className="w-full border px-4 py-2 rounded-md"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition"
              >
                Submit Order
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
