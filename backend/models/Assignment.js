import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  studentGroupId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "StudentGroup",
    required: true,
  },
  title: { type: String, required: true },
  description: { type: String },
  fileURL: { type: String },
  status: { type: String, enum: ["Pending", "Completed"], default: "Pending" },
  dueDate: { type: Date },
});

export default mongoose.model("Assignment", assignmentSchema);
