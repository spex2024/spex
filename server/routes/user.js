import { Router } from 'express';
import {createUser, login, logout, users} from "../controller/user.js";



const router = Router()

// Public route




router.post('/register', createUser);
router.post('/login', login);
router.post('/logout', logout);
router.get('/user', users);

export default router;
