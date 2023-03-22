export default function Idea({ id, date, text }) {
  return (
    <li className="newIdea">
      <small>{date}</small>
      <div>{text}</div>
    </li>
  );
}
