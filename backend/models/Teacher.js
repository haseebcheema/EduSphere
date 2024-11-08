import mongoose from "mongoose";
import User from "./User.js";

const teacherSchema = new mongoose.Schema({
  subject: { type: String, required: true },
  experienceYears: { type: Number, required: true },
  qualifications: {
    degree: { type: String },
    institution: { type: String },
    graduationYear: { type: Number },
  },
  certifications: [{ type: String }],
});

export default User.discriminator("Teacher", teacherSchema);
