import { Router } from 'express';
import {notFoundController} from '../../controlers/not-found';

const router = Router();

router.all('*', notFoundController.all);

export const notFoundRouter = router;
