import express from "express";

import User from "../models/User";

import {
  list,
  getById,
  read,
  create,
  update,
  remove,
  updateUserPermissions,
} from "../controllers/user.controller";
import { advancedResults } from "../middleware";
import { validateUser } from "../validation/validateUser";

const router = express.Router();

router.route("/").get(advancedResults(User), list).post(validateUser, create);

router.route("/:id").get(read).put(update).delete(remove);

router.put("/:id/permissions", updateUserPermissions);

router.param("id", getById);

export default router;
