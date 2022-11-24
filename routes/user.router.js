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
import {
  Signup,
  Login,
  Logout,
  ForgetPassword,
  Verify,
  Changepassword,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);
router.post("/forgetpassword", ForgetPassword);
router.post("/verify-token", Verify);
router.patch("/changepassword/:id", Changepassword);

// router.post("/auth", Auth);
// router.get("/getUsers", getUsers);

export default router;
