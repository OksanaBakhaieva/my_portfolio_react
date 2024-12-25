import Hero from "../Hero/Hero";
import About from "./Components/About/About";
import Advertisement from "./Components/Advertisement/Advertisement";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import "./HomePage.module.css";

function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Advertisement />
            <Projects />
            <ContactMe />
        </>
    )
}

export default HomePage;