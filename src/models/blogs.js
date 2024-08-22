const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // Optionally add this to ensure title is required
  },
  content: {
    type: String,
    required: true, // Optionally add this to ensure content is required
  },
  status: {
    type: Boolean,
    default: true, // Optionally add this to set a default value
  },
});

const BlogDetailsModel = mongoose.model("BlogDetails", blogSchema);

module.exports = BlogDetailsModel;
