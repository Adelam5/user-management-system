import morgan from "morgan";

import logger from "./index";

// Override the stream method: use custom logger instead of console.log
const stream = {
  write: (message) => logger.http(message),
};

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms",
  { stream }
);

export default morganMiddleware;
