import { register, login, logout,getuser} from '../controllers/userController.js';
import { isAuthorised } from '../middleware/auth.js';
import express from "express";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", isAuthorised, logout);
router.get("/getuser",isAuthorised,getuser);

export default router;
