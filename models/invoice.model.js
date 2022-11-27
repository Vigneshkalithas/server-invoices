import mongoose from "mongoose";

// streetaddress: yup.string().required("Address is Required"),
//   city: yup.string().required("City is Required"),
//   postcode: yup.string().required("Post Code is Required"),
//   country: yup.string().required("Country is Required"),
//   clientsname: yup.string().required("Client Name  is Required"),
//   clientsemail: yup.string().required("Client Email  is Required"),
//   clientaddress: yup.string().required("Client Address  is Required"),
//   clientcity: yup.string().required("City is Required"),
//   clientpostcode: yup.string().required("Post Code is Required"),
//   clientcountry: yup.string().required("Country is Required"),

//   invoicedate: yup.date().required("Plese Choose Date"),

//   paymentdays: yup.string().required("Please select one"),

//   description: yup.string().required("Enter Describtion"),
//   itemname: yup.string().required("Enter Item Name"),
//   qty: yup.number().required("Enter Qty"),
//   price: yup.number().required("Enter Price"),
//   pid: yup.string().required("choose product id"),

const invoiceSchema = new mongoose.Schema(
  {
    streetaddress: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postcode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    clientsname: {
      type: String,
      required: true,
    },
    clientsemail: {
      type: String,
      required: true,
    },
    clientaddress: {
      type: String,
      required: true,
    },
    clientcity: {
      type: String,
      required: true,
    },
    clientpostcode: {
      type: String,
      required: true,
    },
    clientcountry: {
      type: String,
      required: true,
    },
    invoicedate: {
      type: String,
      required: true,
    },
    paymentdays: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    itemname: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    pid: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Invoice = mongoose.model("Invoice", invoiceSchema);
