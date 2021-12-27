import Router from 'express';
import {userController} from '../controllers/userController.js';
import checkAuth from '../middleware/checkAuth.js';
import {
  validationRulesWatchList,
  validateWatchList,
} from '../middleware/checkWatchList.js';

const router = new Router();

router.get('/watchList', checkAuth, userController.getWatchList);
router.put(
  '/watchList',
  checkAuth,
  validationRulesWatchList(),
  validateWatchList,
  userController.addWatchedCoin,
);
router.delete('/watchList', checkAuth, userController.removeWatchedCoin);

export default router;
