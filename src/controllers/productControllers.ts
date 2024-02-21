import { Request, Response } from "express";
import productServices from "../services/productServices";

const getAllProducts = (req: Request, res: Response) => {
  const allProducts = productServices.getAllProducts();
  res.send("Get all Products");
};

const getOneProduct = (req: Request, res: Response) => {
  const product = productServices.getOneProduct();
  res.send("Get an existing Product");
};

const createNewProduct = (req: Request, res: Response) => {
  const createdProduct = productServices.createNewProduct();
  res.send("Create a new Product");
};

const updateOneProduct = (req: Request, res: Response) => {
  const updateProduct = productServices.updateOneProduct();
  res.send("Update an existing Product");
};

const deleteOneProduct = (req: Request, res: Response) => {
  const deletedProduct = productServices.deleteOneProduct();
  res.send("Delete an existing Product");
};

export default {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
};
