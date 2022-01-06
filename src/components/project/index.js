import { ProjectSite } from "./ProjectElements";
import { FiExternalLink, FiGithub, FiFolder } from "react-icons/fi";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Project = () => {
    const [repo, setRepo] = useState([]);
    const [visible, setVisible] = useState(3);
    const myRef = useRef(null);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    };

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

    const showLessItems = () => {
        setVisible(6);
        scrollToRef(myRef);
    };

    const [isloading, setLoading] = useState(true);
    useEffect(() => {
        const getList = async () => {
            setLoading(true);
            try {
                // const token = process.env.REACT_APP_API;
                const response = await axios(
                    "https://api.github.com/users/id-prawito/repos",
                    {
                        headers: {
                            Authorization: `Bearer ${process.env.REACT_APP_API}`,
                        },
                    }
                );
                setRepo(response.data);
            } catch {
                console.log("error");
            }
        };
        getList();
    }, []);

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.2 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    // console.log(repo);
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
        <ProjectSite ref={myRef} id="project">
            <div className="project_container">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={controls}
                    ref={ref}
                    className="project_content"
                >
                    <motion.div variants={item_nya} className="content_judul">
                        <div className="big_heading">
                            Some Things I've Built
                        </div>
                        <h1>View the archive of Github 1</h1>
                    </motion.div>
                    <motion.div variants={item_nya}>
                        <div className="content_repo">
                            {!isloading &&
                                (repo.length !== 0
                                    ? repo.slice(0, visible).map((item, i) => (
                                          <div key={i} className="card_item">
                                              <div className="item_icon">
                                                  <div className="icon_folder">
                                                      <FiFolder />
                                                  </div>
                                                  <div className="icon">
                                                      <div className="icon_link-git">
                                                          <a
                                                              href={
                                                                  item.html_url
                                                              }
                                                              target="_blank"
                                                              rel="noopener noreferrer"
                                                              className="links"
                                                          >
                                                              <FiGithub />
                                                          </a>
                                                          {item.homepage ===
                                                              null ||
                                                          "" ? null : (
                                                              <Link
                                                                  to={`//${item.homepage}`}
                                                                  target="_blank"
                                                                  rel="noopener noreferrer"
                                                                  className="links"
                                                              >
                                                                  <FiExternalLink />
                                                              </Link>
                                                          )}
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="text_contect">
                                                  <h3 className="item_title">
                                                      <a
                                                          href="https://id-prawito.github.io/pokedex-id/"
                                                          target="_blank"
                                                          rel="noopener noreferrer"
                                                      >
                                                          {item.name}
                                                      </a>
                                                  </h3>
                                                  <div className="item_description">
                                                      <p>
                                                          {item.description ===
                                                          null
                                                              ? "Decription not exist"
                                                              : `${item.description}`}
                                                      </p>
                                                  </div>
                                                  <div className="item_tech">
                                                      <div className="text_list">
                                                          {item.language}
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      ))
                                    : null)}
                        </div>
                    </motion.div>

                    <motion.div variants={item_nya} className="button_hero">
                        {repo.length <= visible ? (
                            <button onClick={showLessItems}>
                                <div className="button_my-course">
                                    <div className="item_content">
                                        <FaRegThumbsUp />
                                        Show Less
                                    </div>
                                </div>
                            </button>
                        ) : (
                            <button onClick={showMoreItems}>
                                <div className="button_my-course">
                                    <div className="item_content">
                                        <FaRegThumbsUp />
                                        Load More
                                    </div>
                                </div>
                            </button>
                        )}
                    </motion.div>
                </motion.div>
            </div>
        </ProjectSite>
    );
};

export default Project;
