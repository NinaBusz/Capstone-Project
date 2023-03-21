import React from "react";
import { useState } from "react";

export default function Ideasform({ handleAddIdea }) {
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
    <>
      <form className="newIdeaForm">
        <label htmlFor="idea">Fixe Idee:</label>
        <textarea
          className="newIdeaForm__input"
          name="idea"
          type="textarea"
          placeholder="Hier tippen..."
          required
          onChange={handleChange}
          value={newidea}
        ></textarea>
        <div className="characterLimit">
          <small>
            {characterLimit - newidea.length} von 500 Zeichen übrig.
          </small>
        </div>
        <button
          className="primaryButton"
          type="submit"
          value="Submit"
          onClick={handleSaveIdea}
        >
          speichern
        </button>
        <button
          className="primaryButton"
          type="reset"
          value="Reset"
          onClick={handleDropIdea}
        >
          verwerfen
        </button>
      </form>
    </>
  );
}
