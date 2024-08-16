"use client"; // Necessary for using state and event handlers in Next.js 13+ (App Router)

import React, { useState } from "react";

const UserSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = await fetch("api/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    result = await result.json();
    console.log(result);
    // Handle the response or display a success message
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          User Sign Up
        </h2>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Your Name"
          className="border border-gray-300 p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Email"
          className="border border-gray-300 p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Password"
          className="border border-gray-300 p-3 mb-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default UserSignup;
