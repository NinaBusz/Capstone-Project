import { useState, useEffect } from "react";
import IdeasList from "../../components/IdeasList";

export default function IdeasPage() {
  const [ideas, setIdeas] = useState([]);
  useEffect(() => {
    const savedIdeas = JSON.parse(localStorage.getItem("ideasData"));
    if (savedIdeas) {
      setIdeas(savedIdeas);
    }
  }, []);
  return (
    <>
      <h2>Ideen</h2>
      <IdeasList ideas={ideas} />
    </>
  );
}
