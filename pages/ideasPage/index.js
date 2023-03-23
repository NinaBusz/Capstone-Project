import { useState, useEffect, useRef } from "react";
import IdeasList from "../../components/IdeasList";

export default function IdeasPage() {
  const [ideas, setIdeas] = useState([]);
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

  return (
    <div className="ideasList">
      Ideen
      <IdeasList ideas={ideas} handleDeleteIdea={deleteIdea} />
    </div>
  );
}
