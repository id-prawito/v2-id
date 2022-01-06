import React from "react";
import About from "../components/about";
import Hero from "../components/hero";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Work from "../components/work";
import Project from "../components/project";

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <Work />
            <Project />
            <Contact />
        </>
    );
};

export default Home;
