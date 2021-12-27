import {authService} from '../service/authService.js';
import {OAuth2Client} from 'google-auth-library';
import {userService} from '../service/userService.js';
import * as uuid from 'uuid';

class AuthController {
  async googleAuth(req, res) {
    try {
      const client = new OAuth2Client(`${process.env.GOOGLE_CLIENT_ID}`);
      const {tokenId} = req.body;
      const data = await client.verifyIdToken({
        idToken: tokenId,
        audience: `${process.env.GOOGLE_CLIENT_ID}`,
      });
      const {email_verified, name, email} = data.payload;
      const username = name;
      if (email_verified) {
        const userData = await authService.googleAuth({email, username});
        res.cookie('refreshToken', userData.refreshToken, {
          maxAge: 30 * 24 * 60 * 60 * 1000,
          httpOnly: true,
        });
        return res.json(userData);
      }
      if (!email_verified) {
        throw 'Почта не подтверждена';
      }
    } catch (e) {
      console.log('error: ', e);
      return res.status(400).json({message: e});
    }
  }

  async registration(req, res) {
    try {
      const {username, password, email} = req.body;
      const id = uuid.v4();
      const userData = await authService.registration({
        email,
        password,
        username,
        id,
      });
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      await userService.createWatchList(userData.user.id);
      return res.json(userData);
    } catch (e) {
      console.log(e);
      return res.status(400).json({message: e});
    }
  }

  async login(req, res) {
    try {
      const {email, password} = req.body;
      const userData = await authService.login(email, password);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      return res.status(400).json({message: e});
    }
  }
  async logout(req, res) {
    try {
      const {refreshToken} = req.cookies;
      const token = await authService.logout(refreshToken);
      res.clearCookie('refreshToken');
      if (token && token.deletedCount === 1) {
        return res.json({message: 'Вы вышли из аккаунта'});
      } else {
        throw 'При выходе из аккаунта произошла ошибка';
      }
    } catch (e) {
      return res.status(400).json({message: e});
    }
  }
  async refresh(req, res) {
    try {
      const {refreshToken} = req.cookies;
      const userData = await authService.refresh(refreshToken);
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      console.log('e: ', e);
      return res.status(400).json({message: e});
    }
  }
}

const authController = new AuthController();

export {authController};
