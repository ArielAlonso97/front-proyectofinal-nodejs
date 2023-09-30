import Navbar from "@/components/navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useEffect, useState } from "react";

const index = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [link, setLink] = useState('');
  const [generatedHtml, setGeneratedHtml] = useState('');

  const handleGenerateHtml = () => {
    fetch('http://localhost:3001/html/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, text, link }),
    })
      .then((response) => response.text())
      .then((data) => setGeneratedHtml(data))
      .catch((error) => console.error(error));
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-5">
      <h1 className="mb-4">Generador de HTML Dinámico</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Título:</label>
          <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="text" className="form-label">Texto:</label>
          <textarea className="form-control" id="text" value={text} onChange={(e) => setText(e.target.value)}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="link" className="form-label">Enlace:</label>
          <input type="text" className="form-control" id="link" value={link} onChange={(e) => setLink(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleGenerateHtml}>Generar HTML en el Servidor</button>
      </form>
      <div className="mt-4">
        <h2>HTML Generado:</h2>
        <div className="generated-html" dangerouslySetInnerHTML={{ __html: generatedHtml }}></div>
      </div>
    </div>
    </>
  );
};

export default index;
