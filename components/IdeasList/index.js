import Idea from "../Idea/Idea";

export default function IdeasList({ ideas, handleDeleteIdea }) {
  return (
    <>
      <ul className="IdeasList">
        {ideas.map((idea) => (
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
