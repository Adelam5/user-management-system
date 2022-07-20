import User from "../models/User";

import { asyncHandler } from "../middleware";
import { sendResponse } from "../utils/successResponse";
import { NotFoundError } from "../errors";
import Permission from "../models/Permission";

// @desc    List users
// @route   GET /api/users
// @access  Public
const list = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// middleware for finding user by id (called before read, update and remove)
const getById = asyncHandler(async (req, res, next) => {
  let user = await User.findById(req.params.id).populate("permissions");

  if (!user) {
    return next(new NotFoundError("User not found"));
  }

  req.user = user;
  next();
});

// @desc    Read user with specific id
// @route   GET /api/users/:id
// @access  Public
const read = asyncHandler(async (req, res) => {
  sendResponse(res, req.user);
});

// @desc    Create user
// @route   POST /api/users
// @access   Public
const create = asyncHandler(async (req, res) => {
  const user = await User.create(req.body);

  user.password = undefined;

  sendResponse(res, {
    id: user._id,
    firstName: user.firstName,
    lastName: user.lastName,
  });
});

// @desc    Update user with specific id
// @route   PUT /api/users/:id
// @access  Public
const update = asyncHandler(async (req, res) => {
  let user = req.user;

  user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  sendResponse(res, user);
});

// @desc    Remove user with specific id
// @route   DELETE /api/users/:id
// @access  Public
const updateUserPermissions = asyncHandler(async (req, res, next) => {
  let user = req.user;

  // removing duplicates from array if there are any
  const newPermissions = Array.from(new Set(req.body.permissions));

  const permissions = await Permission.find({
    _id: { $in: newPermissions },
  });

  // checking if all permissions exist in DB
  if (permissions.length < newPermissions.length) {
    return next(new NotFoundError("One or more permissions was not found"));
  }

  user = await User.findByIdAndUpdate(
    req.params.id,
    { permissions: newPermissions },
    {
      new: true,
      runValidators: true,
    }
  );

  sendResponse(res, user);
});

// @desc    Remove user with specific id
// @route   DELETE /api/users/:id
// @access  Public
const remove = asyncHandler(async (req, res, next) => {
  let user = req.user;

  user = await user.remove();

  sendResponse(res, user);
});

export { list, getById, read, create, update, updateUserPermissions, remove };
