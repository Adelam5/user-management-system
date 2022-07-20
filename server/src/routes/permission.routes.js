import express from "express";

import { list } from "../controllers/permission.controller";

const router = express.Router();

router.route("/").get(list);

export default router;
