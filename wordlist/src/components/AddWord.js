import React, { useState } from "react";
import Error from "./error";
import axios from "axios";
import Swal from "sweetalert2";
import { withRouter } from "react-router-dom";

function AddWord({ history, saveRefreshWords }) {
  // state

  const [image, SaveImage] = useState("");
  const [nombre, SaveNombre] = useState("");
  const [descripcion, SaveDescripcion] = useState("");
  const [name, SaveName] = useState("");
  const [description, SaveDescription] = useState("");
  const [error, SaveError] = useState(false);

  const addWord = async e => {
    e.preventDefault();

    if (
      image === "" ||
      nombre === "" ||
      descripcion === "" ||
      name === "" ||
      description === ""
    ) {
      SaveError(true);
      return;
    }

    SaveError(false);

    // Creamos la nueva palabra
    try {
      let word = {};
      word.image = image;
      let es = {};
      es.name = nombre;
      es.description = descripcion;
      let en = {};
      en.name = name;
      en.description = description;
      word.es = es;
      word.en = en;

      const result = await axios.post("http://localhost:3005/words", word);

      console.log(result);
      if (result.status === 201) {
        Swal.fire(
          "Palabra creada!",
          "La palabra ha sido creada correctamente",
          "success"
        );
      }
    } catch (error) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Hubo un error, vuelve a intentarlo!"
      });
      console.log(error);
    }

    //Redirigir al usuario a Words
    saveRefreshWords(true);
    history.push("/words");
  };

  return (
    <div className="col-md-8 mx-auto">
      <h1 className="text-center">Agregar Nueva Palabra</h1>
      {error ? <Error mensaje="Todos los campos son obligatorios" /> : null}
      <form className="mt-5" onSubmit={addWord}>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            className="form-control"
            name="image"
            placeholder="Insertar Image"
            onChange={e => SaveImage(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            name="nombre"
            placeholder="Insertar Nombre"
            onChange={e => SaveNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Descripción</label>
          <input
            type="text"
            className="form-control"
            name="descripcion"
            placeholder="Insertar Descripción"
            onChange={e => SaveDescripcion(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Insert Name"
            onChange={e => SaveName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder="Insert Description"
            onChange={e => SaveDescription(e.target.value)}
          />
        </div>
        <input
          type="submit"
          className="font-weight-bold text-uppercase mt-5 btn btn-primary btn-block py-3"
          value="Agregar Palabra"
        />
      </form>
    </div>
  );
}

export default withRouter(AddWord);
