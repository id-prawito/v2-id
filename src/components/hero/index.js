import React from "react";
import { HeroSite } from "./HeroElements";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const Hero = () => {
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.8,
                staggerChildren: 0.4,
            },
        },
    };

    const item_nya = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <HeroSite id="home">
            <div className="hero_container">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="hero_content"
                >
                    <motion.h1 variants={item_nya}>Hi, name is</motion.h1>
                    <motion.div variants={item_nya} className="big_heading">
                        Prawito (Boy).
                    </motion.div>
                    <motion.div variants={item_nya} className="big_heading_one">
                        I build things for the web.
                    </motion.div>
                    <motion.p variants={item_nya}>
                        I'm a software engineer specializing in building (and
                        occasionally designing) exceptional digital experiences.
                        Currently, I'm focused on exploring and learning about
                        JavaScript programming language and others tech stack
                        for frontend engineer.
                    </motion.p>
                    <motion.div variants={item_nya} className="item_hero">
                        <div className="item_status"></div>
                        <span>Offline</span>
                        <div className="item_status_online"></div>
                        <span>Online</span>
                    </motion.div>

                    <motion.div variants={item_nya} className="button_hero">
                        <div className="button_my-course">
                            <a
                                href="https://bit.ly/Certificate_Praw"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Check My Files
                            </a>
                        </div>
                        <div className="button_my-course">
                            <FiGithub />
                            <a
                                href="https://github.com/id-prawito"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Github
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </HeroSite>
    );
};

export default Hero;
