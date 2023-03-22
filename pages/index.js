import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import Heading from "../components/Heading";
import IdeasForm from "../components/IdeasForm";
import IdeasList from "../components/IdeasList";

export default function Home() {
  const [ideas, setIdeas] = useState([]);
  const initialRender = useRef(true);

  //localStorage------- zustand sichern in der ideas variable im local storage------
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

  // function to IdeasForm to update the text -------

  const addIdea = (text) => {
    const date = new Date();
    const newIdea = {
      id: nanoid(),
      date: date.toLocaleDateString(),
      text: text,
    };
    const newIdeas = [...ideas, newIdea];
    setIdeas(newIdeas);
  };

  return (
    <main>
      <Heading>Ideas-App</Heading>
      <IdeasForm handleAddIdea={addIdea} />
      <IdeasList ideas={ideas} />
    </main>
  );
}
