import Idea from "../Idea/Idea";

export default function IdeasList({ ideas }) {
  return (
    <>
      <ul className="IdeasList">
        {ideas.map((idea) => (
          <Idea key={idea.id} id={idea.id} date={idea.date} text={idea.text} />
        ))}
      </ul>
    </>
  );
}
