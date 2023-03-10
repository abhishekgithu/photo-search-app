import React, { useState } from "react";
import axios from "axios";

function App() {
const [photo, setPhoto] = useState("");
const [photos, setPhotos] = useState([]);

const changePhoto = () => {
axios
.get(`
https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=hq9Bei2bKr-GBZXix2eLN02tgl_Aysgrtuwx7SJBhzE`
)
.then((response) => {
// console.log(response.data);
setPhotos(response.data.results);
});
};

const savePhoto = (url) => {
axios.post("http://localhost:3001/api/photos", { url }).then((response) => {
console.log(response.data);
});
};

return (
<>
<div className="container text-center my-5">
<input
type="text"
className="form-control"
value={photo}
onChange={(e) => {
setPhoto(e.target.value);
}}
/>
<button
       type="submit"
       onClick={changePhoto}
       className="btn btn-primary my-2"
     >
Get Photo
</button>
</div>
<div className="container">
    <div className="row text-center text-lg-start">
      {photos.map((photo) => (
        <div className="col-lg-3 col-md-4 col-6" key={photo.id}>
          <img
            className="img-fluid img-thumbnail d-block mb-4 h-100"
            src={photo.urls.small}
            alt=""
          />
        </div>
      ))}
    </div>
  </div>
</>
);
}

export default App;
