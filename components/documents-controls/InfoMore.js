import React from "react";

export default function InfoMore() {
  return (
    <div className=" px-3 py-2 border ">
        <div >
      <small>
        <i className="fa fa-check-circle fa-lg text-secondary"></i> Documento(s) por caducar
      </small>
      </div>
      <div >
      <small>
        <i className="fa fa-exclamation-circle fa-lg text-warning"></i> Documento(s) caducado(s)
      </small>
      </div>
      <div >
      <small>
        <i className="fa fa-product-hunt fa-lg text-primary"></i> Documentos pendientes de aprobación
      </small>
      </div>
      <div >
      <small>
        <i className="fa fa-times-circle fa-lg text-danger"></i> Documento(s) rechazado(s)
      </small>
      </div>
     
    </div>
  );
}