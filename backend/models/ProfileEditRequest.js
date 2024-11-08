import mongoose from "mongoose";

const profileEditRequestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  requestedFields: [
    {
      field: { type: String, required: true },
      requestedValue: { type: String, required: true },
    },
  ],
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
  reviewedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  requestedAt: { type: Date, default: Date.now },
});

export default mongoose.model("ProfileEditRequest", profileEditRequestSchema);
