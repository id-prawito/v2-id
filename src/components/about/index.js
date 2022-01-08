import React, { useEffect } from "react";
import { AboutSite } from "./AboutElements";
import { FaCheckCircle } from "react-icons/fa";
import mongoDB from "../../assets/img/mongoDBColor.svg";
import reactJS from "../../assets/img/reactJS.svg";
import figma from "../../assets/img/figma.svg";
import nodeJS from "../../assets/img/nodeJS.svg";
import html5 from "../../assets/img/html.svg";
import css from "../../assets/img/css3.svg";
import javascript from "../../assets/img/tech_stack/javascript.svg";
import typescript from "../../assets/img/tech_stack/typescript.svg";
import github from "../../assets/img/tech_stack/github.svg";
import reactJs from "../../assets/img/tech_stack/reactJS.svg";
import visualCode from "../../assets/img/tech_stack/visualCode.png";
import scss from "../../assets/img/tech_stack/scss.svg";
import mySQL from "../../assets/img/tech_stack/mySQL.svg";
import php from "../../assets/img/tech_stack/php.svg";
import firebase from "../../assets/img/tech_stack/firebase.svg";
import illustrator from "../../assets/img/tech_stack/illustrator.png";
import photoshop from "../../assets/img/tech_stack/photoshop.svg";
import nextJS from "../../assets/img/tech_stack/nextJS.svg";
import sqlite from "../../assets/img/tech_stack/sqlite.svg";
import git from "../../assets/img/tech_stack/git.svg";
import vueJs from "../../assets/img/tech_stack/vueJs.svg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
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

    const item_card = {
        hidden: { y: -40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };

    return (
        <AboutSite id="about">
            <motion.div
                variants={container}
                initial="hidden"
                animate={controls}
                className="pembungkus_about"
            >
                <div ref={ref} className="about_content">
                    <motion.div variants={item_nya} className="content_about">
                        <h1>Being a front-end developer</h1>
                        <div className="big_heading_about">
                            Who am I <span>&</span> how did i get here.
                        </div>
                        <p>
                            Hello, i am Prawito (a.k.a Boy). I am from Indonesia
                            who codes for fun, i have been in coding since 2016,
                            when i was studied in Diponegoro University and I am
                            graduated in June 2021. I have been using
                            JavaScripts (Node JS and React Js (Client Side)) for
                            1.5 year. Now I'm trying to produce a lots of open
                            source project and working as freelancer.
                        </p>
                        <ul className="text_skill">
                            <li>
                                <div className="icon">
                                    <FaCheckCircle />
                                </div>
                                <span>JavaScript (Node & Client Side)</span>
                            </li>
                            <li>
                                <div className="icon">
                                    <FaCheckCircle />
                                </div>
                                <span>TypeScript, PHP</span>
                            </li>
                            <li>
                                <div className="icon">
                                    <FaCheckCircle />
                                </div>
                                <span>NoSQL (MongoDB & MySQL)</span>
                            </li>
                            <li>
                                <div className="icon">
                                    <FaCheckCircle />
                                </div>
                                <span>SQL (Postgre & Sqlite)</span>
                            </li>
                            <li>
                                <div className="icon">
                                    <FaCheckCircle />
                                </div>
                                <span>
                                    Design (Figma, CorelDraw, AI & Adobe
                                    Photoshop)
                                </span>
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div variants={item_nya} className="content_card">
                        <div className="myArea">
                            <div className="card_item">
                                <div className="item">
                                    <div
                                        className="item_logo"
                                        style={{ backgroundColor: "#3d6270" }}
                                    >
                                        <img src={reactJS} alt="React JS" />
                                    </div>
                                    <h2>React JS</h2>
                                    <p>(0.8 Years)</p>
                                    <p>
                                        Technology that is my main focus to
                                        explore.
                                    </p>
                                </div>
                            </div>
                            <div className="card_item">
                                <div className="item">
                                    <div
                                        className="item_logo"
                                        style={{
                                            backgroundColor: "#939caa",
                                        }}
                                    >
                                        <img src={mySQL} alt="mySQL" />
                                    </div>
                                    <h2>MySQL</h2>
                                    <p>(1.8 Years)</p>
                                    <p>
                                        A minimal, dark blue theme for VS Code,
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="myArea2">
                            <div className="card_item">
                                <div className="item">
                                    <div
                                        className="item_logo"
                                        style={{ backgroundColor: "#25397e" }}
                                    >
                                        <img src={figma} alt="Figma" />
                                    </div>
                                    <h2>Figma</h2>
                                    <p>(0.4 Years)</p>
                                    <p>
                                        A minimal, dark blue theme for VS Code,
                                    </p>
                                </div>
                            </div>
                            <div className="card_item">
                                <div className="item">
                                    <div
                                        className="item_logo"
                                        style={{ backgroundColor: "#354164" }}
                                    >
                                        <img src={nodeJS} alt="mongoDB" />
                                    </div>
                                    <h2>Node JS</h2>
                                    <p>(0.5 Years)</p>
                                    <p>
                                        A minimal, dark blue theme for VS Code,
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <div className="about_tech">
                    <motion.div variants={item_nya} className="tech_heading">
                        Tech Stack
                    </motion.div>
                    <div className="tech_content">
                        <motion.div variants={item_card} className="pembungkus">
                            <div className="card_background"></div>
                            <div className="card_contentnya">
                                <img src={html5} alt="html_logo" />
                                <div className="text_tech">HTML 5</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item_card} className="pembungkus">
                            <div className="card_background"></div>
                            <div className="card_contentnya">
                                <img src={css} alt="css_logo" />
                                <div className="text_tech">CSS</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item_card} className="pembungkus">
                            <div className="card_background"></div>
                            <div className="card_contentnya">
                                <img src={javascript} alt="javascript_logo" />
                                <div className="text_tech">JavaScript</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item_card} className="pembungkus">
                            <div className="card_background"></div>
                            <div className="card_contentnya">
                                <img src={typescript} alt="html_logo" />
                                <div className="text_tech">TypeScript</div>
                            </div>
                        </motion.div>
                        <motion.div variants={item_card} className="pembungkus">
                            <div className="card_background"></div>
                            <div className="card_contentnya">
                                <img src={github} alt="github_logo" />
                                <div className="text_tech">Github</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item_card} className="pembungkus">
                            <div className="card_background"></div>
                            <div className="card_contentnya">
                                <img src={reactJs} alt="ReactJS_logo" />
                                <div className="text_tech">React JS</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item_card} className="pembungkus">
                            <div className="card_background"></div>
                            <div className="card_contentnya">
                                <img src={visualCode} alt="Visual_logo" />
                                <div className="text_tech">Visual Code</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item_card} className="pembungkus">
                            <div className="card_background"></div>
                            <div className="card_contentnya">
                                <img src={scss} alt="Scss_logo" />
                                <div className="text_tech">Scss</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item_card} className="pembungkus">
                            <div className="card_background"></div>
                            <div className="card_contentnya">
                                <img src={mySQL} alt="MySQL_logo" />
                                <div className="text_tech">MySQL</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item_card} className="pembungkus">
                            <div className="card_background"></div>
                            <div className="card_contentnya">
                                <img src={figma} alt="Figma_logo" />
                                <div className="text_tech">Figma</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item_card} className="pembungkus">
                            <div className="card_background"></div>
                            <div className="card_contentnya">
                                <img src={php} alt="PHP_logo" />
                                <div className="text_tech">PHP</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item_card} className="pembungkus">
                            <div className="card_background"></div>
                            <div className="card_contentnya">
                                <img src={nodeJS} alt="NodeJS_logo" />
                                <div className="text_tech">Node JS</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item_card} className="pembungkus">
                            <div className="card_background"></div>
                            <div className="card_contentnya">
                                <img src={mongoDB} alt="MongoDB_logo" />
                                <div className="text_tech">MongoDB</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item_card} className="pembungkus">
                            <div className="card_background"></div>
                            <div className="card_contentnya">
                                <img src={firebase} alt="Firebase_logo" />
                                <div className="text_tech">Firebase</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item_card} className="pembungkus">
                            <div className="card_background"></div>
                            <div className="card_contentnya">
                                <img src={illustrator} alt="Illustrator_logo" />
                                <div className="text_tech">Illustrator</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item_card} className="pembungkus">
                            <div className="card_background"></div>
                            <div className="card_contentnya">
                                <img src={photoshop} alt="Photoshop_logo" />
                                <div className="text_tech">Photoshop</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item_card} className="pembungkus">
                            <div className="card_background"></div>
                            <div className="card_contentnya">
                                <img src={nextJS} alt="NextJS_logo" />
                                <div className="text_tech">Next JS</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item_card} className="pembungkus">
                            <div className="card_background"></div>
                            <div className="card_contentnya">
                                <img src={sqlite} alt="Sqlite_logo" />
                                <div className="text_tech">Sqlite</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item_card} className="pembungkus">
                            <div className="card_background"></div>
                            <div className="card_contentnya">
                                <img src={git} alt="Git_logo" />
                                <div className="text_tech">Git</div>
                            </div>
                        </motion.div>

                        <motion.div variants={item_card} className="pembungkus">
                            <div className="card_background"></div>
                            <div className="card_contentnya">
                                <img src={vueJs} alt="VueJs_logo" />
                                <div className="text_tech">Vue JS</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </AboutSite>
    );
};

export default About;
