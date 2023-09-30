// @jsxImportSource react
// use client



import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Inicio</a>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/nodemailer">NodeMailer</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="qrcode">QrCode</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/raspador">Raspador</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/html">Página HTML con Node</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
