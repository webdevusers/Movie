import UserModel from "./models/User.model"

export default defineEventHandler( async (event:any) => {
  try {
    const users = await UserModel.find();

    return {
      data: {
        status: "OK",
        method: "Get all users allUsers.get.ts",
        users
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