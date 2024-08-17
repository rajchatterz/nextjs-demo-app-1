"use client";
import React, { useState } from "react";

const ResturantLogin = () => {
  const [response, setResponse] = useState(null); // State to store API response

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    try {
      const data = await fetch("/api/user");
      const result = await data.json();
      setResponse(result); // Set the response data in state
    } catch (error) {
      console.error("Error fetching data:", error);
      setResponse({ error: "Failed to fetch data" }); // Handle and display errors
    }
  };

  return (
    <form className="flex flex-col mb-4" onSubmit={handleSubmit}>
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
        Login
      </button>
      {response && (
        <h1 className="mt-4 text-gray-800">{JSON.stringify(response)}</h1>
      )}
    </form>
  );
};

export default ResturantLogin;
