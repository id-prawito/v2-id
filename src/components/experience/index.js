import React, { useEffect } from "react";
import Tabs, { TabPane } from "rc-tabs";
import "../../../node_modules/rc-tabs/assets/index.css";
import { ExperienceSite } from "./ExperienceElements";
import { FaLeaf } from "react-icons/fa";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Experience = () => {
    function callback(e) {
        // console.log(e);
    }

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
        hidden: { y: -20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        },
    };
    return (
        <ExperienceSite id="experience">
            <motion.div
                variants={container}
                initial="hidden"
                animate={controls}
                ref={ref}
                className="content"
            >
                <motion.div variants={item_nya} className="expe_content">
                    <h1>What's Next ?</h1>
                    <div className="big_heading">
                        Where from I've Experience
                    </div>
                </motion.div>
                <motion.div variants={item_nya}>
                    {window.innerWidth > 768 ? (
                        <Tabs
                            defaultActiveKey="1"
                            onChange={callback}
                            tabPosition="left"
                        >
                            <TabPane tab="Training II" key="1">
                                <div className="content_expe">
                                    <h3>
                                        <span>FRONTEND IT PERBANKAN </span>
                                        <span className="company">
                                            <a href="www.facebook.com">
                                                @ Thematic Academy DTS KOMINFO
                                            </a>
                                        </span>
                                    </h3>
                                    <p>August 2021 - October 2021</p>
                                    <ul className="text_skill">
                                        <li>
                                            <div className="icon">
                                                <FaLeaf />
                                            </div>
                                            <div className="text_keterangan">
                                                Training to answer the
                                                challenges of technological
                                                developments in the service
                                                sector financial management that
                                                aims to equip trainees with
                                                basic knowledge, specific hard
                                                skills and soft skills with the
                                                needs of the banking industry.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FaLeaf />
                                            </div>
                                            <div className="text_keterangan">
                                                Shared knowledge about how to do
                                                coding with programming
                                                technology HTML, CSS,
                                                JavaScript, and React JS.
                                                technology HTML, CSS,
                                                JavaScript, and React JS.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </TabPane>
                            <TabPane tab="Internship" key="2">
                                <div className="content_expe">
                                    <h3>
                                        <span>WEB DEVELOPER </span>
                                        <span className="company">
                                            <a href="www.facebook.com">
                                                @ PT. KAI Indonesia
                                            </a>
                                        </span>
                                    </h3>
                                    <p>January 2019 - March 2019</p>
                                    <ul className="text_skill">
                                        <li>
                                            <div className="icon">
                                                <FaLeaf />
                                            </div>
                                            <div className="text_keterangan">
                                                Designed, built, and tested an
                                                online system for PT. KAI DAOP 6
                                                Yogyakarta employees using PHP,
                                                HTML, Bootstrap, JavaScript, and
                                                MySQL.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </TabPane>
                            <TabPane tab="Training I" key="3">
                                <div className="content_expe">
                                    <h3>
                                        <span>BIG DATA ANALYTICS </span>
                                        <span className="company">
                                            <a href="www.facebook.com">
                                                @ Fresh Graduate Academy DTS
                                                KOMINFO
                                            </a>
                                        </span>
                                    </h3>
                                    <p>October 2019 - December 2019</p>
                                    <ul className="text_skill">
                                        <li>
                                            <div className="icon">
                                                <FaLeaf />
                                            </div>
                                            <div className="text_keterangan">
                                                Shared knowledge about how to do
                                                basic coding with Python.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FaLeaf />
                                            </div>
                                            <div className="text_keterangan">
                                                Worked on some final projects to
                                                solved current problems using
                                                Machine Learning, and data
                                                twitter.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </TabPane>
                            <TabPane tab="Certificate" key="4">
                                <div className="content_expe">
                                    <h3>
                                        <span>ORACLE ACADEMY </span>
                                        <span className="company">
                                            <a href="www.facebook.com">
                                                @ Oracle | Diponegoro University
                                            </a>
                                        </span>
                                    </h3>
                                    <p>December 2018</p>
                                    <ul className="text_skill">
                                        <li>
                                            <div className="icon">
                                                <FaLeaf />
                                            </div>
                                            <div className="text_keterangan">
                                                Oracle Academy is a training
                                                program from Oracle that
                                                provides training that includes
                                                Database design and Database
                                                programming with SQL, Database
                                                programming with PL/SQL, Java
                                                Programming, and Java
                                                Fundamentals.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </TabPane>
                        </Tabs>
                    ) : (
                        <Tabs
                            defaultActiveKey="1"
                            onChange={callback}
                            tabPosition="top"
                        >
                            <TabPane tab="Training II" key="1">
                                <div className="content_expe">
                                    <h3>
                                        <span>FRONTEND IT PERBANKAN </span>
                                        <span className="company">
                                            <a href="www.facebook.com">
                                                @ Thematic Academy DTS KOMINFO
                                            </a>
                                        </span>
                                    </h3>
                                    <p>August 2021 - October 2021</p>
                                    <ul className="text_skill">
                                        <li>
                                            <div className="icon">
                                                <FaLeaf />
                                            </div>
                                            <div className="text_keterangan">
                                                Training to answer the
                                                challenges of technological
                                                developments in the service
                                                sector financial management that
                                                aims to equip trainees with
                                                basic knowledge, specific hard
                                                skills and soft skills with the
                                                needs of the banking industry.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FaLeaf />
                                            </div>
                                            <div className="text_keterangan">
                                                Shared knowledge about how to do
                                                coding with programming
                                                technology HTML, CSS,
                                                JavaScript, and React JS.
                                                technology HTML, CSS,
                                                JavaScript, and React JS.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </TabPane>
                            <TabPane tab="Internship" key="2">
                                <div className="content_expe">
                                    <h3>
                                        <span>WEB DEVELOPER </span>
                                        <span className="company">
                                            <a href="www.facebook.com">
                                                @ PT. KAI Indonesia
                                            </a>
                                        </span>
                                    </h3>
                                    <p>January 2019 - March 2019</p>
                                    <ul className="text_skill">
                                        <li>
                                            <div className="icon">
                                                <FaLeaf />
                                            </div>
                                            <div className="text_keterangan">
                                                Designed, built, and tested an
                                                online system for PT. KAI DAOP 6
                                                Yogyakarta employees using PHP,
                                                HTML, Bootstrap, JavaScript, and
                                                MySQL.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </TabPane>
                            <TabPane tab="Training I" key="3">
                                <div className="content_expe">
                                    <h3>
                                        <span>BIG DATA ANALYTICS </span>
                                        <span className="company">
                                            <a href="www.facebook.com">
                                                @ Fresh Graduate Academy DTS
                                                KOMINFO
                                            </a>
                                        </span>
                                    </h3>
                                    <p>October 2019 - December 2019</p>
                                    <ul className="text_skill">
                                        <li>
                                            <div className="icon">
                                                <FaLeaf />
                                            </div>
                                            <div className="text_keterangan">
                                                Shared knowledge about how to do
                                                basic coding with Python.
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FaLeaf />
                                            </div>
                                            <div className="text_keterangan">
                                                Worked on some final projects to
                                                solved current problems using
                                                Machine Learning, and data
                                                twitter.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </TabPane>
                            <TabPane tab="Certificate" key="4">
                                <div className="content_expe">
                                    <h3>
                                        <span>ORACLE ACADEMY </span>
                                        <span className="company">
                                            <a href="www.facebook.com">
                                                @ Oracle | Diponegoro University
                                            </a>
                                        </span>
                                    </h3>
                                    <p>December 2018</p>
                                    <ul className="text_skill">
                                        <li>
                                            <div className="icon">
                                                <FaLeaf />
                                            </div>
                                            <div className="text_keterangan">
                                                Oracle Academy is a training
                                                program from Oracle that
                                                provides training that includes
                                                Database design and Database
                                                programming with SQL, Database
                                                programming with PL/SQL, Java
                                                Programming, and Java
                                                Fundamentals.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </TabPane>
                        </Tabs>
                    )}
                </motion.div>
            </motion.div>
        </ExperienceSite>
    );
};

export default Experience;
