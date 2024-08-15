import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionStr } from "@/app/lib/db";
import { resturantSchema } from "@/app/lib/resturantModel";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export async function GET(req) {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    await mongoose.connect(connectionStr);
    const data = await resturantSchema.find();
    return NextResponse.json(
      {
        result: data,
        message: "Connected to MongoDB successfully!",
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    return NextResponse.json(
      {
        result: "failure",
        message: "Failed to connect to MongoDB",
        error: error.message,
      },
      { headers: corsHeaders }
    );
  }
}

export async function POST(req) {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    await mongoose.connect(connectionStr);
    const body = await req.json();
    const newResturant = new resturantSchema(body);
    await newResturant.save();
    return NextResponse.json(
      {
        result: "success",
        message: "Data saved successfully!",
      },
      { headers: corsHeaders }
    );
  } catch (error) {
    console.error("Error saving data to MongoDB:", error.message);
    return NextResponse.json(
      {
        result: "failure",
        message: "Failed to save data to MongoDB",
        error: error.message,
      },
      { headers: corsHeaders }
    );
  }
}
