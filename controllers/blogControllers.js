import Blog from "../models/blogModel.js";

export const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const image = req.file ? req.file.filename : null;

    const newBlog = new Blog({
      title,
      image,
      content,
    });

    await newBlog.save();

    res.status(200).json(newBlog);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getBlog = async (req, res) => {
  try {
    const BlogItems = await Blog.find();

    res.status(200).json(BlogItems);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

export const getBlogItem = async (req, res) => {
  try {
    const { blogId } = req.params;

    const blogItem = await Blog.findById(blogId);

    res.status(200).json(blogItem);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
