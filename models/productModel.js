import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    productname: {
      type: String,
      required: true,
      trim: true,
    },
    subtitle: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    images: [
      {
        type: String,
        require: true,
      },
    ],
    category: {
      type: String,
      required: true,
      trim: true,
    },
    etsyLink: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;
