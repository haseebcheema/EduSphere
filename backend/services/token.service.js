import jwt from "jsonwebtoken";
import jwtConfig from "../config/jwt.js";

const generateToken = (user) => {
  const { secret, expiresIn } = jwtConfig;
  return jwt.sign({ id: user._id, role: user.role }, secret, { expiresIn });
};

export default generateToken;
