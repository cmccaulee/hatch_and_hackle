import { Router } from 'express';
import * as flyController from '../controllers/fly.controller.js';
const router = Router();

router.route('/')
    .post(flyController.create)
    .get(flyController.getAll);
router.route('/:id')
    .get(flyController.getOne)
    .put(flyController.update)
    .delete(flyController.deleteOne);
export default router;