import React from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import styled from "styled-components";
import { Header404 } from "../components/header";
import { devices } from "../assets/scss/_respondTo";
import { Link } from "react-router-dom";
import themeList from "../config/themeList";

const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    gap: 10px;

    .angka {
        font-size: 180px;
        font-weight: 600;

        color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "#6b7280" : "var(--colorWhite)"};

        ${devices.smartphone} {
            font-size: 100px;
        }

        ${devices.ipads} {
            font-size: 140px;
        }

        span {
            color: var(--colorMain);
        }
    }

    .text {
        font-size: 35px;
        font-weight: 500;
        color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "#6b7280" : "var(--colorWhite)"};

        ${devices.smartphone} {
            font-size: 20px;
        }

        ${devices.ipads} {
            font-size: 28px;
        }
    }

    .button_hero {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        gap: 20px;

        .button_my-course {
            display: flex;
            align-items: center;
            border: 0.2px solid var(--colorMain);
            background-color: transparent;
            color: var(--colorMain);
            padding: 12px 20px;
            border-radius: 6px;
            max-height: 100%;
            cursor: pointer;
            font-size: 14px;
            gap: 10px;
            transition: 0.3s all ease;

            ${devices.smartphone} {
                padding: 10px 15px;
                font-size: 12px;
            }

            &:hover {
                background-color: #7227f3;
                transition: 0.3s all ease;
                transform: scale(1.05);
                color: #ffffff;
            }

            .item_content {
                display: flex;
                gap: 10px;
            }
        }
    }
`;

const NotFound = () => {
    return (
        <>
            <Header404 />
            <NotFoundContainer>
                <div className="angka">
                    4<span>0</span>4
                </div>
                <div className="text">Sorry, Page Not Found</div>
                <div className="button_hero">
                    <div className="button_my-course">
                        <div className="item_content">
                            <FaRegThumbsUp />
                            <Link to="/">Back to Home</Link>
                        </div>
                    </div>
                </div>
            </NotFoundContainer>
        </>
    );
};

export default NotFound;
