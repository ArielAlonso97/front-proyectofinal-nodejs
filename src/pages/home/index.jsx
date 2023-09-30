import React from "react";
import Conclusiones from "@/components/Conclusiones/Conclusiones";

const Homepage = () => {
  return (
    <div className="App">
      <header className="text-center mt-5">
        <h1>Ariel Alonso Alvarado Arana</h1>
        <h2>Portafolio de servicios</h2>
        <p>Proyecto Final Node.JS nivel Avanzado</p>
        <p>Usa la navbar para explorar! :)</p>
      </header>

      <Conclusiones/>

      <footer className="text-center py-3">
        &copy; {new Date().getFullYear()} Ariel Alonso Alvarado Arana
      </footer>
    </div>
  );
};

export default Homepage;
