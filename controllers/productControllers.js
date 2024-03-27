import Product from "../models/product.model.js";

const createProduct = async (req, res) => {
  const productData = req.body;
  console.log("our products data ------", productData);

  try {
    const newName = req.body.name;
    const existingProduct = await Product.findOne({ name: newName }).exec();
    console.log("existing product --- ", existingProduct);

    if (existingProduct?.name === newName) {
      return res.status(409).json({
        success: false,
        message: "Product already exists.",
      });
    }

    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      message: "Product created successfully.",
      newProduct: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product not created.",
      error: error.message,
    });
  }
};

const allProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({
      success: true,
      message: "All Products.",
      allProducts: products,
      productsLength: products.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "All Product not found, sorry.",
      error: error.message,
    });
  }
};

const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("the product id=>", id);
    const product = await Product.findById(id);
    res.status(200).json({
      success: true,
      message: "Hi, Product Found",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product not found, sorry.",
      error: error.message,
    });
  }
};

const updatedProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("the product id=>", id);
    const updatedproduct = await Product.findByIdAndUpdate(id, req.body);

    const updateFulfilled = await Product.findById(updatedproduct.id);
    res.status(200).json({
      success: true,
      message: "Hi, Product Updated",
      updatedproduct,
      updateFulfilled,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product not found, sorry.",
      error: error.message,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("the product id=>", id);
    const deletedproduct = await Product.findByIdAndDelete(id, req.body);

    res.status(200).json({
      success: true,
      message: "Hi, Product deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Not deleted.",
      error: error.message,
    });
  }
};

export {
  createProduct,
  allProducts,
  getProduct,
  updatedProduct,
  deleteProduct,
};
