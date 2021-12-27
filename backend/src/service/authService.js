import {User} from '../models/User.js';
import bcrypt from 'bcrypt';
import {tokenService} from './tokenService.js';
import {UserDto} from '../dtos/userDto.js';


class AuthService {
  async googleAuth({ email, username }) {
    try {
      const candidate = await User.findOne({ email });
      if (candidate) {
        const userDto = new UserDto(candidate);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return { ...tokens, user: userDto };
      }
      if (!candidate) {
        const hashPassword = await bcrypt.hash(`${email}_${username}`, 2);
        const user = await User.create({
          email,
          username,
          password: hashPassword
        });
        const userDto = new UserDto(user);
        const tokens = tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return { ...tokens, user: userDto };
      }
    } catch (e) {
      console.log(e);
    }
  }

  async registration({ email, username, password, id }) {
    const candidate = await User.findOne({ email });
    if (candidate) {
      throw 'Пользователь с такой почтой уже существует.';
    }
    const hashPassword = await bcrypt.hash(password, 2);
    const user = await User.create({
      email,
      username,
      password: hashPassword
    });
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async login(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      throw 'Пользователь с таким email не найден';
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw 'Неверный пароль';
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw 'Требуется авторизация';
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      throw 'Требуется авторизация';
    }
    const user = await User.findById(userData.id);
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    return { ...tokens, user: userDto };
  }
}

const authService = new AuthService();

export {
  authService
}

