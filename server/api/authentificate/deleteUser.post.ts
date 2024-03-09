import { defineEventHandler } from 'h3'
import UserModel from "./models/User.model";

export default defineEventHandler(async (event: any) => {
  try {
    const {id} = await readBody(event);

    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return {
        data: {
          status: "Error",
          message: "Invalid user ID format"
        }
      };
    }

    const candidate = await UserModel.findById(id).exec();
    if (!candidate) {
      return {
        data: {
          status: "Error",
          message: "User not found"
        }
      };
    }

    await UserModel.findByIdAndDelete(id).exec();

    return {
      data: {
        status: "Success",
        message: "User deleted successfully",
        candidate
      }
    };

  } catch (e) {
    return {
      data: {
        status: "Error",
        message: e
      }
    };
  }
});
