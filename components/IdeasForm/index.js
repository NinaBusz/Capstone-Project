import React from "react";
import { useState } from "react";
import styled from "styled-components";
import {
  StyledPrimaryButton,
  StyledPrimaryButton__Delete,
} from "./../Buttons/index.js";

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
    <form>
      <label htmlFor="idea">
        <StyledHiddenHeading>Fixe Idee:</StyledHiddenHeading>
      </label>
      <StyledNewIdeaForm__Input
        id="idea"
        name="idea"
        type="textarea"
        placeholder="Neue Idee? Halte sie hier fest!"
        onChange={handleChange}
        value={newidea}
        spellCheck="false"
      ></StyledNewIdeaForm__Input>
      <small>{characterLimit - newidea.length} von 500 Zeichen übrig.</small>
      <StyledButtonSection>
        <StyledPrimaryButton__Delete type="button" onClick={handleDropIdea}>
          Idee verwerfen
        </StyledPrimaryButton__Delete>
        <StyledPrimaryButton onClick={handleSaveIdea}>
          Idee speichern
        </StyledPrimaryButton>
      </StyledButtonSection>
    </form>
  );
}

const StyledNewIdeaForm__Input = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  height: 200px;
  box-sizing: border-box;
  border: 2px solid #ffb065;
  border-radius: 10px;

  &:focus {
    outline: none;
  }
`;

const StyledButtonSection = styled.section`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledHiddenHeading = styled.h3`
  display: none;
`;
