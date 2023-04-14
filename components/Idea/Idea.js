import IdeasMoveArea from "./../IdeasMoveArea";
import styled from "styled-components";
import {
  StyledPrimaryButton,
  StyledPrimaryButton__Delete,
} from "./../Buttons/index.js";

export default function Idea({
  id,
  date,
  text,
  projects,
  isMovingIdea,
  handleDeleteIdea,
  handleMoveIdeaToggle,
  selectedProjectForIdea,
  handleSelectedProjectForIdea,
  handleAddIdeaToProject,
}) {
  return (
    <StyledIdeasList>
      <p>{text}</p>
      <StyledIdeasButtonArea>
        <small>{date}</small>

        <StyledPrimaryButton__Delete
          type="button"
          onClick={() => handleDeleteIdea(id)}
        >
          Löschen
        </StyledPrimaryButton__Delete>
        <StyledPrimaryButton onClick={() => handleMoveIdeaToggle(id)}>
          Verschieben
        </StyledPrimaryButton>
      </StyledIdeasButtonArea>{" "}
      <IdeasMoveAreaWrapper isMovingIdea={isMovingIdea[id]}>
        <IdeasMoveArea
          projects={projects}
          selectedProjectForIdea={selectedProjectForIdea}
          handleSelectedProjectForIdea={handleSelectedProjectForIdea}
          handleAddIdeaToProject={handleAddIdeaToProject}
        />
      </IdeasMoveAreaWrapper>
    </StyledIdeasList>
  );
}

const StyledIdeasList = styled.li`
  background-color: #181a26;
  width: 100%;
  padding: 25px;
  margin-top: 10px;
  border: none;
  border-radius: 10px;
`;

const IdeasMoveAreaWrapper = styled.article`
  margin-top: 15px;
  padding: 10px;
  border-radius: 5px;
  height: ${(props) => (props.isMovingIdea ? "300px" : "0")};
  transition: height 0.4s ease-in-out;
  overflow: ${(props) => (props.isMovingIdea ? "scroll" : "hidden")};
`;

export const StyledIdeasButtonArea = styled.article`
  background-color: transparent;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
