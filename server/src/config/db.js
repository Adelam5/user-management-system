import config from "./config";
import mongoose from "mongoose";
import logger from "../logger";

const connectDB = async () => {
  const conn = await mongoose.connect(config.MONGO_URI);
  logger.info(`MongoDB Connected: ${conn.connection.host}`);
};

export default connectDB;
