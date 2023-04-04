import { useState, useEffect, useRef } from "react";
import IdeasList from "../../components/IdeasList";

export default function IdeasPage({ projects }) {
  const [ideas, setIdeas] = useState([]);
  const [isMovingIdea, setIsMovingIdea] = useState(false);
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

  return (
    <article className="ideasList">
      <IdeasList
        ideas={ideas}
        projects={projects}
        isMovingIdea={isMovingIdea}
        handleDeleteIdea={deleteIdea}
        handleMoveIdeaToggle={handleMoveIdeaToggle}
      />
    </article>
  );
}
