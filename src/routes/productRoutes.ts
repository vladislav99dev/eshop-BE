import { Router, Request, Response } from "express";
import productControllers from "../controllers/productControllers";

const router = Router();

router.get("/", productControllers.getAll);

router.get("/:productId", productControllers.getOne);

router.post("/", productControllers.createNew);

router.patch("/:productId", productControllers.updateOne);

router.delete("/:productId", productControllers.deleteOne);

export default router;
