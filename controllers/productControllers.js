import mongoose from "mongoose";

import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { productname } = req.params;

    const product = await Product.findOne({ productname });

    if (!product) {
      return res.status(404).json({ msg: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { productname, subtitle, description, category, etsyLink } = req.body;

    if (!productname || !subtitle || !description || !category) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const imagePaths = req.files.map((file) => file.path);

    if (!req.files || req.files.length === 0) {
      return res
        .status(400)
        .json({ message: "At least one image is required" });
    }

    const newProduct = new Product({
      productname,
      subtitle,
      description,
      images: imagePaths,
      category,
      etsyLink,
    });

    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
