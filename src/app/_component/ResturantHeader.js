import React from "react";
import Image from "next/image";
import Link from "next/link";

const RestaurantHeader = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center">
          <h1>RAjssssssy</h1>
          <h1 className="text-2xl font-bold text-gray-800 ml-4">
            My Restaurant
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/menu" className="text-gray-700 hover:text-gray-900">
            Menu
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-gray-900">
            About Us
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-gray-900">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
            {/* Add a mobile menu icon here, such as a hamburger menu */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default RestaurantHeader;
