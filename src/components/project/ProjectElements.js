import styled from "styled-components";
import themeList from "../../config/themeList";
import { devices } from "../../assets/scss/_respondTo";

export const ProjectSite = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: auto;
    padding: 0px;

    .project_container {
        padding: 130px 100px;
        width: 100%;

        ${devices.smartphone} {
            padding: 80px 25px;
        }

        ${devices.ipads} {
            padding: 80px 50px;
        }

        ${devices.tablet} {
            padding: 80px 100px;
        }
    }

    .item_nya {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        margin-bottom: 10px;
        border-radius: 10px;
        text-align: center;
        color: #000000;
        height: 50px;
        width: 50px;
    }

    .project_content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;

        .content_judul {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;

            h1 {
                color: var(--colorMain);
                font-weight: 500;
                font-size: 14px;

                ${devices.smartphone} {
                    letter-spacing: 0px;
                }

                ${devices.ipads} {
                    letter-spacing: 0px;
                }

                ${devices.tablet} {
                    letter-spacing: 0px;
                }
            }

            .big_heading {
                font-weight: 600;
                font-size: 40px;
                margin: 0px;

                ${devices.smartphone} {
                    font-size: 30px;
                }

                color: ${({ theme: { theme } }) =>
                    theme === themeList.light
                        ? "var(--light-text-black)"
                        : "var(--dark-text-white)"};
            }
        }
    }

    .content_repo {
        display: grid;
        grid-template-columns: repeat(3, auto);
        width: 100%;
        gap: 15px;

        ${devices.smartphone} {
            grid-template-columns: repeat(2, auto);
        }

        ${devices.ipads} {
            grid-template-columns: repeat(2, auto);
        }

        ${devices.tablet} {
            grid-template-columns: repeat(2, auto);
        }

        ${devices.laptop} {
            grid-template-columns: repeat(3, auto);
            width: 100%;
        }

        @media only screen and (min-width: 1024px) and (max-width: 1155px) {
            grid-template-columns: repeat(2, auto);
            width: 100%;
        }

        .card_item {
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            background-color: ${({ theme: { theme } }) =>
                theme === themeList.light
                    ? "var(--darkCardComponent)"
                    : "var(--lightCardComponent)"};
            box-shadow: 0 10px 30px -15px rgb(2 12 27 / 70%);
            padding: 2rem 1.75rem;
            border-radius: 6px;
            min-width: 320px;
            cursor: pointer;
            gap: 20px;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

            ${devices.smartphone} {
                justify-content: flex-start;
                min-width: 100%;
                padding: 20px;
            }

            ${devices.ipads} {
                justify-content: flex-start;
                min-width: 100%;
                padding: 20px;
            }

            ${devices.tablet} {
                justify-content: flex-start;
                min-width: 100%;
                padding: 20px;
            }

            &:hover {
                transform: translateY(-7px);
            }

            .item_icon {
                display: flex;
                justify-content: space-between;
                flex-direction: row;
                align-items: center;
                width: 100%;

                .icon {
                    font-size: 20px;
                    color: var(--colorWhite);

                    ${devices.smartphone} {
                        font-size: 16px;
                    }

                    .icon_link-git {
                        display: flex;
                        gap: 15px;

                        ${devices.smartphone} {
                            font-size: 16px;
                        }

                        a {
                            &:hover {
                                color: var(--colorMain);
                            }
                        }
                    }
                }

                .icon_folder {
                    color: ${({ theme: { theme } }) =>
                        theme === themeList.light
                            ? "var(--colorWhite)"
                            : "var(--colorMain)"};
                    font-size: 28px;

                    ${devices.smartphone} {
                        font-size: 18px;
                    }
                }
            }

            .text_contect {
                display: flex;
                flex-direction: column;
                width: 100%;
                gap: 10px;

                ${devices.smartphone} {
                    justify-content: space-between;
                    height: 100%;
                }

                ${devices.ipads} {
                    justify-content: space-between;
                    height: 100%;
                }

                .item_title {
                    color: var(--colorWhite);
                    font-weight: 600;
                    font-size: 18px;
                    cursor: pointer;

                    &:hover {
                        color: var(--colorMain);
                    }

                    ${devices.smartphone} {
                        font-size: 14px;
                    }
                }

                .item_description {
                    color: ${({ theme: { theme } }) =>
                        theme === themeList.light ? "#fff" : "#8892b0"};
                    font-size: 14px;
                    height: 70px;

                    p {
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 4;
                        display: -webkit-box;
                        overflow: hidden;
                        text-align: left;
                        text-overflow: ellipsis;
                        white-space: normal;

                        ${devices.smartphone} {
                            font-size: 12px;
                        }
                    }
                }

                .item_tech {
                    display: grid;
                    grid-template-columns: repeat(3, auto);
                    gap: 10px;

                    .text_list {
                        color: #cad0e0;
                        font-size: 12px;
                        white-space: nowrap;
                    }
                }
            }
        }
    }

    .button_hero {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        gap: 20px;

        button {
            background: transparent;
        }

        .button_my-course {
            display: flex;
            align-items: center;
            border: 0.2px solid var(--colorMain);
            background-color: transparent;
            color: var(--colorMain);
            border-radius: 6px;
            padding: 10px 15px;
            max-height: 100%;
            cursor: pointer;
            font-size: 12px;
            gap: 10px;
            transition: 0.3s all ease;

            &:hover {
                background-color: #7227f3;
                transition: 0.3s all ease;
                transform: scale(1.05);
                color: var(--colorWhite);
            }

            .item_content {
                display: flex;
                gap: 10px;
            }
        }
    }
`;
