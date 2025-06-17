import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import { MdOutlineShoppingCart, MdMenu } from 'react-icons/md';
import ResponsiveMenu from './ResponsiveMenu';
import { motion } from 'framer-motion';


const NavbarMenu = [
   
   { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Products", link: "/" },
   { id: 3, title: "About", link: "/" },
  { id: 4, title: "Shop", link: "/" },
{ id: 5, title: "Contacts", link: "/" },
 ];

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="bg-white shadow-md z-50 relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0"
      >
        {/* Logo */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <span className="text-primary">Nature's</span>
          <span className="text-secondary">Basket</span>
          <FaLeaf className="text-green-500" aria-label="Nature's Basket logo" />
        </div>

    
        <div className="hidden md:flex items-center gap-6 text-gray-600">
          <ul className="flex items-center gap-6">
            {NavbarMenu.map(({ id, title, link }) => (
              <li key={id}>
                <a
                  href={link}
                  className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-px_#ef4444] font-semibold transition-all duration-200"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 transition duration-200"
            aria-label="Shopping Cart"
          >
            <MdOutlineShoppingCart />
          </button>
        </div>

        
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-4xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            <MdMenu />
          </button>
        </div>

      
        <ResponsiveMenu open={open} setOpen={setOpen} />
      </motion.div>
    </nav>
  );
};

export default Navbar;
