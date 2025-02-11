import "./App.css";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./pages/Projects/Project";
import DarkThemeContext from "./DarkthemeContext";
import { useState } from "react";
import { useEffect } from "react";


function App() {

  const [currentTheme, setCurrentTheme] = useState(true);
  
  useEffect(() => {
    const link = document.getElementById("theme-link");

    if(link){
      link.href = currentTheme ? "/src/index.css" : "/src/light_index.css"
    }
  }, [currentTheme])

  return (
    <>
      <DarkThemeContext.Provider value={{
        darkTheme: currentTheme,
        toggle: () => {
          setCurrentTheme(!currentTheme)
          console.log("Toggling");
        }
      }}>
      <BrowserRouter>
        <Navbar />
        <h1> RAMASSAMY Luc </h1>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:slug" element={<Project/>} />
          </Routes>
        </main>
      </BrowserRouter>
      </DarkThemeContext.Provider>
    </>
  );
}

export default App;
