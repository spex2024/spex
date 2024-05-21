import { Router } from 'express';
import {createData, getData} from "../controller/feedback.js";


const router = Router()

// Public route




router.get('/feedback', getData);
router.post('/feedback', createData);


export default router;
