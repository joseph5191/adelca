import React from "react";

export default function InfoStates() {
  return (
    <div className=" px-3 py-2 border ">
      <div >
      <small>
        <i className="fa fa-check-circle fa-lg text-success"></i> Todos los documentos aprobados y
        en regla
      </small>
      </div>
      <div>
      <small>
        <i className="fa fa-exclamation-triangle fa-lg text-warning" ></i> Documento(s) con novedades
      </small>
      </div>
    </div>
  );
}
