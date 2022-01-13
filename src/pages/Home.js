import React from "react";
import About from "../components/about";
import Hero from "../components/hero";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Work from "../components/work";
import Project from "../components/project";
import Footer from "../components/footer";
import Header from "../components/header";

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Experience />
            <Work />
            <Project />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
