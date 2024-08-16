import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/app/lib/db";
import { resturantSchema } from "@/app/lib/resturantModel";

// Function to add CORS headers to the response
function setCORSHeaders(response) {
  response.headers.set("Access-Control-Allow-Origin", "*"); // Allow all origins or specify the allowed origin
  response.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS"); // Allow the necessary methods
  response.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  return response;
}

// GET method to retrieve data
export async function GET() {
  try {
    await mongoose.connect(connectionStr);
    const data = await resturantSchema.find();
    console.log(data);

    // Create the response
    let response = NextResponse.json({
      result: data,
      message: "Connected to MongoDB successfully!",
    });

    // Set CORS headers
    return setCORSHeaders(response);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    let response = NextResponse.json({
      result: "failure",
      message: "Failed to connect to MongoDB",
      error: error.message,
    });
    return setCORSHeaders(response);
  }
}

// POST method to send data to MongoDB
export async function POST(request) {
  try {
    await mongoose.connect(connectionStr);
    console.log("connected successfully");
    const body = await request.json();
    const newResturant = new resturantSchema(body);
    await newResturant.save();

    let response = NextResponse.json({
      result: "success",
      message: "Data saved successfully!",
    });
    return setCORSHeaders(response);
  } catch (error) {
    console.error("Error saving data to MongoDB:", error.message);
    let response = NextResponse.json({
      result: "failure",
      message: "Failed to save data to MongoDB",
      error: error.message,
    });
    return setCORSHeaders(response);
  }
}

// Handle OPTIONS preflight request
export async function OPTIONS() {
  let response = NextResponse.json({});
  return setCORSHeaders(response);
}
