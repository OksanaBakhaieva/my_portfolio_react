import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Advertisement from "./Components/Advertisement/Advertisement";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import my_projects from '../projects.json';
import './App.css';


function App() {
  
  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <Advertisement />
        <Projects projects={my_projects} />
        <ContactMe />
        <Footer />
      </div>
    </>
  )
}

export default App;
