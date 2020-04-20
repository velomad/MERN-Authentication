const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const users = require("./routes/users");
const mongoose = require("mongoose");
const cors = require('cors')

const app = express();
app.use(cors())

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());


// routes
app.use("/users", users);

// defining port
const PORT = process.env.PORT || 5000;

// connect to DB
mongoose
  .connect("mongodb://127.0.0.1:27017/authentication", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("connected to DB"))
  .catch((err) => console.log(err));

// listen to server
app.listen(PORT, () => {
  console.log(`connected to PORT : ${PORT}`);
});
