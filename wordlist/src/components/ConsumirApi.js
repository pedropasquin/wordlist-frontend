import React, { useEffect, useState } from "react";

function ConsumirApi() {
  const [words, saveWords] = useState([]);

  useEffect(() => {
    var lista = [];
    const consultarApi = async url => {
      const resultado = await fetch(url);
      const word = await resultado.json();
      console.log("word:", word);
      word.forEach(function(element) {
        lista.push(element.word.es.name);
      });

      console.log("lista", lista);

      if (word.next != null) {
        consultarApi(word.next);
      } else {
        saveWords(lista);
      }
    };
    consultarApi("http://localhost:3005/words");
  }, []);

  return (
    <div>
      <p>
        {words.map(element => {
          return <p>{element}</p>;
        })}
      </p>
    </div>
  );
}
export default ConsumirApi;
