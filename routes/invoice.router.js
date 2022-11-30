import express from "express";

import {
  Create,
  Edit,
  GetData,
  GetOne,
  MarkPaid,
  Delete,
} from "../controllers/invoice.controller.js";
import { authorizeAdmin } from "../middlewares/auth.invoice.js";

const router = express.Router();

// /invoice

router.post("/create", authorizeAdmin, Create); // success
router.get("/all", GetData);
router.patch("/edit/:id", authorizeAdmin, Edit); //success
router.get("/get/:id", GetOne);
router.patch("/markpaid/:id", authorizeAdmin, MarkPaid); // success
3;
router.delete("/delete/:id", authorizeAdmin, Delete); // success

export default router;
