export const AuthValidation = (username:string, email:string, pass:string, pass_confirm:string) => {
  try {
    if (!username || !email || !pass || !pass_confirm) {
      return {
        data: {
          status: "Error",
          message: "All fields are required"
        }
      }
    }

    if (pass!== pass_confirm) {
      return {
        data: {
          status: "Error",
          message: "Passwords do not match"
        }
      }
    }

    if (pass.length < 8) {
      return {
        data: {
          status: "Error",
          message: "Password must be at least 8 characters long"
        }
      }
    }

    return {
      data: {
        status: "Success",
        message: "Sign up validation succesfully"
      }
    }
  } catch(e) {
    return {
      data: {
        status: "Error",
        message: `${e}`
      }
    }
  }
}