import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [photo, setPhoto] = useState("");
  const [result, setResult] = useState([]);
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const addPhoto = (photos) => {
    axios
      .post("http://localhost:5001/api/photos", photos)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPhotos = () => {
    axios
      .get("http://localhost:5001/api/photos")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changePhoto = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=hq9Bei2bKr-GBZXix2eLN02tgl_Aysgrtuwx7SJBhzE`
      )
      .then((response) => {
        const photos = response.data.results.map((photo) => {
          return {
            id: photo.id,
            url: photo.urls.small,
            selected: false,
          };
        });
        setResult(photos);
      });
  };

  React.useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=nature&per_page=10&client_id=hq9Bei2bKr-GBZXix2eLN02tgl_Aysgrtuwx7SJBhzE`
      )
      .then((response) => {
        const photos = response.data.results.map((photo) => {
          return {
            id: photo.id,
            url: photo.urls.small,
            selected: false,
          };
        });
        setResult(photos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <>
      <div>
        <div className="container text-center my-5">
          <input
            placeholder="Enter any keyword to search /  example: cat"
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
            {result.map((photo) => {
              return (
                <div className="col-lg-3 col-md-4 col-6 mb-4" key={photo.id}>
                  <img
                    className="img-fluid img-thumbnail d-block h-100"
                    src={photo.url}
                    alt=""
                  />
                  <span className="abc" style={{ marginBottom: "10px" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={photo.selected}
                      onChange={() => {
                        const photos = [...result];
                        const index = photos.findIndex(
                          (p) => p.id === photo.id
                        );
                        photos[index].selected = !photos[index].selected;
                        setSelectedPhotos(photos.filter((p) => p.selected));
                        setResult(photos);
                      }}
                    />
                    &nbsp;
                    <label className="form-check-label">select</label>{" "}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {/* <br /> */}
                    <button
                      type="button"
                      className="btn btn-primary"
                      style={{
                        padding: "1px",
                        marginBottom: "1px",
                        textAlign: "center",
                      }}
                      disabled={!photo.selected}
                      onClick={() => {
                        const photosWithUrl = selectedPhotos.map((photo) => {
                          return {
                            id: photo.id,
                            url: photo.url,
                            selected: photo.selected,
                          };
                        });
                        addPhoto(photosWithUrl);
                      }}
                    >
                      Save
                    </button>
                    <br />
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
