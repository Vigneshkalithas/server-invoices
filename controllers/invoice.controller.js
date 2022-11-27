import { Invoice } from "../models/invoice.model.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { Sessions } from "../models/session.model.js";
// import nodemailer from "nodemailer";

const Create = async (req, res) => {
  const data = req.body;
  try {
    const invoices = new Invoice(data);
    const addInvoices = await invoices.save();
    // console.log(invoices);
    await addInvoices.save();
    res.status(201).send(addInvoices);
  } catch (error) {
    res.status(400).send(error);
  }
};
const Edit = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const Editinvoices = await Invoice.findByIdAndUpdate(id, { ...data });
    await Editinvoices.save();
    res.status(200).send(Editinvoices);
  } catch (error) {
    res.status(400).send(error);
  }
};

export { Create, Edit };
