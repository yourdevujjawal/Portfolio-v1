import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import jobData from "./data.json";
import Widgets from "./components/Widgets";
import React, { useState, useEffect } from "react";

import "../node_modules/aos/dist/aos.css";
import AOS from "../node_modules/aos/dist/aos.js";

function App() {
  const [menuState, setMenuState] = useState(false);
  const portfolioData = jobData;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App dark-mode">
      {menuState && (
        <div className="menu-overlay" onClick={() => setMenuState(false)}></div>
      )}
      <Navbar menuState={menuState} setMenuState={setMenuState} />
      <main>
        <div className="container">
          <Header />
          <About />
          <Experience portfolioData={portfolioData.experience} />
          <Projects projectsData={portfolioData.projects} />
          <Contact />
        </div>
      </main>
      <Footer />
      <Widgets />
    </div>
  );
}

export default App;
