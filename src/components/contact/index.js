import React, { useEffect } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";
import { CONTACT_DATA } from "../../config/Data";
import { ContactSite } from "./ContactElements";

const Contact = () => {
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
        <ContactSite id="contact">
            <div className="hero_container">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate={controls}
                    ref={ref}
                    className="contact_content"
                >
                    <motion.h1 variants={item_nya}>
                        {CONTACT_DATA.text_small}
                    </motion.h1>
                    <motion.div variants={item_nya} className="big_heading">
                        {CONTACT_DATA.big_heading}
                    </motion.div>
                    <motion.p variants={item_nya}>
                        {CONTACT_DATA.description}
                    </motion.p>
                    <motion.div variants={item_nya} className="button_hero">
                        <div className="button_my-course">
                            <div className="item_content">
                                <FaRegThumbsUp />
                                <a
                                    href={CONTACT_DATA.to}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {CONTACT_DATA.button}
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </ContactSite>
    );
};

export default Contact;
