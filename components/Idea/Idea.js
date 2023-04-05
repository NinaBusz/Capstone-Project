import IdeasMoveArea from "./../IdeasMoveArea";

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
    <li className="ideasList__newIdea">
      <p>{text}</p>
      <article className="ideasList__newIdea--bottom">
        <small>{date}</small>

        <button
          className="ideasList__newIdea--deleteButton"
          onClick={() => handleDeleteIdea(id)}
        >
          Löschen
        </button>
        <button
          className="ideasList__newIdea--deleteButton"
          onClick={() => handleMoveIdeaToggle(id)}
        >
          Verschieben
        </button>
      </article>{" "}
      {isMovingIdea[id] ? (
        <IdeasMoveArea
          projects={projects}
          selectedProjectForIdea={selectedProjectForIdea}
          handleSelectedProjectForIdea={handleSelectedProjectForIdea}
          handleAddIdeaToProject={handleAddIdeaToProject}
        />
      ) : null}
    </li>
  );
}
