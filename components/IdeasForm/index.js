import React from "react";
import { useState } from "react";

export default function Ideasform({ handleAddIdea }) {
  const [newidea, setNewIdea] = useState("");

  const handleChange = (event) => {
    setNewIdea(event.target.value);
  };
  const handleSaveIdea = () => {
    handleAddIdea(newidea);
    setNewIdea("");
  };

  const handledeleteIdea = () => {};

  return (
    <>
      <form className="newIdeaForm">
        <label htmlFor="idea">Fixe Idee:</label>
        <textarea
          className="newIdeaForm__input"
          name="idea"
          type="textarea"
          id="idea"
          placeholder="Hier tippen..."
          required
          minLength="2"
          maxLength="1000"
          onChange={handleChange}
          value={newidea}
        ></textarea>
        <button type="submit" value="Submit" onClick={handleSaveIdea}>
          speichern
        </button>
        <button type="reset" value="Reset" onClick={handledeleteIdea}>
          verwerfen
        </button>
      </form>
    </>
  );
}
