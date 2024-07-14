// pages/api/_middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  if (req.method === "POST") {
    try {
      const { firstName, lastName, email, phoneNumber, pronouns, university, collegeGrade, majors, minors, dietaryRestrictions, githubProfile, linkedInProfile, message } = req.body;

      req.parsedBody = {
        firstName,
        lastName,
        email,
        phoneNumber,
        pronouns,
        university,
        collegeGrade,
        majors,
        minors,
        dietaryRestrictions,
        githubProfile,
        linkedInProfile,
        message,
      };

      return NextResponse.next();
    } catch (error) {
      return new Response("Invalid JSON", { status: 400 });
    }
  }
}
