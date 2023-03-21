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
  height: 50vw;
  box-sizing: border-box;
  
  }
  button {padding: 5px 10px;}
`;
