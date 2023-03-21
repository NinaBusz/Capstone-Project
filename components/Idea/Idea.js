export default function Idea({ id, date, text }) {
  return (
    <li>
      <small>{date}</small>
      <div>{text}</div>
    </li>
  );
}
