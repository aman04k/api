const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", async function (next) {
  try {
    const hashedpassword = await bcrypt.hash(this.password, 10);
    this.password = hashedpassword;
    next();
  } catch (error) {
    next(error);
  }
});

const User = mongoose.model("user", userSchema);

module.exports = User;