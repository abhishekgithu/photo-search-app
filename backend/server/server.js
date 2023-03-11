const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const photoRoutes = require("./routes");
const photoSchema = new mongoose.Schema({id:Number,url:String})

const Photo = mongoose.model("Photos", photoSchema);

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://admin:admin@cluster0.a2z7dfm.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/", photoRoutes);


app.post("/api/photos", (req, res) => {
  const { id,url } = req.body;
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

app.get("/api/photos", (req, res) => {
  Photo.find({}, (err, photos) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(photos);
    }
  });
});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});




// Photo.deleteMany({}, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('All documents deleted successfully');
//     mongoose.connection.close();
//   }
// });