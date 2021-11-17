import { Router } from 'express';
import { getMealTypes, createMealType, deleteMealType } from '../controllers/mealType';
const router = Router();

router.get('/', getMealTypes)
router.post('/', createMealType);
router.delete('/:id',deleteMealType);

export default router;