import { Router } from "express";
import { signUp, signIn, logout } from "../controllers/authController";

const router = Router();

router.post("/signup", signUp);

router.post("/signin", signIn);

router.get("/logout", logout);

export default router;