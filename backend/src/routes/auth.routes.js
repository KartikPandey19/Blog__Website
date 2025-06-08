import express from 'express';
import { login, resgister } from '../controllers/auth.controller.js';
import { validate } from '../middleware/validate.middleware.js';
import { registerSchema } from '../schemas/auth.schema.js';

const router = express.Router();

router.post("/register",validate(registerSchema),resgister);
router.post("/login",login)

export default router