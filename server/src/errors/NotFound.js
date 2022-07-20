import { StatusCodes } from "http-status-codes";
import CustomError from "./Custom";

class NotFoundError extends CustomError {
  constructor(message) {
    super(message || "Resource not found");
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export default NotFoundError;
