import Link from "next/link";
import Image from "next/image";
import placeholder from "./../../assets/placeholder_for_projects.jpg";

export default function Projekte({ projects, handleCreateProject }) {
  return (
    <article>
      <p>Projekte</p>

      <ul className="projects">
        {projects.map((project) => (
          <li key={project.id}>
            <div>
              <Link href={`/projects/${project.id}`}>
                <Image
                  width="200"
                  height="200"
                  src={placeholder}
                  alt="placeholder"
                  className="projects__listObject"
                ></Image>
              </Link>
              <p className="projects__title">{project.title}</p>
            </div>
          </li>
        ))}
        <li>
          <button
            className="projects__newButton"
            type="submit"
            onClick={() => handleCreateProject()}
          >
            Neues Projekt erstellen!
          </button>
        </li>
      </ul>
    </article>
  );
}
