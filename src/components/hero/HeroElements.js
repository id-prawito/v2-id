import styled from "styled-components";
import themeList from "../../config/themeList";
import "../../assets/scss/_index.scss";
import { devices } from "../../assets/scss/_respondTo";

export const HeroSite = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    min-height: 80vh;
    padding: 0px;

    ${devices.smartphone} {
        padding: 40px 0px;
        min-height: 0px;
    }

    .hero_content {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    h1 {
        color: var(--colorMain);
        font-weight: 500;
        font-size: 14px;
    }

    span {
        font-size: 14px;
    }

    p {
        color: ${({ theme: { theme } }) =>
            theme === themeList.light
                ? "var(--light-text-black)"
                : "var(--dark-text-white)"};
        max-width: 540px;
        line-height: 1.8;

        ${devices.smartphone} {
            font-size: 14px;
        }
    }

    .hero_container {
        padding: 0 100px;

        ${devices.smartphone} {
            padding: 0px 25px;
        }

        ${devices.ipads} {
            padding: 0px 50px;
        }
    }

    .big_heading {
        color: ${({ theme: { theme } }) =>
            theme === themeList.light
                ? "var(--light-text-black)"
                : "var(--dark-text-white)"};
        font-weight: 600;
        font-size: 60px;
        margin: 0px;

        ${devices.smartphone} {
            font-size: 38px;
        }

        ${devices.ipads} {
            font-size: 38px;
        }
    }

    .big_heading_one {
        color: ${({ theme: { theme } }) =>
            theme === themeList.light ? "#6b7280" : "#8892b0"};
        font-weight: 600;
        font-size: 60px;
        margin: 0px;

        ${devices.smartphone} {
            font-size: 40px;
        }

        ${devices.ipads} {
            font-size: 40px;
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
            background-color: var(--colorMain);
            padding: 14px 20px;
            border-radius: 6px;
            max-height: 100%;
            cursor: pointer;
            font-size: 14px;
            color: #ffffff;
            gap: 10px;
            transition: 0.3s all ease;

            ${devices.smartphone} {
                font-size: 12px;
            }

            &:hover {
                background-color: #7227f3;
                transition: 0.3s all ease;
                transform: scale(1.05);
            }
        }
    }
`;
