import devLogger from "./dev-logger";
import prodLogger from "./prod-logger";
import config from "../config/config";

let logger = null;

if (config.NODE_ENV === "development") {
  logger = devLogger();
} else {
  logger = prodLogger();
}

export default logger;
