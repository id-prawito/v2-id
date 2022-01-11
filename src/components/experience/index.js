import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ExperienceSite } from "./ExperienceElements";
import { useAnimation, motion } from "framer-motion";
import { EXPE_DATA } from "../../config/Data";
import Tabs, { TabPane } from "rc-tabs";
import "../../../node_modules/rc-tabs/assets/index.css";

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
                    <h1>{EXPE_DATA.text_small}</h1>
                    <div className="big_heading">{EXPE_DATA.big_heading}</div>
                </motion.div>
                <motion.div variants={item_nya}>
                    {window.innerWidth > 768 ? (
                        <Tabs
                            defaultActiveKey="1"
                            onChange={callback}
                            tabPosition="left"
                        >
                            {EXPE_DATA.expe.map((item, i) => (
                                <TabPane tab={item.tab} key={item.key}>
                                    <div className="content_expe">
                                        <h3>
                                            <span>{item.heading}</span>
                                            <span className="company">
                                                <a href={item.to}>
                                                    {item.text_expe}
                                                </a>
                                            </span>
                                        </h3>
                                        <p>{item.date}</p>
                                        <ul className="text_skill">
                                            {item.skill.map((skill_data, i) => (
                                                <li key={i}>
                                                    <div className="icon">
                                                        <skill_data.icon />
                                                    </div>
                                                    <div className="text_keterangan">
                                                        {skill_data.desc}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </TabPane>
                            ))}
                        </Tabs>
                    ) : (
                        <Tabs
                            defaultActiveKey="1"
                            onChange={callback}
                            tabPosition="top"
                        >
                            {EXPE_DATA.expe.map((item, i) => (
                                <TabPane tab={item.tab} key={item.key}>
                                    <div className="content_expe">
                                        <h3>
                                            <span>{item.heading}</span>
                                            <span className="company">
                                                <a href={item.to}>
                                                    {item.text_expe}
                                                </a>
                                            </span>
                                        </h3>
                                        <p>{item.date}</p>
                                        <ul className="text_skill">
                                            {item.skill.map((skill_data, i) => (
                                                <li key={i}>
                                                    <div className="icon">
                                                        <skill_data.icon />
                                                    </div>
                                                    <div className="text_keterangan">
                                                        {skill_data.desc}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </TabPane>
                            ))}
                        </Tabs>
                    )}
                </motion.div>
            </motion.div>
        </ExperienceSite>
    );
};

export default Experience;
