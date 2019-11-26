import React, { Fragment } from "react";
import WordList from "./WordList";

function Words({ words, saveRefreshWords }) {
  return (
    <Fragment>
      <h1 className="text-center">Words</h1>
      <ul className="list-group mt-5">
        {words.map(word => (
          <WordList
            key={word.id}
            word={word}
            saveRefreshWords={saveRefreshWords}
          />
        ))}
      </ul>
    </Fragment>
  );
}

export default Words;
