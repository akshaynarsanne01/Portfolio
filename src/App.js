import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import HeroComponent from "./components/HeroComponent";
import Skills from "./components/Skills";
const App = () => {
  return (
    <>
      <Header />
      {/* <Body /> */}
      <HeroComponent />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
