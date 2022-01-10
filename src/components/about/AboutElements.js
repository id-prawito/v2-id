import styled from "styled-components";
import themeList from "../../config/themeList";
import { devices } from "../../assets/scss/_respondTo";

export const AboutSite = styled.section`
    max-width: 930px;
    display: flex;
    flex-direction: column;
    padding: 0;
    min-height: 150vh;
    align-items: center;
    justify-content: center;

    ${devices.smartphone} {
        min-height: 0px;
        padding: 70px 0px;
    }

    ${devices.ipads} {
        min-height: 0px;
    }

    ${devices.laptop} {
        max-width: 100%;
        padding: 50px 0px;
    }

    ${devices.desktops} {
        min-height: 0px;
        padding: 140px 0px;
    }

    .pembungkus_about {
        display: flex;
        gap: 80px;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        ${devices.smartphone} {
            padding: 20px 25px;
        }

        ${devices.ipads} {
            padding: 40px 50px;
        }

        ${devices.tablet} {
            padding: 40px 100px;
        }

        ${devices.laptop} {
            padding: 40px 100px;
        }
    }

    .about_content {
        display: flex;
        gap: 20px;

        ${devices.smartphone} {
            flex-direction: column;
        }

        ${devices.ipads} {
            flex-direction: column;
        }

        ${devices.tablet} {
            flex-direction: column;
        }

        h1 {
            color: #7c3aed;
            font-size: 14px;
            font-weight: 500;
        }
    }

    .content_about {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 50%;

        ${devices.smartphone} {
            width: 100%;
        }

        ${devices.ipads} {
            width: 100%;
        }

        ${devices.tablet} {
            width: 100%;
        }

        ${devices.laptop} {
            width: 100%;
        }

        p {
            line-height: 1.8;
            font-weight: 400;
            font-size: 14px;
            color: ${({ theme: { theme } }) =>
                theme === themeList.light ? "#6b7280" : "#bcbcbc"};
        }
    }

    .big_heading_about {
        margin: 0px;
        font-size: 40px;
        font-weight: 600;
        color: ${({ theme: { theme } }) =>
            theme === themeList.light
                ? "var(--light-text-black)"
                : "var(--dark-text-white)"};

        ${devices.smartphone} {
            font-size: 30px;
        }

        span {
            font-size: 40px;
            color: #7c3aed;

            ${devices.smartphone} {
                font-size: 30px;
            }
        }
    }

    .text_skill {
        color: #6b7280;
        font-size: 15px;
        font-weight: 600;
        display: flex;
        gap: 1rem;
        flex-direction: column;

        li {
            display: flex;
            align-items: center;
            gap: 14px;

            svg {
                font-size: 20px;
                color: #7c3aed;
            }

            span {
                color: #6b7280;
                font-size: 15px;
                font-weight: 600;
            }
        }
    }

    .card_item {
        background-color: ${({ theme: { theme } }) =>
            theme === themeList.light
                ? "var(--darkCardComponent)"
                : "var(--lightCardComponent)"};
        padding: 20px;
        border-radius: 0.75rem 0.75rem 0 0.75rem;
        height: 100%;
        cursor: pointer;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        max-width: 215px;

        &:hover {
            transform: scale(1.08);
        }
    }

    .item_logo {
        padding: 10px;
        border-radius: 0.75rem 0.75rem 0 0.75rem;
        display: inline-block;

        img {
            width: 32px;
        }
    }

    .content_card {
        display: grid;
        grid-template-areas: "myArea myArea2";
        gap: 25px;
        width: 50%;

        ${devices.smartphone} {
            width: 100%;
        }

        ${devices.ipads} {
            width: 100%;
        }

        ${devices.tablet} {
            width: 100%;
            justify-content: center;
        }

        ${devices.laptop} {
            width: 100%;
        }

        @media only screen and (min-width: 580px) and (max-width: 768px) {
            justify-content: center;
        }

        .myArea2 {
            grid-area: myArea2;
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            gap: 25px;
            height: 100%;
            margin-top: 40px;

            .item {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;
                height: 100%;

                h2 {
                    font-size: 18px;
                    font-weight: 600;
                }

                p {
                    width: 100%;
                    font-size: 12px;
                }
            }
        }

        .myArea {
            grid-area: myArea;
            display: flex;
            flex-direction: column;
            gap: 25px;
            height: 100%;

            .item {
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;
                height: 100%;

                h2 {
                    font-size: 18px;
                    font-weight: 600;
                }

                p {
                    width: 100%;
                    font-size: 12px;
                }
            }
        }
    }

    .about_tech {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100%;
        gap: 40px;

        .tech_heading {
            font-size: 20px;
            font-weight: 600;
            color: ${({ theme: { theme } }) =>
                theme === themeList.light
                    ? "var(--light-text-black)"
                    : "var(--dark-text-white)"};
        }

        .tech_content {
            display: grid;
            grid-template-columns: repeat(5, auto);
            width: 1000px;
            gap: 15px;
            row-gap: 20px;

            ${devices.smartphone} {
                grid-template-columns: repeat(2, auto);
                width: 100%;
            }

            ${devices.ipads} {
                grid-template-columns: repeat(2, auto);
                width: 100%;
            }

            @media only screen and (min-width: 600px) and (max-width: 768px) {
                grid-template-columns: repeat(3, auto);
                width: 100%;
            }

            ${devices.tablet} {
                grid-template-columns: repeat(4, auto);
                width: 100%;
            }

            ${devices.laptop} {
                grid-template-columns: repeat(5, auto);
                width: 100%;
            }

            .pembungkus {
                cursor: pointer;
                transition: 350ms ease-in-out;
                height: 120px;
                width: 100%;

                &:hover {
                    .card_background {
                        transition: 350ms ease-in-out;
                        transform: translateY(2px);
                    }

                    .card_contentnya img {
                        transition: 350ms ease-in-out;
                        transform: rotate(4deg) scale(1.4);
                    }
                }
            }

            .card_background {
                background: linear-gradient(
                    109.09deg,
                    ${({ theme: { theme } }) =>
                            theme === themeList.light ? "#70F7F1" : "#979797"}
                        0%,
                    ${({ theme: { theme } }) =>
                            theme === themeList.light
                                ? "#47BDFF"
                                : "var(--darkCardComponent)"}
                        100%
                );
                width: 100%;
                height: calc(100% + 5px);
                margin-bottom: -125px;
                border-radius: 12px;
                z-index: -2;
                position: relative;
                transition: 350ms ease-in-out;
            }

            .card_contentnya {
                background: ${({ theme: { theme } }) =>
                    theme === themeList.light
                        ? "var(--darkCardComponent)"
                        : "var(--lightCardComponent)"};
                height: 120px;
                width: 100%;
                border-radius: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: -1;
                position: relative;
                flex-direction: column;
                gap: 10px;
                transition: 350ms ease-in-out;
                padding: 20px;

                img {
                    max-width: 50px;
                    max-height: 50px;
                    transition: 350ms ease-in-out;
                }

                .text_tech {
                    font-size: 14px;
                    font-weight: 500;
                }
            }
        }
    }
`;
