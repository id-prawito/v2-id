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
        min-height: 0px;
        justify-content: center;
    }

    ${devices.ipads} {
        min-height: 0px;
        justify-content: center;
    }

    .contact_content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    h1 {
        color: #7c3aed;
        font-size: 16px;
        font-weight: 400;
    }

    span {
        font-size: 14px;
    }

    p {
        max-width: 540px;
        line-height: 1.8;
        text-align: center;

        ${devices.smartphone} {
            font-size: 14px;
        }

        ${devices.ipads} {
            font-size: 14px;
        }

        color: ${({ theme: { theme } }) =>
            theme === themeList.light
                ? "var(--light-text-black)"
                : "var(--dark-text-white)"};
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
        margin: 0px;
        font-size: 60px;
        font-weight: 600;
        color: ${({ theme: { theme } }) =>
            theme === themeList.light
                ? "var(--light-text-black)"
                : "var(--dark-text-white)"};

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
        gap: 20px;
        margin-top: 20px;

        .button_my-course {
            display: flex;
            align-items: center;
            border: 0.2px solid #7c3aed;
            background-color: transparent;
            color: #7c3aed;
            gap: 10px;
            padding: 14px 20px;
            max-height: 100%;
            border-radius: 6px;
            transition: 0.3s all ease;
            cursor: pointer;
            font-size: 14px;

            ${devices.smartphone} {
                font-size: 12px;
                padding: 10px 15px;
            }

            &:hover {
                transform: scale(1.05);
                background-color: #7227f3;
                transition: 0.3s all ease;
                color: #fff;
            }

            .item_content {
                display: flex;
                gap: 10px;
            }
        }
    }

    .item_hero {
        display: flex;
        gap: 10px;
        align-items: center;
    }

    .item_status {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        background-color: #fff;
    }
    .item_status_online {
        width: 0.75rem;
        height: 0.75rem;
        border-radius: 50%;
        background-color: #4bbc03;
    }
`;
