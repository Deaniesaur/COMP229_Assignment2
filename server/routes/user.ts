import express from 'express';
const router = express.Router();
export default router;


//Create user controller instance
import { DisplayAllUser } from '../controllers/user';

//GET All Users - with /users
router.get('/', DisplayAllUser);