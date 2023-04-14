import Image from "next/image";
import styled from "styled-components";
import ProjectForm from "../../components/ProjectForm";
import {
  StyledPrimaryButton,
  StyledPrimaryButton__Delete,
} from "./../../components/Buttons/index.js";
import { StyledIdeasButtonArea } from "/components/Idea/Idea.js";
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
      <StyledProjectPage>
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
          <StyledProjectPage>
            {" "}
            <StyledProjectDetailImage
              width="300"
              height="300"
              style={{
                layout: "fill",
                objectFit: "contain",
              }}
              src={foundProject.src ? foundProject.src : placeholder}
              alt="Dein Projektbild"
            ></StyledProjectDetailImage>
            <StyledH2>{foundProject.title}</StyledH2>
            <p>{foundProject.description}</p>
            {foundProject.ideas.length > 0 && <h3>Ideen zum Projekt:</h3>}
            <StyledIdeasList role="list">
              {foundProject.ideas.map(
                (idea) =>
                  idea && (
                    <StyledListedIdea key={idea.id}>
                      <p>{idea.text}</p>
                      <StyledIdeasButtonArea>
                        <small>{idea.date}</small>
                        <StyledPrimaryButton__Delete
                          type="button"
                          onClick={() => removeIdeaFromProject(idea)}
                        >
                          Idee entfernen
                        </StyledPrimaryButton__Delete>
                      </StyledIdeasButtonArea>
                    </StyledListedIdea>
                  )
              )}
            </StyledIdeasList>
            <StyledPrimaryButton
              type="button"
              onClick={() => handleEditButtonClick()}
            >
              Bearbeitungsmodus aktivieren
            </StyledPrimaryButton>
          </StyledProjectPage>
        )}
      </StyledProjectPage>
    </>
  );
}
const StyledProjectPage = styled.article`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledIdeasList = styled.ul`
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;
const StyledListedIdea = styled.li`
  background-color: #181a26;
  width: 100%;
  padding: 15px;
  margin-top: 10px;
  border: none;
`;
const StyledProjectDetailImage = styled(Image)`
  margin-top: 30px;
  margin-bottom: 20px;
  border-radius: 5px;
  objectfit: "cover";
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledH2 = styled.h2`
  padding-top: 10px;
  border-radius: 10px;
`;
