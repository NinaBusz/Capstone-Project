import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <>
      <StyledNavbar>
        <li>
          <StyledNavbar__Link
            href="/"
            className={router.pathname === "/" ? "active" : ""}
          >
            Home
          </StyledNavbar__Link>
        </li>
        <li>
          <StyledNavbar__Link
            href="/ideasPage"
            className={router.pathname === "/ideasPage" ? "active" : ""}
          >
            Ideen
          </StyledNavbar__Link>
        </li>
        <li>
          <StyledNavbar__Link
            href="/projects"
            className={router.pathname.includes("/projects") ? "active" : ""}
          >
            Projekte
          </StyledNavbar__Link>
        </li>
      </StyledNavbar>
    </>
  );
}

const StyledNavbar = styled.ul`
  display: flex;
  flex-direction: row;
`;

const StyledNavbar__Link = styled(Link)`
  text-decoration: none;
  padding: 5px 10px;
  line-height: 30px;
  &.active {
    text-decoration: 2px #f0b065 underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: none;
  }
`;
