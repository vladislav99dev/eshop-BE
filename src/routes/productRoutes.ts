import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.send("Get all product");
});

router.get("/:productId", (req: Request, res: Response) => {
  res.send("/id");
});

router.post("/", (req: Request, res: Response) => {
  res.send("Create a new product");
});

router.patch("/:productId", (req: Request, res: Response) => {
  res.send("Update an existing product");
});

router.delete("/:productId", (req: Request, res: Response) => {
  res.send("Delete an existing product");
});

export default router;
