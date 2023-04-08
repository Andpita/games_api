import { Router } from 'express';
import score from '../controllers/Score';

const router = new Router();

router.get('/', score.index); //all score
router.post('/', score.store); //novo score

export default router;
