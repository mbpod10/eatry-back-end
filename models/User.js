const mongoose = require("../dbs/connection");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  foods: [{ type: mongoose.Schema.Types.ObjectId, ref: "foods" }],
});

const User = mongoose.model("users", UserSchema);
module.exports = User;
