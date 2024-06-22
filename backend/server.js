const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const userRoutes = require("./routes/UserRoutes");
const RegisterRouter = require("./routes/Register")
const mongoose = require("mongoose");
const LoginRoute = require("./routes/Login");
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log("hi");
    console.log(err.message);
  });

app.use("/api/user", userRoutes);
app.use("/register",RegisterRouter);
app.use("/login",LoginRoute);
app.listen(5000, () => {
  console.log("server started on port 5000");
});



