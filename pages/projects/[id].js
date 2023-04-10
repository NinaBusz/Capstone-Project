import Image from "next/image";
import { useRouter } from "next/router";
import { React, useState, useEffect } from "react";

export default function Projectform({
  projects,
  handleDeleteProject,
  handleSaveProject,
}) {
  const router = useRouter();
  const { id } = router.query;

  const [foundProject, setFoundProject] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };
  const removeIdeaFromProject = (idea) => {
    const updatedProject = {
      ...foundProject,
      ideas: foundProject.ideas.filter((item) => item.id !== idea.id),
    };
    setFoundProject(updatedProject);
    const updatedProjects = projects.map((project) =>
      project.id === foundProject.id ? updatedProject : project
    );
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
  };

  useEffect(() => {
    const project = projects.find((project) => project.id === id);
    if (project) {
      setFoundProject(project);
    } else {
      setFoundProject(null);
    }
  }, [projects, id]);

  if (!foundProject) {
    return <h2>Kein Projekt gefunden!</h2>;
  }

  return (
    <>
      <article className="projectsarea">
        {isEditing ? (
          <article>
            <form>
              <section className="projectsarea__formLayout">
                <label htmlFor="project__image">Projektbild:</label>
                <small>
                  Du kannst ein Bild auf https://imgbox.com/ uploaden, oder du
                  suchst dir ein Bild von einer dieser Webseiten aus:
                  pexels.com, unsplash.com. Es werden nur URLs akzeptiert.
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
        ) : (
          <article className="projectsarea">
            {" "}
            <Image
              width="300"
              height="300"
              style={{
                layout: "fill",
                objectFit: "contain",
              }}
              src={foundProject.src ? foundProject.src : placeholder}
              alt="Dein Projektbild"
            ></Image>
            <h2>{foundProject.title}</h2>
            <p>{foundProject.description}</p>
            <ul>
              <p>Ideenliste</p>
              {foundProject.ideas.map(
                (idea) =>
                  idea && (
                    <li className="ideasList__newIdea" key={idea.id}>
                      <small>{idea.date}</small>
                      <p>{idea.text}</p>
                      <button
                        className="primaryButton__delete"
                        onClick={() => removeIdeaFromProject(idea)}
                      >
                        Idee entfernen
                      </button>
                    </li>
                  )
              )}
            </ul>
            <button
              className="primaryButton"
              onClick={() => handleEditButtonClick()}
            >
              Bearbeitungsmodus aktivieren
            </button>
          </article>
        )}
      </article>
    </>
  );
}
