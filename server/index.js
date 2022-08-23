import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// Routers
import postsRouter from "./routes/posts";

const CONNECTION_URL = `mongodb+srv://elgun:st8HDR7SxPvE96zT@cluster0.3wohu.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postsRouter);

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
