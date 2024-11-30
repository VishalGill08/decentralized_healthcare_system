import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/userController';

const router: Router = Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;export const PORT = process.env.PORT || 3000;

