import httpStatus from "../constants/httpStatus.js";
import { verifyToken } from "../services/token.service.js";

const roleMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    try {
      const token = req.headers.token;
      if (!token) {
        return res
          .status(httpStatus.FORBIDDEN)
          .json({ message: "Access denied. No token provided." });
      }

      const user = verifyToken(token);

      if (!allowedRoles.includes(user.role)) {
        return res
          .status(httpStatus.FORBIDDEN)
          .json({ message: "Forbidden: insufficient rights." });
      }

      req.user = user;
      next();
    } catch (error) {
      return res.status(httpStatus.FORBIDDEN).json({ message: error.message });
    }
  };
};

export default roleMiddleware;
