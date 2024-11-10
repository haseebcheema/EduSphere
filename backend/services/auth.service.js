import { comparePassword } from "./password.service.js";
import { User } from "../models/index.js";

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");
  const isMatch = await comparePassword(password, user.passwordHash);
  if (!isMatch) throw new Error("Invalid credentials");
  return user;
};

export default loginUser;
