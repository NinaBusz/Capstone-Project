import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    background-color: #11121B;
    color: #C3DAE8;
  }
  h1{
    color:#FF2B44;
  }
  body {
    margin-right: 10px;
    margin-left: 10px;
    font-family: system-ui;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
  .newIdeaForm__input {
    width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  height: 200px;
  box-sizing: border-box;
border-radius: 10px;
  }
  .newIdeaForm__input:focus, input:focus{
    outline: none;
}
ul {
  list-style: none;
}
li {margin-bottom: 10px;
margin-top: 10px;}
  small {
    font-size: 0.6rem;
  }
  .primaryButton {padding: 5px 10px;
  border-radius: 5px;}
`;
