// import { NextApiRequest, NextApiResponse } from 'next';
// import formDB from '@/app/lib/mongodb';
// import Form from '@/app/models/form';
// import mongoose from 'mongoose';

// export async function POST(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     try {
//       const {
//         firstName,
//         lastName,
//         email,
//         phoneNumber,
//         pronouns,
//         university,
//         collegeGrade,
//         majors,
//         minors,
//         dietaryRestrictions,
//         githubProfile,
//         linkedInProfile,
//         message,
//       } = req.json;

//       await formDB();
//       await Form.create({
//         firstName,
//         lastName,
//         email,
//         phoneNumber,
//         pronouns,
//         university,
//         collegeGrade,
//         majors,
//         minors,
//         dietaryRestrictions,
//         githubProfile,
//         linkedInProfile,
//         message,
//       });

//       return res.status(200).json({
//         msg: ["Message sent successfully"],
//         success: true,
//       });
//     } catch (error) {
//       if (error instanceof mongoose.Error.ValidationError) {
//         let errorList = [];
//         for (let e in error.errors) {
//           errorList.push(error.errors[e].message);
//         }
//         return res.status(400).json({ msg: errorList });
//       } else {
//         return res.status(500).json({ msg: ["Unable to send message."] });
//       }
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// import { NextApiRequest, NextApiResponse } from 'next';
// import formDB from '@/app/lib/mongodb';
import Form from '@/app/models/form';
// import mongoose from 'mongoose';
import connectDB from "@/app/lib/mongodb";
// import Contact from "@/app/models/contact";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req) {
  const {firstName,
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
    message} = await req.json();

  try {
    await connectDB();
    await Form.create({firstName,
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
      message});

    return NextResponse.json({
      msg: ["Message sent successfully"],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }
}