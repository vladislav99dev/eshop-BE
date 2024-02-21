import { Request, Response } from "express";
import productServices from "../services/productServices";

const getAll = async (req: Request, res: Response) => {
  const allProducts = await productServices.getAll();
  res.json(allProducts);
};

const getOne = (req: Request, res: Response) => {
  const product = productServices.getOne();
  res.send("Get an existing Product");
};

const createNew = (req: Request, res: Response) => {
  const createdProduct = productServices.createNew();
  res.send("Create a new Product");
};

const updateOne = (req: Request, res: Response) => {
  const updateProduct = productServices.updateOne();
  res.send("Update an existing Product");
};

const deleteOne = (req: Request, res: Response) => {
  const deletedProduct = productServices.deleteOne();
  res.send("Delete an existing Product");
};

export default {
  getAll,
  getOne,
  createNew,
  updateOne,
  deleteOne,
};
