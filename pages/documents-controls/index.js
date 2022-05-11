import React from "react";
import { Col, Container as Contain, Form, Row, Table } from "react-bootstrap";
import InfoStates from "../../components/documents-controls/InfoStates";
import TableResponsive from "../../components/Forms/TableResponsive";
import Container from "../../components/Layout/Container";
import Link from "next/link";
import FilterDetail from "../../components/documents-controls/FilterDetail";

const transp = [
  "Transporte Andina Nacional",
  "Mamut Andino",
  "Transcargo",
  "Transvelez",
];
export default function index() {
  function showDetail(id) {
    console.log(id);
  }

  return (
    <Container>
      <div className="container">
        <Row className="justify-content-between border p-2">
          <Col md={6}>
            <Row>
              <div className="mb-3 col ">
                <label className="form-label">Sucursal</label>
                <select id="disabledSelect" className="form-control">
                  <option>Muchala</option>
                  <option>Cuenca</option>
                  <option>Lojas</option>
                  <option>Todas</option>
                </select>
              </div>
              <div className="mb-3 col">
                <label className="form-label">consultar por</label>
                <select id="disabledSelect" className="form-control">
                  <option>Transportista</option>
                  <option>Conductor</option>
                  <option>Vehiculo</option>
                </select>
              </div>
            </Row>
          </Col>

          <Col className="align-self-center text-left " md={4}>
            <InfoStates></InfoStates>
          </Col>
        </Row>

        <div className="row mt-5">
          <FilterDetail></FilterDetail>
        </div>

        {/* table */}
        <TableResponsive>
          {transp?.map((d, index) => (
            <tr key={index}>
              {" "}
              <td>
                <Link href={`/documents-controls/${index + 1}`}>
                  <strong className="pointer">{d}</strong>
                </Link>
              </td>{" "}
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
    </Container>
  );
}
