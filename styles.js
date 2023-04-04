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
    margin-right: 15px;
    margin-left: 15px;
    font-family: system-ui;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: space-between;
  }

  small {
    font-size: 0.6rem;
  }
p {word-break: break-word}

  
   .header{
    display: flex;
    flex-direction: row;
    align-items: center;
   }

  h1{
    color:#FF2B44;
    word-break: break-word
  }
  h2{
    margin: 0;
    word-break: break-word
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


 
  .newIdeaForm__input {
  box-sizing: border-box;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  height: 200px;
  box-sizing: border-box;
  border: 1px solid #C3DAE8;
  border-radius: 10px;
  
  }
  .newIdeaForm__input:focus, input:focus{
    outline: none;
}

ul {
  list-style: none;
}


.ideasList {
  margin: 0;
  padding: 0;
display: flex;
flex-direction: column;
justify-content: flex-start;

}
.ideasList__newIdea {
width: 100%;
padding: 25px;
margin-top: 10px;
border: 1px solid #C3DAE8;
border-radius: 10px;
}
.ideasList__newIdea--bottom {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;;
}

 
 .projectsarea {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  }
  .projectsarea__listObject {
    color: #0E0F17;
    border: 1px solid #C3DAE8; 
  border-radius: 5px;}

.projectsarea__formLayout {
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  }

textarea {
  box-sizing: border-box;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  height: 100px;
  box-sizing: border-box;
  border: 1px solid #C3DAE8;
  border-radius: 10px;
}


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
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
  }
  .ideasList__newIdea--deleteButton:hover {
    color: #942841;
    background-color: #0E0F17;
  }
  .projects__newButton {
    color: #C3DAE8;
    height: 200px;
    width: 200px;
    border: 1px solid #C3DAE8; 
    border-radius: 5px;
  }
  .projects__deleteButton{ 
    background-color: #0E0F17;
    font-size: 0.6rem;
    color: #942841;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
  }
  .projectForm__buttons{
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;}
    
`;
