const express = require("express");
const userRoutes = require("./routes/auth");
const connectDatabase = require("./database");
const cors = require("cors");
require("dotenv").config();
connectDatabase();

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoutes);

// app.post("/api/signup", (req, res) => {
//   console.log(req.body);
//   res.json({ status: "Ok" });
// });

app.listen(process.env.PORT, () => {
  console.log(`Server started at port ${process.env.PORT}`);
});
