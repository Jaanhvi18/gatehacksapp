import mongoose, { Schema } from "mongoose";


const formSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'First name is required.'],
    trim: true,
    minLength: [2, 'First name must be larger than 2 characters'],
    maxLength: [50, 'First name must be lesser than 50 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required.'],
    trim: true,
    minLength: [2, 'Last name must be larger than 2 characters'],
    maxLength: [50, 'Last name must be lesser than 50 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, 'Invalid email address'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required.'],
    match: [/^\d{3}-\d{3}-\d{4}$/, 'Invalid phone number format'],
  },
  pronouns: {
    type: String,
    required: [true, 'Pronouns are required.'],
    trim: true,
    maxLength: [20, 'Pronouns must be lesser than 20 characters'],
  },
  university: {
    type: String,
    required: [true, 'University is required.'],
    trim: true,
    maxLength: [100, 'University must be lesser than 100 characters'],
  },
  collegeGrade: {
    type: String,
    required: [true, 'College grade is required.'],
    trim: true,
    maxLength: [20, 'College grade must be lesser than 20 characters'],
  },
  majors: {
    type: [String],
    required: [true, 'Majors are required.'],
  },
  minors: {
    type: [String],
    required: [true, 'Minors are required.'],
  },
  dietaryRestrictions: {
    type: [String],
    required: [true, 'Dietary restrictions are required.'],
  },
  githubProfile: {
    type: String,
    required: [true, 'GitHub profile is required.'],
    match: [/^https:\/\/github\.com\/[A-Za-z0-9_-]+$/, 'Invalid GitHub profile URL'],
  },
  linkedInProfile: {
    type: String,
    required: [true, 'LinkedIn profile is required.'],
    match: [/^https:\/\/www\.linkedin\.com\/in\/[A-Za-z0-9_-]+$/, 'Invalid LinkedIn profile URL'],
  },
  message: {
    type: String,
    required: [true, 'Message is required.'],
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Form = mongoose.models.Form || mongoose.model('Form', formSchema);

export default Form;
