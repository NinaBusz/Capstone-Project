import React from "react";
import { useState } from "react";

export default function Ideasform({ ideas, handleAddIdea }) {
  const [newidea, setNewIdea] = useState("");
  const characterLimit = 500;
  const handleChange = (event) => {
    if (characterLimit - event.target.value.length > -1) {
      setNewIdea(event.target.value);
    }
  };
  const handleSaveIdea = () => {
    if (newidea.length > 0) {
      handleAddIdea(newidea);
      setNewIdea("");
    }
  };
  const handleDropIdea = () => {
    setNewIdea("");
  };

  return (
    <form className="newIdeaForm">
      <label htmlFor="idea">Fixe Idee:</label>
      <textarea
        className="newIdeaForm__input"
        id="idea"
        name="idea"
        type="textarea"
        placeholder="Hier tippen..."
        onChange={handleChange}
        value={newidea}
      ></textarea>
      <section className="characterLimit">
        <small>{characterLimit - newidea.length} von 500 Zeichen übrig.</small>
      </section>
      <section className="projectForm__buttons">
        <button
          type="button"
          className="primaryButton__delete"
          onClick={handleDropIdea}
        >
          Idee verwerfen
        </button>
        <button className="primaryButton" onClick={handleSaveIdea}>
          Idee speichern
        </button>
      </section>
    </form>
  );
}
