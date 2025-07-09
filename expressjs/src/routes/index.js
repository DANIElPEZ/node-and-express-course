import { Router } from 'express';
import authRouter from './auth.js';
const router = Router();

router.use('/auth', authRouter); // Monta las rutas de "auth.js" bajo /auth

export default router;