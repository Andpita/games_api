import { Router } from 'express';
import score from '../controllers/Score';

const router = new Router();

router.get('/', score.index);
router.get('/:id', score.show);
router.post('/', score.store);

export default router;
