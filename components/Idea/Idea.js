export default function Idea({
  id,
  date,
  text,
  projects,
  isMovingIdea,
  handleDeleteIdea,
  handleMoveIdeaToggle,
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
        <article>
          <p>Welchem Projekt möchtest du die Idee zuordnen?</p>
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <article>
                  <p>{project.title}</p>
                </article>
              </li>
            ))}
          </ul>
          <button className="primaryButton">
            Zur ausgewählten Projekt hinzufügen
          </button>
        </article>
      ) : null}
    </li>
  );
}
