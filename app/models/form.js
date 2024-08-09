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
    required: [true, 'School Email is required.'],
    match: [/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(edu)$/i, 'Invalid email address. Must be a .edu domain.'],
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required.'],
    match: [/^\d{10}$|^\(\d{3}\)\s?\d{3}-\d{4}$|^\d{3}-\d{3}-\d{4}$|^\d{3}\s\d{3}\s\d{4}$/, 'Invalid phone number format'], // Allows for various phone number formats
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
  dietaryRestrictions: {
    type: [String],
    required: [true, 'Dietary restrictions are required.'],
  },
  githubProfile: {
    type: String,
    required: [true, 'GitHub profile is required.'],
    match: [/^https:\/\/github\.com\/[A-Za-z0-9_-]+$/, 'Invalid GitHub profile URL'],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Form = mongoose.models.Form || mongoose.model('Form', formSchema);

export default Form;
