import { Router, Request, Response } from "express";
import productControllers from "../controllers/productControllers";

const router = Router();

router.get("/", productControllers.getAllProducts);

router.get("/:productId", productControllers.getOneProduct);

router.post("/", productControllers.createNewProduct);

router.patch("/:productId", productControllers.updateOneProduct);

router.delete("/:productId", productControllers.deleteOneProduct);

export default router;
