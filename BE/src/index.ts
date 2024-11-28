import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import process from "process";

import metricsRouter from "./routes/metricsRoutes";
import postRouter from "./routes/postRoutes";

const app = express();
const port = process.env.PORT || 5015;
app.use(cors());
app.use(express.json());

app.use("/api/posts", postRouter);
app.use("/api/metrics", metricsRouter);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`[server]: Server is running at http://localhost:${port}`);
    });
  })
  .catch((err: Error) => console.error(err));
