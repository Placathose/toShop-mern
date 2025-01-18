import express from 'express';

import { getShoppingItems, postShoppingItem, getSingleItem, deleteShoppingItem, updateShoppingItem  } from '../controllers/shoppingItems.js';
const router = express.Router();

router.get('/', getShoppingItems);
router.post('/', postShoppingItem);
router.get('/:id', getSingleItem);
router.delete(':id', deleteShoppingItem);
router.patch('/:id', updateShoppingItem);

export default router;