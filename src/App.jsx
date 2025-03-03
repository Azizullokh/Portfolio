import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import MainLoyaut from "./layouts/MainLoyaut";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "../src/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace/>} />
      <Route
        path="/home"
        element={
          <MainLoyaut>
            <Home></Home>
          </MainLoyaut>
        }
      ></Route>
      <Route
        path="/about"
        element={
          <MainLoyaut>
            <About></About>
          </MainLoyaut>
        }
      ></Route>
      <Route
        path="/skills"
        element={
          <MainLoyaut>
            <Skills></Skills>
          </MainLoyaut>
        }
      ></Route>
      <Route
        path="/projects"
        element={
          <MainLoyaut>
            <Projects></Projects>
          </MainLoyaut>
        }
      ></Route>
      <Route
        path="/contact"
        element={
          <MainLoyaut>
            <Contact></Contact>
          </MainLoyaut>
        }
      ></Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
