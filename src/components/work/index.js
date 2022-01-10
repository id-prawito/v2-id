import React, { useEffect } from "react";
import { WorkSite } from "./WorkElements";
import pokedex from "../../assets/img/pokedex-id.PNG";
import disneyPlus from "../../assets/img/disney-plus.PNG";
import spkPromethee from "../../assets/img/spk-promethee.PNG";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Work = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.8,
                staggerChildren: 0.6,
            },
        },
    };

    const item_nya = {
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <WorkSite ref={ref} id="work">
            <div className="work_container">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={controls}
                    className="work_content"
                >
                    <motion.h1 variants={item_nya}>Hi bro, this is</motion.h1>
                    <motion.div variants={item_nya} className="big_heading">
                        Some Things I've Built
                    </motion.div>
                    <div className="content_item">
                        <motion.div variants={item_nya} className="project">
                            <div className="project_image">
                                <a
                                    href="https://id-prawito.github.io/pokedex-id/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={pokedex}
                                        alt="pokedex-id"
                                        className="image_alt"
                                    />
                                </a>
                            </div>
                            <div className="project_content">
                                <p className="text_1">Featured Project</p>
                                <h3 className="text_2">
                                    <a
                                        href="https://id-prawito.github.io/pokedex-id/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Pokedex-id
                                    </a>
                                </h3>
                                <div className="project_description">
                                    <p>
                                        Pokédex id is an electronic device
                                        designed to catalogue and provide
                                        information regarding the various
                                        species of Pokémon featured in the
                                        Pokémon video game, anime and manga
                                        series. Search for a Pokémon by name or
                                        using it's National Pokédex number.
                                    </p>
                                </div>
                                <div className="project-tech-list">
                                    <div className="text_list">VS Code</div>
                                    <div className="text_list">Pokedex API</div>
                                    <div className="text_list">React</div>
                                    <div className="text_list">
                                        Styled Components
                                    </div>
                                    <div className="text_list">
                                        Github Pages
                                    </div>
                                </div>
                                <div className="project_link">
                                    <a
                                        href="https://github.com/id-prawito/pokedex-id"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="links"
                                    >
                                        <FiGithub />
                                    </a>
                                    <a
                                        href="https://id-prawito.github.io/pokedex-id/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="links"
                                    >
                                        <FiExternalLink />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={item_nya}
                            className="project"
                            style={{ flexDirection: "row-reverse" }}
                        >
                            <div className="project_image">
                                <a
                                    href="https://id-prawito.github.io/disney-plus/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={disneyPlus}
                                        alt="disney-plus"
                                        className="image_alt"
                                    />
                                </a>
                            </div>
                            <div
                                className="project_content"
                                style={{
                                    marginLeft: "0",
                                    marginRight: "-80px",
                                    alignItems: "flex-start",
                                }}
                            >
                                <p className="text_1">Featured Project</p>
                                <h3 className="text_2">
                                    <a
                                        href="https://id-prawito.github.io/disney-plus/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Disney Plus
                                    </a>
                                </h3>
                                <div className="project_description">
                                    <p style={{ textAlign: "left" }}>
                                        A minimal, dark blue theme for VS Code,
                                        Sublime Text, Atom, iTerm, and more.
                                        Available on Visual Studio Marketplace,
                                        Package Control, Atom Package Manager,
                                        and npm.
                                    </p>
                                </div>
                                <div className="project-tech-list">
                                    <div className="text_list">VS Code</div>
                                    <div className="text_list">TMDB API</div>
                                    <div className="text_list">React</div>
                                    <div className="text_list">Scss</div>
                                    <div className="text_list">
                                        Github Pages
                                    </div>
                                    <div className="text_list">Swiper Js</div>
                                </div>
                                <div className="project_link">
                                    <a
                                        href="https://github.com/id-prawito/disney-plus"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="links"
                                    >
                                        <FiGithub />
                                    </a>
                                    <a
                                        href="https://id-prawito.github.io/disney-plus/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="links"
                                    >
                                        <FiExternalLink />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div variants={item_nya} className="project">
                            <div className="project_image">
                                <a
                                    href="https://promethee.ta-spk.xyz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src={spkPromethee}
                                        alt="pokedex-id"
                                        className="image_alt"
                                    />
                                </a>
                            </div>
                            <div className="project_content">
                                <p className="text_1">Featured Project</p>
                                <h3 className="text_2">
                                    <a
                                        href="https://promethee.ta-spk.xyz"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        SPK - Promethee
                                    </a>
                                </h3>
                                <div className="project_description">
                                    <p>
                                        Decision Support System for Priority
                                        Determination of Small Dam Construction
                                        Development with The Promethee Method
                                        (Preference Ranking Organization Method
                                        for Enrichment Evaluation).
                                    </p>
                                </div>
                                <div className="project-tech-list">
                                    <div className="text_list">VS Code</div>
                                    <div className="text_list">Laravel</div>
                                    <div className="text_list">PHP</div>
                                    <div className="text_list">MySQL</div>
                                    <div className="text_list">Pond Data</div>
                                    <div className="text_list">
                                        Promethee Method
                                    </div>
                                    <div className="text_list">DSS</div>
                                </div>
                                <div className="project_link">
                                    <a
                                        style={{ display: "none" }}
                                        href="www.google.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="links"
                                    >
                                        <FiGithub />
                                    </a>
                                    <a
                                        href="https://promethee.ta-spk.xyz"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="links"
                                    >
                                        <FiExternalLink />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </WorkSite>
    );
};

export default Work;
