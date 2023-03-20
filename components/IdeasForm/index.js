import React from "react";

export default function Ideasform({}) {
  return (
    <>
      <label htmlFor="idea">Fixe Idee:</label>
      <input name="idea" type="text" id="idea" placeholder="Hier tippen..." />
      <button type="save">speichern</button>
      <button type="delete">verwerfen</button>
    </>
  );
}
