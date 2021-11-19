import { Router } from 'express';
import { getProducts, createProduct, deleteProduct } from '../controllers/product';
const router = Router();

router.get('/', getProducts);
//router.get('/:id', getProduct);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);
//router.put('/:id', updateProduct);

export default router;