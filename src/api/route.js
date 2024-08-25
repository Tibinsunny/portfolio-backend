const express = require("express");


const blog_details_model = require("../models/blogs");

const router = express.Router();

router.get("/blogs", async (req, res) => {
  let blogDetails = await blog_details_model.find({}, { title: 1 });
  res.json({
    message: "API - 👋🌎🌍🌏",
    data: blogDetails,
  });
});

router.get("/blogs/:id", async (req, res) => {
  let blogDetails = await blog_details_model.findOne({ _id: req.params.id });
  res.json({
    message: "API - 👋🌎🌍🌏",
    data: blogDetails,
  });
});



module.exports = router;
