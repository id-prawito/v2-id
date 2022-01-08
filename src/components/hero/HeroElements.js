import styled from "styled-components";
import themeList from "../../config/themeList";
import "../../assets/scss/_index.scss";
import { devices } from "../../assets/scss/_respondTo";

export const HeroSite = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 80vh;
    padding: 0px;

    ${devices.smartphone} {
        min-height: 100vh;
    }

    .hero_content {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    h1 {
        color: #7c3aed;
        font-size: 16px;
        font-weight: 400;

        /* ${devices.smartphone} {
            font-size: 20px;
        }

        ${devices.ipads} {
            font-size: 40px;
        }

        ${devices.tablet} {
            font-size: 60px;
        }

        ${devices.laptop} {
            font-size: 80px;
        } */
    }

    span {
        font-size: 14px;
    }

    p {
        max-width: 540px;
        line-height: 1.8;
        color: ${({ theme: { theme } }) =>
            theme === themeList.light
                ? "var(--light-text-black)"
                : "var(--dark-text-white)"};

        ${devices.smartphone} {
            font-size: 14px;
        }
    }

    .hero_container {
        padding: 0 100px;

        ${devices.smartphone} {
            padding: 0px 25px;
        }
    }

    .big_heading {
        margin: 0px;
        font-size: 60px;
        font-weight: 600;
        color: ${({ theme: { theme } }) =>
            theme === themeList.light
                ? "var(--light-text-black)"
                : "var(--dark-text-white)"};

        ${devices.smartphone} {
            font-size: 38px;
        }
    }

    .big_heading_one {
        margin: 0px;
        font-size: 60px;
        font-weight: 600;
        color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "var(--light-text-black)" : "#8892b0"};

        ${devices.smartphone} {
            font-size: 30px;
        }
    }

    .button_hero {
        display: flex;
        flex-direction: row;
        gap: 20px;
        margin-top: 20px;

        .button_my-course {
            display: flex;
            align-items: center;
            background-color: #7c3aed;
            color: #fff;
            gap: 10px;
            padding: 14px 20px;
            max-height: 100%;
            border-radius: 6px;
            transition: 0.3s all ease;
            cursor: pointer;
            font-size: 14px;

            ${devices.smartphone} {
                font-size: 12px;
            }

            &:hover {
                transform: scale(1.05);
                background-color: #7227f3;
                transition: 0.3s all ease;
            }
        }
    }

    .item_hero {
        display: flex;
        gap: 10px;
        align-items: center;

        span {
            color: ${({ theme: { theme } }) =>
                theme === themeList.light
                    ? "var(--light-text-black)"
                    : "var(--dark-text-white)"};
        }
    }

    .item_status {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;

        background-color: ${({ theme: { theme } }) =>
            theme === themeList.light
                ? "var(--light-text-black)"
                : "var(--dark-text-white)"};
    }
    .item_status_online {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        background-color: #4bbc03;
    }
`;
