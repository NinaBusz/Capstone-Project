import Idea from "../Idea/Idea";

export default function IdeasList({ ideas, handleDeleteIdea }) {
  const reversedIdeas = [...ideas].reverse();
  return (
    <>
      <ul className="ideasList">
        {reversedIdeas.map((idea) => (
          <Idea
            key={idea.id}
            id={idea.id}
            date={idea.date}
            text={idea.text}
            handleDeleteIdea={handleDeleteIdea}
          />
        ))}
      </ul>
    </>
  );
}
