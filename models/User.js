const mongoose = require("../dbs/connection");

const UserSchema = new mongoose.Schema(
  {
    email: String,
    username: String,
    password: String,
  },
  { timestamps: true }
);

const User = mongoose.model("users", UserSchema);
module.exports = User;
