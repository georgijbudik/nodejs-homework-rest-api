const transporter = require("./nodemailerConfig");

const sendEmail = async (data) => {
  const email = { from: "georgijbudik@meta.ua", ...data };
  await transporter.sendMail(email);
  return true;
};

module.exports = sendEmail;
