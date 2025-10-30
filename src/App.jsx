import { useEffect, useState } from "react";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Course from "./components/Courses/Courses";
import End from "./components/End/End ";
import HeroSection from "./components/HeroSection/HeroSection";
import Nav from "./components/Nav/Nav";
import Students from "./components/Students/Students";
import UpContact from "./components/UpContact/UpContact";
import { MdStraight } from "react-icons/md";


function App() {

  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        setShow(true)
      } else {
        setShow(false)
      }
    })
  })
  return (
    <div className="App">
      <Nav />
      <HeroSection />
      <Course />
      <Students />
      <UpContact />
      <Contact />
      <End />
      {show && (<div className="tepaga">
        <a href="#">
          <MdStraight />
        </a>
      </div>)}
    </div>
  );
}

export default App;
