import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/app/lib/db";
import { resturantSchema } from "@/app/lib/resturantModel";
import cors, { runMiddleware } from "@/app/lib/cors"; // Importing cors middleware

// GET method to retrieve data
export async function GET(req, res) {
  try {
    // Run CORS middleware first
    await runMiddleware(req, res, cors);

    // Connect to MongoDB
    await mongoose.connect(connectionStr);

    // Fetch data from MongoDB
    const data = await resturantSchema.find();
    console.log(data);

    // Return success response with retrieved data
    return NextResponse.json({
      result: data,
      message: "Connected to MongoDB successfully!",
    });
  } catch (error) {
    // Handle connection errors
    console.error("Error connecting to MongoDB:", error.message);
    return NextResponse.json({
      result: "failure",
      message: "Failed to connect to MongoDB",
      error: error.message,
    });
  }
}

// POST method to send data to MongoDB
export async function POST(req, res) {
  try {
    // Run CORS middleware first
    await runMiddleware(req, res, cors);

    // Connect to MongoDB
    await mongoose.connect(connectionStr);

    // Parse the request body to get the data
    const body = await req.json();

    // Create a new document using the schema
    const newResturant = new resturantSchema(body);

    // Save the document to the collection
    await newResturant.save();

    // Return success response
    return NextResponse.json({
      result: "success",
      message: "Data saved successfully!",
    });
  } catch (error) {
    // Handle errors during data saving
    console.error("Error saving data to MongoDB:", error.message);
    return NextResponse.json({
      result: "failure",
      message: "Failed to save data to MongoDB",
      error: error.message,
    });
  }
}
