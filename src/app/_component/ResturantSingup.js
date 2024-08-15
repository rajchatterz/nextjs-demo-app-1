// components/ResturantSingup.js
import React from "react";

const ResturantSingup = () => {
  return (
    <form className="flex flex-col mb-4 w-2/4">
      <input
        type="text"
        placeholder="Restaurant Name"
        className="border border-gray-300 p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="email"
        placeholder="Email"
        className="border border-gray-300 p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="border border-gray-300 p-2 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Sign Up
      </button>
    </form>
  );
};

export default ResturantSingup;
