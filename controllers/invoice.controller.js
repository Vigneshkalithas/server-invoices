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
    const Editinvoices = await Invoice.findByIdAndUpdate(
      id,
      { ...data },
      { new: true }
    );
    await Editinvoices.save();
    res.status(200).send(Editinvoices);
  } catch (error) {
    res.status(400).send(error);
  }
};

const GetData = async (req, res) => {
  try {
    const invoice = await Invoice.find();
    res.status(200).send(invoice);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

const GetOne = async (req, res) => {
  const { id } = req.params;
  try {
    const invoice = await Invoice.findById(id);
    res.status(200).send(invoice);
  } catch (error) {
    res.status(400).send({ message: error });
  }
};

const MarkPaid = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    // status
    const updateStatus = await Invoice.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    await updateStatus.save();
    res.status(200).send(updateStatus);
  } catch (error) {
    res.status(400).send({ message: "sorry", error: error });
  }
};

const Delete = async (req, res) => {
  const { id } = req.params;
  try {
    const invoice = await Invoice.findByIdAndDelete(id);
    res.status(200).send({ message: "Invoice deletedd succesfully" });
  } catch (error) {
    res.status(400).send({ message: "Something wnt wrong", error: error });
  }
};
export { Create, Edit, GetData, GetOne, MarkPaid, Delete };
