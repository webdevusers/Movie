import { readBody } from 'h3';
import UserModel from './models/User.model';
import bc from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default defineEventHandler(async (event:any) => {
  try {
    const { email, password } = await readBody(event);

    const candidate = await UserModel.findOne({ email }).exec();

    if (!candidate) {
      return {
        data: {
          status: "Error",
          message: "User not found"
        }
      }
    }

    const isPasswordValid = await bc.compare(password, candidate.password);

    if (!isPasswordValid) {
      return {
        data: {
          status: "Error",
          message: "Invalid password"
        }
      }
    }

    const token = jwt.sign(
      { userId: candidate._id, email: candidate.email }, // Payload
      'your_secret_key',
      { expiresIn: '12h' }
    );

    return {
      data: {
        status: "OK",
        message: "User authenticated",
        token // Отправка токена пользователю
      }
    }

  } catch(e) {
    console.error(`status: Error\message: ${e}`);
    return {
      data: {
        status: "Error",
        message: `${e}`
      }
    }
  }
});
