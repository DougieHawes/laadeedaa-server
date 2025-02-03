import express from "express";
import multer from "multer";
import path from "path";

import {
  createBlog,
  getBlog,
  getBlogItem,
} from "../controllers/blogControllers.js";
import uploadMiddleware from "../middleware/MulterMiddleware.js";

const router = express.Router();

router.post("/", uploadMiddleware.single("image"), createBlog);
router.get("/", getBlog);
router.get("/:blogId", getBlogItem);

export default router;
