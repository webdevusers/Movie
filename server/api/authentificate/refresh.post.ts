import { defineEventHandler, readBody } from 'h3';
import jwt from 'jsonwebtoken';
import UserModel from './models/User.model';

export default defineEventHandler(async (event) => {
  try {
    const { refreshToken } = await readBody(event);

    if (!refreshToken) {
      return {
        data: {
          status: "Error",
          message: "Refresh token is required"
        }
      }
    }

    let userData;
    try {
      userData = jwt.verify(refreshToken, process.env.REFRESH_KEY);
    } catch (err) {
      return {
        data: {
          status: "Error",
          message: "Invalid refresh token"
        }
      }
    }

    const user = await UserModel.findById(userData.userId).exec();
    if (!user) {
      return {
        data: {
          status: "Error",
          message: "User not found"
        }
      }
    }

    // Create a new access token
    const newAccessToken = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: '12h' }
    );

    return {
      data: {
        status: "OK",
        message: "New access token created",
        accessToken: newAccessToken
      }
    }

  } catch (e) {
    console.error(`status: Error, message: ${e}`);
    return {
      data: {
        status: "Error",
        message: e
      }
    }
  }
});
