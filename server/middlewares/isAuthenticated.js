import { Response } from "../utils/Response";
import jwt from "jsonwebtoken";
export const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.Cookies.token;
    if (!token) {
      return Response(res, 401, false, "Unauthorized");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return Response(res, 401, false, "Unauthorized");
    }

    req.id = decoded.userId;
    next();
  } catch (error) {
    return Response(res, 500, false, "Internal Server Error", error);
  }
};
