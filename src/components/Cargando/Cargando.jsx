import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

const LoadingComponent = () => {
  return (
    <div className="container text-center mt-5">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only"></span>
      </div>
      <h4 className="mt-2">Cargando...</h4>
    </div>
  );
};

export default LoadingComponent;