import bc from 'bcryptjs'
import UserModel from './models/User.model';
import { readBody } from 'h3'

export default defineEventHandler( async (event: any) => {
  try {
    const {username, password, email } = await readBody(event);
    
    const candidate = await UserModel.findOne({ email }).exec()

    if (candidate) {
      return {
        data: {
          status: "Error",
          message: "User already exists"
        }
      }
    }

    const hashedPassword = await bc.hash(password, 10);

    const newUser = await new UserModel({
      username,
      password: hashedPassword,
      email
    }).save()

    return {
      data: {
        status: "OK",
        message: "User created",
        newUser
      }
    }

  } catch(e) {
    console.error(`status: Error\message: ${e}`)
    return {
      data: {
        status: "Error",
        message: `${e}`
      }
    }
  }
})