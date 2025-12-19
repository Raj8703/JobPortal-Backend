import express from "express";
import { createSampleJobs, getJobs } from "../controllers/jobController.js";

const router = express.Router();

router.post("/seed", createSampleJobs);
router.get("/", getJobs);

export default router;
