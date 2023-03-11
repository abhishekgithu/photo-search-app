const mongoose = require("mongoose");
const photoSchema = require("./photos.schema");

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
