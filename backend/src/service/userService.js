import { WatchList } from '../models/WatchList.js';

class UserService {
  async getWatchList(id) {
    const watchList = await WatchList.findOne({ userId: id });
    return watchList;
  }
  async addWatchedCoin(id, newItem) {
    try {
      const check = await WatchList.findOne({ userId: id, 'watchList.id': newItem.id });
      if (check) {
        throw 'Валюта уже есть в списке';
      }
      const watchList = await WatchList.findOneAndUpdate(
        { userId: id },
        {
          $push: {
            watchList: newItem
          }
        },
        { new: true }
      );
      return watchList;
    } catch (e) {
      return e;
    }
  }
  async removeWatchedCoin(userId, coinId) {
    const watchList = await WatchList.findOneAndUpdate(
      { userId },
      {
        $pull: {
          watchList: { id: coinId }
        }
      },
      { new: true }
    );
    return watchList;
  }
  async removeAllCoins(userId) {
    const watchList = await WatchList.findOneAndUpdate(
      { userId },
      {
        $set: {
          watchList: []
        }
      },
      { new: true }
    );
    return watchList;
  }
  async createWatchList(id) {
    const watchList = await WatchList.create({
      userId: id,
      watchList: []
    });
    console.log(watchList);
    return watchList;
  }
}

const userService = new UserService();

export { userService };
