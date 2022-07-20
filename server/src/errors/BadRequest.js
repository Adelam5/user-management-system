import { StatusCodes } from "http-status-codes";
import CustomError from "./Custom";

class BadRequestError extends CustomError {
  constructor(message) {
    super(message || "Bad request");
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequestError;
