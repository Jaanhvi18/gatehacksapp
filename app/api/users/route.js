import Form from '@/app/models/form';
import connectDB from "@/app/lib/mongodb";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  // Destructure the request body to extract the form fields
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    pronouns,
    university,
    dietaryRestrictions,
    githubProfile,
  } = await req.json();

  try {
    // Connect to the database
    await connectDB();

    // Create a new form entry in the database
    const form = await Form.create({
      firstName,
      lastName,
      email,
      phoneNumber,
      pronouns,
      university,
      dietaryRestrictions,
      githubProfile,
    });

    // Return a success response
    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
      formId: form._id, // Optional: Returning the created form's ID
    }, { status: 200 });

  } catch (error) {
    // Handle Mongoose validation errors
    if (error instanceof mongoose.Error.ValidationError) {
      const errorList = Object.values(error.errors).map(err => err.message);
      console.log(errorList);
      return NextResponse.json({ msg: errorList }, { status: 400 });
    } else {
      // Handle other errors
      console.error(error); // Log the error for debugging purposes
      return NextResponse.json({ msg: ["Unable to send message."] }, { status: 500 });
    }
  }
}
