import React, { useState } from "react";
import { ModeToggle } from "../Mode.toggle";
import { Link } from "react-router";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

  return (
    <header className="bg-gray-900 top-0 dark:bg-gray-900 shadow-md ">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex h-12">
            <img
              src="https://images-platform.99static.com//9wMmKJaFmUE1o63VZO7fgqxhOk8=/1083x2387:1929x3234/fit-in/500x500/99designs-contests-attachments/113/113769/attachment_113769214"
              className="w-16 rounded-full"
              alt="ride-logo"
            />
            <h1 className="text-3xl text-white font-bold dark:text-white mt-1 m-4">
              RideX
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link
              to="/"
              className="text-gray-300 dark:text-gray-300 hover:text-green-600"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 dark:text-gray-300 hover:text-green-600"
            >
              About
            </Link>
            <Link
              to="/features"
              className="text-gray-300 dark:text-gray-300 hover:text-green-600"
            >
              Features
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 dark:text-gray-300 hover:text-green-600"
            >
              Contact
            </Link>
            <ModeToggle />
            <Link
              to="/login"
              className=" px-4 py-2 bg-green-600 text-white text-sm font-medium  rounded hover:bg-green-700 transition"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ModeToggle />
            <button
              onClick={toggleMobileMenu}
              className="ml-2 text-gray-700 dark:text-gray-300 focus:outline-none"
            >
              {mobileOpen ? (
                <HiOutlineX size={24} className="text-white" />
              ) : (
                <HiOutlineMenu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-2 shadow-lg">
          <Link
            to="/"
            className="block text-gray-700 dark:text-gray-300 hover:text-green-600"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 dark:text-gray-300 hover:text-green-600"
            onClick={() => setMobileOpen(false)}
          >
            About
          </Link>
          <Link
            to="/features"
            className="block text-gray-700 dark:text-gray-300 hover:text-green-600"
            onClick={() => setMobileOpen(false)}
          >
            Features
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 dark:text-gray-300 hover:text-green-600"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/login"
            className="block mt-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            onClick={() => setMobileOpen(false)}
          >
            Login
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
