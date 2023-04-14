import styled from "styled-components";
import { StyledPrimaryButton } from "./../Buttons/index.js";

export default function IdeasMoveArea({
  projects,
  isMovingIdea,
  selectedProjectForIdea,
  handleSelectedProjectForIdea,
  handleAddIdeaToProject,
}) {
  return (
    <>
      <h3>Welchem Projekt möchtest du die Idee zuordnen?</h3>
      <StyledMoveAreaList role="list">
        {projects.map((project) => (
          <StyledMoveAreaDetail
            key={project.id}
            type="button"
            onClick={() => handleSelectedProjectForIdea(project.id)}
            className={selectedProjectForIdea === project.id ? "selected" : ""}
          >
            <p>{project.title}</p>
          </StyledMoveAreaDetail>
        ))}
      </StyledMoveAreaList>
      <StyledPrimaryButton onClick={handleAddIdeaToProject}>
        Jetzt zum ausgewählten Projekt hinzufügen!
      </StyledPrimaryButton>
    </>
  );
}

const StyledMoveAreaList = styled.ul`
  margin: 0;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
`;

const StyledMoveAreaDetail = styled.button`
  background-color: #0e0f17;
  padding: 0px 20px 0px 20px;
  border: none;
  border-radius: 5px;
  &.selected {
    border: 1px solid #c3dae8;
  }
`;
