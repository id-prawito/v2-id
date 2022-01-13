import styled from "styled-components";
import themeList from "../../config/themeList";
import { devices } from "../../assets/scss/_respondTo";

export const ContactSite = styled.section`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    min-height: 40vh;
    padding: 0px;

    ${devices.smartphone} {
        justify-content: center;
        min-height: 0px;
    }

    ${devices.ipads} {
        justify-content: center;
        min-height: 0px;
    }

    .contact_content {
        display: flex;
        flex-direction: column;
        align-items: center;
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
        text-align: center;
        max-width: 540px;
        line-height: 1.8;
        font-size: 14px;

        ${devices.smartphone} {
            font-size: 14px;
        }

        ${devices.ipads} {
            font-size: 14px;
        }
    }

    .hero_container {
        padding: 0 100px;

        ${devices.smartphone} {
            padding: 50px 25px;
        }

        ${devices.ipads} {
            padding: 50px 50px;
        }
    }

    .big_heading {
        color: ${({ theme: { theme } }) =>
            theme === themeList.light
                ? "var(--light-text-black)"
                : "var(--dark-text-white)"};
        font-weight: 600;
        font-size: 40px;
        margin: 0px;

        ${devices.smartphone} {
            font-size: 30px;
        }

        ${devices.smartphone} {
            font-size: 30px;
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
