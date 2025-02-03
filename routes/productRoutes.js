import express from "express";

import {
  getProducts,
  getProduct,
  createProduct,
} from "../controllers/productControllers.js";
import { isAuth } from "../middleware/isAuth.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:productId", getProduct);
router.post("/", isAuth, createProduct);

export default router;
