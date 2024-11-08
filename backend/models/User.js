import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ["Educator", "Teacher", "Student"],
      required: true,
    },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    passwordHash: { type: String, required: true },
    isConfirmed: { type: Boolean, default: false },
    contactInfo: {
      address: { type: String },
      phone: { type: String },
    },
    notifications: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Notification" },
    ],
  },
  { discriminatorKey: "role", timestamps: true }
);

export default mongoose.model("User", userSchema);
