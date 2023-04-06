export default function IdeasMoveArea({
  projects,
  selectedProjectForIdea,
  handleSelectedProjectForIdea,
  handleAddIdeaToProject,
}) {
  return (
    <article>
      <p>Welchem Projekt möchtest du die Idee zuordnen?</p>
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            onClick={() => handleSelectedProjectForIdea(project.id)}
          >
            <article>
              <p>{project.title}</p>
              {selectedProjectForIdea === project.id && <span>X</span>}
            </article>
          </li>
        ))}
      </ul>
      <button className="primaryButton" onClick={handleAddIdeaToProject}>
        Jetzt zum ausgewählten Projekt hinzufügen!
      </button>
    </article>
  );
}
