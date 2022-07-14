import React, { useState } from "react";
import "./App.css";
import "./index.css";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Resume from "./components/Resume";

function App() {
  const [links] = useState([
    {
      linkName: "about",
    },
    {
      linkName: "contact",
    },
    {
      linkName: "portfolio",
    },
    {
      linkName: "resume",
    },
  ]);

  const [currentLink, setCurrentLink] = useState(links[0]);

  return (
    <section>
      <Header>
        <Nav
          links={links}
          currentLink={currentLink}
          setCurrentLink={setCurrentLink}
        ></Nav>
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
