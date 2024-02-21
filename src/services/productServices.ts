import Product from "../database/models/Product";

const getAll: Function = async () => {
  const products = await Product.find();
  return products;
};

const getOne = () => {
  return;
};

const createNew = () => {
  return;
};

const updateOne = () => {
  return;
};

const deleteOne = () => {
  return;
};

export default {
  getAll,
  getOne,
  createNew,
  updateOne,
  deleteOne,
};
