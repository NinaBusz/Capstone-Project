import React from "react";
import Image from "next/image";
import placeholder from "./../../assets/placeholder_for_projects.jpg";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";

export default function Projectform({
  projects,
  handleDeleteProject,
  handleSaveProject,
}) {
  const router = useRouter();
  const { id } = router.query;

  const [foundProject, setFoundProject] = useState(null);

  useEffect(() => {
    const project = projects.find((project) => project.id === id);
    if (project) {
      setFoundProject(project);
    } else {
      setFoundProject(null);
    }
  }, [projects, id]);

  if (!foundProject) {
    return <h1>Kein Projekt gefunden!</h1>;
  }

  return (
    <>
      <h2>{foundProject.title}</h2>
      <form className="projectForm">
        <section className="projectForm__picture">
          <Image
            width="300"
            height="300"
            src={placeholder}
            alt="placeholder"
          ></Image>
        </section>
        <section className="projectForm__name">
          <label htmlFor="project__name">Projektname:</label>
          <textarea
            name="title"
            type="textarea"
            placeholder="Projektname"
            value={foundProject.title}
            onChange={(event) =>
              setFoundProject({ ...foundProject, title: event.target.value })
            }
          ></textarea>
          <button
            className="primaryButton"
            onClick={() => handleSaveProject(foundProject)}
          >
            Änderungen speichern
          </button>
        </section>
      </form>
      <button
        className="projects__deleteButton"
        type="submit"
        onClick={() => {
          handleDeleteProject(foundProject.id);
          router.push("/projects");
        }}
      >
        Projekt löschen
      </button>
    </>
  );
}
