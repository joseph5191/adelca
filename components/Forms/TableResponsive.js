import React from "react";
import { Table } from "react-bootstrap";

export default function TableResponsive({ children }) {
  return (
    <Table striped hover responsive>
      <thead>
        <tr>
          <th width="33%"></th>
          <th width="33%"></th>
          <th width="33%"></th>
          
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
}
