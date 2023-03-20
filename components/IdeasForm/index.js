import React from "react";
export default function Ideasform({}) {
  return (
    <>
      {" "}
      <styleslabel htmlFor="idea">Fixe Idee:</styleslabel>{" "}
      <input name="idea" type="text" id="idea" placeholder="Hier tippen..." />{" "}
      <button type="save">speichern</button>{" "}
      <button type="save">verwerfen</button>
    </>
  );
}
