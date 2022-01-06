import styled from "styled-components";
import themeList from "../../config/themeList";

export const AboutSite = styled.section`
    max-width: 930px;
    display: flex;
    flex-direction: column;
    padding: 0;
    min-height: 150vh;
    align-items: center;
    justify-content: center;

    .pembungkus_about {
        display: flex;
        gap: 80px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .about_content {
        display: flex;
        gap: 20px;

        h1 {
            color: #7c3aed;
            font-size: 14px;
            font-weight: 500;
        }
    }

    .content_about {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 50%;

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

        span {
            font-size: 40px;
            color: #7c3aed;
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

        .tool-card-Development {
            &::after {
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
            }
        }

        .tech_content {
            display: grid;
            grid-template-columns: repeat(5, auto);
            width: 1000px;
            gap: 10px;
            row-gap: 20px;

            .card_tech {
                background-color: ${({ theme: { theme } }) =>
                    theme === themeList.light
                        ? "var(--darkCardComponent)"
                        : "var(--lightCardComponent)"};
                border-radius: 10px;
                height: 120px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                flex-direction: column;
                width: 190px;
                padding: 20px;
                cursor: pointer;

                &:hover {
                    img {
                        transition: 350ms ease-in-out;
                        transform: rotate(4deg) scale(1.4);
                    }

                    &::after {
                        transition: 350ms ease-in-out;
                        transform: scaleY(1.05);
                    }
                }

                img {
                    max-width: 50px;
                    max-height: 50px;
                    transition: 350ms ease-in-out;
                }

                .text_tech {
                    font-size: 14px;
                    font-weight: 500;
                }

                &::after {
                    content: "";
                    width: 190px;
                    height: 105px;
                    border-radius: 10px;
                    position: absolute;
                    z-index: -1;
                    transition: 350ms ease-in-out;
                }
            }
        }
    }
`;