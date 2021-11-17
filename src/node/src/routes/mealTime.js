import { Router } from 'express';
import { getMealTimes, createMealTime, deleteMealTime } from '../controllers/mealTime';
const router = Router();

router.get('/', getMealTimes)
router.post('/', createMealTime);
//router.delete('/:id',deleteMealTime);

export default router;