import GlobalStyle from "../styles";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import { useState, useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [projects, setProjects] = useState([]);
  const initialRender = useRef(true);

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

  // new project in list ________________________________________________________________
  const handleCreateProject = () => {
    const newProject = {
      id: nanoid(),
      title: "Neues Projekt",
      src: "https://images.unsplash.com/photo-1679345506039-c4228a79c93a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "",
    };

    setProjects([...projects, newProject]);
  };
  // delete project in list ________________________________________________________________
  const handleDeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };
  // update pattern for projectform _______________________________________________________
  const handleSaveProject = (updatedProject) => {
    const allowedWebsites = [
      "images.pexels.com/*",
      "images.unsplash.com/*",
      "media.istockphoto.com/*",
      "images2.imgbox.com/*",
      "thumbs2.imgbox.com/*",
    ];
    const regex = new RegExp(
      `^(https?:\\/\\/)?(www\\.)?(${allowedWebsites.join("|")})`,
      "i"
    );

    if (!regex.test(updatedProject.src)) {
      alert(
        "Invalid image URL. Please enter an URL from the allowed websites. If you uploaded your image on imgbox.com, please right click on the image and copy/paste the image-link!"
      );
      return;
    }

    const newProjects = projects.map((project) =>
      project.id === updatedProject.id ? updatedProject : project
    );
    setProjects(newProjects);
    localStorage.setItem("projects", JSON.stringify(newProjects));
    router.push("/projects");
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
        handleSaveProject={handleSaveProject}
      />
    </>
  );
}
