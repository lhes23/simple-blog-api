const { Schema, models, model } = require("mongoose");

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    featuredImg: { type: String },
    images: [{ type: String }],
  },
  { timestamps: true }
);

const Post = models?.Post || model("Post", PostSchema);
module.exports = Post;
