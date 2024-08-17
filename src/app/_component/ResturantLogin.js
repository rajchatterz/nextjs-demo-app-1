// components/ResturantLogin.js
import React from "react";

const ResturantLogin = () => {
  const handleSubmit = async () => {
    const data = await fetch("/api/user");
    const response = await data.json();
    console.log(response);
  };
  return (
    <form className="flex flex-col mb-4">
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
        onClick={() => handleSubmit()}
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition duration-200"
      >
        Login
      </button>
    </form>
  );
};

export default ResturantLogin;
