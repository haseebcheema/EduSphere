import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  fromUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  toUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  isAnonymous: { type: Boolean, default: false },
  feedbackContent: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Feedback", feedbackSchema);
