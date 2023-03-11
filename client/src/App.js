// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   const [photo, setPhoto] = useState("");
//   const [result, setResult] = useState([]);

//   const changePhoto = () => {
//     axios
//       .get(
//         `https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=hq9Bei2bKr-GBZXix2eLN02tgl_Aysgrtuwx7SJBhzE`
//       )
//       .then((response) => {
//         // console.log(response.data);
//         setResult(response.data.results);
//       });
//   };
//   return (
//     <>
//       <div className="container text-center my-5">
//         <input
//           type="text"
//           className="form-control"
//           value={photo}
//           onChange={(e) => {
//             setPhoto(e.target.value);
//           }}
//         />
//         <button
//           type="submit"
//           onClick={changePhoto}
//           className="btn btn-primary my-2"
//         >
//           Get Photo
//         </button>
//       </div>

//       <div className="container">
//         <div className="row text-center text-lg-start">
//           {result.map((value) => {
//             return (
//               <div className="col-lg-3 col-md-4 col-6" key= {value.id}>
//                 <img
//                   className="img-fluid img-thumbnail d-block mb-4 h-100"
//                   src={value.urls.small}
//                   alt=""
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;



// import React, { useState } from "react";
// import axios from "axios";
// function App() {
//   const [photo, setPhoto] = useState("");
//   const [result, setResult] = useState([]);

//   const changePhoto = () => {
//     axios
//       .get(
//         `http://localhost:5001/api/photos`
//       )
//       .then((response) => {
//         setResult(response.data);
//       });
//   };

//   const addPhoto = (photoUrl) => {
//     axios
//       .post(
//         `http://localhost:5001/api/photos`,
//         { url: photoUrl }
//       )
//       .then((response) => {
//         setResult([...result, response.data]);
//       });
//   };

//   return (
//     <>
//       <div className="container text-center my-5">
//         <input
//           type="text"
//           className="form-control"
//           value={photo}
//           onChange={(e) => {
//             setPhoto(e.target.value);
//           }}
//         />
//         <button
//           type="submit"
//           onClick={() => addPhoto(photo)}
//           className="btn btn-primary my-2"
//         >
//           Add Photo
//         </button>
//         <span>      <button
//           type="submit"
//           onClick={changePhoto}
//           className="btn btn-primary my-2"
//         >
//           Get Photos
//         </button></span>

//       </div>

//       <div className="container">
//         <div className="row text-center text-lg-start">
//           {result.map((value) => {
//             return (
//               <div className="col-lg-3 col-md-4 col-6" key= {value._id}>
//                 <img
//                   className="img-fluid img-thumbnail d-block mb-4 h-100"
//                   src={value.url}
//                   alt=""
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   const [photo, setPhoto] = useState("");
//   const [result, setResult] = useState([]);

//   const changePhoto = () => {
//     axios
//       .get(`http://localhost:5001/api/photos`)
//       .then((response) => {
//         setResult(response.data);
//       });
//   };

//   const addPhoto = (photoUrl) => {
//     axios
//       .post(`http://localhost:5001/api/photos`, { url: photoUrl })
//       .then((response) => {
//         setResult([...result, response.data]);
//       });
//   };

//   return (
//     <>
//       <div className="container text-center my-5">
//         <input
//           type="text"
//           className="form-control"
//           value={photo}
//           onChange={(e) => {
//             setPhoto(e.target.value);
//           }}
//         />
//         <button
//           type="submit"
//           onClick={() => addPhoto(photo)}
//           className="btn btn-primary my-2"
//         >
//           Add Photo
//         </button>
//         <button
//           type="submit"
//           onClick={changePhoto}
//           className="btn btn-primary my-2"
//         >
//           Get Photos
//         </button>
//       </div>

//       <div className="container">
//         <div className="row text-center text-lg-start">
//           {result.map((value) => {
//             return (
//               <div className="col-lg-3 col-md-4 col-6" key={value._id}>
//                 <img
//                   className="img-fluid img-thumbnail d-block mb-4 h-100"
//                   src={value.url}
//                   alt=""
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;



// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   const [photo, setPhoto] = useState("");
//   const [result, setResult] = useState([]);

