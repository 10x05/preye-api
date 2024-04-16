import mongoose from "mongoose";

const MaysSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the product name"],
    unique: true,
  },
  price: {
    type: String,
    required: true,
    default: 0,
  },
  rating: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    default: 1,
  },
});

const Product = mongoose.model("Product", MaysSchema);

export default Product;
