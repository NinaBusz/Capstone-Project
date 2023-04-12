export default function IdeasMoveArea({
  projects,
  selectedProjectForIdea,
  handleSelectedProjectForIdea,
  handleAddIdeaToProject,
}) {
  return (
    <article>
      <h3>Welchem Projekt möchtest du die Idee zuordnen?</h3>
      <ul role="list">
        {projects.map((project) => (
          <li key={project.id}>
            <button
              type="button"
              onClick={() => handleSelectedProjectForIdea(project.id)}
            >
              <article className="moveArea">
                {selectedProjectForIdea === project.id && (
                  <span className="selected">-X|</span>
                )}
                <p>{project.title}</p>
                {selectedProjectForIdea === project.id && (
                  <span className="selected">|X-</span>
                )}
              </article>
            </button>
          </li>
        ))}
      </ul>
      <button className="primaryButton" onClick={handleAddIdeaToProject}>
        Jetzt zum ausgewählten Projekt hinzufügen!
      </button>
    </article>
  );
}
