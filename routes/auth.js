import express from "express";
import { login, register } from "../controller/auth.js";

const router = express.Router();

/* Register a new user. */
router.post("/register", register);

/* Login existing user.*/
router.post("/login", login);

export default router;
