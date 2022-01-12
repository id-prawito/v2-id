import React, { useEffect, useRef, useState } from "react";
import { FaChevronUp, FaEllipsisV } from "react-icons/fa";
import { HeaderContainer, HeaderSite, NavLinks } from "./HeaderElements";
import { FiMenu, FiX } from "react-icons/fi";
import { MEDIA_SOSIAL, NAVLINKS } from "../../config/Data";
import logoSite from "../../assets/img/logo_site.png";
import ThemeSwitcher from "../../config/ThemeSwicter";
import { motion } from "framer-motion";

const Header = () => {
    const headerRef = useRef(null);
    useEffect(() => {
        const shrinkHeader = () => {
            if (
                document.body.scrollTop > 50 ||
                document.documentElement.scrollTop > 50
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

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 768px)").matches
    );

    useEffect(() => {
        function disableScroll() {
            document.body.style.overflow = "hidden";
        }
        function enableScroll() {
            document.body.style.overflow = "";
        }

        if (isNavOpen) {
            disableScroll();
        } else {
            enableScroll();
        }
    }, [isNavOpen]);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        });
    }, []);

    return (
        <HeaderSite ref={headerRef}>
            <HeaderContainer>
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="visible"
                    className="header__logo_link"
                >
                    <div className="header__logo">
                        <motion.div variants={item_nya}>
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
                        </motion.div>
                        <motion.div variants={item_nya}>
                            <ThemeSwitcher />
                        </motion.div>
                    </div>
                    {isMobile && (
                        <div
                            className="menuIcon"
                            tabIndex="0"
                            role="button"
                            onKeyDown={() => setIsNavOpen(true)}
                            onClick={() => setIsNavOpen(true)}
                        >
                            <FiMenu />
                        </div>
                    )}

                    <div className="header__menu">
                        <nav
                            className={
                                isMobile && isNavOpen ? "open" : undefined
                            }
                        >
                            {isMobile && (
                                <div
                                    className="closeIcon"
                                    tabIndex="0"
                                    role="button"
                                    onKeyDown={() => setIsNavOpen(false)}
                                    onClick={() => setIsNavOpen(false)}
                                >
                                    <FiX />
                                </div>
                            )}
                            <ul>
                                {NAVLINKS.map((item, i) => (
                                    <li key={i}>
                                        <motion.div
                                            variants={item_nya}
                                            className="closing"
                                        >
                                            <div className="color_icon">
                                                <item.icon />
                                            </div>
                                            <div className="header__item">
                                                <div className="text_menu">
                                                    <NavLinks
                                                        to={item.to}
                                                        smooth
                                                        activeClass="active"
                                                        spy={true}
                                                    >
                                                        {item.name}
                                                    </NavLinks>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </li>
                                ))}
                                <li>
                                    <motion.div
                                        variants={item_nya}
                                        className="closing"
                                    >
                                        <div className="color_icon">
                                            <FaEllipsisV />
                                        </div>
                                        <div className="header__item">
                                            <div className="resume">
                                                <a
                                                    href={require("../../assets/cv_prawito.pdf")}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Resume
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                </li>
                            </ul>
                        </nav>

                        {isNavOpen && (
                            <div
                                className="navOverlay"
                                tabIndex="0"
                                aria-label="overlay"
                                role="button"
                                onKeyDown={() => setIsNavOpen(false)}
                                onClick={() => setIsNavOpen(false)}
                            />
                        )}

                        <MediaSocial variants={item_nya} />
                    </div>
                </motion.div>
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
                <ul className="item_media">
                    {MEDIA_SOSIAL.map((item, i) => (
                        <li key={i} className="item_li">
                            <a
                                href={item.to}
                                aria-label={item.label}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <item.icon />
                            </a>
                        </li>
                    ))}
                </ul>
            </motion.div>
            <motion.div
                variants={variants}
                className="media_social_right"
                orientation="right"
            >
                <ul className="item_media">
                    <li className="item_li">
                        <NavLinks to="home" smooth>
                            <FaChevronUp />
                        </NavLinks>
                    </li>
                </ul>
            </motion.div>
        </>
    );
};

export default Header;
