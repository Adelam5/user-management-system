import { format, createLogger, transports } from "winston";
require("winston-mongodb");

import config from "../config/config";

const { timestamp, combine, errors, json } = format;

const prodLogger = () => {
  return createLogger({
    transports: [
      new transports.MongoDB({
        level: "info",
        handleExceptions: true,
        handleRejections: true,
        db: config.MONGO_LOGS,
        options: { useUnifiedTopology: true },
        collection: "server_logs",
        format: combine(timestamp(), errors({ stack: true }), json()),
      }),
      new transports.MongoDB({
        level: "error",
        handleExceptions: true,
        handleRejections: true,
        db: config.MONGO_LOGS,
        options: { useUnifiedTopology: true },
        collection: "server_errors",
        format: combine(timestamp(), errors({ stack: true }), json()),
      }),
    ],
  });
};

export default prodLogger;
