import mongoose from "mongoose";
import User from "./User.js";

const studentSchema = new mongoose.Schema({
  assignedGroup: { type: mongoose.Schema.Types.ObjectId, ref: "StudentGroup" },
  assignedTeacher: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  currentGrade: { type: Number },
  previousSchool: { type: String },
});

export default User.discriminator("Student", studentSchema);
