import "./config/env.js";

import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";

import contactRoutes from "./routers/contactRoutes.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(helmet());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use(express.json({ limit: "10kb" }));

const contactLimiter = rateLimit({
  windowMs: 20 * 60 * 1000,
  limit: 6,
  message: {
    message: "Too many contact requests. Please try again later.",
  },
});

app.use("/api/contact", contactLimiter, contactRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Portfolio API is running",
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
