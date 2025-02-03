import express from "express";

import { createUser, signinUser } from "../controllers/userControllers.js";

const router = express.Router();

router.post("/", createUser);
router.post("/signin", signinUser);

export default router;
