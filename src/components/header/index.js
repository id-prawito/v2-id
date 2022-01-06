import React, { useEffect, useRef } from "react";
import logoSite from "../../assets/img/logo_site.png";
import { FaEllipsisV, FaInstagram } from "react-icons/fa";
import { FiGithub, FiTwitter, FiLinkedin, FiPhone } from "react-icons/fi";
import "./header.scss";
import { HeaderContainer, HeaderSite, Item, NavLinks } from "./HeaderElements";
import ThemeSwitcher from "../../config/ThemeSwicter";
import { motion } from "framer-motion";

const Header = () => {
    const headerRef = useRef(null);
    useEffect(() => {
        const shrinkHeader = () => {
            if (
                document.body.scrollTop > 150 ||
                document.documentElement.scrollTop > 150
            ) {
                headerRef.current.classList.add("shrink");
            } else {
                headerRef.current.classList.remove("shrink");
            }
        };
        window.addEventListener("scroll", shrinkHeader);
        return () => {
            window.removeEventListener("scroll", shrinkHeader);
        };
    }, []);

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
        <HeaderSite ref={headerRef}>
            <HeaderContainer>
                <div className="header__logo_link">
                    <div className="header__logo">
                        <NavLinks
                            to="home"
                            smooth
                            activeClass="active"
                            spy={true}
                        >
                            <img
                                alt="logo_header"
                                src={logoSite}
                                className="logo__img"
                            />
                        </NavLinks>
                    </div>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className="header__menu"
                    >
                        <motion.div variants={item_nya} className="closing">
                            <ThemeSwitcher />
                            <div className="color_icon">
                                <FaEllipsisV />
                            </div>
                        </motion.div>

                        <motion.div variants={item_nya} className="closing">
                            <div className="header__item">
                                <div className="text_menu">
                                    <NavLinks
                                        to="about"
                                        smooth
                                        activeClass="active"
                                        spy={true}
                                    >
                                        About
                                    </NavLinks>
                                </div>
                            </div>
                            <div className="color_icon">
                                <FaEllipsisV />
                            </div>
                        </motion.div>

                        <motion.div variants={item_nya} className="closing">
                            <div className="header__item">
                                <div className="text_menu">
                                    <NavLinks
                                        to="experience"
                                        smooth
                                        activeClass="active"
                                        spy={true}
                                    >
                                        Experience
                                    </NavLinks>
                                </div>
                            </div>
                            <div className="color_icon">
                                <FaEllipsisV />
                            </div>
                        </motion.div>
                        <motion.div variants={item_nya} className="closing">
                            <div className="header__item">
                                <div className="text_menu">
                                    <NavLinks
                                        to="work"
                                        smooth
                                        activeClass="active"
                                        spy={true}
                                    >
                                        Work
                                    </NavLinks>
                                </div>
                            </div>
                            <div className="color_icon">
                                <FaEllipsisV />
                            </div>
                        </motion.div>
                        <motion.div variants={item_nya} className="closing">
                            <div className="header__item">
                                <div className="text_menu">
                                    <NavLinks
                                        to="project"
                                        smooth
                                        activeClass="active"
                                        spy={true}
                                    >
                                        Project
                                    </NavLinks>
                                </div>
                            </div>
                            <div className="color_icon">
                                <FaEllipsisV />
                            </div>
                        </motion.div>
                        <motion.div
                            variants={item_nya}
                            className="header__item"
                        >
                            <div className="resume">
                                <a
                                    href={require("../../assets/cv_prawito.pdf")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Resume
                                </a>
                            </div>
                        </motion.div>
                        <MediaSocial variants={item_nya} />
                    </motion.div>
                </div>
            </HeaderContainer>
        </HeaderSite>
    );
};

const MediaSocial = ({ variants }) => {
    return (
        <>
            <motion.div
                variants={variants}
                className="media_social"
                orientation="left"
            >
                <Item>
                    <li className="item_li">
                        <a
                            href="https://github.com/id-prawito"
                            aria-label="GitHub"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiGithub />
                        </a>
                    </li>
                    <li className="item_li">
                        <a
                            href="https://www.instagram.com/praw.ito/"
                            aria-label="Instagram"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaInstagram />
                        </a>
                    </li>
                    <li className="item_li">
                        <a
                            href="https://twitter.com/id_praw"
                            aria-label="Twitter"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiTwitter />
                        </a>
                    </li>
                    <li className="item_li">
                        <a
                            href="https://linkedin.com/in/prawito/"
                            aria-label="Linkedin"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiLinkedin />
                        </a>
                    </li>
                    <li className="item_li">
                        <a
                            href="tel:+6282137925172"
                            aria-label="Phone"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiPhone />
                        </a>
                    </li>
                </Item>
            </motion.div>
            <motion.div
                variants={variants}
                className="media_social_right"
                orientation="right"
            >
                <Item>
                    <li className="item_li">
                        <a
                            href="https://github.com/bchiang7"
                            aria-label="GitHub"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaInstagram />
                        </a>
                    </li>
                </Item>
            </motion.div>
        </>
    );
};

export default Header;
