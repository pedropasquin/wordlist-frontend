import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Words from "./components/Words";
import AddWord from "./components/AddWord";

function App() {
  const [words, saveWords] = useState([]);
  const [refreshWords, saveRefreshWords] = useState(true);

  useEffect(() => {
    if (refreshWords) {
      const consultarApi = async () => {
        // consultar API
        const resultado = await axios.get("http://localhost:3005/words");
        console.log("datos:", resultado.data);
        saveWords(resultado.data);
      };

      consultarApi();

      // Cambiar a false la recarga de las words

      saveRefreshWords(false);
    }
  }, [refreshWords]);

  return (
    <Router>
      <Header />
      <main className="container mt-5"></main>
      <Switch>
        <Route
          exact
          path="/words"
          render={() => (
            <Words words={words} saveRefreshWords={saveRefreshWords} />
          )}
        />
        <Route
          exact
          path="/add-word"
          render={() => <AddWord saveRefreshWords={saveRefreshWords} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
