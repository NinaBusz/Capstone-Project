import Image from "next/image";
import ProjectForm from "../../components/ProjectForm";
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
  const handleFoundProject = (project) => {
    setFoundProject(project);
    localStorage.setItem("projects", JSON.stringify(project));
  };

  const removeIdeaFromProject = (idea) => {
    const updatedProject = {
      ...foundProject,
      ideas: foundProject.ideas.filter((item) => item.id !== idea.id),
    };
    handleFoundProject(updatedProject);
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
          <ProjectForm
            projects={projects}
            handleDeleteProject={handleDeleteProject}
            handleSaveProject={handleSaveProject}
            foundProject={foundProject}
            handleFoundProject={handleFoundProject}
            isEditing={isEditing}
          />
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
            <h3>Ideenliste</h3>
            <ul role="list">
              {foundProject.ideas.map(
                (idea) =>
                  idea && (
                    <li className="ideasList__newIdea" key={idea.id}>
                      <small>{idea.date}</small>
                      <p>{idea.text}</p>
                      <button
                        type="button"
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
              type="button"
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
