import { StatusCodes } from "http-status-codes";
import * as Yup from "yup";
import { BadRequestError, NotFoundError } from "../errors";
import logger from "../logger";

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  error.stack = err.stack;

  // Log to console for dev
  logger.error(error);

  // Mongoose bad ObjectId
  if (err.name === "CastError") {
    const message = `Resource not found`;
    error = new NotFoundError(message);
  }

  // Mongoose duplicate key
  if (err.code === 11000) {
    const message = `Resource with ${Object.keys(
      err.keyValue
    )} '${Object.values(
      err.keyValue
    )}' already exists. This field must be unique`;
    error = new BadRequestError(message);
  }

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const message = Object.values(err.errors)
      .map((val) => val.message)
      .join(". ");
    error = new BadRequestError(message);
  }

  // Yup validation error
  const isYupError = err instanceof Yup.ValidationError;
  if (isYupError) {
    const message = Object.values(err.errors).join(". ");
    error = new BadRequestError(message);
  }

  res.status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
    success: false,
    error: error.message || "Server Error",
  });
};

export default errorHandler;
