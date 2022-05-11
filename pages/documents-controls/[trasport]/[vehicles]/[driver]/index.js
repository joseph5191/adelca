import React, { useState } from "react";

import FilterDetail from "../../../../../components/documents-controls/FilterDetail";
import InfoStates from "../../../../../components/documents-controls/InfoStates";
import Breadcrumb from "../../../../../components/Forms/Breadcrumb";
import ItemBreadcrumb from "../../../../../components/Forms/ItemBreadcrumb";
import TableResponsive from "../../../../../components/Forms/TableResponsive";
import Container from "../../../../../components/Layout/Container";
import Link from "next/link";
import InfoMore from "../../../../../components/documents-controls/InfoMore";
import { Button, Modal } from "react-bootstrap";
import ModalP from "../../../../../components/Forms/ModalP";
import Image from "next/image";
const drivers = [
  "Licencia",
  "Cédula de Identidad",
  "Certificado de puntos ",
  "Afiliación al IESS ",
];

// const data = {

// }
export default function index() {
  const [show, setShow] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [title, setTitle] = useState("");
  const [dataModal, setDataModal] = useState();
  function showModal(item) {
    setShow(true);
    setTitle(item);
  }
  return (
    <Container>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-8">
            <Breadcrumb>
              <ItemBreadcrumb url="/" text={"Home"} />
              <ItemBreadcrumb url="/" text={"Nombre de transporte"} />
              <ItemBreadcrumb url="/" text={"Nombre vehiculo"} />
              <ItemBreadcrumb text={"Nombre conductor"} />
            </Breadcrumb>
          </div>
          <div className="col-4">
            <InfoMore />
          </div>
        </div>
        <div className="row mt-5">
          {/* <div className="col-8">
            <FilterDetail></FilterDetail>
          </div> */}
        </div>
        {/* list */}
        <TableResponsive>
          {drivers?.map((d, index) => (
            <tr key={index}>
              <td onClick={() => showModal(d)}>
                <i className="fa fa-eye fa-lg"></i>{" "}
                <strong className="pointer">{d}</strong>
              </td>
              <td align="center">
                <i className="fa fa-exclamation-triangle fa-lg text-warning"></i>
              </td>
              <td align="center">
                <i className="fa fa-exclamation-triangle fa-lg text-warning"></i>
              </td>{" "}
            </tr>
          ))}
        </TableResponsive>
      </div>

      <ModalP
        setShow={setShow}
        show={show}
        title={title}
        setFullscreen={setFullscreen}
        fullscreen={fullscreen}
      >
        <div className="row justify-content-between">
          <div className="col-6 text-center">
            <p className="text-center">Documento adjunto</p>

            <Image src="/images/logoimg.jpg" width={400} height={400} />
            <p>
              <i className="fa fa-download fa-lg pointer"></i>
            </p>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label forhtml="">Fecha de caducidad</label>
              <span
                type="text"
                className="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
              >
                12/25/02
              </span>
            </div>
            <div className="form-group mt-2">
              <label forHtml="">Observaciones</label>
              <textarea
                className="form-control"
                name=""
                id=""
                rows="3"
              ></textarea>
            </div>
            <button type="button" className="btn btn-primary mt-3">
              Registrar
            </button>
             <hr></hr>
            <div className="row justify-content-center mt-3">
              <div className="col">
                <button type="button" className="btn btn-success  ">
                  Valido
                </button>
              </div>
              <div className="col">
                <button type="button " className="btn btn-danger  ">
                  Invalido
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModalP>
    </Container>
  );
}
