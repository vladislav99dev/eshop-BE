import express, { Express } from "express";
import productRouter from "./routes/productRoutes";

const app: Express = express();
const port = process.env.PORT || 3001;

app.use("/api", productRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
