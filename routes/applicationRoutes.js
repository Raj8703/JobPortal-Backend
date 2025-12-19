import express from "express";
import multer from "multer";
import protect from "../middleware/authMiddleware.js";
import {
  applyJob,
  myApplications,
} from "../controllers/applicationController.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: "uploads/resumes",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/apply", protect, upload.single("resume"), applyJob);
router.get("/my", protect, myApplications);

export default router;
