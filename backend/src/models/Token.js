import mongoose from 'mongoose';

const TokenSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  refreshToken: { type: String, required: true }
});

const Token = mongoose.model('Token', TokenSchema);

export { Token };
