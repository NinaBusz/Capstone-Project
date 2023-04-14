import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export default function Projekte({ projects, handleCreateProject }) {
  return (
    <section>
      <StyledProjectsarea>
        {projects.map((project) => (
          <li key={project.id}>
            <Link href={`/projects/${project.id}`}>
              <StyledProjectImage
                width="200"
                height="200"
                style={{
                  objectFit: "cover",
                }}
                src={project.src ? project.src : "/NewIdea_placeholder.png"}
                alt="Projekt-Vorschau-Bild"
              ></StyledProjectImage>
            </Link>
            <h2>{project.title}</h2>
          </li>
        ))}
        <li>
          <StyledNewProjectButton
            type="submit"
            onClick={() => handleCreateProject()}
          >
            Neues Projekt erstellen!
          </StyledNewProjectButton>
        </li>
      </StyledProjectsarea>
    </section>
  );
}

const StyledProjectImage = styled(Image)`
  margin-top: 30px;
  border: 2px solid #181a26;
  border-radius: 5px;
`;
const StyledNewProjectButton = styled.button`
  background-color: #181a26;
  color: #c3dae8;
  height: 200px;
  width: 200px;
  margin-top: 30px;
  border: 1px solid #ffe175;
  border-radius: 5px;
`;
export const StyledProjectsarea = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
