import styled from "styled-components";
import themeList from "../../config/themeList";
import { devices } from "../../assets/scss/_respondTo";

export const WorkSite = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    min-height: 165vh;
    padding: 0px;

    .pembungkus_card {
        position: relative;
        height: 100%;

        .content {
            position: absolute;
            padding: 20px;
            height: 100%;
            width: 100%;
            top: 0px;
        }
    }

    ${devices.smartphone} {
        min-height: 0px;
    }

    ${devices.ipads} {
        min-height: 0px;
    }

    ${devices.tablet} {
        min-height: 0px;
    }

    ${devices.desktops} {
        min-height: 0px;
    }

    .work_content {
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
        max-width: 540px;
        line-height: 1.8;
    }

    .work_container {
        padding: 0 100px;
        width: 100%;

        ${devices.smartphone} {
            padding: 80px 25px;
        }

        ${devices.ipads} {
            padding: 50px 50px;
        }

        ${devices.tablet} {
            padding: 50px 100px;
        }

        ${devices.desktops} {
            padding: 120px 100px;
        }
    }

    .big_heading {
        color: ${({ theme: { theme } }) =>
            theme === themeList.light
                ? "var(--light-text-black)"
                : "var(--dark-text-white)"};
        margin-bottom: 20px;
        font-weight: 600;
        font-size: 40px;
        margin: 0px;
    }

    .content_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 100px;

        ${devices.smartphone} {
            gap: 40px;
        }

        ${devices.ipads} {
            gap: 40px;
        }

        ${devices.tablet} {
            gap: 40px;
        }

        .project {
            display: flex;
            align-items: center;
            width: 100%;

            ${devices.smartphone} {
                flex-direction: column !important;
            }

            ${devices.ipads} {
                flex-direction: column !important;
            }

            ${devices.tablet} {
                flex-direction: column !important;
            }

            a {
                display: block;
            }

            .project_image {
                background-color: rgb(10 25 47 / 60%);
                border-radius: 10px;
                max-width: 600px;
                overflow: auto;
                transition: 350ms ease-in-out;

                &:hover {
                    background-color: transparent;
                    transition: 350ms ease-in-out;
                }

                .image_alt {
                    position: relative;
                    display: block;
                    height: auto;
                    width: 100%;
                    z-index: -1;
                    opacity: 1;
                    backface-visibility: hidden;
                    transition: 350ms ease-in-out;
                }
            }

            .project_content {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                margin-left: -80px;
                width: 100%;
                gap: 20px;

                ${devices.smartphone} {
                    margin-right: 0px !important;
                    margin-left: 0px !important;
                    align-items: flex-start;
                    padding: 20px;
                }

                ${devices.ipads} {
                    margin-right: 0px !important;
                    margin-left: 0px !important;
                    align-items: flex-start;
                    padding: 20px;
                }

                ${devices.tablet} {
                    margin-right: 0px !important;
                    margin-left: 0px !important;
                    align-items: center;
                    padding: 20px;
                }

                .text_1 {
                    color: var(--colorMain);
                    letter-spacing: 1.3px;
                    font-weight: 500;
                    font-size: 14px;
                }

                .text_2 {
                    color: ${({ theme: { theme } }) =>
                        theme === themeList.light
                            ? "var(--light-text-black)"
                            : "var(--dark-text-white)"};
                    font-weight: 600;
                    margin-top: -8px;
                    font-size: 24px;
                    cursor: pointer;

                    &:hover {
                        color: var(--colorMain);
                    }
                }

                .project_description {
                    color: ${({ theme: { theme } }) =>
                        theme === themeList.light ? "#fff" : "#8892b0"};
                    background-color: ${({ theme: { theme } }) =>
                        theme === themeList.light
                            ? "var(--darkCardComponent)"
                            : "var(--lightCardComponent)"};
                    position: relative;
                    border-radius: 6px;
                    font-size: 14px;
                    padding: 25px;
                    z-index: 2;
                    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
                    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

                    ${devices.smartphone} {
                        color: ${({ theme: { theme } }) =>
                            theme === themeList.light ? "#6b7280" : "#8892b0"};
                        background-color: transparent;
                        box-shadow: none;
                        padding: 0;
                    }

                    ${devices.ipads} {
                        color: ${({ theme: { theme } }) =>
                            theme === themeList.light ? "#6b7280" : "#8892b0"};
                        background-color: transparent;
                        box-shadow: none;
                        padding: 0;
                    }

                    ${devices.tablet} {
                        color: ${({ theme: { theme } }) =>
                            theme === themeList.light ? "#6b7280" : "#8892b0"};
                        background-color: transparent;
                        box-shadow: none;
                        padding: 0;
                    }

                    p {
                        text-align: right;

                        ${devices.smartphone} {
                            text-align: left;
                        }

                        ${devices.ipads} {
                            text-align: left;
                        }

                        ${devices.tablet} {
                            text-align: left;
                        }
                    }
                }

                .project-tech-list {
                    display: flex;
                    gap: 10px;

                    ${devices.smartphone} {
                        display: grid;
                        grid-template-columns: repeat(3, auto);
                    }

                    ${devices.ipads} {
                        display: grid;
                        grid-template-columns: repeat(4, auto);
                    }

                    .text_list {
                        color: ${({ theme: { theme } }) =>
                            theme === themeList.light ? "#222" : "#cad0e0"};
                        white-space: nowrap;
                        font-size: 13px;
                    }
                }

                .project_link {
                    display: flex;
                    gap: 15px;

                    .links {
                        color: ${({ theme: { theme } }) =>
                            theme === themeList.light
                                ? "var(--light-text-black)"
                                : "var(--dark-text-white)"};
                        font-size: 20px;

                        &:hover {
                            color: var(--colorMain);
                        }
                    }
                }
            }
        }
    }
`;
