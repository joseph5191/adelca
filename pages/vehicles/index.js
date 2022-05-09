import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <div className='container'>
      <div className="row my-2">
        <div className="col-6">
          <Link href="/vehicles/add" className="my-5">
            <button type="button" class="btn btn-primary">
              Nuevo
            </button>
          </Link>
        </div>
      </div>

      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr className="">
              <th scope="col">Nombre</th>
              <th scope="col">Fecha Caducidad</th>
              <th scope="col">Obligatorio</th>
              <th scope="col">Adicional</th>
              <th scope="col">Nombre Campo Adicional</th>
              <th scope="col">Obligatorio</th>
              <th scope="col">Editable</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>-----</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
