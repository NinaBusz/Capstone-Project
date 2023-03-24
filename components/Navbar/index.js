import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <ul className="navbar">
        <li>
          <Link className="navbar__link" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navbar__link" href="/ideasPage">
            Ideen
          </Link>
        </li>
      </ul>
    </>
  );
}
