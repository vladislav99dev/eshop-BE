import Product from "../database/models/Product";

const getAllProducts: Function = async () => {
  const products = await Product.find();
  return products;
};

const getOneProduct = () => {
  return;
};

const createNewProduct = () => {
  return;
};

const updateOneProduct = () => {
  return;
};

const deleteOneProduct = () => {
  return;
};

export default {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
};
