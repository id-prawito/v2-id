import React, { useEffect, useState } from "react";
import { FaCodeBranch, FaRegStar } from "react-icons/fa";
import { FooterSite, Item } from "./FooterElements";
import { MEDIA_SOSIAL } from "../../config/Data";
import axios from "axios";

const Footer = () => {
    const [total, setTotal] = useState([]);
    const [fork, setFork] = useState([]);

    useEffect(() => {
        const getList = async () => {
            try {
                const response = await axios(
                    "https://api.github.com/users/id-prawito/repos"
                    // {
                    //     headers: {
                    //         Authorization: `Bearer ${process.env.REACT_APP_API}`,
                    //     },
                    // }
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
                </Item>
            </div>
            <div className="footer_item">
                <a
                    href="https://github.com/id-prawito"
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    © All rights reserved. Made with React JS | Designed & Built
                    by Prawito.
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
