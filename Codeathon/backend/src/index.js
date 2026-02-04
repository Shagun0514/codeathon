import express from "express";
import authRoutes from "./routes/auth.js";
import { auth } from "./middleware/auth.js";

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/api/protected", auth, (req, res) => {
  res.json({ message: "access granted", user: req.user });
});

app.get("/api/me", auth, (req, res) => {
  res.json({
    id: req.user.userId,
    email: req.user.email
  });
});

app.listen(3000, () => {
  console.log("SERVER STARTED ON PORT 3000");
});

import { errorHandler } from "./middleware/errorHandler.js";

app.use(errorHandler);
