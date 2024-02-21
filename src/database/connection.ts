import mongoose from "mongoose";

const connectDB: Function = async () =>
  await mongoose.connect(process.env.DB_CONNECTION!);

export default connectDB;
