import Navbar from "@/components/navbar/Navbar";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const index = () => {
  const [qrText, setQrText] = useState("");
  const [qrContainer, setQrContainer] = useState(false);
  const [qrImage, setQrImage] = useState({});

  const handleChange = (e) => {
    console.log(e.target.value);
    setQrText(e.target.value);
  };

  function handleCloseQr(e) {
    e.preventDefault();
    setQrContainer(false)
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3001/qr/send", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        text: qrText,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response)=>{
        setQrContainer(true)
        setQrImage(response)
          console.log(response)
          
          
        }
      )
      .catch((e) => console.log(e));
      console.log(qrImage)
  }

  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese texto"
                  value={qrText}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>

      <div>
        
        {qrContainer == true ? (
          <div className="container mt-5 d-flex flex-column ">
            <p className="justify-content-center text-center"><img src={qrImage.qrDataUrl}/> </p>
            <button onClick={handleCloseQr} className="btn btn-danger justify-content-center text-center">X</button>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default index;
