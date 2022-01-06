import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaInstagram, FaCodeBranch, FaRegStar } from "react-icons/fa";
import { FiGithub, FiLinkedin, FiPhone, FiTwitter } from "react-icons/fi";
import { FooterSite, Item } from "./FooterElements";

const Footer = () => {
    const [total, setTotal] = useState([]);
    const [fork, setFork] = useState([]);

    useEffect(() => {
        const getList = async () => {
            try {
                const response = await axios(
                    "https://api.github.com/users/id-prawito/repos",
                    {
                        // headers: {
                        //     Authorization: `Bearer ${process.env.REACT_APP_API}`,
                        // },
                    }
                );

                for (let i = 0; i < response.data.length; i++) {
                    let totalVal = 0;
                    let totalFork = 0;
                    setTotal((totalVal += response.data[i].stargazers_count));
                    setFork((totalFork += response.data[i].forks_count));
                }
                // setRepo(response.data);
            } catch {
                console.log("error");
            }
        };
        getList();
    }, []);

    return (
        <FooterSite>
            <div className="footer_media-social">
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
            </div>
            <div className="footer_item">
                <a
                    href="https://github.com/id-prawito"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    © All rights reserved. Made with React JS | Designed & Built
                    by Prawito (Boy).
                    <div className="github_stats">
                        <span>
                            <FaRegStar />
                            <p>{total}</p>
                        </span>
                        <span>
                            <FaCodeBranch />
                            <p>{fork}</p>
                        </span>
                    </div>
                </a>
            </div>
        </FooterSite>
    );
};

export default Footer;
