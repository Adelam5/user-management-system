import Permission from "../models/Permission";

import { NotFoundError } from "../errors";
import { asyncHandler } from "../middleware";

export const validatePermission = asyncHandler(async (req, res, next) => {
  // removing duplicates from array if there are any
  const newPermissions = Array.from(new Set(req.body.permissions));

  const permissions = await Permission.find({
    _id: { $in: newPermissions },
  });

  // checking if all permissions exist in DB
  if (permissions.length < newPermissions.length) {
    return next(new NotFoundError("One or more permissions was not found"));
  }

  req.permissions = newPermissions;

  next();
});
