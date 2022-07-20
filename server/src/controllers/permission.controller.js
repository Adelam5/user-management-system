import Permission from "../models/Permission";

import { asyncHandler } from "../middleware";
import { sendResponse } from "../utils/successResponse";

// @desc    List all permissions
// @route   GET /api/permissions
// @access  Public
const list = asyncHandler(async (req, res) => {
  const permissions = await Permission.find();
  sendResponse(res, permissions);
});

export { list };
