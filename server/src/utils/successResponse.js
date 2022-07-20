import { StatusCodes } from "http-status-codes";

// Formatting response
export const sendResponse = (res, payload, statusCode = StatusCodes.OK) => {
  return res.status(statusCode).json({
    success: true,
    data: payload,
  });
};
