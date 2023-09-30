import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import styles from "./nodemailer.module.scss";
export default function nodemailer() {
  const [emailData, setEmailData] = useState({
    toName: "",
    fromName: "",
    fromLastName: "",
    to: "",
    subject: "",
    message: "",
  });

  const [notification, setNotification] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailData({
      ...emailData,
      [name]: value,
    });
  };
  function handleEntendido(e) {
    e.preventDefault();
    setNotification(false)
    setEmailData({
      toName: "",
      fromName: "",
      fromLastName: "",
      to: "",
      subject: "",
      message: "",
    })
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/nodemailer/send", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        emailOptionsBody: {
          to: emailData.to,
          subject: emailData.subject,
        },
        emailDataBody: {
          nombreDestinatario: emailData.toName,
          nombre: emailData.fromName,
          apellido: emailData.fromLastName,
          mensajePersonalizado: emailData.message,
        },
      }),
    }).then(response=>{
      console.log(response.status)
       if (response.status == 200){
        setNotification(true)
      } 
    }).catch((e) => console.log(e));

    
  };

  return (
    <>
      <Navbar></Navbar>
      <div>
        {notification == true ? (
          <div className={styles.notification}>
            El Mensaje fue enviado correctamente
            <input className={styles.boton} type="button" value="Entendido" onClick={handleEntendido}/>
            
          </div>
        ) : null}
      </div>

      <div className="container pt-5">
        <h2>Enviar Correo Electrónico</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 d-flex">
            <label htmlFor="to" className="form-label me-3">
              Correo del Destinatario:
            </label>
            <input
              type="email"
              name="to"
              className="form-control"
              value={emailData.to}
              onChange={handleChange}
              required
            />
            <label htmlFor="toName" className="form-label mx-3">
              Nombre del Destinatario:
            </label>
            <input
              type="text"
              name="toName"
              className="form-control"
              value={emailData.toName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="subject" className="form-label">
              Asunto:
            </label>
            <input
              type="text"
              name="subject"
              className="form-control"
              value={emailData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Mensaje:
            </label>
            <textarea
              name="message"
              className="form-control"
              value={emailData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <h4>De parte de:</h4>
          <div className="mb-3 d-flex">
            <label htmlFor="to" className="form-label me-3">
              Nombre:
            </label>
            <input
              type="text"
              name="fromName"
              className="form-control"
              value={emailData.fromName}
              onChange={handleChange}
              required
            />
            <label htmlFor="toName" className="form-label mx-3">
              Apellido:
            </label>
            <input
              type="text"
              name="fromLastName"
              className="form-control"
              value={emailData.fromLastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Enviar Correo
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
