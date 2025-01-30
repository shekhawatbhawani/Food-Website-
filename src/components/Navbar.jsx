import { Link } from "react-router-dom";
import { useState } from "react";
import { GiKnifeFork } from "react-icons/gi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-gray-800 z-50 fixed top-0 left-0 right-0 flex text-white shadow-lg justify-between items-center py-4 px-10">
        {/* Logo Section */}
        <div className="flex gap-2 items-center text-3xl">
          <GiKnifeFork className="text-red-500 font-bold" /> Food
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="bg-white text-black p-2 rounded lg:hidden md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Menu */}
        <ul className="lg:flex lg:gap-20 lg:text-xl md:flex md:gap-20 md:text-2xl hidden">
          <li className="hover:underline cursor-pointer hover:text-red-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:underline cursor-pointer hover:text-red-500">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:underline cursor-pointer hover:text-red-500">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:underline cursor-pointer hover:text-red-500">
            <Link to="/sign-in">Sign in</Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="lg:hidden text-2xl absolute right-6 rounded-2xl top-16 bg-gray-800  space-y-4 text-white z-50">
          <li className="hover:underline cursor-pointer hover:text-red-500 p-2 hover:bg-blue-600 py-2 px-10">
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="hover:underline cursor-pointer hover:text-red-500 p-2 hover:bg-blue-600 py-2 px-10">
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="hover:underline cursor-pointer hover:text-red-500 p-2 hover:bg-blue-600 py-2 px-10">
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
          <li className="hover:underline cursor-pointer hover:text-red-500 p-2 hover:bg-blue-600 py-2 px-10">
            <Link to="/sign-in" onClick={closeMenu}>
              Sign in
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;