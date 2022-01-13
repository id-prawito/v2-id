import styled from "styled-components";
import { devices } from "../../assets/scss/_respondTo";
import themeList from "../../config/themeList";

export const AboutSite = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 150vh;
    max-width: 930px;
    padding: 0;

    ${devices.smartphone} {
        padding: 70px 0px;
        min-height: 0px;
    }

    ${devices.ipads} {
        min-height: 0px;
    }

    ${devices.laptop} {
        padding: 50px 0px;
        max-width: 100%;
    }

    ${devices.desktops} {
        padding: 140px 0px;
        min-height: 0px;
    }

    .pembungkus_about {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 80px;

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
            color: var(--colorMain);
            font-weight: 500;
            font-size: 14px;
        }
    }

    .content_about {
        display: flex;
        flex-direction: column;
        width: 50%;
        gap: 20px;

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

        span {
            color: var(--colorMain);
            font-size: 40px;

            ${devices.smartphone} {
                font-size: 30px;
            }
        }
    }

    .text_skill {
        display: flex;
        flex-direction: column;
        font-weight: 600;
        font-size: 15px;
        color: #6b7280;
        gap: 1rem;

        li {
            display: flex;
            align-items: center;
            gap: 14px;

            svg {
                color: var(--colorMain);
                font-size: 20px;
            }

            span {
                font-weight: 600;
                font-size: 15px;
                color: #6b7280;
            }
        }
    }

    .card_item {
        background-color: ${({ theme: { theme } }) =>
            theme === themeList.light
                ? "var(--darkCardComponent)"
                : "var(--lightCardComponent)"};
        border-radius: 0.75rem 0.75rem 0 0.75rem;
        max-width: 215px;
        cursor: pointer;
        padding: 20px;
        height: 100%;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

        &:hover {
            transform: scale(1.08);
        }
    }

    .item_logo {
        border-radius: 0.75rem 0.75rem 0 0.75rem;
        display: inline-block;
        padding: 10px;

        img {
            width: 32px;
        }
    }

    .content_card {
        display: grid;
        grid-template-areas: "myArea myArea2";
        width: 50%;
        gap: 25px;

        ${devices.smartphone} {
            width: 100%;
        }

        ${devices.ipads} {
            width: 100%;
        }

        ${devices.tablet} {
            justify-content: center;
            width: 100%;
        }

        ${devices.laptop} {
            width: 100%;
        }

        @media only screen and (min-width: 580px) and (max-width: 768px) {
            justify-content: center;
        }

        .myArea2 {
            grid-area: myArea2;
            display: flex;
            flex-direction: column;
            margin-top: 40px;
            margin-top: 20px;
            height: 100%;
            gap: 25px;

            .item {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;
                height: 100%;
                width: 100%;

                h2 {
                    font-weight: 600;
                    font-size: 18px;
                }

                p {
                    font-size: 12px;
                    width: 100%;
                }
            }
        }

        .myArea {
            grid-area: myArea;
            display: flex;
            flex-direction: column;
            height: 100%;
            gap: 25px;

            .item {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;
                height: 100%;
                width: 100%;

                h2 {
                    font-weight: 600;
                    font-size: 18px;
                }

                p {
                    font-size: 12px;
                    width: 100%;
                }
            }
        }
    }

    .about_tech {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 40px;

        .tech_heading {
            color: ${({ theme: { theme } }) =>
                theme === themeList.light
                    ? "var(--light-text-black)"
                    : "var(--dark-text-white)"};
            font-weight: 600;
            font-size: 20px;
        }

        .tech_content {
            display: grid;
            grid-template-columns: repeat(5, auto);
            width: 1000px;
            row-gap: 20px;
            gap: 15px;

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
                height: 120px;
                width: 100%;
                transition: 350ms ease-in-out;

                &:hover {
                    .card_background {
                        transition: 350ms ease-in-out;
                        transform: translateY(2px);
                    }

                    .card_contentnya img {
                        transform: rotate(4deg) scale(1.4);
                        transition: 350ms ease-in-out;
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
                height: calc(100% + 5px);
                margin-bottom: -125px;
                border-radius: 12px;
                position: relative;
                z-index: -2;
                width: 100%;
                transition: 350ms ease-in-out;
            }

            .card_contentnya {
                background: ${({ theme: { theme } }) =>
                    theme === themeList.light
                        ? "var(--darkCardComponent)"
                        : "var(--lightCardComponent)"};
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
                border-radius: 10px;
                position: relative;
                height: 120px;
                padding: 20px;
                width: 100%;
                z-index: -1;
                gap: 10px;
                transition: 350ms ease-in-out;

                img {
                    max-height: 50px;
                    max-width: 50px;
                    transition: 350ms ease-in-out;
                }

                .text_tech {
                    font-weight: 500;
                    font-size: 14px;
                }
            }
        }
    }
`;
