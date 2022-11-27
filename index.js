import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import usersRoutes from "./routes/user.router.js";
import paymentRoutes from "./routes/payment.router.js";
import invoiceRoutes from "./routes/invoice.router.js";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());

try {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Connected");
} catch (err) {
  console.log(err);
}

app.get("/", (req, res) => {
  res.send("hello world this is invoice app");
});

app.use("/user", usersRoutes);
app.use("/payment", paymentRoutes);
app.use("/invoice", invoiceRoutes);

const PORT = 4000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("listning on port " + PORT);
});

// "city" : "chennai",
// "clientaddress" : "19309, radha nagar, chrompet.",
// "clientcity" : "theni",
// "clientcountry" : "united states",
// "clientpostcode"  : "600245",
// "clientsemail" : "kalithas@gmail.com",
// "clientsname" : "vignesh",
// "country" : "india",
// "description" : "this is good product",
// "invoicedate" : "2022-11-17",
// "itemname" : "the fault booj",
// "paymentdays" : "7days",
// "pid" : "#RG0314",
// "postcode" : "878334",
// "price" :  100,
// "qty" :  6,
// "streetaddress" : "109, erumal kovil street,",
// "total" :  600,
