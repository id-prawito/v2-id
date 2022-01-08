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
            padding: 0px 25px;
        }
    }

    .item_nya {
        width: 50px;
        height: 50px;
        border-radius: 10px;
        text-align: center;
        background-color: #fff;
        margin-bottom: 10px;
        color: #000;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .project_content {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;

        .content_judul {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;

            h1 {
                color: #7c3aed;
                font-size: 14px;
                font-weight: 500;
                letter-spacing: 1.3px;

                ${devices.smartphone} {
                    letter-spacing: 0px;
                }
            }

            .big_heading {
                margin: 0px;
                font-size: 40px;
                font-weight: 600;

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
            grid-template-columns: repeat(1, auto);
        }

        .card_item {
            padding: 2rem 1.75rem;
            background-color: ${({ theme: { theme } }) =>
                theme === themeList.light
                    ? "var(--darkCardComponent)"
                    : "var(--lightCardComponent)"};
            box-shadow: 0 10px 30px -15px rgb(2 12 27 / 70%);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            cursor: pointer;
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            border-radius: 6px;
            gap: 20px;
            min-width: 320px;

            ${devices.smartphone} {
                min-width: 100%;
            }

            &:hover {
                transform: translateY(-7px);
            }

            .item_icon {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                width: 100%;

                .icon {
                    color: #fff;

                    font-size: 20px;

                    .icon_link-git {
                        display: flex;
                        gap: 15px;

                        a {
                            &:hover {
                                color: #7c3aed;
                            }
                        }
                    }
                }

                .icon_folder {
                    color: ${({ theme: { theme } }) =>
                        theme === themeList.light ? "#fff" : "#7c3aed"};
                    font-size: 28px;
                }
            }

            .text_contect {
                display: flex;
                flex-direction: column;
                gap: 20px;
                justify-content: flex-start;
                width: 100%;

                .item_title {
                    color: #fff;
                    font-weight: 600;
                    font-size: 18px;
                    cursor: pointer;
                    margin-top: -8px;

                    &:hover {
                        color: #7c3aed;
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
        gap: 20px;
        margin-top: 20px;

        button {
            background: transparent;
        }

        .button_my-course {
            display: flex;
            align-items: center;
            border: 0.2px solid #7c3aed;
            background-color: transparent;
            color: #7c3aed;
            gap: 10px;
            padding: 10px 15px;
            max-height: 100%;
            border-radius: 6px;
            transition: 0.3s all ease;
            cursor: pointer;
            font-size: 12px;

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
`;
