const nodemailer = require("nodemailer");

const { META_PASSWORD } = process.env;

const transporter = nodemailer.createTransport({
  host: "smtp.meta.ua",
  port: 465,
  secure: true,
  auth: {
    user: "georgijbudik@meta.ua",
    pass: META_PASSWORD,
  },
});

module.exports = transporter;
