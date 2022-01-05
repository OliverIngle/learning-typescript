import express from 'express';
import controller from '../controllers/progressController';
const router = express.Router();

router.get('/', controller.getBar);

export default router;