//   const addPhoto = (id, url) => {
//     axios
//       .post("http://localhost:5001/api/photos", { id, url })
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const getPhotos = () => {
//     axios
//       .get("http://localhost:5001/api/photos")
//       .then((res) => {
//         console.log(res.data);
//         setResult(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const changePhoto = () => {
//     axios
//       .get(
//         `https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=hq9Bei2bKr-GBZXix2eLN02tgl_Aysgrtuwx7SJBhzE`
//       )
//       .then((response) => {
//         setResult(response.data.results);
//         // add photos to the MongoDB server
//         response.data.results.forEach((photo) => {
//           addPhoto(photo.id, photo.urls.small);
//         });
//       });
//   };

//   // call getPhotos to retrieve photos from the MongoDB server
//   React.useEffect(() => {
//     getPhotos();
//   }, []);

//   return (
//     <>
//       <div className="container text-center my-5">
//         <input
//           type="text"
//           className="form-control"
//           value={photo}
//           onChange={(e) => {
//             setPhoto(e.target.value);
//           }}
//         />
//         <button
//           type="submit"
//           onClick={changePhoto}
//           className="btn btn-primary my-2"
//         >
//           Get Photo
//         </button>
//       </div>

//       <div className="container">
//         <div className="row text-center text-lg-start">
//           {result.map((value) => {
//             return (
//               <div className="col-lg-3 col-md-4 col-6" key={value.id}>
//                 <img
//                   className="img-fluid img-thumbnail d-block mb-4 h-100"
//                   src={value.urls?.small|| ""}
//                   alt=""
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;




// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   const [photo, setPhoto] = useState("");
//   const [result, setResult] = useState([]);

//   const addPhoto = (id, url) => {
//     axios
//       .post("http://localhost:5001/api/photos", { id, url })
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const getPhotos = () => {
//     axios
//       .get("http://localhost:5001/api/photos")
//       .then((res) => {
//         console.log(res.data);
//         setResult(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const changePhoto = () => {
//     axios
//       .get(
//         `https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=hq9Bei2bKr-GBZXix2eLN02tgl_Aysgrtuwx7SJBhzE`
//       )
//       .then((response) => {
//         setResult(response.data.results);
//       });
//   };

//   const handleSave = () => {
//     result.forEach((photo) => {
//       addPhoto(photo.id, photo.urls.small);
//     });
//   };

//   React.useEffect(() => {
//     getPhotos();
//   }, []);

//   return (
//     <>
//       <div className="container text-center my-5">
//         <input
//           type="text"
//           className="form-control"
//           value={photo}
//           onChange={(e) => {
//             setPhoto(e.target.value);
//           }}
//         />
//         <button
//           type="submit"
//           onClick={changePhoto}
//           className="btn btn-primary my-2"
//         >
//           Get Photo
//         </button>
//         <button
//           type="submit"
//           onClick={handleSave}
//           className="btn btn-primary my-2"
//         >
//           Save
//         </button>
//       </div>

//       <div className="container">
//         <div className="row text-center text-lg-start">
//           {result.map((value) => {
//             return (
//               <div className="col-lg-3 col-md-4 col-6" key={value.id}>
//                 <img
//                   className="img-fluid img-thumbnail d-block mb-4 h-100"
//                   src={value.urls?.small||""}
//                   alt=""
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;




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
        // setResult(res.data);
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
    getPhotos();
  }, []);

  return (
    <>
      <div>
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
                        setSelectedPhotos(
                          photos.filter((p) => p.selected)
                        );
                        setResult(photos);
                      }}
                    />
                    <label className="form-check-label">Select</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    {/* <br /> */}
                    <button
                      type="button"
                      className="btn btn-primary" style ={{padding:"1px",marginBottom:"1px",textAlign:"center"}}
                      disabled={!photo.selected}
                      onClick={() => {
                        const photosWithUrl = selectedPhotos.map((photo) => {
                          return {
                            id: photo.id,
                            url: photo.url,
                            selected: photo.selected,
                          }
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







// import React, { useState } from "react";
// import axios from "axios";
// import './App.css';

// function App() {
//   const [photo, setPhoto] = useState("");
//   const [result, setResult] = useState([]);
//   const [selectedPhotos, setSelectedPhotos] = useState([]);

//   const addPhoto = (photos) => {
//     axios
//       .post("http://localhost:5001/api/photos", photos)
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const getPhotos = () => {
//     axios
//       .get("http://localhost:5001/api/photos")
//       .then((res) => {
//         console.log(res.data);
//         // setResult(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const changePhoto = () => {
//     axios
//       .get(
//         `https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=hq9Bei2bKr-GBZXix2eLN02tgl_Aysgrtuwx7SJBhzE`
//       )
//       .then((response) => {
//         const photos = response.data.results.map((photo) => {
//           return {
//             id: photo.id,
//             url: photo.urls.small,
//             selected: false,
//           };
//         });
//         setResult(photos);
//       });
//   };

//   React.useEffect(() => {
//     getPhotos();
//   }, []);

//   return (
//     <>
//     <div>
//       <div className="container text-center my-5">
//         <input
//           type="text"
//           className="form-control"
//           value={photo}
//           onChange={(e) => {
//             setPhoto(e.target.value);
//           }}
//         />
//         <button
//           type="submit"
//           onClick={changePhoto}
//           className="btn btn-primary my-2"
//         >
//           Get Photo
//         </button>
//       </div>

//       <div className="container">
//         <div className="row text-center text-lg-start">
//           {result.map((photo) => {
//             return (
//               <div className="col-lg-3 col-md-4 col-6 mb-4" key={photo.id}>
//                 <img
//                   className="img-fluid img-thumbnail d-block h-100"
//                   src={photo.url}
//                   alt=""
//                 />
//                 <div className="abc" style={{ marginBottom: "10px" }}>
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     checked={photo.selected}
//                     onChange={() => {
//                       const photos = [...result];
//                       const index = photos.findIndex((p) => p.id === photo.id);
//                       photos[index].selected = !photos[index].selected;
//                       setSelectedPhotos(photos.filter((p) => p.selected));
//                       setResult(photos);
//                     }}
//                   />
//                   <label className="form-check-label">Select</label>
//                   <br/>
//                   <button
//                   type="button"
//                   className="btn btn-primary"
//                   disabled={!photo.selected}
//                   onClick={() => {
//                     addPhoto(selectedPhotos);
//                   }}
//                 >
//                   Save
//                 </button>
//                 <br/>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       </div>
//     </>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import axios from "axios";

// function App() {
//   const [photo, setPhoto] = useState("");
//   const [result, setResult] = useState([]);
//   const [selectedPhotos, setSelectedPhotos] = useState([]);
//   const [selectionCounter, setSelectionCounter] = useState(0);

//   const addPhotos = () => {
//     axios
//       .post("http://localhost:5001/api/photos", selectedPhotos)
//       .then((res) => {
//         console.log(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const getPhotos = () => {
//     axios
//       .get("http://localhost:5001/api/photos")
//       .then((res) => {
//         console.log(res.data);
//         setResult(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const changePhoto = () => {
//     axios
//       .get(
//         `https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=hq9Bei2bKr-GBZXix2eLN02tgl_Aysgrtuwx7SJBhzE`
//       )
//       .then((response) => {
//         const photos = response.data.results.map((photo) => {
//           return {
//             id: photo.id,
//             url: photo.urls.small,
//             selected: false,
//           };
//         });
//         setResult(photos);
//       });
//   };

//   React.useEffect(() => {
//     getPhotos();
//   }, []);

//   const handleSelection = (selected, photo) => {
//     const photos = [...result];
//     const index = photos.findIndex((p) => p.id === photo.id);
//     photos[index].selected = selected;
//     setResult(photos);
//     setSelectedPhotos(photos.filter((p) => p.selected));
//     setSelectionCounter(selectedPhotos.length);
//   };

//   return (
//     <>
//       <div className="container text-center my-5">
//         <input
//           type="text"
//           className="form-control"
//           value={photo}
//           onChange={(e) => {
//             setPhoto(e.target.value);
//           }}
//         />
//         <button
//           type="submit"
//           onClick={changePhoto}
//           className="btn btn-primary my-2"
//         >
//           Get Photo
//         </button>
//       </div>

//       <div className="container">
//         <div className="row text-center text-lg-start">
//           {result.map((photo) => {
//             return (
//               <div className="col-lg-3 col-md-4 col-6 mb-4" key={photo.id}>
//                 <img
//                   className="img-fluid img-thumbnail d-block h-100"
//                   src={photo.url}
//                   alt=""
//                 />
//                 <div className="form-check my-1">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     checked={photo.selected}
//                     onChange={(e) => handleSelection(e.target.checked, photo)}
//                   />
//                   <label className="form-check-label">Select</label>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//         {selectionCounter > 0 && (
//           <div className="text-center">
//             <button
//               type="button"
//               className="btn btn-primary"
//               onClick={addPhotos}
//             >
//               Save ({selectionCounter})
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default App;









