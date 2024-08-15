// app/page.js
"use client";
import React, { useState } from "react";
import { Roboto } from "next/font/google"; // Import from next/font/google
import ResturantLogin from "../_component/ResturantLogin";
import ResturantSingup from "../_component/ResturantSingup";
import ResturantHeader from "../_component/ResturantHeader";
import ResturantFotter from "../_component/ResturantFotter";

// Load the Roboto font
const roboto = Roboto({
  subsets: ["latin"], // Specify subsets if needed
  weight: ["100", "700"], // Specify weights if needed
});

const Page = () => {
  const [login, setLogin] = useState(false);
  return (
    <div>
      <ResturantHeader />
      <h2 className={`${roboto.className} flex`}>
        Resurant login and signup page
      </h2>
      {login ? <ResturantSingup /> : <ResturantLogin />}
      <button onClick={() => setLogin(!login)}>
        {login ? (
          <div>Already have a accout Signin</div>
        ) : (
          <div>Already dont have a accound</div>
        )}
      </button>
      <ResturantFotter />
    </div>
  );
};

export default Page;
