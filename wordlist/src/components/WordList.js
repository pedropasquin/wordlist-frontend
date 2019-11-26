import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

function WordList({ word, saveRefreshWords }) {
  const deleteWords = id => {
    console.log("eliminando", id);
    // Eliminar los registros

    Swal.fire({
      title: "¿Estas seguro?",
      text: "No podrás recuperarlo!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borrarlo!",
      cancelButtonText: "Cancelar"
    }).then(async result => {
      if (result.value) {
        // request borrado delete

        const url = `http://localhost:3005/words/${id}`;
        console.log("esta es la url:", url);
        try {
          const resultado = await axios.delete(url);

          console.log(resultado);
          if (resultado.status === 200) {
            Swal.fire("Borrado!", "El concursante ha sido borrado.", "success");
          }
        } catch (error) {
          console.log(error);
          Swal.fire({
            type: "error",
            title: "Oops...",
            text: "Hubo un error, vuelve a intentarlo!"
          });
        }

        saveRefreshWords(true);
      }
    });
  };

  return (
    <div>
      <li className="text-center">
        <div>
          <img src={word.word.image} height="140"></img>
        </div>
        <div className="font-weight-bold">{word.word.es.name}</div>

        <div className="col-md-3 mx-auto">{word.word.es.description}</div>

        <div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => deleteWords(word.id)}
          >
            Eliminar &times;
          </button>
        </div>
        <hr></hr>
      </li>
    </div>
  );
}

export default WordList;
