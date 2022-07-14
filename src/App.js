import React, { useState } from "react";
import "./App.css";
import "./index.css";
import About from "./components/About";
import Nav from "./components/Nav";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import Resume from "./components/Resume";
function App() {
  return (
    <section>

    <Header>

<Nav></Nav>

    </Header>

    <main>
      <About></About>

      <Project></Project>

      <Resume></Resume>
      
    </main>

    <Footer></Footer>

    </section>
  );
}

export default App;
