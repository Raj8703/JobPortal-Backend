import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job" },
  resume: String,
  appliedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Application", applicationSchema);
