import mongoose from "mongoose";

const schoolSchema = new mongoose.Schema({
  schoolName: { type: String, required: true },
  address: { type: String, required: true },
  educatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  branches: [{ type: mongoose.Schema.Types.ObjectId, ref: "Branch" }],
});

export default mongoose.model("School", schoolSchema);
