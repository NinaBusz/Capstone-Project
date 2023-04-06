import Link from "next/link";
import Image from "next/image";

export default function Projekte({ projects, handleCreateProject }) {
  return (
    <section>
      <ul className="projectsarea">
        {projects.map((project) => (
          <li key={project.id}>
            <article>
              <Link href={`/projects/${project.id}`}>
                <Image
                  width="200"
                  height="200"
                  style={{
                    objectFit: "cover",
                  }}
                  src={
                    project.src
                      ? project.src
                      : "http://localhost:3001/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1679345506039-c4228a79c93a%3Fixlib%3Drb-4.0.3%26ixid%3DMnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8%26auto%3Dformat%26fit%3Dcrop%26w%3D1170%26q%3D80&w=384&q=75"
                  }
                  alt="Projekt-Vorschau-Bild"
                  className="projectsarea__listObject"
                ></Image>
              </Link>
              <h2>{project.title}</h2>
            </article>
          </li>
        ))}
        <li>
          <article>
            <button
              className="projects__newButton"
              type="submit"
              onClick={() => handleCreateProject()}
            >
              Neues Projekt erstellen!
            </button>
          </article>
        </li>
      </ul>
    </section>
  );
}
