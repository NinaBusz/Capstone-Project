import GlobalStyle from "../styles";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import { useState, useEffect, useRef } from "react";

export default function App({ Component, pageProps }) {
  const [projects, setProjects] = useState([
    {
      id: 0,
      title: `Projekt 1`,
      url: `/1`,
      image: "url for image",
    },
  ]);
  const [nextProjectId, setNextProjectId] = useState(1);
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
      id: nextProjectId,
      title: `Projekt ${nextProjectId}`,
      url: `/projects/${nextProjectId}`,
    };
    setNextProjectId(nextProjectId + 1);
    setProjects([...projects, newProject]);
  };
  // delete project in list ________________________________________________________________
  const handleDeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

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
