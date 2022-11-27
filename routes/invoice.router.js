import express from "express";

import { Create, Edit } from "../controllers/invoice.controller.js";

const router = express.Router();

router.post("/create", Create);
router.patch("/edit/:id", Edit);

export default router;
