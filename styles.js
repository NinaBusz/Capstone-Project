import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    background-color: #0E0F17;
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
    background-color: transparent;
    font-size: 0.6rem;
  }
p {
  background-color: transparent;
  word-break: break-word
  }

   .header{
    display: flex;
    flex-direction: row;
    align-items: center;
   }

  h1{
    color:#3CFB6A;
    word-break: break-word
  }
  h2{
    margin: 0;
    word-break: break-word
    }

 
  .newIdeaForm__input {
  box-sizing: border-box;
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  height: 200px;
  box-sizing: border-box;
  border: 2px solid #5E68FA;
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
  background-color: #181A26;
width: 100%;
padding: 25px;
margin-top: 10px;
border: none;
border-radius: 10px;
}
.ideasList__newIdea--bottom {
  background-color: transparent;
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

  }
  .projectsarea__listObject {
    margin-top: 30px;
    color: #0E0F17;
    border: none; 
  border-radius: 5px;}

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
  border: 1px solid #5E68FA;
  border-radius: 10px;
}

/*
#A6ABF4
#5E68FA
#0E0F17
#000F10
#942841

*/

  .primaryButton {
    background-color: #0E0F17;;
    color: #C3DAE8;
    padding: 5px 10px;
  border: 1px solid #3CFB6A; 
  border-radius: 5px;}

  .primaryButton__delete {
    background-color: #0E0F17;
    font-size: 0.6rem;
    padding: 5px 10px;
    border: 1px solid #C3DAE8;
    border-radius: 5px;
  }

  .projects__newButton {
    background-color: #181A26;
    color: #C3DAE8;
    height: 200px;
    width: 200px;
    margin-top: 30px;
    border: 1px solid #3CFB6A; 
    border-radius: 5px;
  }

  .projectForm__buttons{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;}
    
    .moveArea{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.selected{
  color: #5E68FA;
}
`;
