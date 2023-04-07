import { Router } from 'express';
import score from '../controllers/Score';

const router = new Router();

router.get('/', score.index);

export default router;
