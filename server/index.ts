import {Nitro} from 'nitropack'
import ConnectToDataBase from "./db";

export default async (_nitroApp: Nitro) => {

const start = async () => {
  try {
    await ConnectToDataBase();
  } catch(e) {
    console.log(e)
  }
}

start();
}