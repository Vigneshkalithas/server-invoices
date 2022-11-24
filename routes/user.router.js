import express from "express";
// import {
//   Login,
//   Signup,
//   Logout,
//   getUsers,
//   Auth,
//   ForgetPassword,
//   Verify,
//   Changepassword,
// } from "../controllers/user.controller.js";
import { Signup, Login } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
// router.get("/getUsers", getUsers);

// router.post("/logout", Logout);
// router.post("/auth", Auth);
// router.post("/forgetpassword", ForgetPassword);
// router.post("/verify-token", Verify);
// router.patch("/changepassword/:id", Changepassword);

export default router;
