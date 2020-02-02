const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema(
  {
    users_id: String,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    ip_address: String
  },
  {
    timestamps: true
  }
);

const USERS = mongoose.model("USERS", usersSchema);

module.exports = USERS;
