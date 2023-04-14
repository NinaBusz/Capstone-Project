import { useRouter } from "next/router";
import styled from "styled-components";
import {
  StyledPrimaryButton,
  StyledPrimaryButton__Delete,
} from "/components/Buttons";

export default function ProjectForm({
  handleSaveProject,
  handleDeleteProject,
  foundProject,
  handleFoundProject,
}) {
  const router = useRouter();
  const { id } = router.query;
  return (
    <article>
      <h3>Projekt anpassen:</h3>
      <StyledProjectForm>
        <label htmlFor="project__image">Projektbild:</label>
        <small>
          Du kannst ein Bild auf https://imgbox.com/ uploaden, oder du suchst
          dir ein Bild von einer dieser Webseiten aus: pexels.com, unsplash.com.
          Es werden nur URLs akzeptiert.
        </small>
        <textarea
          id="project__image"
          name="image"
          type="textarea"
          placeholder="URL zu Bild..."
          value={foundProject.src}
          onChange={(event) =>
            handleFoundProject({
              ...foundProject,
              src: event.target.value,
            })
          }
          maxLength="100"
        ></textarea>

        <label htmlFor="project__name">Projektname:</label>
        <small>Gib deinem Projekt einen eigenen Namen:</small>
        <textarea
          id="project__name"
          name="title"
          type="textarea"
          placeholder="Projektname..."
          value={foundProject.title}
          onChange={(event) =>
            handleFoundProject({
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
          id="project__description"
          name="description"
          type="textarea"
          placeholder="Beschreibung..."
          value={foundProject.description}
          onChange={(event) =>
            handleFoundProject({
              ...foundProject,
              description: event.target.value,
            })
          }
          maxLength="100"
        ></textarea>
      </StyledProjectForm>
      <StyledProjectForm__Buttons>
        <StyledPrimaryButton__Delete
          className="primaryButton__delete"
          type="button"
          onClick={() => {
            handleDeleteProject(foundProject.id);
            router.push("/projects");
          }}
        >
          Projekt löschen
        </StyledPrimaryButton__Delete>
        <StyledPrimaryButton
          className="primaryButton"
          onClick={() => handleSaveProject(foundProject)}
        >
          Änderungen speichern
        </StyledPrimaryButton>
      </StyledProjectForm__Buttons>
    </article>
  );
}

const StyledProjectForm = styled.form`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
`;

const StyledProjectForm__Buttons = styled.section`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
