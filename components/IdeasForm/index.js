import React from "react";

export default function Ideasform({}) {
  return (
    <>
      <form>
        <label htmlFor="idea">Fixe Idee:</label>
        <textarea
          name="idea"
          type="textarea"
          id="idea"
          placeholder="Hier tippen..."
          required
          minlength="5"
          maxlength="1000"
        />
        <button type="submit" value="Submit">
          speichern
        </button>
        <button type="reset" value="Reset">
          verwerfen
        </button>
      </form>
    </>
  );
}
