import express from 'express';
import { google, signIn, signup,signOut } from "../controllers/auth.controller.js";

const router = express();

router.post("/signup", signup)
router.post("/signIn", signIn)
router.post('/google', google)
router.get('/signOut', signOut)

export default router;