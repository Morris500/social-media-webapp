import express from 'express';
import {getFeedPosts, getUserPosts, likePost  } from "../controllers/posts";
import { verifytoken } from '../middleware/auth';

const router = express.Router();

//Read
router.get('/', verifytoken, getFeedPosts);
router.get('/:userId/posts', verifytoken, getUserPosts );

//update
router.patch('/:id/like', verifytoken, likePost);
