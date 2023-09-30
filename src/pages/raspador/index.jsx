import Navbar from "@/components/navbar/Navbar";
import LoadingComponent from "@/components/Cargando/Cargando";
import NoticeCards from "@/components/NoticeCards/NoticeCards";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const index = () => {
  const [noticeData, setNoticeData] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/raspador/send")
      .then((response) => response.json())
      .then( (data) => setNoticeData(data))
      .then(setCargando(false))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <div className="container pt-5">
        <h1>Raspador Web del Diario de Yucatán</h1>
        { 
        noticeData.length > 0 ? null: <LoadingComponent>Cargando...</LoadingComponent>
       }
        <div className="container">
          <div className="row">
            {noticeData.map((notice, index) => (
              <NoticeCards key={index} notice={notice} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
