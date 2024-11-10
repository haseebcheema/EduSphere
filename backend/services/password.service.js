import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(parseInt(process.env.SALT_ROUNDS, 10));
  return await bcrypt.hash(password, salt);
};

const comparePassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

export { hashPassword, comparePassword };
