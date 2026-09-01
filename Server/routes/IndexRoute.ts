import { Router } from "express";

import authroute from "./AuthRoute"
import userRoute from "./UserRoute"

const router = Router()

router.use("/auth", authroute)
router.use("users", userRoute)

export default router;