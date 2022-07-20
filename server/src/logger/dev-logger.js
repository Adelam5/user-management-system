import {
  format,
  createLogger,
  transports,
  transport,
  ExceptionHandler,
} from "winston";

const { timestamp, combine, printf, errors, prettyPrint } = format;

const errorsFormat = errors({ stack: true });

const devLogger = () => {
  const logFormat = printf(({ level, message, stack, timestamp }) => {
    return `${timestamp} ${level}: ${stack || message}`;
  });

  return createLogger({
    transports: [
      new transports.Console({
        level: "debug",
        handleExceptions: true,
        handleRejections: true,
        format: combine(
          format.colorize(),
          timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
          errors({ stack: true }),
          logFormat
        ),
      }),
      new transports.File({
        filename: "server.log",
        level: "debug",
        format: combine(
          timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
          errors({ stack: true }),
          prettyPrint()
        ),
      }),
      new transports.File({
        filename: "server-error.log",
        handleExceptions: true,
        handleRejections: true,
        level: "error",
        format: combine(
          timestamp({ format: "DD-MM-YYYY HH:mm:ss" }),
          errors({ stack: true }),
          logFormat,
          prettyPrint()
        ),
      }),
    ],
  });
};

export default devLogger;
