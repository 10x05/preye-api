import express from "express";

import {
  createProduct,
  allProducts,
  getProduct,
  updatedProduct,
  deleteProduct,
} from "../controllers/productControllers.js";

const router = express.Router();
router.post("/create-products", createProduct);
router.get("/all-products", allProducts);
router.get("/:id", getProduct);
router.put("/update/:id", updatedProduct);
router.delete("/delete/:id", deleteProduct);

export default router;
