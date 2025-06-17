import React from 'react';
import Fruit1 from '../../assets/apple.jpg';
import Fruit2 from '../../assets/Orange.jpg';
import Fruit3 from '../../assets/Cherries.jpg';
import Fruit4 from '../../assets/Banana.jpg';
import Fruit5 from '../../assets/Mango.jpg';
import { AnimatePresence,motion } from 'framer-motion';
import { FadeLeft } from '../Utility/animation';
const MenusData = [
  {
    id: 1,
    title: "Apple",
    link: "/",
    price: "$20.00",
    img: Fruit1,
    delay:0.3,
  },
  {
    id: 2,
    title: "Orange",
    link: "/",
    price: "$20.00",
    img: Fruit2,
    delay:0.6,
  },
  {
    id: 3,
    title: "Cherries",
    link: "/",
    price: "$20.00",
    img: Fruit3,
    delay:0.9,
  },
  {
    id: 4,
    title: "Banana",
    link: "/",
    price: "$20.00",
    img: Fruit4,
    delay:1.2,
  },
  {
    id: 5, 
    title: "Mango",
    link: "/",
    price: "$20.00",
    img: Fruit5,
    delay:1.5,
  },
 
];

const Menus = () => {
  return (
    <section>
      <div className="container pt-12 pb-20">
        <motion.h1 
        initial={{opacity:1,x:-200}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1,delay:0.3}}
        className="text-2xl font-bold text-left pb-10 uppercase">Our Menu</motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {MenusData.map((menu) => (
            <motion.div 
            variants={FadeLeft(menu.delay)}
            initial="hidden"
            whileInView={"visible"}
            whileHover={{scale:1.1}}
              key={menu.id}
              className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-col justify-center items-center gap-3"
            >
              <img 
                src={menu.img} 
                alt=""
                className="w-[60px] mb-4 transform translate-y-6 scale-125"
              />
              <div className="text-center">
                <h1 className="text-lg font-semibold">{menu.title}</h1>
                <p className="text-gray-600">{menu.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;
