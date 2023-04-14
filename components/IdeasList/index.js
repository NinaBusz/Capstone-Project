import Idea from "../Idea/Idea";
import styled from "styled-components";

export default function IdeasList({
  ideas,
  projects,
  handleDeleteIdea,
  handleMoveIdeaToggle,
  isMovingIdea,
  selectedProjectForIdea,
  handleSelectedProjectForIdea,
  handleAddIdeaToProject,
}) {
  const reversedIdeas = [...ideas].reverse();
  if (ideas.length === 0) {
    return (
      <StyledIdeasList>
        <h3>Noch keine Idee gespeichert! </h3>
        <StyledH2>D-:</StyledH2>
      </StyledIdeasList>
    );
  }
  return (
    <StyledIdeasList role="list">
      {reversedIdeas.map((idea) => (
        <Idea
          key={idea.id}
          id={idea.id}
          date={idea.date}
          text={idea.text}
          projects={projects}
          isMovingIdea={isMovingIdea}
          handleDeleteIdea={handleDeleteIdea}
          handleMoveIdeaToggle={handleMoveIdeaToggle}
          selectedProjectForIdea={selectedProjectForIdea}
          handleSelectedProjectForIdea={handleSelectedProjectForIdea}
          handleAddIdeaToProject={() => handleAddIdeaToProject(idea)}
        />
      ))}
    </StyledIdeasList>
  );
}

const StyledIdeasList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;
const StyledH2 = styled.h2`
  margin: 0;
  word-break: break-word;
  color: #ffe175;
`;
