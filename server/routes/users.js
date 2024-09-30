import express from 'express';
import {getUser, getUserFriends, addRemoveFreind} from '../controllers/users.js';
import { verifytoken } from '../middleware/auth.js';

const router = express.Router();

//read
router.get('/:id', verifytoken, getUser );
router.get('/:id/friends', verifytoken, getUserFriends);
//update
router.patch('/:id/:friendId', verifytoken, addRemoveFreind);

export default router;
