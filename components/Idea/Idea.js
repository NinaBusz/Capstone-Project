export default function Idea({ id, date, text, handleDeleteIdea }) {
  return (
    <li className="ideasList__newIdea">
      <p>{text}</p>
      <article className="ideasList__newIdea--bottom">
        <small>{date}</small>
        <button
          className="ideasList__newIdea--deleteButton"
          onClick={() => handleDeleteIdea(id)}
        >
          Löschen
        </button>
      </article>
    </li>
  );
}
