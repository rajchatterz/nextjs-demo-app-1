import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/app/lib/db";
import { resturantSchema } from "@/app/lib/resturantModel";
export async function GET() {
  try {
    // Attempt to connect to MongoDB
    await mongoose.connect(connectionStr);
    const data = await resturantSchema.find();
    console.log(data);
    // If successful, log and return a success response
    console.log("Connected to MongoDB successfully!");
    return NextResponse.json({
      result: data,
      message: "Connected to MongoDB successfully!",
    });
  } catch (error) {
    // If there's an error, log and return a failure response
    console.error("Error connecting to MongoDB:", error.message);
    return NextResponse.json({
      result: "failure",
      message: "Failed to connect to MongoDB",
      error: error.message,
    });
  }
}
