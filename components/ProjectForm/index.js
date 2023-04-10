import { useRouter } from "next/router";

export default function ProjectForm({
  handleSaveProject,
  handleDeleteProject,
  foundProject,
  setFoundProject,
}) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <article>
      <form>
        <section className="projectsarea__formLayout">
          <label htmlFor="project__image">Projektbild:</label>
          <small>
            Du kannst ein Bild auf https://imgbox.com/ uploaden, oder du suchst
            dir ein Bild von einer dieser Webseiten aus: pexels.com,
            unsplash.com. Es werden nur URLs akzeptiert.
          </small>
          <textarea
            name="image"
            type="textarea"
            placeholder="URL zu Bild..."
            value={foundProject.src}
            onChange={(event) =>
              setFoundProject({
                ...foundProject,
                src: event.target.value,
              })
            }
            maxLength="100"
          ></textarea>

          <label htmlFor="project__name">Projektname:</label>
          <small>Gib deinem Projekt einen eigenen Namen:</small>
          <textarea
            name="title"
            type="textarea"
            placeholder="Projektname..."
            value={foundProject.title}
            onChange={(event) =>
              setFoundProject({
                ...foundProject,
                title: event.target.value,
              })
            }
            maxLength="30"
          ></textarea>
          <label htmlFor="project__description">Beschreibung:</label>
          <small>
            Wenn du möchtest, kannst du dein Projekt kurz Beschreiben:
          </small>
          <textarea
            name="description"
            type="textarea"
            placeholder="Beschreibung..."
            value={foundProject.description}
            onChange={(event) =>
              setFoundProject({
                ...foundProject,
                description: event.target.value,
              })
            }
            maxLength="100"
          ></textarea>
        </section>
      </form>
      <section className="projectForm__buttons">
        <button
          className="primaryButton__delete"
          type="submit"
          onClick={() => {
            handleDeleteProject(foundProject.id);
            router.push("/projects");
          }}
        >
          Projekt löschen
        </button>
        <button
          className="primaryButton"
          onClick={() => handleSaveProject(foundProject)}
        >
          Änderungen speichern
        </button>
      </section>
    </article>
  );
}
