require("dotenv").config();

const config = {
  NODE_ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 5000,
  MONGO_URI: process.env.MONGO_URI,
  MONGO_LOGS: process.env.MONGO_LOGS,
};

export default config;
