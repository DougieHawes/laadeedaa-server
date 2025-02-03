import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    res.status(200).json({});
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    res.status(200).json({ msg: `get product ${productId}` });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { productname, subtitle, description, images, category, etsyLink } =
      req.body;

    if (
      !productname ||
      !images ||
      images.length === 0 ||
      !category ||
      !etsyLink
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newProduct = new Product({
      productname,
      subtitle,
      description,
      images,
      category,
      etsyLink,
    });

    const savedProduct = await newProduct.save();

    res.status(201).json({
      message: "Product created successfully!",
      product: savedProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
