import express from 'express';

import { UserControler } from './user.controler';
import validateRequest from '../../middleWares/validateRequest';
import { UserValidation } from './user.validation';

const router = express.Router();

router.post('/create-user',validateRequest(UserValidation.createUserValidationSchema) , UserControler.createUser);



export const UserRoute = router;