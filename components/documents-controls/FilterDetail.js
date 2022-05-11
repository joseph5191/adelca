import React from "react";
import { Form } from "react-bootstrap";

export default function FilterDetail() {
  return (
    <div className="row">
      <Form.Group className="mb-3 col" controlId="formBasicEmail">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="" />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 col" controlId="formBasicEmail">
        <Form.Label>Estado</Form.Label>

        <select className="form-control" name="" id="">
          <option>x</option>
          <option>x</option>
          <option>x</option>
        </select>

        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 col" controlId="formBasicEmail">
        <Form.Label>Revision</Form.Label>

        <select className="form-control" name="" id="">
          <option>x</option>
          <option>x</option>
          <option>x</option>
        </select>

        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>
    </div>
  );
}
