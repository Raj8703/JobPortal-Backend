import Job from "../models/Job.js";

export const createSampleJobs = async (req, res) => {
  const jobs = await Job.insertMany([
    {
      title: "Node.js Developer",
      company: "Acme Corp",
      description: "Backend development with Node.js",
    },
    {
      title: "Frontend Developer",
      company: "Tech Corp",
      description: "React.js UI Development",
    },
  ]);
  res.json(jobs);
};

export const getJobs = async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
};
