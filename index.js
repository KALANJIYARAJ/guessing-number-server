const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const scoreRoutes = require("./routes/score");
const app = express();
require("dotenv").config();

app.use(
  cors({
    orgin: "https://relaxed-lily-253ddb.netlify.app",
  })
);
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/score", scoreRoutes);

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server started on 5000`)
);
