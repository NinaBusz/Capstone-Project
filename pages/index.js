import { useState } from "react";
import { nanoid } from "nanoid";

import Heading from "../components/Heading";
import IdeasForm from "../components/IdeasForm";
import IdeasList from "../components/IdeasList";

export default function Home() {
  const [ideas, setIdeas] = useState([]);

  const addIdea = (text) => {
    //console.log(text);
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
