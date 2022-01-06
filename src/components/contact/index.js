import React, { useEffect } from "react";
import { ContactSite } from "./ContactElements";
import { FaRegThumbsUp } from "react-icons/fa";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
                    <motion.h1 variants={item_nya}>What's Next ?</motion.h1>
                    <motion.div variants={item_nya} className="big_heading">
                        Get in Touch
                    </motion.div>
                    <motion.p variants={item_nya}>
                        Although I’m not currently looking for any new
                        opportunities, my inbox is always open. Whether you have
                        a question or just want to say hi, I’ll try my best to
                        get back to you!
                    </motion.p>
                    <motion.div variants={item_nya} className="button_hero">
                        <div className="button_my-course">
                            <div className="item_content">
                                <FaRegThumbsUp />
                                <a
                                    href="mailto:prawito.id@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Say Hello
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
