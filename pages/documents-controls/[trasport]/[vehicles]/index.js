import React from "react";

import FilterDetail from "../../../../components/documents-controls/FilterDetail";
import InfoStates from "../../../../components/documents-controls/InfoStates";
import Breadcrumb from "../../../../components/Forms/Breadcrumb";
import ItemBreadcrumb from "../../../../components/Forms/ItemBreadcrumb";
import TableResponsive from "../../../../components/Forms/TableResponsive";
import Container from "../../../../components/Layout/Container";
import Link from "next/link";
const drivers = [
  "Rose Avilés",
  "Sebastián León",
  "Andrés Huerta",
  "Carlos Martínez",
];
export default function index() {
  return (
    <Container>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-6">
            <Breadcrumb>
              <ItemBreadcrumb url="/" text={"Home"} />
              <ItemBreadcrumb url="/" text={"Nombre de transporte"} />
              <ItemBreadcrumb text={"Nombre vehiculo"} />
            </Breadcrumb>
          </div>
          <div className="col-4">
            <InfoStates />
          </div>
        </div>
        <div className="row mt-5">
        
            <FilterDetail></FilterDetail>
          
        </div>
        {/* list */}
        <TableResponsive>
          {drivers?.map((d, index) => (
            <tr key={index}>
              {" "}
              <td>
                <Link href={`/documents-controls/${index + 1}/${index + 1}/${index + 1}`}>
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
