import express from "express";
import { orders, verifyPayment } from "../controllers/payment.controller.js";
const router = express.Router();

// const router = require("express").Router();
// const Razorpay = require("razorpay");
// const crypto = require("crypto");

router.post("/orders", orders);

router.post("/verify", verifyPayment);

export default router;
