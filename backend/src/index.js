const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const { routes } = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://teste:senhasegura123@cluster0-twst1.gcp.mongodb.net/db0?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
