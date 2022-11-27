import express from "express";
import { Orders, VerifyPayment } from "../controllers/payment.controller.js";
const router = express.Router();

// const router = require("express").Router();
// const Razorpay = require("razorpay");
// const crypto = require("crypto");

router.post("/orders", Orders());

router.post("/verify", VerifyPayment());

export default router;
