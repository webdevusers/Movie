import mongoose from "mongoose";

const config = useRuntimeConfig();

if (!config.mongo_db) {
  throw new Error("No MongoDB connection string provided");
}

const ConnectToDataBase = async () => {
  try {
    await mongoose.connect(config.mongo_db).then(
      () => {
        console.log("Connected to MongoDB");
      },
      (err) => {
        console.log(err);
      }
    )
  } catch(e) {
    console.error(e);
  }
}

export default ConnectToDataBase