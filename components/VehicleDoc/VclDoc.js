import { Button } from "bootstrap";
import React from "react";

export default function VclDoc() {
  return (
    <div>
      <div className={styles[""]}>
        <ul>
          <label>Tipo Vehículo</label>
          <select className="form-select" aria-label="Default select example">
            <option selected="">Open this select menu</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
          </select>
        </ul>
      </div>
      <div></div>
    </div>
  );
}
