// Entry point for the application
import express from "express";
import morgan from "morgan";
import config from "./config.js";
import apiRouter from "./router.js";
import mongoose from "mongoose";
// TODO: Import the routes

const app = express();

// Logging middleware
app.use(morgan("dev"));

app.use(express.static("public", { extensions: ["html"] }));
app.use(express.json());

mongoose.connect(process.env.DB_CLIENT_URL || "mongodb://localhost/fitnessdb")

app.use("/api", apiRouter);

app.listen(config.port, () => {
  console.log(`Server 🏃🏾‍♂️ at: http://localhost:${config.port}`);
});

