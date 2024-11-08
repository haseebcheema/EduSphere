import loginUser from "../services/auth.service.js";
import generateToken from "../services/token.service.js";
import { setAuthCookie } from "../services/cookie.service.js";
import httpStatus from "../constants/httpStatus.js";

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser(email, password);
    const token = generateToken(user);
    setAuthCookie(res, token);
    res.status(httpStatus.OK).json({ message: "Login successful!" });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

export default login;
