import React from 'react';
import { FaLeaf } from 'react-icons/fa';
import { MdOutlineShoppingCart, MdMenu } from 'react-icons/md'; // Consolidated imports
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
    <nav>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="container flex justify-between items-center py-4 md:pt-4 "
      >
        {/* Logo */}
        <div className="text-2xl flex items-center gap-2 font-bold uppercase">
          <p className="text-primary">Nature's</p>
          <p className="text-secondary">Basket</p>
          <FaLeaf className="text-green-500" aria-label="Nature's Basket logo" />
        </div>

        {/* Menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-6 text-gray-600">
            {NavbarMenu.map(({ id, title, link }) => (
              <li key={id}>
                <a
                  href={link}
                  className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-px_#ef4444] font-semibold"
                >
                  {title}
                </a>
              </li>
            ))}
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <MdOutlineShoppingCart aria-label="Shopping Cart" />
            </button>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          <MdMenu className="text-4xl" aria-label="Menu" />
        </div>

        <ResponsiveMenu open={open} />
      </motion.div>
    </nav>
  );
};

export default Navbar;


