import devLogger from "./dev-logger";
import prodLogger from "./prod-logger";
import config from "../config/config";

let logger = null;

// devLogger logs are saved in files and logged in console and prodLogger saves logs in database
if (config.NODE_ENV === "development") {
  logger = devLogger();
} else {
  logger = prodLogger();
}

export default logger;
