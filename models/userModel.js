import mongoose from "mongoose";

const UserModel = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    default: "admin",
  },
});

const User = mongoose.model("User", UserModel);

export default User;
