import { FiExternalLink, FiGithub, FiFolder } from "react-icons/fi";
import React, { useEffect, useRef, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import axios from "axios";
import { ProjectSite } from "./ProjectElements";

const Project = () => {
    const [repo, setRepo] = useState([]);
    const [visible_item, setVisible] = useState(
        window.innerWidth > 1155 ? 3 : 4
    );
    const myRef = useRef(null);

    const showMoreItems = () => {
        setVisible((prevValue) => prevValue + 3);
    };

    const toGithub = () => {
        window.open("https://github.com/id-prawito");
    };

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

    const showLessItems = () => {
        setVisible(3);
        scrollToRef(myRef);
    };

    const [isloading, setLoading] = useState(true);
    useEffect(() => {
        const getList = async () => {
            setLoading(true);
            try {
                const response = await axios(
                    "https://api.github.com/users/id-prawito/repos"
                    // {
                    //     headers: {
                    //         Authorization: `Bearer ${process.env.REACT_APP_API}`,
                    //     },
                    // }
                );
                // console.log(response.data);
                setRepo(response.data);
            } catch {
                console.log("error");
            }
            setLoading(false);
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
                            Other Noteworthy Projects
                        </div>
                        <h1>View the archive of Github API</h1>
                    </motion.div>
                    <motion.div variants={item_nya}>
                        <div className="content_repo">
                            {!isloading &&
                                (repo.length !== 0
                                    ? repo
                                          .slice(0, visible_item)
                                          .map((item, i) => (
                                              <div
                                                  key={i}
                                                  className="card_item"
                                              >
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
                                                                  <a
                                                                      href={`${item.homepage}`}
                                                                      target="_blank"
                                                                      rel="noopener noreferrer"
                                                                      className="links"
                                                                  >
                                                                      <FiExternalLink />
                                                                  </a>
                                                              )}
                                                          </div>
                                                      </div>
                                                  </div>
                                                  <div className="text_contect">
                                                      <h3 className="item_title">
                                                          <a
                                                              href={
                                                                  item.html_url
                                                              }
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
                        {9 <= visible_item ? (
                            <>
                                <button onClick={showLessItems}>
                                    <div className="button_my-course">
                                        <div className="item_content">
                                            <FaRegThumbsUp />
                                            Show Less
                                        </div>
                                    </div>
                                </button>
                                {repo.length > 9 ? (
                                    <button onClick={toGithub}>
                                        <div className="button_my-course">
                                            <div className="item_content">
                                                <FaRegThumbsUp />
                                                See More on Github (
                                                {repo.length} Repo)
                                            </div>
                                        </div>
                                    </button>
                                ) : null}
                            </>
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
