import { Router } from 'express';
import { createUser } from '../controllers/user.controller';
import { signIn, userAutenticate, forgetPass } from '../controllers/auth.controller';
import { auth } from '../middleware/auth';

const router = new Router();

//register
router.post('/signUp', createUser);

//login
router.post('/signIn', signIn);

//get user
router.get('/user', auth, userAutenticate);

//forget pass
router.post('/forget', forgetPass);

export default router;