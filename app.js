const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

const uri = `${process.env.MONGODB_CLUSTER_URI}/${process.env.MONGODB_DATABASE_NAME}?retryWrites=true&w=majority`;

mongoose.set('strictQuery', true);


mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Conectado correctamente a MongoDB Atlas"))
.catch(err => console.error("Error al conectar con MongoDB:", err));

const moviesRouter = require("./routes/movies");
const bookmarksRouter = require("./routes/bookmarks");
const usersRouter = require("./routes/users");

app.use("/movies", moviesRouter);
app.use("/bookmarks", bookmarksRouter);
app.use("/users", usersRouter);


module.exports = app;
