const express = require("express");
const {
  getAllPosts,
  addNewPost,
  singlePostDetails,
  updateSinglePost,
  deleteSinglePost,
} = require("../controllers/postControllers");
const router = express.Router();

router.route("/").get(getAllPosts).post(addNewPost);
router
  .route("/:id")
  .get(singlePostDetails)
  .put(updateSinglePost)
  .delete(deleteSinglePost);

module.exports = router;
