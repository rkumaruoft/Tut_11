import express from "express";
import { loginController, profileController, registerController } from "./controllers/user.js";
import { authToken } from "./middleware/auth.js";
import cors from "cors";

const router = express.Router();
router.options("*", cors());

router.post("/login", loginController);
router.get("/user/me", authToken, profileController);
router.post("/register", registerController);

export default router;
