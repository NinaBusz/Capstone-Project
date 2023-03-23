import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";
import IdeasForm from "../components/IdeasForm";

export default function Home() {
  const [ideas, setIdeas] = useState([]);
  const initialRender = useRef(true);
  const router = useRouter();

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
      <IdeasForm handleAddIdea={addIdea} />
    </main>
  );
}
