import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    background-color: #11121B;
    color: #C3DAE8;
  }

  body {
    margin-right: 100px;
    margin-left: 100px;
    font-family: system-ui;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: space-between;
  }
  /* Header _______ Heading __ Navbar ______________________ */
   .header{
    display: flex;
    flex-direction: row;
    align-items: center;
   }

  h1{
    color:#FF2B44;
  }
   .navbar {
    display: flex;
    flex-direction: row;
   }
   .navbar__link {
    color: #FF2B44;
    text-decoration: none;
    padding: 5px 10px;
   }

   .navbar__link:hover{
    color: #942841;

   }


  /* Form  ______________________ */
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
 /* Lists ______________________ */
ul {
  list-style: none;
}
/* IdeasList______________________ */

.ideasList {
display: flex;
flex-direction: row;
justify-content: flex-start;

}
.ideasList__newIdea {
width: 300px;
margin-bottom: 10px;
padding: 5px 10px;
margin-top: 10px;
border: 1px solid #C3DAE8;
border-radius: 5px;
}


small {
    font-size: 0.6rem;
  }

   /* Buttons  ______________________ */
  .primaryButton {
    background-color: #0E0F17;;
    color: #C3DAE8;
    margin-top: 10px;
    padding: 5px 10px;
  border: none; 
  border-radius: 5px;}
  .primaryButton:hover {
    color: #942841;
    background-color: #0E0F17;
  }
  .ideasList__newIdea--deleteButton {
    background-color: #0E0F17;
    font-size: 0.6rem;
    color: #C3DAE8;
    margin-top: 10px;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
  }
  .ideasList__newIdea--deleteButton:hover {
    color: #942841;
    background-color: #0E0F17;
  }
`;
