import React from "react";
import Image from "next/image";
import placeholder from "./../../assets/placeholder_for_projects.jpg";
import { useRouter } from "next/router";

export default function Projectform({ projects, handleDeleteProject }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  const foundProject = projects.find((project) => project.id === Number(id)); // extract id from url localhost:3000/projects/id <- this is what you need
  // with id search in projects array and use the found object, to fill the infos in the return of this component
  if (!foundProject) {
    return <h1>Nothing found</h1>;
  }
  return (
    <>
      <h2>{foundProject.name}</h2>
      <form className="projectForm">
        <section className="projectForm__picture">
          <Image
            width="300"
            height="300"
            src={placeholder}
            alt="placeholder"
          ></Image>
          <button className="primaryButton">upload</button>
        </section>
        <section className="projectForm__name">
          <label htmlFor="project__name">Projektname:</label>
          <textarea type="textarea" placeholder="Projektname"></textarea>
          <button className="primaryButton">speichern</button>
        </section>
        <section className="projectForm__description">
          <label htmlFor="project__description">Beschreibung:</label>
          <textarea
            type="textarea"
            placeholder="Dies ist ein neues Projekt"
          ></textarea>
          <button className="primaryButton">speichern</button>
        </section>
      </form>
      <button
        className="projects__deleteButton"
        type="submit"
        onClick={() => {
          handleDeleteProject(parseInt(id));
          router.push("/projects");
        }}
      >
        Projekt löschen
      </button>
    </>
  );
}
