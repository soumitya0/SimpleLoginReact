const express = require("express");
const app = express();

//db connection
const connectDb = require("./config/db");
connectDb();

//Middle Ware
app.use(express.json({ extended: false })); // geting the data from req.body to use it we have to add middleware

//custome Middle Ware
const middleWare = require("./middlerWare/middleware");

app.get("/testing", (req, res) => {
  res.send("i am testing from Bacckend");
});

app.get("/api/home", (req, res) => {
  res.send(" Welcome !");
});

app.get("/api/secrete", middleWare, (req, res) => {
  res.send("The password is potato"); // these is our Secrete route or you can say Protected Route
});

//define routes
app.use("/api/register", require("./routes/register"));

app.use("/api/login", require("./routes/login"));

app.listen(5000, () => {
  console.log("server running 5000");
});
