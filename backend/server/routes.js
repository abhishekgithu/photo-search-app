const express = require("express");
const mongoose = require("mongoose");
const Photo = require("./model");

const router = express.Router();

router.post("/api/photos", (req, res) => {
  const { id, url } = req.body;
  const newPhoto = new Photo({
    id,
    url
  });
  newPhoto.save((err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(newPhoto);
    }
  });
});

router.get("/api/photos", (req, res) => {
  Photo.find({}, (err, photos) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(photos);
    }
  });
});

module.exports = router;
