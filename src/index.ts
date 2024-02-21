import express, { Express } from "express";
import productRouter from "./routes/productRoutes";
import bodyParser from "body-parser";
import connectDB from "./database/connection";
require("dotenv").config();

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use("/api", productRouter);

const connection = connectDB();

if (connection) {
  app.listen(port, () => {
    console.log(`[server]: DB connection is on!!`);
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}
