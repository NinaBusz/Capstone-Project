import { useState, useEffect, useRef } from "react";
import IdeasList from "../../components/IdeasList";

export default function IdeasPage({ projects, setProjects }) {
  const [ideas, setIdeas] = useState([]);
  const [isMovingIdea, setIsMovingIdea] = useState(false);
  const [selectedProjectForIdea, setSelectedProjectForIdea] = useState("");
  const initialRender = useRef(true);

  useEffect(() => {
    const savedIdeas = JSON.parse(localStorage.getItem("ideasData"));
    if (savedIdeas) {
      setIdeas(savedIdeas);
    }
  }, []);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    localStorage.setItem("ideasData", JSON.stringify(ideas));
  }, [ideas]);

  const deleteIdea = (id) => {
    const savedIdeas = ideas.filter((idea) => idea.id !== id);
    setIdeas(savedIdeas);
  };

  const handleMoveIdeaToggle = (id) => {
    setIsMovingIdea((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };
  // move project________________________________________________________________
  const handleSelectedProjectForIdea = (projectID) => {
    setSelectedProjectForIdea(projectID);
  };
  const handleAddIdeaToProject = (idea) => {
    if (selectedProjectForIdea) {
      const updatedProjects = projects.map((project) => {
        if (project.id === selectedProjectForIdea) {
          const updatedProject = { ...project };
          if (updatedProject.ideas) {
            updatedProject.ideas = [...updatedProject.ideas, idea];
          } else {
            updatedProject.ideas = [idea];
          }
          return updatedProject;
        } else {
          return project;
        }
      });
      setProjects(updatedProjects);
      setSelectedProjectForIdea("");
      setIsMovingIdea(false);
      localStorage.setItem("projectsData", JSON.stringify(updatedProjects));
    }
  };

  return (
    <article className="ideasList">
      <IdeasList
        ideas={ideas}
        projects={projects}
        isMovingIdea={isMovingIdea}
        handleDeleteIdea={deleteIdea}
        handleMoveIdeaToggle={handleMoveIdeaToggle}
        selectedProjectForIdea={selectedProjectForIdea}
        handleSelectedProjectForIdea={handleSelectedProjectForIdea}
        handleAddIdeaToProject={handleAddIdeaToProject}
      />
    </article>
  );
}
