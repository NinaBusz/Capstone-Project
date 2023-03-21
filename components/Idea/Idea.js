export default function Idea({ id, date, text }) {
  return (
    <li>
      <div>{date}</div>
      <div>{text}</div>
    </li>
  );
}
