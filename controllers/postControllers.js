const Post = require("../models/postModels");
const path = require("path");

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json({ posts });
  } catch (error) {
    return res.status(401).json({ error });
  }
};

const addNewPost = async (req, res) => {
  const { title, content } = req.body;
  const loc = path.join(__dirname, "..", "uploads", "img.jpg");
  return res.json({ loc, body: req.body, files: req.files });
  // const { title, content, featuredImg, images } = req.body;
  // try {
  //   const newPost = await Post.create({ title, content, featuredImg, images });
  //   return res.status(201).json(newPost);
  // } catch (error) {
  //   return res.status(401).json({ error });
  // }
};

const singlePostDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.find({ _id: id });
    return res.status(201).json({ post });
  } catch (error) {
    return res.status(401).json({ error });
  }
};

const updateSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, img } = req.body;
    const post = await Post.findByIdAndUpdate(
      { _id: id },
      { title, content, img }
    );
    return res.status(201).json({ post });
  } catch (error) {
    return res.status(401).json({ error });
  }
};

const deleteSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndDelete({ _id: id });
    return res
      .status(201)
      .json({ message: `Successfully Deleted Post ID: ${id}` });
  } catch (error) {
    return res.status(401).json({ error });
  }
};

module.exports = {
  getAllPosts,
  addNewPost,
  singlePostDetails,
  updateSinglePost,
  deleteSinglePost,
};
