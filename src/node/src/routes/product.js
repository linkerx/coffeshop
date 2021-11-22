import { Router } from 'express';
import { getProducts, getCombos, createProduct, deleteProduct } from '../controllers/product';
const router = Router();

router.get('/', getProducts);
//router.get('/combos', getCombos);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);
//router.put('/:id', updateProduct);

export default router;