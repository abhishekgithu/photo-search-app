const mongoose = require("mongoose");
import {photoSchema} from './photoschema';

const Photo = mongoose.model("Photo", photoSchema);

module.exports = Photo;
