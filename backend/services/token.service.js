import jwt from "jsonwebtoken";
import jwtConfig from "../config/jwt.js";

const { secret, expiresIn } = jwtConfig;

const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, secret, { expiresIn });
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    throw new Error("Invalid or expired token");
  }
};

export { generateToken, verifyToken };
