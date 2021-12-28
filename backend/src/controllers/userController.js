import jwt from 'jsonwebtoken';
import { userService } from '../service/userService.js';

class UserController {
  async getWatchList(req, res) {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      const { id } = decoded;
      const watchList = await userService.getWatchList(id);
      return res.json(watchList);
    } catch (e) {
      return res.status(400).json({ message: e });
    }
  }
  async addWatchedCoin(req, res) {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      const { id: coinId, name } = req.body;
      if (!coinId || !name) {
        throw 'Недостаточно данных для обработки';
      }
      const { id: userId } = decoded;
      const coin = {
        id: coinId,
        name
      };
      const watchList = await userService.addWatchedCoin(userId, coin);
      return res.json(watchList);
    } catch (e) {
      return res.status(400).json({ message: e });
    }
  }
  async removeWatchedCoin(req, res) {
    try {
      const token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
      const { id: userId } = decoded;
      const { id: coinId } = req.query;
      if (!coinId) {
        const watchList = await userService.removeAllCoins(userId);
        return res.json(watchList);
      }
      if (coinId) {
        const watchList = await userService.removeWatchedCoin(userId, coinId);
        return res.json(watchList);
      }
    } catch (e) {
      return res.status(400).json({ message: e });
    }
  }
}

const userController = new UserController();

export { userController };
