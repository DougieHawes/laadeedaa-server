import express from "express";

import {
  getProducts,
  getProduct,
  createProduct,
} from "../controllers/productControllers.js";
import { isAuth } from "../middleware/isAuth.js";
import uploadMiddleware from "../middleware/MulterMiddleware.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:productname", getProduct);
router.post("/", isAuth, uploadMiddleware.array("images", 6), createProduct);

export default router;
