import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { WORK_DATA } from "../../config/Data";
import { WorkSite } from "./WorkElements";

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
                    <motion.h1 variants={item_nya}>
                        {WORK_DATA.text_small}
                    </motion.h1>
                    <motion.div variants={item_nya} className="big_heading">
                        {WORK_DATA.big_heading}
                    </motion.div>
                    <div className="content_item">
                        {WORK_DATA.project.map((project_item, i) => (
                            <motion.div
                                key={i}
                                variants={item_nya}
                                className="project"
                                style={{ flexDirection: project_item.style }}
                            >
                                <div className="project_image">
                                    <a
                                        href={project_item.project_to}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <img
                                            src={project_item.project_img}
                                            alt={project_item.alt}
                                            className="image_alt"
                                        />
                                    </a>
                                </div>
                                <div
                                    className="project_content"
                                    style={{
                                        marginLeft: project_item.ml,
                                        marginRight: project_item.mr,
                                        alignItems: project_item.ai,
                                    }}
                                >
                                    <p className="text_1">
                                        {project_item.text}
                                    </p>
                                    <h3 className="text_2">
                                        <a
                                            href={project_item.project_to}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {project_item.alt}
                                        </a>
                                    </h3>
                                    <div className="project_description">
                                        <p
                                            style={{
                                                textAlign: project_item.ta,
                                            }}
                                        >
                                            {project_item.description}
                                        </p>
                                    </div>
                                    <div className="project-tech-list">
                                        {project_item.tect_list.map(
                                            (item, i) => (
                                                <div
                                                    key={i}
                                                    className="text_list"
                                                >
                                                    {item}
                                                </div>
                                            )
                                        )}
                                    </div>
                                    <div className="project_link">
                                        {project_item.project_link.map(
                                            (item, i) => (
                                                <a
                                                    key={i}
                                                    href={item.to}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="links"
                                                >
                                                    <item.icon />
                                                </a>
                                            )
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </WorkSite>
    );
};

export default Work;
