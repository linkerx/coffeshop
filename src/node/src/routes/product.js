import { Router } from 'express';
import { getProducts, getCombos, createProduct, deleteProduct } from '../controllers/product';
const router = Router();

router.get('/', getProducts);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);

router.get('/combos', getCombos);

export default router;