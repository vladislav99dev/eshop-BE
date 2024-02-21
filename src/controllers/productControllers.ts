import { Request, Response } from "express";

const getAllProducts = (req: Request, res: Response) => {
  res.send("Get all Products");
};

const getOneProduct = (req: Request, res: Response) => {
  res.send("Get an existing Product");
};

const createNewProduct = (req: Request, res: Response) => {
  res.send("Create a new Product");
};

const updateOneProduct = (req: Request, res: Response) => {
  res.send("Update an existing Product");
};

const deleteOneProduct = (req: Request, res: Response) => {
  res.send("Delete an existing Product");
};
export default {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
};
