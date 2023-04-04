export default function IdeasMoveArea({ projects }) {
  return (
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
  );
}
