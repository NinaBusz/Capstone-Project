import GlobalStyle from "../styles";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";

export default function App({ Component, pageProps }) {
  const [projects, setProjects] = useState([]);
  const initialRender = useRef(true);

  // updateFunctions to update project state
  // for local storage ________________________________________________________________
  useEffect(() => {
    const projectsFromLocalStorage = JSON.parse(
      localStorage.getItem("projects")
    );
    if (projectsFromLocalStorage) {
      setProjects(projectsFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  //
  // new project in list ________________________________________________________________
  const handleCreateProject = () => {
    const newProject = {
      id: nanoid(),
      title: "Neues Projekt",
      image: "url for image",
      description: "",
    };

    setProjects([...projects, newProject]);
  };
  // delete project in list ________________________________________________________________
  const handleDeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };
  // update pattern for projectform _______________________________________________________

  return (
    <>
      <GlobalStyle />

      <Head>
        <title>Capstone Project</title>
      </Head>
      <div className="header">
        <Heading>Ideas-App</Heading>
        <Navbar />
      </div>
      <Component
        {...pageProps}
        projects={projects}
        handleCreateProject={handleCreateProject}
        handleDeleteProject={handleDeleteProject}
      />
    </>
  );
}
