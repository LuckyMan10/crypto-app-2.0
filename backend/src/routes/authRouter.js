import Router from 'express';
import { authController } from '../controllers/authController.js';
import { validationRulesReg, validateReg } from '../middleware/checkRegistration.js';
import { validationRulesLogin, validateLogin } from '../middleware/checkLogin.js';
import { validateGoogle, validationRulesGoogle } from '../middleware/checkGoogleAuth.js';

const router = new Router();

router.post('/googleAuth', validationRulesGoogle(), validateGoogle, authController.googleAuth);

router.post('/registration', validationRulesReg(), validateReg, authController.registration);
router.post('/login', validationRulesLogin(), validateLogin, authController.login);
router.get('/logout', authController.logout);
router.get('/refresh', authController.refresh);

export default router;
