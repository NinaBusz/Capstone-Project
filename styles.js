import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    color: #C3DAE8;
  }
  body {
    height: 100vh;
    margin-right: 15px;
    margin-left: 15px;
    font-family: system-ui;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: space-between;
    background-color: #0E0F17;
    background-size: cover;
  }
  small {
    background-color: transparent;
    font-size: 0.6rem;
  }
p {
  background-color: transparent;
  word-break: break-word
  }

  h2{
    margin: 0;
    word-break: break-word
    }
ul {
  list-style: none;
}
.projectsarea__formLayout {
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  }
textarea {
  background-color: #181A26;
  box-sizing: border-box;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  height: 100px;
  box-sizing: border-box;
  border: 1px solid #ffe175;
  border-radius: 10px;
}
`;
