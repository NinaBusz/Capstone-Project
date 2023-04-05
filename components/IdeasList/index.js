import Idea from "../Idea/Idea";

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
  return (
    <>
      <ul className="ideasList">
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
            handleAddIdeaToProject={handleAddIdeaToProject}
          />
        ))}
      </ul>
    </>
  );
}
