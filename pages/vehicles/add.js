import React, { useState } from "react";
import { useForm } from "react-hook-form";

export default function add() {
  const [disabledInput, setDisabledInput] = useState(true);
  function habilite(e) {
    console.log(e.target.checked);
    if (e.target.checked == true) {
      setDisabledInput(false);
    } else {
      setDisabledInput(true);
    }
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data); //esta data se envía al back
    makeRequest(data);
  };

  async function makeRequest(data) {
    const config = {
      method: "post",
      url: "http://webcode.me",
      data: JSON.stringify(data),
    };

    let res = await axios(config);

    return res;
  }
  return (
    <div className="row justify-content-center">
      <div className="col-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <select class="form-select form-slect-sm mb-3" enabled>
            <option selected>Elija un tipo de vehículo</option>
            <option value="1">Type 1</option>
            <option value="2">Type 2</option>
            <option value="3">Type 3</option>
          </select>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Nombre del campo</label>
              <input
                type="text"
                className="form-control"
                id="inputEmail4"
                defaultValue=""
                {...register("name_campo", { required: true })}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputPassword4">Fecha de caducidad</label>
              <input
                type="checkbox"
                className="form-control"
                id="inputPassword4"
                {...register("fc", { required: true })}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputPassword4">Obligatorio</label>
              <input
                type="checkbox"
                className="form-control"
                id="inputPassword4"
                {...register("ob")}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-3">
              <label htmlFor="inputPassword4">Campo adicional</label>
              <input
                onClick={(e) => habilite(e)}
                type="checkbox"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail4">Nombre campo adicional</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                disabled={disabledInput}
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputPassword4">Fecha de caducidad</label>
              <input
                disabled={disabledInput}
                type="checkbox"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputPassword4">Obligatorio</label>
              <input
                disabled={disabledInput}
                type="checkbox"
                className="form-control"
                id="inputPassword4"
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-btn-color">
            Aceptar
          </button>
        </form>
      </div>
    </div>
  );
}
