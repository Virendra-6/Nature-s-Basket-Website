import React from 'react';
import BannerPng from "../../assets/Banner.png";
import { motion } from "framer-motion";
import { FadeUp } from "../Utility/animation";  // Ensure FadeUp is defined and imported correctly

const Banner = () => {
  return (
    <section className="bg-secondary/10">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 py-14">
            <div className="flex justify-center items-center">
              {/* Motion img */}
                <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                  viewport={{ once: true }}
                  src={BannerPng} 
                  alt="Nature's Basket Banner" 
                  className="w-[300px] md:max-w-[400px] h-full object-cover" 
                />
            </div>
            {/* Info */}
            <div className="flex flex-col justify-center md:text-right space-y-4 lg:max-w-[400px]">
              <motion.h1
                variants={FadeUp(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl lg:text-6xl font-bold uppercase"
              >
                Brand Info
              </motion.h1>
              <motion.p
                variants={FadeUp(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Nature's Basket offers a wide variety of fresh, 
                high-quality fruits delivered straight to your door. 
                Enjoy healthy, delicious produce, sourced directly 
                from farms for your daily nourishment and well-being.
              </motion.p>
              <motion.p
                variants={FadeUp(0.9)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Nature's Basket offers a wide variety of fresh, high-quality fruits delivered straight to your door.
                Enjoy healthy, delicious produce, sourced directly from farms for your daily nourishment and well-being.
              </motion.p>
              {/* Centered Button */}
              <motion.div
                variants={FadeUp(1.1)}
                initial="hidden"
                animate="visible"
                className="flex justify-center mt-6" 
              >
                  <button className="primary-btn">
                      Learn More
                  </button>
              </motion.div>
            </div>
        </div>
    </section>
  );
}

export default Banner;  // Ensure the component is exported
