import "./App.css";
import Contact from "./components/Contact/Contact";
import Course from "./components/Courses/Courses";
import HeroSection from "./components/HeroSection/HeroSection";
import Nav from "./components/Nav/Nav";
import Students from "./components/Students/Students";
import UpContact from "./components/UpContact/UpContact";

function App() {
  return (
    <div className="App">
      <Nav />
      <HeroSection />
      <Course />
      <Students />
      <UpContact />
      <Contact />
    </div>
  );
}

export default App;
