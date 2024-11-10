import express from "express";
import connectDatabase from "./config/db.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import schoolRoutes from "./routes/school.routes.js";
import branchRoutes from "./routes/branch.routes.js";

const app = express();
dotenv.config();

// port
const PORT = process.env.APP_PORT || 3000;

// middlewares
app.use(express.json());
app.use(cookieParser());
app.use("/auth", authRoutes);
app.use("/school", schoolRoutes);
app.use("/branch", branchRoutes);

// database connection
connectDatabase();

// server
app.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
);
