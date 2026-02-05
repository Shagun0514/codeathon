const express = require("express");
require("dotenv").config();

const quizRoutes = require("./routes/quiz");
const teacherRoutes = require("./routes/teacher");

const app = express();
app.use(express.json());

app.use("/api/quiz", quizRoutes);
app.use("/api/teacher", teacherRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Skillace backend running on ${process.env.PORT}`)
);
