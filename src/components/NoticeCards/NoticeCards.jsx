import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NoticeCards = ({ notice }) => {
  const urlDiarioYucatan = "http://www.yucatan.com.mx";
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        {/* <img src={urlDiarioYucatan+notice.imagenSrc} className="card-img-top" alt={notice.title} /> */}
        <div className="card-body">
          <h5 className="card-title">{notice.title}</h5>
          <a
            href={urlDiarioYucatan + notice.noticia}
            target="blank"
            className="card-text"
          >
            leer Mas
          </a>
          <p className="card-text">
            Resumen: {notice.resumen !== "" ? notice.resumen : "No disponible"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoticeCards;
