import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  description: String,
});

export default mongoose.model("Job", jobSchema);
