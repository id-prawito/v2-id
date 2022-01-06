import styled from "styled-components";
import themeList from "../../config/themeList";

export const WorkSite = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    min-height: 165vh;
    padding: 0px;

    .work_content {
        display: flex;
        flex-direction: column;
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
    }

    .work_container {
        padding: 0 100px;
        width: 100%;
    }

    .big_heading {
        margin: 0px;
        font-size: 40px;
        font-weight: 600;
        margin-bottom: 20px;
        color: ${({ theme: { theme } }) =>
            theme === themeList.light
                ? "var(--light-text-black)"
                : "var(--dark-text-white)"};
    }

    .content_item {
        display: flex;
        flex-direction: column;
        gap: 100px;
        align-items: center;

        .project {
            display: flex;
            align-items: center;
            width: 100%;

            a {
                display: block;
            }

            .project_image {
                max-width: 600px;
                overflow: auto;
                border-radius: 10px;
                background-color: rgb(10 25 47 / 60%);
                transition: 350ms ease-in-out;

                &:hover {
                    background-color: transparent;
                    transition: 350ms ease-in-out;
                }

                .image_alt {
                    opacity: 1;
                    display: block;
                    width: 100%;
                    height: auto;
                    backface-visibility: hidden;
                    position: relative;
                    z-index: -1;
                    transition: 350ms ease-in-out;
                }
            }

            .project_content {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                width: 100%;
                gap: 20px;
                margin-left: -80px;

                .text_1 {
                    color: #7c3aed;
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: 1.3px;
                }

                .text_2 {
                    /* color: #fff; */
                    font-weight: 600;
                    font-size: 24px;
                    cursor: pointer;
                    margin-top: -8px;

                    color: ${({ theme: { theme } }) =>
                        theme === themeList.light
                            ? "var(--light-text-black)"
                            : "var(--dark-text-white)"};

                    &:hover {
                        color: #7c3aed;
                    }
                }

                .project_description {
                    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
                    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
                    position: relative;
                    z-index: 2;
                    padding: 25px;
                    border-radius: 6px;
                    background-color: ${({ theme: { theme } }) =>
                        theme === themeList.light
                            ? "var(--darkCardComponent)"
                            : "var(--lightCardComponent)"};
                    /* color: #8892b0; */
                    color: ${({ theme: { theme } }) =>
                        theme === themeList.light ? "#fff" : "#8892b0"};
                    font-size: 14px;

                    p {
                        text-align: right;
                    }
                }

                .project-tech-list {
                    display: flex;
                    gap: 10px;

                    .text_list {
                        /* color: #cad0e0; */

                        color: ${({ theme: { theme } }) =>
                            theme === themeList.light ? "#222" : "#cad0e0"};
                        font-size: 13px;
                        white-space: nowrap;
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
                            color: #7c3aed;
                        }
                    }
                }
            }
        }
    }
`;
