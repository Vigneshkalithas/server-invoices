import { Users } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Sessions } from "../models/session.model.js";

const Signup = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    const ExistUser = await Users.findOne({ email: email });
    if (ExistUser) {
      //   res.status(400).send("user already exists");
      res.status(201).send({ message: "user already exists" });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(password, salt);
      const userData = { email, password: hash, role };
      const user = new Users(userData);
      const token = jwt.sign(
        { _id: user._id + Date.now() },
        process.env.SECRET
      );
      const sessionData = new Sessions({ userId: user._id, token });
      await user.save();
      await sessionData.save();
      res
        .status(201)
        .send({ message: "sign up successfully", sessionData: sessionData });
    }
  } catch (error) {
    console.log(error);
  }
};

export { Signup };
