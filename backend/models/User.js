const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);
module.exports = User;
