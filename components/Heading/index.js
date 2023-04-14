import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function Heading() {
  return (
    <StyledLink href="/">
      <Image src="/Logo_Ideas.png" alt="Logo" width={90} height={135}></Image>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  cursor: pointer;
`;
