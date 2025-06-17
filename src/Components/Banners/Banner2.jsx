import React from 'react';
import Banner from '../../assets/Banner2.jpg';
import { motion } from "framer-motion";
import { FadeUp } from "../Utility/animation";  // Ensure FadeUp is defined and imported correctly

const Banner2 = () => {
  // Link to the app (change this URL to the actual app store link)
  const appLink = "https://www..com"; // Change this to the actual link for app download

  return (
    <section className="">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 py-14 md:py-24">
            {/* Info */}
            <div className="flex flex-col justify-center md:text-left space-y-4 lg:max-w-[600px]">
              <motion.h1
                variants={FadeUp(0.5)}  
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-3xl lg:text-6xl font-bold uppercase whitespace-nowrap"
              >
                Online Fruits Store
              </motion.h1>
             
              <motion.p
                variants={FadeUp(0.7)}  // Ensure that FadeUp function works correctly
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                Nature's Basket is an online store offering fresh, 
                high-quality fruits directly sourced from farms.
                 With our convenient home delivery service,
                 enjoy delicious and nutritious produce delivered to your door.
              </motion.p>
              <motion.p
                variants={FadeUp(0.9)}  // Ensure that FadeUp function works correctly
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
              Download our app today and start shopping for
               Nature's Basket's premium fruits, ensuring healthy, 
               fresh choices for you and your family, right at your fingertips!
              </motion.p>
              {/*  Button */}
              <motion.div
                variants={FadeUp(1.5)}  // Ensure that FadeUp function works correctly
                initial="hidden"
                animate="visible"
                className="flex justify-center mt-6"  // Center the button
              >
                  {/* Button as anchor */}
                  <a href={appLink} target="_blank" rel="noopener noreferrer">
                    <button className="primary-btn">
                        Download the App
                    </button>
                  </a>
              </motion.div>
            </div>
            {/* Motion Image */}
            <div className="flex justify-center items-center">
                <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                  viewport={{ once: true }}

                  src={Banner} 
                  alt="Nature's Basket Banner" 
                  className="w-[300px] md:max-w-[400px] h-full object-cover" 
                />
            </div>
        </div>
    </section>
  );
}

export default Banner2;
