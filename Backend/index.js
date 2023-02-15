const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

mongoose.set('strictQuery', true);

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");

app.use(express.json());
app.use(cors());

const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true };

mongoose
  .connect( process.env.MONGODB_URI, connectionOptions)
  .then(() => console.log("Connected successfully"))
  .catch((err) => console.error(err));
app.use("/movie",todoRoutes);

app.listen(PORT, () =>{
    console.log("the server is listening on port " + PORT);
});


