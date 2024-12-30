import Header from "./Components/Header/Header";
import "modern-normalize";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Advertisement from "./Components/Advertisement/Advertisement";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import my_projects from '../projects.json';
import benefits_of_working_with_me from '../benefits.json';
import './App.css';
import Benefits from "./Components/Benefits/Benefits";


function App() {
  
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <Advertisement />
        <Projects projects={my_projects} />
        <Benefits benefits={benefits_of_working_with_me} />
        <ContactMe />
        <Footer />
      </div>
    </>
  )
}

export default App;
