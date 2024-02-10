const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const subscriptionEnum = ["starter", "pro", "business"];
const emailRegexp =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: emailRegexp,
    },
    subscription: {
      type: String,
      enum: subscriptionEnum,
      default: "starter",
    },
    token: {
      type: String,
      default: null,
    },
    avatarURL: String,
    // verify: {
    //   type: Boolean,
    //   default: false,
    // },
    // verificationToken: {
    //   type: String,
    //   required: [true, "Verify token is required"],
    // },
  },
  { versionKey: false }
);

userSchema.post("save", handleMongooseError);

const User = model("user", userSchema);

const registerSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required().min(6),
  email: Joi.string().required().pattern(emailRegexp),
  subscription: Joi.string()
    .default("starter")
    .valid(...subscriptionEnum),
  token: Joi.string().default(null),
});

const loginSchema = Joi.object({
  password: Joi.string().required().min(6),
  email: Joi.string().required().pattern(emailRegexp),
  token: Joi.string().default(null),
});

// const verifySchema = Joi.object({
//   email: Joi.string()
//     .required()
//     .pattern(emailRegexp)
//     .error(new Error("Missing required field email")),
// });

const schemas = {
  registerSchema,
  loginSchema,
  // verifySchema,
};

module.exports = { schemas, User };
