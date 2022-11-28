import express from "express";

import {
  Create,
  Edit,
  GetData,
  GetOne,
} from "../controllers/invoice.controller.js";

const router = express.Router();

router.post("/create", Create);
router.get("/all", GetData);
router.patch("/edit/:id", Edit);
router.get("/get/:id", GetOne);

export default router;
