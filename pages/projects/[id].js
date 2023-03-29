import React from "react";
import Image from "next/image";
import placeholder from "./../../assets/placeholder_for_projects.jpg";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Projectform({
  projects,
  handleDeleteProject,
  handleSaveProject,
}) {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const foundProject = projects.find((project) => project.id === id); // extract id from url localhost:3000/projects/id <- this is what you need
  // with id search in projects array and use the found object, to fill the infos in the return of this component
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
            //value={title}
            //onChange={(event) => setTitle(event.target.value)}
          ></textarea>
          <button className="primaryButton" onClick={() => handleSaveProject()}>
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
