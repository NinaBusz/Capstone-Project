export default function Idea({ id, date, text, handleDeleteIdea }) {
  return (
    <li className="ideasList__newIdea">
      <small>{date}</small>
      <div>{text}</div>

      <button
        className="ideasList__newIdea--deleteButton"
        onClick={() => handleDeleteIdea(id)}
      >
        Löschen
      </button>
    </li>
  );
}
