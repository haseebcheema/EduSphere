import mongoose from "mongoose";

const studentGroupSchema = new mongoose.Schema({
  groupName: { type: String, required: true },
  gradeLevel: { type: Number, required: true },
  assignedTeacher: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("StudentGroup", studentGroupSchema);
