// Entry point for the application
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import config from "./config.js";
// import htmlRouter from "./htmlroutes.js";
import apiRouter from "./router.js";
// TODO: Import the routes

const app = express();

// Logging middleware
app.use(morgan("dev"));

app.use(express.static("public"));
app.use(express.json());

mongoose.connect("mongodb://localhost/fitnessdb");

app.use(express.static("public", { extensions: ["html"] }));

app.use("/api", apiRouter);

app.listen(config.port, () => {
  console.log(`Server 🏃🏾‍♂️ at: http://localhost:${config.port}`);
});
