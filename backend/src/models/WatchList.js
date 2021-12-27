import mongoose from 'mongoose';

const watchListSchema = new mongoose.Schema({
  userId: {type: String, required: true, unique: true},
  watchList: [
    {
      id: String,
      name: String
    },
  ],
});

const WatchList = mongoose.model('WatchList', watchListSchema);

export {WatchList};
